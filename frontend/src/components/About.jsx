import { profile, education } from "../data/content.js";
import PhotoPlaceholder from "./PhotoPlaceholder.jsx";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="wrap about__row">
        <div className="about__art">
          <PhotoPlaceholder src="/jae.jpg" ratio="1.5 / 2" />
        </div>

        <div className="about__copy">
          <div className="eyebrow">03 — about</div>
          <h2 className="h2">
            About <strong>me</strong>
          </h2>

          {profile.aboutParagraphs.map((p, i) => (
            <p key={i} className="about__para">
              {p}
            </p>
          ))}

          <div className="about__edu">
            <span className="status-dot" />
            <div>
              <p className="about__edu-school">
                {education.degree}, {education.school}
              </p>
              <p className="about__edu-detail">
                {education.period} · {education.honors}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
