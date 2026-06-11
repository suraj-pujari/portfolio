import { useState } from "react";
import RevealSection from "../shared/RevealSection";
import { EDUCATION } from "../../constants/data";
import "./Education.css";

function EducationItem({ item, isLast }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`education__item ${isLast ? "" : "education__item--spaced"}`}
    >
      {/* Icon — exact same as Achievements */}
      <div className={`education__icon ${hover ? "education__icon--hover" : ""}`}>
        {item.icon}
      </div>

      {/* Card — exact same as Achievements */}
      <div className={`glass education__content ${hover ? "education__content--hover" : ""}`}>
        <div className="education__content-header">
          <div>
            <h4 className="education__title">{item.degree}</h4>
            <p className="education__institution" style={{ color: item.color }}>
              {item.institution}
            </p>
          </div>
          <div className="education__meta-chips">
            <span className="chip education__period-chip">{item.period}</span>
            {item.pursuing ? (
              <span className="chip chip--green education__status-chip">🟢 Pursuing</span>
            ) : (
              <span className="chip education__done-chip">✓ Completed</span>
            )}
          </div>
        </div>

        {/* Stats boxes with labels — no marks, no desc */}
        {(item.percentage || item.cgpa) && (
          <div className="education__stats">
            {item.percentage && (
              <div className="education__stat">
                <span className="education__stat-label">Percentage</span>
                <span className="education__stat-value" style={{ color: item.color }}>
                  {item.percentage}
                </span>
              </div>
            )}
            {item.cgpa && (
              <div className="education__stat">
                <span className="education__stat-label">CGPA</span>
                <span className="education__stat-value" style={{ color: item.color }}>
                  {item.cgpa}
                </span>
              </div>
            )}
            {item.grade && (
              <div className="education__stat">
                <span className="education__stat-label">Grade</span>
                <span className="education__stat-value" style={{ color: item.color }}>
                  {item.grade}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <RevealSection>
          <div className="section-header">
            <span className="chip chip--blue">Education</span>
            <h2 className="section-title">Academic journey</h2>
            <div
              className="section-divider"
              style={{ background: "linear-gradient(to right, #4f8ef7, #a855f7)" }}
            />
          </div>
        </RevealSection>

        <div className="education__timeline">
          <div className="education__line" />
          {EDUCATION.map((item, i) => (
            <RevealSection key={item.degree} delay={i * 100}>
              <EducationItem item={item} isLast={i === EDUCATION.length - 1} />
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
