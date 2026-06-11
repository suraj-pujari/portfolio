import { useEffect } from "react";
import "./Certifications.css";

const categoryIcon = (category) => {
  if (category === "Programming") return "🧩";
  if (category === "Cybersecurity") return "🔐";
  return "⚛️";
};

export default function CertModal({ cert, onClose }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="certifications__modal-backdrop" onClick={onClose}>
      <div
        className="certifications__modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          border: `1px solid ${cert.color}44`,
          boxShadow: `0 0 80px ${cert.color}30`,
        }}
      >
        {/* Header */}
        <div className="certifications__modal-header">
          <div className="certifications__modal-info">
            <div
              className="certifications__modal-icon"
              style={{
                background: `${cert.color}20`,
                border: `1px solid ${cert.color}44`,
              }}
            >
              {categoryIcon(cert.category)}
            </div>
            <div>
              <h3 className="certifications__modal-title">{cert.title}</h3>
              <p className="certifications__modal-meta">{cert.issuer} · {cert.date}</p>
            </div>
          </div>

          <button onClick={onClose} className="certifications__modal-close">
            ✕
          </button>
        </div>

        {/* Image */}
        <div className="certifications__modal-image-wrap">
          <div
            className="certifications__modal-image-box"
            style={{ border: `1px solid ${cert.color}33` }}
          >
            <img
              src={cert.imageUrl}
              alt={`${cert.title} Certificate`}
              className="certifications__modal-img"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="certifications__modal-footer">
          <div className="certifications__modal-skills">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="chip"
                style={{
                  fontSize: 11,
                  padding: "4px 10px",
                  background: `${cert.color}12`,
                  border: `1px solid ${cert.color}33`,
                  color: cert.color,
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="certifications__modal-actions">
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline certifications__modal-btn"
              >
                🔗 Verify
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
