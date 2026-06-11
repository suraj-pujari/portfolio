import RevealSection from "../shared/RevealSection";
import { PROJECTS } from "../../constants/data";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <RevealSection>
          <div className="section-header">
            <span className="chip chip--green">Projects</span>
            <h2 className="section-title">Things I've built</h2>
            <div
              className="section-divider"
              style={{ background: "linear-gradient(to right, #10d9a0, #4f8ef7)" }}
            />
          </div>
        </RevealSection>

        <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <RevealSection key={project.id} delay={i * 120}>
              <ProjectCard project={project} />
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
