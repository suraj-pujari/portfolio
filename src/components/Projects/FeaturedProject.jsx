import { useState } from "react";
import "./Projects.css";

export default function FeaturedProject({ project }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`glass projects__featured ${hover ? "projects__featured--hover" : ""}`}
      style={{
        borderColor: hover ? `${project.color}55` : "rgba(255,255,255,0.1)",
        boxShadow: hover ? `0 20px 60px ${project.color}18` : "none",
      }}
    >
      <div className="projects__featured-body">
        <div className="projects__featured-left">
          <div className="projects__badges">
            <span className="chip chip--blue">⭐ Featured</span>
            <span className="chip chip--green">✓ Live</span>
          </div>

          <h3 className="projects__featured-title">{project.title}</h3>
          <p className="projects__featured-subtitle" style={{ color: project.color }}>
            {project.subtitle}
          </p>
          <p className="projects__featured-desc">{project.description}</p>

          <div className="projects__tech">
            {project.tech.map((t) => (
              <span
                key={t}
                className="chip projects__tech-chip"
                style={{
                  background: `${project.color}13`,
                  border: `1px solid ${project.color}33`,
                  color: project.color,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="projects__actions">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline projects__btn"
            >
              ⬡ GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary projects__btn"
            >
              ↗ Live Demo
            </a>
          </div>
        </div>

        <div className="projects__featured-features">
          <div className="projects__features-label">Key Features</div>
          <div className="projects__features-list">
            {project.features.map((f) => (
              <div key={f} className="projects__feature-item">
                <div
                  className="projects__feature-dot"
                  style={{ background: project.color }}
                />
                <span className="projects__feature-text">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
