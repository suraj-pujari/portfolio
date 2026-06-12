import RevealSection from "../shared/RevealSection";
import { SKILLS } from "../../constants/data";
import "./Skills.css";

const SKILL_GROUP_META = {
  Frontend: {
    title: "Frontend Craft",
    description: "Responsive interfaces, reusable UI pieces, and clean styling for web products.",
    accent: "#4f8ef7",
    focus: "React-first interfaces",
  },
  Backend: {
    title: "Backend Logic",
    description: "REST API structure, server-side logic, and authentication flows for applications.",
    accent: "#10d9a0",
    focus: "API-driven systems",
  },
  Database: {
    title: "Data Layer",
    description: "Working with relational and document databases used in full-stack projects.",
    accent: "#f59e0b",
    focus: "App data modeling",
  },
  "Tools & Platforms": {
    title: "Developer Workflow",
    description: "Version control, deployment, design handoff, and environment tools for daily development.",
    accent: "#a855f7",
    focus: "Shipping workflow",
  },
  "Languages & CS": {
    title: "Programming Base",
    description: "Core programming, data structures, and problem-solving fundamentals.",
    accent: "#38bdf8",
    focus: "Logic building",
  },
};

const coreStack = ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "MySQL"];

function CategoryIcon({ category }) {
  const commonProps = {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
  };

  if (category === "Frontend") {
    return (
      <svg {...commonProps}>
        <rect x="7" y="10" width="34" height="26" rx="4" />
        <path d="M7 17H41" />
        <path d="M17 27L21 23L17 19" />
        <path d="M31 19L27 27" />
      </svg>
    );
  }

  if (category === "Backend") {
    return (
      <svg {...commonProps}>
        <rect x="8" y="9" width="32" height="9" rx="3" />
        <rect x="8" y="29" width="32" height="9" rx="3" />
        <path d="M15 18V29" />
        <path d="M33 18V29" />
        <path d="M14 13.5H14.5" />
        <path d="M14 33.5H14.5" />
      </svg>
    );
  }

  if (category === "Database") {
    return (
      <svg {...commonProps}>
        <ellipse cx="24" cy="12" rx="14" ry="5" />
        <path d="M10 12V32C10 34.8 16.3 37 24 37C31.7 37 38 34.8 38 32V12" />
        <path d="M10 22C10 24.8 16.3 27 24 27C31.7 27 38 24.8 38 22" />
      </svg>
    );
  }

  if (category === "Tools & Platforms") {
    return (
      <svg {...commonProps}>
        <path d="M18 10H11C9.3 10 8 11.3 8 13V35C8 36.7 9.3 38 11 38H37C38.7 38 40 36.7 40 35V26" />
        <path d="M28 9H39V20" />
        <path d="M39 9L24 24" />
        <path d="M14 30H28" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M18 12L8 24L18 36" />
      <path d="M30 12L40 24L30 36" />
      <path d="M27 9L21 39" />
    </svg>
  );
}

export default function Skills() {
  const groups = Object.entries(SKILLS).map(([name, skills]) => ({
    name,
    skills,
    ...SKILL_GROUP_META[name],
  }));

  return (
    <section id="skills" className="skills">
      <div className="container">
        <RevealSection>
          <div className="section-header">
            <span className="chip chip--blue">Technical Skills</span>
            <h2 className="section-title">What I work with</h2>
            <p className="skills__subtitle">
              A clean overview of the technologies I use to design, build, and deploy full-stack web projects.
            </p>
            <div
              className="section-divider"
              style={{ background: "linear-gradient(to right, #4f8ef7, #a855f7)" }}
            />
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="skills__overview">
            <div className="skills__overview-main">
              <span className="skills__overview-kicker">Primary Stack</span>
              <h3>MERN-focused developer toolkit</h3>
              <p>
                My current stack is centered around React interfaces, JavaScript logic,
                Node/Express APIs, and practical database work.
              </p>
            </div>

            <div className="skills__stack-strip" aria-label="Primary stack">
              {coreStack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={180}>
          <div className="skills__matrix">
            {groups.map((group, index) => (
              <article
                key={group.name}
                className="skills__group"
                style={{ "--skills-accent": group.accent }}
              >
                <div className="skills__group-top">
                  <div className="skills__group-icon">
                    <CategoryIcon category={group.name} />
                  </div>
                  <span className="skills__group-number">0{index + 1}</span>
                </div>

                <div className="skills__group-copy">
                  <span className="skills__group-focus">{group.focus}</span>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>

                <div className="skills__skill-list">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="skills__skill-pill">
                      <span>{skill.mark}</span>
                      <div>
                        <strong>{skill.name}</strong>
                        <small>{skill.kind}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
