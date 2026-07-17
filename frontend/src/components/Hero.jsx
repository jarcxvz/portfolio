import { profile, socials } from "../data/content.js";
import PhotoPlaceholder from "./PhotoPlaceholder.jsx";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero__row">
        <div className="hero__copy">
          <div className="eyebrow">
            <span className="status-dot" />
            open to junior qa / dev roles
          </div>
          <h1 className="hero__title">
            Hi, I'm <strong>{profile.name}</strong>
            <br />
            {profile.lastName}.
            <br />
            <span className="italic-accent">
              {profile.role}
            </span>{" "}
            {profile.roleSecondary}
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="btn" href="/resume.pdf">
              view_resume()
            </a>
            <a className="btn btn-outline" href="#projects">
              view_projects()
            </a>
          </div>

          <div className="hero__socials">
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="pill">
                {s.label}
              </a>
            ))}
            <span className="pill">{profile.location}</span>
          </div>
        </div>

        <div className="hero__art">
  <PhotoPlaceholder src="/your-photo.png" alt="Jae Anne Rose Gonzalvo" ratio="4 / 5" />
</div>
      </div>
    </section>
  );
}
