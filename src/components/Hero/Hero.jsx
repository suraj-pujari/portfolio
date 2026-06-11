import { useState, useEffect } from "react";
import { useTyping } from "../../hooks";
import { ROLES } from "../../constants/data";
import "./Hero.css";

const whatsappLink =
  "https://wa.me/918382038383?text=Hi%20Suraj%2C%20I%20want%20to%20discuss%20a%20project%20or%20opportunity.";

const heroSocialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/suraj-pujari",
    tone: "github",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.93.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 7c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.13 10.13 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/suraj-pujari83/",
    tone: "linkedin",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.86H3.75v10.38h3.19V8.86ZM5.34 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm13.91 9.37c0-3.13-1.67-4.78-4.06-4.78-1.87 0-2.71 1.03-3.17 1.75V8.86H8.96v10.38h3.19v-5.76c0-1.52.29-2.99 2.17-2.99 1.85 0 1.87 1.73 1.87 3.08v5.67h3.06v-5.87Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:surajpujari8383@gmail.com",
    tone: "email",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.75 5.5h14.5c1.24 0 2.25 1.01 2.25 2.25v8.5c0 1.24-1.01 2.25-2.25 2.25H4.75c-1.24 0-2.25-1.01-2.25-2.25v-8.5C2.5 6.51 3.51 5.5 4.75 5.5Zm.12 2 7.13 5.06 7.13-5.06H4.87Zm14.38 9c.14 0 .25-.11.25-.25V9.36l-6.79 4.81a1.25 1.25 0 0 1-1.42 0L4.5 9.36v6.89c0 .14.11.25.25.25h14.5Z" />
      </svg>
    ),
  },
];

export default function Hero() {
  const role = useTyping(ROLES);
  const [loaded, setLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Background orbs */}
      <div className="hero__orb hero__orb--blue" />
      <div className="hero__orb hero__orb--purple" />
      <div className="hero__orb hero__orb--green" />

      <div
        className={`hero__container ${loaded ? "hero__container--loaded" : ""}`}
      >
        {/* Left content */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="chip chip--green">
              ✦ Available for opportunities
            </span>
          </div>

          <h1 className="hero__heading">
            Hi, I'm <span className="hero__name">Suraj Pujari</span>
          </h1>

          <div className="hero__role">
            {role}
            <span className="hero__cursor">|</span>
          </div>

          <p className="hero__desc">
            MERN Stack Developer and MCA Student at MIT Vishwaprayag University, passionate about building scalable web applications, solving real-world problems, and transforming ideas into impactful digital solutions through clean code and modern technologies.
          </p>

          <div className="hero__cta">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <span className="hero__cta-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2.5a9.34 9.34 0 0 0-8 14.16L3 21.5l4.95-1.01a9.32 9.32 0 0 0 4.09.96h.01a9.48 9.48 0 0 0 9.45-9.47A9.46 9.46 0 0 0 12.04 2.5Zm5.51 13.39c-.23.64-1.32 1.23-1.84 1.31-.47.07-1.07.1-1.73-.11-.4-.13-.92-.3-1.58-.59-2.77-1.19-4.58-3.97-4.72-4.15-.14-.18-1.13-1.5-1.13-2.86 0-1.37.72-2.04.97-2.32.25-.27.55-.34.73-.34h.53c.17 0 .4-.06.62.47.23.55.79 1.91.86 2.05.07.14.11.31.02.49-.09.18-.14.29-.27.45-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.27.71 1.17 1.52 1.9 1.04.93 1.92 1.22 2.19 1.36.27.14.43.12.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.62-.14.25.09 1.59.75 1.86.89.27.14.45.2.52.32.07.11.07.66-.16 1.3Z" />
                </svg>
              </span>
              Let's Connect
            </a>
            <a
              href="#projects"
              className="btn btn--outline"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects →
            </a>
          </div>

          <div className="hero__socials">
            {heroSocialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`hero__social-link hero__social-link--${link.tone}`}
                aria-label={link.label}
              >
                <span className="hero__social-icon">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div
          className={`hero__avatar-wrap ${loaded ? "hero__avatar-wrap--loaded" : ""}`}
        >
          <div className="hero__avatar-ring">
            <div className="hero__avatar-inner">
              <img
                src="https://github.com/suraj-pujari/web-development/blob/main/IMG_0769.jpeg?raw=true"
                alt="Suraj Pujari"
                className={`hero__avatar-img ${imgLoaded && !imgError ? "hero__avatar-img--loaded" : ""}`}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
              />
              {(!imgLoaded || imgError) && (
                <span className="hero__avatar-initials">SP</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator">
        <span className="hero__scroll-text">scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
