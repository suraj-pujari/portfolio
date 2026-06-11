import { useState } from "react";
import "./Certifications.css";

const categoryIcon = (category) => {
  if (category === "Programming") return "🧩";
  if (category === "Cybersecurity") return "🔐";
  if (category === "Achievement") return "🏆";
  if (category === "Web Development") return "🌐";
  return "📜";
};

export default function CertCard({ cert, onClick }) {
  const [hover, setHover] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`certifications__card ${hover ? "certifications__card--hover" : ""}`}
      style={{
        borderColor: hover ? `${cert.color}66` : "rgba(255,255,255,0.1)",
        boxShadow: hover ? `0 20px 60px ${cert.color}22` : "none",
      }}
    >
      {/* Image preview */}
      <div
        className="certifications__preview"
        style={{ background: `linear-gradient(135deg, ${cert.color}10, #0d1230)` }}
      >
        <img
          src={cert.imageUrl}
          alt={cert.title}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={`certifications__preview-img ${imgLoaded ? "certifications__preview-img--loaded" : ""}`}
        />

        {!imgLoaded && (
          <div className="certifications__placeholder">
            <div className="certifications__placeholder-icon">
              {categoryIcon(cert.category)}
            </div>
            <span className="certifications__placeholder-text" style={{ color: cert.color }}>
              Loading preview...
            </span>
          </div>
        )}

        {/* Hover overlay only */}
        <div className={`certifications__overlay ${hover ? "certifications__overlay--show" : ""}`}>
          <span
            className="certifications__overlay-btn"
            style={{ background: `${cert.color}bb` }}
          >
            🔍 Click to view
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="certifications__body">
        {/* Badges — now in body, always visible */}
        <div className="certifications__badges-row">
          <span
            className="chip"
            style={{
              fontSize: 11,
              background: `${cert.color}18`,
              border: `1px solid ${cert.color}40`,
              color: cert.color,
            }}
          >
            {categoryIcon(cert.category)} {cert.category}
          </span>
          <span
            className="chip"
            style={{
              fontSize: 11,
              fontWeight: 600,
              background: cert.status === "issued" ? "rgba(16,217,160,0.15)" : "rgba(168,85,247,0.15)",
              border: `1px solid ${cert.status === "issued" ? "rgba(16,217,160,0.5)" : "rgba(168,85,247,0.5)"}`,
              color: cert.status === "issued" ? "#10d9a0" : "#a855f7",
            }}
          >
            {cert.status === "issued" ? "✓ Issued" : "⏳ Pending"}
          </span>
        </div>
        <h3 className="certifications__title">{cert.title}</h3>

        <div className="certifications__meta">
          <span className="certifications__issuer" style={{ color: cert.color }}>
            {cert.issuer}
          </span>
          <span className="certifications__dot">·</span>
          <span className="certifications__date">{cert.date}</span>
        </div>

        <p className="certifications__desc">{cert.description}</p>

        <div className="certifications__skills">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="chip certifications__skill-chip"
              style={{
                fontSize: 11,
                background: `${cert.color}12`,
                border: `1px solid ${cert.color}33`,
                color: cert.color,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
