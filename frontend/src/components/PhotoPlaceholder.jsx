import "./PhotoPlaceholder.css";

/**
 * Drop-in placeholder for a photo.
 * To use a real photo: put the file in /public, then replace the
 * contents of this component (or pass a `src`) with an <img> tag:
 *   <img src="/your-photo.jpg" alt="Jae Anne Rose Gonzalvo" />
 */
export default function PhotoPlaceholder({ label = "Photo", ratio = "1 / 1", src, alt }) {
  if (src) {
    return (
      <div className="photo-placeholder" style={{ aspectRatio: ratio }}>
        <img src={src} alt={alt || label} />
      </div>
    );
  }

  return (
    <div className="photo-placeholder photo-placeholder--empty" style={{ aspectRatio: ratio }}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <span>{label}</span>
    </div>
  );
}
