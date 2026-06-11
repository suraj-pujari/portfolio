import { useState } from "react";
import RevealSection from "../shared/RevealSection";
import { SKILLS } from "../../constants/data";
import SkillCard from "./SkillCard";
import "./Skills.css";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const tabs = Object.keys(SKILLS);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <RevealSection>
          <div className="section-header">
            <span className="chip chip--blue">Technical Skills</span>
            <h2 className="section-title">What I work with</h2>
            <div
              className="section-divider"
              style={{ background: "linear-gradient(to right, #4f8ef7, #a855f7)" }}
            />
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="skills__tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`skills__tab ${activeTab === tab ? "skills__tab--active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="skills__grid">
            {SKILLS[activeTab].map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}