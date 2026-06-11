import { useState } from "react";
import BrowserMockup from "./BrowserMockup";
import "./Projects.css";

export default function ProjectCard({ project }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`projects__card ${hover ? "projects__card--hover" : ""}`}
      style={{
        borderColor: hover ? `${project.color}55` : "rgba(255,255,255,0.08)",
        boxShadow: hover ? `0 24px 60px ${project.color}20` : "none",
      }}
    >
      {/* macOS Browser Mockup Preview */}
      <div className="projects__mockup-wrap">
        <BrowserMockup
          url={project.live}
          screenshot={project.screenshot}
          projectColor={project.color}
        />
      </div>

      {/* Card body */}
      <div className="projects__card-body">
        {/* Badges */}
        <div className="projects__badges">
          {project.featured && (
            <span className="chip chip--blue">⭐ Featured</span>
          )}
          <span
            className="chip"
            style={{
              background: `${project.color}15`,
              border: `1px solid ${project.color}35`,
              color: project.color,
            }}
          >
            ✓ {project.status}
          </span>
        </div>

        <h3 className="projects__card-title">{project.title}</h3>
        <p className="projects__card-subtitle" style={{ color: project.color }}>
          {project.subtitle}
        </p>
        <p className="projects__card-desc">{project.description}</p>

        {/* Tech stack */}
        <div className="projects__tech">
          {project.tech.map((t) => (
            <span
              key={t}
              className="chip"
              style={{
                background: `${project.color}12`,
                border: `1px solid ${project.color}30`,
                color: project.color,
                fontSize: "11px",
                padding: "2px 9px",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Live Demo only — no GitHub */}
        <div className="projects__actions">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary projects__btn"
          >
            <svg className="projects__btn-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
