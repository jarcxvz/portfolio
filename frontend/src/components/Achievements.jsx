import { achievements, certifications } from "../data/content.js";
import "./Achievements.css";

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="wrap">
        <div className="eyebrow">05 — record</div>
        <h2 className="h2">
          Achievements <strong>&amp;</strong> certifications.
        </h2>

        <div className="achievements__grid">
          <div className="achievements__col">
            <h3 className="achievements__col-title">Achievements</h3>
            <ul className="achievements__list">
              {achievements.map((a) => (
                <li key={a.title} className="achievements__item">
                  <span className="status-dot" />
                  <div>
                    <p className="achievements__item-title">{a.title}</p>
                    <p className="achievements__item-period">{a.period}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="achievements__col">
            <h3 className="achievements__col-title">Seminars &amp; Certifications</h3>
            <ul className="achievements__list">
              {certifications.map((c) => (
                <li key={c.title} className="achievements__item">
                  <span className="status-dot" />
                  <div>
                    <p className="achievements__item-title">{c.title}</p>
                    <p className="achievements__item-period">
                      {c.place} · {c.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
