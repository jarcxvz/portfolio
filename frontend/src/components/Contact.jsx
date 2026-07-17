import { useState } from "react";
import { profile } from "../data/content.js";
import "./Contact.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section section-dark contact">
      <div className="wrap contact__row">
        <div className="contact__intro">
          <div className="eyebrow">06 — contact</div>
          <h2 className="h2">
            Let's <strong>talk</strong>.
          </h2>
          <p className="muted contact__lede">
            Open to junior QA analyst and full-stack roles. The fastest way
            to reach me is email — I'll usually reply within a day.
          </p>
          <div className="contact__details">
            <a className="contact__detail" href={`mailto:${profile.email}`}>
              <span className="contact__detail-label">email</span>
              {profile.email}
            </a>
            <a className="contact__detail" href={`tel:${profile.phone.replace(/-/g, "")}`}>
              <span className="contact__detail-label">phone</span>
              {profile.phone}
            </a>
            <a
              className="contact__detail"
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__detail-label">linkedin</span>
              {profile.linkedin}
            </a>
            <a
              className="contact__detail"
              href={profile.GitHubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__detail-label">GitHub</span>
              {profile.GitHub}
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label className="contact__field">
            <span>Name</span>
            <input
              type="text"
              required
              value={form.name}
              onChange={update("name")}
              placeholder="Juan Dela Cruz"
            />
          </label>
          <label className="contact__field">
            <span>Email</span>
            <input
              type="email"
              required
              value={form.email}
              onChange={update("email")}
              placeholder="you@company.com"
            />
          </label>
          <label className="contact__field">
            <span>Message</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={update("message")}
              placeholder="Tell me about the role or opportunity..."
            />
          </label>

          <button className="btn contact__submit" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "sending..." : "send_message()"}
          </button>

          {status === "sent" && (
            <p className="contact__status contact__status--ok">
              Message sent — thank you! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="contact__status contact__status--error">
              Couldn't send that. Please email me directly at {profile.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
