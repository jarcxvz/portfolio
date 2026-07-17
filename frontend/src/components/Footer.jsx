import { profile } from "../data/content.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="section-dark footer">
      <div className="wrap footer__row">
        <span className="footer__logo">JA / {profile.lastName}</span>
        <span className="footer__note">
          Built with React &amp; FastAPI
        </span>
        <a href="#top" className="footer__back">
          back_to_top()
        </a>
      </div>
    </footer>
  );
}
