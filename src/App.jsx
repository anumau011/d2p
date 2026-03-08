import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Snowflake({ style }) {
  return <div className="snowflake" style={style} />;
}

function Snowfall() {
  const snowflakes = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 8 + 6}s`,
      animationDelay: `${Math.random() * 10}s`,
      opacity: Math.random() * 0.7 + 0.3,
      size: Math.random() * 5 + 2,
    }));
  }, []);

  return (
    <div className="snowfall-container">
      {snowflakes.map((flake) => (
        <Snowflake
          key={flake.id}
          style={{
            left: flake.left,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
            opacity: flake.opacity,
            width: flake.size,
            height: flake.size,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="coming-soon-page">
      <Snowfall />

      {/* Ambient glow orbs */}
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />

      {/* Content */}
      <div className={`coming-soon-content ${mounted ? "mounted" : ""}`}>
        {/* Logo */}
        <div className="cs-logo-wrap">
          <div className="cs-logo">
            <span>D2P</span>
          </div>
          <div className="cs-logo-text">Drop2Print</div>
        </div>

        {/* Badge */}
        <div className="cs-badge">
          <span className="cs-badge-dot" />
          We&apos;re Building Something Amazing
        </div>

        {/* Main heading with animated text */}
        <h1 className="cs-title">
          <span className="cs-title-line cs-title-line-1">Coming</span>
          <span className="cs-title-line cs-title-line-2">
            <span className="cs-gradient-text">Soon</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="cs-subtitle">
          We&apos;re crafting a seamless document printing experience.
          <br />
          Upload, print, and pick up — all from your phone.
        </p>

        {/* Animated divider */}
        <div className="cs-divider">
          <div className="cs-divider-line" />
          <div className="cs-divider-icon">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="cs-divider-line" />
        </div>

        {/* Feature pills */}
        <div className="cs-features">
          <div className="cs-feature-pill">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            Upload Documents
          </div>
          <div className="cs-feature-pill">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z" />
            </svg>
            Instant Print
          </div>
          <div className="cs-feature-pill">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Nearby Pickup
          </div>
        </div>

        {/* CTA / Links + Footer */}
        <div className="cs-actions">
          <a href="https://play.google.com/store/apps/details?id=com.drop2print" target="_blank" rel="noopener noreferrer" className="cs-btn-playstore">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302-2.697-2.302 2.697-2.302zM5.864 3.469L16.8 9.802 14.5 12.104 5.864 3.469z"/>
            </svg>
            <div className="cs-playstore-text">
              <span className="cs-playstore-small">GET IT ON</span>
              <span className="cs-playstore-big">Google Play</span>
            </div>
          </a>
          <Link to="/policy" className="cs-btn-secondary">
            Privacy Policy
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>

        <div className="cs-footer-inline">
          © 2026 Drop2Print. All rights reserved.
        </div>
      </div>
    </div>
  );
}