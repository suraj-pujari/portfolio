import RevealSection from "../shared/RevealSection";
import "./About.css";

const icons = {
  education: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M8 17 24 9l16 8-16 8L8 17Z" className="about__svg-soft" />
      <path d="M8 17 24 9l16 8-16 8L8 17Z" className="about__svg-stroke" />
      <path d="M15 22v8c4 4 14 4 18 0v-8" className="about__svg-stroke about__svg-stroke--green" />
      <path d="M40 17v12" className="about__svg-stroke" />
    </svg>
  ),
  builder: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="9" y="11" width="30" height="26" rx="6" className="about__svg-soft" />
      <path d="M9 18h30" className="about__svg-stroke" />
      <path d="M16 29h7l5-8 4 11" className="about__svg-stroke about__svg-stroke--green" />
      <circle cx="16" cy="15" r="1.6" className="about__svg-fill" />
      <circle cx="22" cy="15" r="1.6" className="about__svg-fill about__svg-fill--alt" />
    </svg>
  ),
  problem: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="14" cy="16" r="5" className="about__svg-fill" />
      <circle cx="34" cy="16" r="5" className="about__svg-fill about__svg-fill--alt" />
      <circle cx="24" cy="34" r="5" className="about__svg-fill" />
      <path d="M18 18h12M31 20l-5 10M17 20l5 10" className="about__svg-stroke about__svg-stroke--green" />
    </svg>
  ),
  focus: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 8a16 16 0 1 0 16 16" className="about__svg-stroke" />
      <path d="M24 15a9 9 0 1 0 9 9" className="about__svg-stroke about__svg-stroke--green" />
      <circle cx="24" cy="24" r="4" className="about__svg-fill about__svg-fill--alt" />
      <path d="M31 17 40 8M34 8h6v6" className="about__svg-stroke" />
    </svg>
  ),
};

const highlights = [
  { icon: icons.education, title: "MCA Student", desc: "Learning with practical, project-based work" },
  { icon: icons.builder, title: "Project Builder", desc: "Turning ideas into clean user experiences" },
  { icon: icons.problem, title: "Problem Solver", desc: "Breaking complex tasks into simple steps" },
  { icon: icons.focus, title: "Growth Focused", desc: "Improving through feedback and consistency" },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <RevealSection>
          <div className="section-header">
            <span className="chip chip--purple">About Me</span>
            <h2 className="section-title">The person behind the code</h2>
            <div
              className="section-divider"
              style={{ background: "linear-gradient(to right, #4f8ef7, #a855f7)" }}
            />
          </div>
        </RevealSection>

        <div className="about__grid grid-2col">
          <RevealSection delay={100}>
            <div className="about__text">
              <p className="about__para">
                I'm <strong className="about__strong">Suraj Pujari</strong>, currently
                pursuing a
                <strong className="about__strong"> Master of Computer Applications (MCA)</strong>
                at <strong className="about__strong"> MIT Vishwaprayag University</strong>.
                My interest in technology started during my BCA journey and grew stronger
                through hands-on project work.
              </p>

              <p className="about__para">
                I enjoy understanding real problems, planning simple user flows, and
                building projects that feel useful in everyday scenarios. My goal is to
                keep improving as a developer who writes clean code, communicates clearly,
                and contributes to reliable products.
              </p>

              <p className="about__para">
                Projects like <strong className="about__strong">StudentHub</strong> and
                <strong className="about__strong"> HomeXpress</strong> helped me learn how
                to move from an idea to a complete, presentable product with better
                structure, polish, and attention to detail.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="about__highlights">
              {highlights.map((h) => (
                <div key={h.title} className="glass about__highlight-card">
                  <div className="about__highlight-icon">{h.icon}</div>
                  <div className="about__highlight-title">{h.title}</div>
                  <div className="about__highlight-desc">{h.desc}</div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
