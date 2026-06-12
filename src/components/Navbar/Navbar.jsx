import { lazy, Suspense, useState, useEffect, useRef } from "react";
import { NAV_ITEMS } from "../../constants/data";
import "./Navbar.css";

const ResumeViewer = lazy(() => import("../ResumeViewer/ResumeViewer"));

const getSectionId = (item) => (item === "Certificates" ? "certs" : item.toLowerCase());

const ResumeIcon = () => (
  <svg className="navbar__resume-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 3.75h6.25L17 7.5v12.75H7V3.75Z" />
    <path d="M13.25 3.75V7.5H17" />
    <path d="M9.75 11h4.5" />
    <path d="M9.75 14h4.5" />
    <path d="M9.75 17h2.5" />
  </svg>
);

export default function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map(getSectionId);
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const matched = NAV_ITEMS.find((item) => getSectionId(item) === id);
            if (matched) setActive(matched);
          }
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, [setActive]);

  const scrollTo = (id) => {
    const el = document.getElementById(getSectionId(id));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  const openResume = () => {
    setMenuOpen(false);
    setResumeOpen(true);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`} ref={menuRef}>
        <div className="navbar__container">
          <span className="navbar__logo" onClick={() => scrollTo("home")}>
            <span className="navbar__logo-bracket">&lt;</span>
            Suraj
            <span className="navbar__logo-bracket"> /&gt;</span>
          </span>

          {/* Desktop links */}
          <div className="navbar__links">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`navbar__btn ${active === item ? "navbar__btn--active" : ""}`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={openResume}
              className="navbar__resume-btn"
              aria-label="Open resume preview"
            >
              <ResumeIcon />
              <span>Resume</span>
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`navbar__mobile-menu ${menuOpen ? "navbar__mobile-menu--open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`navbar__mobile-btn ${active === item ? "navbar__mobile-btn--active" : ""}`}
            >
              {item}
            </button>
          ))}
          <button onClick={openResume} className="navbar__mobile-resume-btn">
            <ResumeIcon />
            <span>Resume</span>
          </button>
        </div>
      </nav>

      {resumeOpen && (
        <Suspense fallback={null}>
          <ResumeViewer onClose={() => setResumeOpen(false)} />
        </Suspense>
      )}
    </>
  );
}
