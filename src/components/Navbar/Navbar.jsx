import { useState, useEffect, useRef } from "react";
import { NAV_ITEMS } from "../../constants/data";
import "./Navbar.css";

export default function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    const sectionIds = NAV_ITEMS.map((item) => item.toLowerCase());
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const matched = NAV_ITEMS.find((item) => item.toLowerCase() === id);
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
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  const openResume = () => {
    window.open("https://drive.google.com/file/d/1GaWHoZDucEHeG01STs2TwVRUYlrPBA8d/view?usp=sharing", "_blank");
  };

  return (
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
              onClick={() => scrollTo(item.toLowerCase())}
              className={`navbar__btn ${active === item ? "navbar__btn--active" : ""}`}
            >
              {item}
            </button>
          ))}
          <button onClick={openResume} className="navbar__resume-btn">
            ↓ Resume
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
            onClick={() => scrollTo(item.toLowerCase())}
            className={`navbar__mobile-btn ${active === item ? "navbar__mobile-btn--active" : ""}`}
          >
            {item}
          </button>
        ))}
        <button onClick={openResume} className="navbar__mobile-resume-btn">
          ↓ Resume
        </button>
      </div>
    </nav>
  );
}