import { lazy, Suspense, useState } from "react";
import { SOCIAL_LINKS } from "../../constants/data";
import "./Footer.css";

const ResumeViewer = lazy(() => import("../ResumeViewer/ResumeViewer"));

const socialIcons = {
  GitHub: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.93.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 7c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.13 10.13 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.86H3.75v10.38h3.19V8.86ZM5.34 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm13.91 9.37c0-3.13-1.67-4.78-4.06-4.78-1.87 0-2.71 1.03-3.17 1.75V8.86H8.96v10.38h3.19v-5.76c0-1.52.29-2.99 2.17-2.99 1.85 0 1.87 1.73 1.87 3.08v5.67h3.06v-5.87Z" />
    </svg>
  ),
  LeetCode: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.48 0c-.36 0-.71.15-.96.44L7.12 6.23l-3.86 4.12a5.27 5.27 0 0 0-1.21 2.11 5.53 5.53 0 0 0 .29 3.89 5.94 5.94 0 0 0 1.27 1.82l4.28 4.19.04.04c2.25 2.17 5.85 2.13 8.06-.07l2.4-2.4a1.38 1.38 0 0 0 0-1.95 1.38 1.38 0 0 0-1.95 0l-2.4 2.39c-1.14 1.14-2.99 1.16-4.18.04l-.02-.02-4.28-4.19a3 3 0 0 1 0-4.24l3.86-4.13 5.4-5.78A1.38 1.38 0 0 0 14.76.1 1.37 1.37 0 0 0 13.48 0Zm-2.86 12.82a1.38 1.38 0 0 0 0 2.76h10a1.38 1.38 0 0 0 0-2.76h-10Z" />
    </svg>
  ),
};

const contactItems = [
  {
    label: "Location",
    value: "Pune, India",
    href: "https://www.google.com/maps/search/?api=1&query=Pune%2C%20India",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s7-5.35 7-12a7 7 0 0 0-14 0c0 6.65 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "surajpujari8383@gmail.com",
    href: "mailto:surajpujari8383@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
        <path d="M5 8l7 5 7-5" />
      </svg>
    ),
  },
  {
    label: "Mobile",
    value: "+91 8382038383",
    href: "tel:+918382038383",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.25 3.5h7.5c1.1 0 2 .9 2 2v13c0 1.1-.9 2-2 2h-7.5c-1.1 0-2-.9-2-2v-13c0-1.1.9-2 2-2Z" />
        <path d="M10 6h4" />
        <path d="M11 17.5h2" />
      </svg>
    ),
  },
];

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certs" },
  { label: "Resume", action: "resume" },
];

export default function Footer() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const year = new Date().getFullYear();
  const whatsappLink =
    "https://wa.me/918382038383?text=Hi%20Suraj%2C%20I%20want%20to%20discuss%20a%20project%20or%20opportunity.";

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div>
            <span className="footer__eyebrow">Available for opportunities</span>
            <h2 className="footer__title">
              Let's build something reliable and useful.
            </h2>
          </div>

          <a
            className="footer__cta"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="footer__cta-whatsapp"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Zm-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88Zm8.41-18.29A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.42Z" />
            </svg>
            Let's Connect
            <svg
              className="footer__cta-arrow"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>

        <div className="footer__main">
          <div className="footer__brand">
            <a href="#home" className="footer__logo" aria-label="Go to home">
              <span>&lt;</span>Suraj<span> /&gt;</span>
            </a>
            <p className="footer__tagline">
              MERN Stack Developer & MCA Student Building secure, scalable, and
              modern web applications with React, Node.js, Express.js, and
              MongoDB.
            </p>
          </div>

          <div className="footer__contact-block">
            <span className="footer__heading">Contact</span>
            <div className="footer__contact-list">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={
                    item.label === "Location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="footer__contact-link"
                >
                  <span className="footer__contact-icon">{item.icon}</span>
                  <span>
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <span className="footer__heading">Explore</span>
            <div className="footer__nav-links">
              {footerLinks.map((item) =>
                item.action === "resume" ? (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setResumeOpen(true)}
                    className="footer__nav-link footer__nav-button"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a key={item.label} href={item.href} className="footer__nav-link">
                    {item.label}
                  </a>
                )
              )}
            </div>
          </nav>

          <div className="footer__social-block">
            <span className="footer__heading">Connect</span>
            <div className="footer__socials">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`footer__social-link footer__social-link--${link.label.toLowerCase()}`}
                  aria-label={link.label}
                >
                  {socialIcons[link.label]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {year} Suraj Pujari. All rights reserved.</span>
          <span>Designed &amp; developed by Suraj Pujari</span>
        </div>
      </div>

      {resumeOpen && (
        <Suspense fallback={null}>
          <ResumeViewer onClose={() => setResumeOpen(false)} />
        </Suspense>
      )}
    </footer>
  );
}
