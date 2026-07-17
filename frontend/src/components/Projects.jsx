import { projects } from "../data/content.js";
import PhotoPlaceholder from "./PhotoPlaceholder.jsx";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section section-dark projects">
      <div className="wrap">
        <div className="eyebrow">04 — projects</div>
        <h2 className="h2">
          Selected <strong>builds</strong>.
        </h2>

        <div className="projects__list">
          {projects.map((p, i) => (
            <article
              className={`project ${i % 2 === 1 ? "project--reverse" : ""}`}
              key={p.id}
            >
              <div className="project__media">
                <PhotoPlaceholder
                  src={p.image || undefined}
                  alt={`${p.title} — screenshot`}
                  label={`${p.title} — screenshot`}
                  ratio="5.3 / 3"
                />
              </div>
              <div className="project__copy">
                <span className="project__index">{p.id}</span>
                <span className="pill project__tag">{p.tag}</span>
                <h3 className="project__title">{p.title}</h3>
                <p className="project__subtitle">{p.subtitle}</p>
                <p className="project__desc">{p.description}</p>
                <div className="project__stack">
                  {p.stack.map((s) => (
                    <span className="project__stack-item" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}