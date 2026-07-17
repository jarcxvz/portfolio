import { skills } from "../data/content.js";
import "./Skills.css";

const CATEGORY_LABEL = {
  frontend: "front-end",
  backend: "back-end",
  qa: "qa / testing",
  practice: "practice",
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="wrap">
        <div className="eyebrow">01 — stack</div>
        <h2 className="h2">
          Things I build <strong>with</strong>,<br />
          things I test <strong>for</strong>.
        </h2>

        <div className="skills__grid">
          {skills.map((s, i) => (
            <div className="skill-card" key={s.name}>
              <span className="skill-card__index">{String(i + 1).padStart(2, "0")}</span>
              <span className="skill-card__name">{s.name}</span>
              <span className="skill-card__category">{CATEGORY_LABEL[s.category]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
