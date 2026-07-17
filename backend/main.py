import os
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv

load_dotenv()

"""
Backend for Jae Anne Rose Gonzalvo's portfolio site.

Runs a small FastAPI app with one job: receive contact-form submissions
from the React frontend, validate them, and store them so they can be
reviewed later. Swap in real email sending (see send_email_notification)
once you have SMTP or a transactional email provider set up.
"""

import json
from datetime import datetime, timezone
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

APP_DIR = Path(__file__).parent
SUBMISSIONS_FILE = APP_DIR / "contact_submissions.json"

app = FastAPI(title="Jae Anne Rose Gonzalvo — Portfolio API")

# Allow the local dev frontend (and your deployed frontend) to call this API.
# Add your production frontend URL here once you deploy it.
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactMessage(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(min_length=1, max_length=4000)


def _load_submissions() -> list[dict]:
    if not SUBMISSIONS_FILE.exists():
        return []
    try:
        return json.loads(SUBMISSIONS_FILE.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return []


def _save_submission(entry: dict) -> None:
    submissions = _load_submissions()
    submissions.append(entry)
    SUBMISSIONS_FILE.write_text(
        json.dumps(submissions, indent=2, ensure_ascii=False), encoding="utf-8"
    )


GMAIL = os.getenv("GMAIL_ADDRESS")
APP_PASSWORD = os.getenv("GMAIL_APP_PASSWORD")


def send_email_notification(entry: dict) -> None:
    msg = EmailMessage()
    msg["Subject"] = "New Portfolio Contact Form"
    msg["From"] = GMAIL
    msg["To"] = GMAIL
    msg["Reply-To"] = entry["email"]

    msg.set_content(f"""
You received a new message from your portfolio.

Name: {entry['name']}
Email: {entry['email']}

Message:
{entry['message']}
""")

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login(GMAIL, APP_PASSWORD)
        smtp.send_message(msg)


@app.get("/")
def root():
    return {"status": "ok", "service": "portfolio-api"}


@app.get("/api/health")
def health():
    return {"status": "healthy"}


@app.post("/api/contact", status_code=201)
def create_contact_message(payload: ContactMessage):
    entry = {
        "name": payload.name,
        "email": payload.email,
        "message": payload.message,
        "received_at": datetime.now(timezone.utc).isoformat(),
    }

    try:
        _save_submission(entry)
        send_email_notification(entry)
    except OSError as exc:
        raise HTTPException(status_code=500, detail="Could not store message") from exc

    return {"status": "sent"}


@app.get("/api/contact")
def list_contact_messages():
    """Simple way to review submissions during development."""
    return _load_submissions()
