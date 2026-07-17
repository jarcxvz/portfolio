import { experience } from "../data/content.js";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section section-dark experience">
      <div className="wrap">
        <div className="eyebrow">02 — experience</div>
        <h2 className="h2">
          Where I've <strong>put it</strong> to work.
        </h2>

        <div className="experience__list">
          {experience.map((job) => (
            <article className="experience__card" key={job.company}>
              <div className="experience__head">
                <div>
                  <h3 className="experience__role">{job.role}</h3>
                  <p className="experience__company">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="pill experience__period">{job.period}</span>
              </div>
              <ul className="experience__points">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}

          <article className="experience__card experience__card--muted">
            <div className="experience__head">
              <div>
                <h3 className="experience__role">More roles, coming soon.</h3>
                <p className="experience__company">This is just the beginning.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
