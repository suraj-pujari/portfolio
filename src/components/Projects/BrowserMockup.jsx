import { useState } from "react";
import "./BrowserMockup.css";

export default function BrowserMockup({ url, screenshot, projectColor }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const displayUrl = url
    .replace("https://", "")
    .replace("http://", "")
    .replace(/\/$/, "");

  return (
    <div
      className="browser"
      style={{
        boxShadow: `0 0 0 1px rgba(255,255,255,0.08), 0 8px 40px ${projectColor}25, 0 2px 8px rgba(0,0,0,0.5)`,
      }}
    >
      {/* ── Title bar ── */}
      <div className="browser__bar">
        {/* Traffic lights */}
        <div className="browser__lights">
          <span className="browser__light browser__light--red" />
          <span className="browser__light browser__light--yellow" />
          <span className="browser__light browser__light--green" />
        </div>

        {/* Nav arrows */}
        <div className="browser__nav">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="rgba(180,200,255,0.25)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="rgba(180,200,255,0.25)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* URL bar */}
        <div className="browser__url-bar">
          <svg className="browser__url-lock" width="10" height="10" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="11" width="18" height="11" rx="2" stroke="rgba(180,200,255,0.35)" strokeWidth="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="rgba(180,200,255,0.35)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="browser__url-text">{displayUrl}</span>
        </div>

        {/* Right icons placeholder */}
        <div className="browser__toolbar-right">
          <div className="browser__toolbar-dot" />
          <div className="browser__toolbar-dot" />
          <div className="browser__toolbar-dot" />
        </div>
      </div>

      {/* ── Screenshot area ── */}
      <div className="browser__content">
        {/* Skeleton shimmer while loading */}
        {!imgLoaded && !imgError && (
          <div className="browser__skeleton">
            <div className="browser__skeleton-bar" style={{ width: "60%", background: `${projectColor}20` }} />
            <div className="browser__skeleton-bar" style={{ width: "40%", background: `${projectColor}15` }} />
            <div className="browser__skeleton-block" style={{ background: `${projectColor}10` }} />
            <div className="browser__skeleton-line" />
            <div className="browser__skeleton-line" style={{ width: "80%" }} />
            <div className="browser__skeleton-line" style={{ width: "65%" }} />
          </div>
        )}

        {/* Error fallback */}
        {imgError && (
          <div className="browser__fallback" style={{ color: projectColor }}>
            <div className="browser__fallback-icon">🌐</div>
            <div className="browser__fallback-text">{displayUrl}</div>
          </div>
        )}

        {/* Actual screenshot */}
        {screenshot && (
          <img
            src={screenshot}
            alt={`Screenshot of ${displayUrl}`}
            className={`browser__screenshot ${imgLoaded ? "browser__screenshot--loaded" : ""}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        )}

        {/* Bottom inner shadow for depth */}
        <div className="browser__inner-shadow" />
      </div>
    </div>
  );
}
