import RevealSection from "../shared/RevealSection";
import "./About.css";

const icons = {
  mern: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="9" y="8" width="30" height="32" rx="8" className="about__svg-soft" />
      <path d="M16 16h16M16 24h16M16 32h16" className="about__svg-stroke" />
      <circle cx="16" cy="16" r="2.5" className="about__svg-fill" />
      <circle cx="24" cy="24" r="2.5" className="about__svg-fill about__svg-fill--alt" />
      <circle cx="32" cy="32" r="2.5" className="about__svg-fill" />
      <path d="M14 38c4-3 7-3 10 0s6 3 10 0" className="about__svg-stroke about__svg-stroke--green" />
    </svg>
  ),
  dsa: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M17 15 9 24l8 9M31 15l8 9-8 9" className="about__svg-stroke" />
      <path d="M27 11 21 37" className="about__svg-stroke about__svg-stroke--green" />
      <circle cx="24" cy="24" r="4" className="about__svg-fill" />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 7 38 12v10c0 9-5.6 15.4-14 19-8.4-3.6-14-10-14-19V12l14-5Z" className="about__svg-soft" />
      <path d="M24 7 38 12v10c0 9-5.6 15.4-14 19-8.4-3.6-14-10-14-19V12l14-5Z" className="about__svg-stroke" />
      <rect x="17" y="23" width="14" height="10" rx="3" className="about__svg-fill" />
      <path d="M20 23v-4a4 4 0 0 1 8 0v4" className="about__svg-stroke about__svg-stroke--green" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M15 12v12c0 6 4 10 10 10h8" className="about__svg-stroke" />
      <path d="M15 24h15" className="about__svg-stroke about__svg-stroke--green" />
      <circle cx="15" cy="12" r="5" className="about__svg-fill" />
      <circle cx="30" cy="24" r="5" className="about__svg-fill about__svg-fill--alt" />
      <circle cx="35" cy="34" r="5" className="about__svg-fill" />
    </svg>
  ),
};

const highlights = [
  { icon: icons.mern, title: "MERN Developer", desc: "React, Node, Express, MongoDB" },
  { icon: icons.dsa, title: "Java + DSA", desc: "Problem solving enthusiast" },
  { icon: icons.security, title: "Security-Aware", desc: "JWT, Auth, Best Practices" },
  { icon: icons.git, title: "Git & GitHub", desc: "Version control, collaboration" },
];

const contactInfo = [
  "📍 Pune, India",
  "surajpujari8383@gmail.com",
  "+91 8382038383",
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
        I'm <strong className="about__strong">Suraj Pujari</strong>, currently pursuing a
        <strong className="about__strong"> Master of Computer Applications (MCA)</strong>
        at <strong className="about__strong">MIT Vishwaprayag University</strong> and
        building my career as a
        <strong className="about__strong"> MERN Stack Developer</strong> with a strong
        interest in creating modern, responsive, and user-focused web applications.
      </p>

      <p className="about__para">
        My journey in technology started during my BCA studies and gradually evolved into
        a passion for full-stack development and problem solving. I actively work with
        <strong className="about__strong">
          {" "}React.js, Node.js, Express.js, MongoDB, JavaScript, Java, MySQL, REST APIs,
          and JWT Authentication
        </strong>
        , continuously improving my skills through hands-on projects and practical
        development experience.
      </p>

      <p className="about__para">
        Through projects like
        <strong className="about__strong"> StudentHub</strong> and
        <strong className="about__strong"> HomeXpress</strong>, I have gained experience
        in developing complete web applications, designing responsive user interfaces,
        building secure backend systems, and working with databases. Beyond development,
        I enjoy solving DSA problems using Java, exploring cybersecurity concepts, and
        collaborating on innovative projects that create real-world impact.
      </p>

      <div className="about__chips">
        {contactInfo.map((item) => (
          <span key={item} className="chip chip--green about__contact-chip">
            {item}
          </span>
        ))}
      </div>
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
