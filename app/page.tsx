"use client";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// The recruiting banner is informational until applications open. Swap in the
// live application form and restore an "Apply" link once it does.
const RECRUITING_TERM = "Fall 2026 analyst cohort";
const APPLICATIONS_OPEN = "early October";
const INTEREST_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfjWS4qghIrs-Ox4vA9BSDnm2cf7ONZvTuM9pEb-aCqjT_bsA/viewform";

const practices = [
  { num: "01", title: "Growth & Go-to-Market Strategy", desc: "Positioning, pricing, and launch plans that drive adoption and define where to win." },
  { num: "02", title: "Operational & Financial Modeling", desc: "Unit economics, forecasts, and scenario models to support confident planning." },
  { num: "03", title: "Market & Competitive Analysis", desc: "Mapping customers, competitors, and trends to surface opportunities and sharpen decisions." },
  { num: "04", title: "Data Analytics & Visualization", desc: "Clean insights, dashboards, and storytelling visuals that accelerate decision-making." },
  { num: "05", title: "Digital & Product Strategy", desc: "Product direction and digital roadmaps grounded in user needs and business impact." },
  { num: "06", title: "Process Automation", desc: "Streamlining operations with modern tooling, from data scraping to workflow automation." },
];

const values = [
  {
    icon: "◈",
    title: "Intellectual rigor",
    desc: "Every recommendation is evidence-based. We apply structured frameworks and first-principles reasoning to reach conclusions that hold up under scrutiny.",
  },
  {
    icon: "◎",
    title: "Client-first mindset",
    desc: "Our success is measured by our clients' outcomes. We deliver work that is clear, concrete, and built to move the needle.",
  },
  {
    icon: "◇",
    title: "Developing talent",
    desc: "We invest in our people because great work starts with great consultants. Every engagement develops the next generation of leaders.",
  },
];

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { min-height: 100%; background: #f7f5ef; }

        .hero-grid {
          display: grid; grid-template-columns: 1fr 1fr; min-height: calc(88vh - 116px);
          position: relative; overflow: hidden;
          box-shadow: 0 44px 60px -36px rgba(15, 20, 16, 0.4);
          background:
            radial-gradient(ellipse 90% 70% at 78% 78%, rgba(26,110,74,0.55), transparent 70%),
            linear-gradient(122deg, #2a2925 0%, #2a2925 22%, #22523c 46%, #1a6e4a 72%, #1a6e4a 100%);
        }
        .hero-grid::after {
          content: ''; position: absolute; inset: 0; background-image: var(--grain-uri);
          opacity: 0.05; mix-blend-mode: overlay; pointer-events: none;
        }
        .hero-panel { position: relative; z-index: 1; background: transparent !important; }

        /* soft handoff from the hero into the cream section below */
        .hero-fade {
          position: absolute; left: 0; right: 0; bottom: 0; height: 150px; z-index: 2;
          background: linear-gradient(to bottom, transparent, rgba(20,45,34,0.45));
          pointer-events: none;
        }

        .recruit-banner {
          position: relative; flex-shrink: 0; overflow: hidden;
          background: #0f3d28; padding: 13px var(--pad-x);
          display: flex; align-items: center; justify-content: center; gap: 16px;
          flex-wrap: wrap;
        }
        .recruit-banner::after {
          content: ''; position: absolute; inset: 0; background-image: var(--grain-uri);
          opacity: 0.07; mix-blend-mode: overlay; pointer-events: none;
        }
        .recruit-banner::before {
          content: ''; position: absolute; left: 0; right: 0; bottom: -22px; height: 22px; z-index: 2;
          background: linear-gradient(to bottom, rgba(15,61,40,0.35), transparent); pointer-events: none;
        }
        .recruit-dot {
          width: 7px; height: 7px; border-radius: 50%; background: #6aac88; flex-shrink: 0;
          box-shadow: 0 0 0 0 rgba(106,172,136,0.6); animation: recruit-pulse 2.4s ease-out infinite;
        }
        @keyframes recruit-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(106,172,136,0.55); }
          70%  { box-shadow: 0 0 0 7px rgba(106,172,136,0); }
          100% { box-shadow: 0 0 0 0 rgba(106,172,136,0); }
        }
        .recruit-label {
          font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
          color: #6aac88; font-weight: 500; white-space: nowrap;
        }
        .recruit-text { font-size: 13px; color: rgba(232,245,239,0.82); }
        .recruit-link {
          color: #6aac88; text-decoration: underline; text-underline-offset: 3px;
          transition: color 0.2s ease;
        }
        .recruit-link:hover, .recruit-link:focus-visible { color: #e8f5ef; }
        @media (prefers-reduced-motion: reduce) {
          .recruit-dot { animation: none; }
        }

        #practice-areas { position: relative; }
        #practice-areas::before {
          content: ''; position: absolute; left: 0; right: 0; top: 0; height: 260px;
          background:
            linear-gradient(to bottom, rgba(26,110,74,0.16), rgba(26,110,74,0.05) 42%, transparent 80%),
            radial-gradient(ellipse 70% 100% at 62% 0%, rgba(15, 61, 40, 0.14), transparent 70%);
          pointer-events: none;
        }

        .practice-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 4px var(--pad-x) 96px;
          position: relative;
        }
        .practice-cell {
          background: #fffef9;
          border-radius: var(--radius-md);
          padding: 38px 32px 34px;
          position: relative;
          box-shadow: var(--shadow-card);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
          overflow: hidden;
        }
        .practice-cell::after {
          content: '';
          position: absolute;
          left: 0; bottom: 0;
          height: 3px; width: 0;
          background: linear-gradient(90deg, #1a6e4a, #6aac88);
          transition: width 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .practice-cell:hover { transform: translateY(-4px); box-shadow: var(--shadow-card-hover); }
        .practice-cell:hover::after { width: 100%; }
        .practice-num { font-size: 11px; letter-spacing: 0.14em; color: #b6b3a8; font-weight: 500; transition: color 0.35s ease; }
        .practice-cell:hover .practice-num { color: #1a6e4a; }

        .mission-bar { position: relative; overflow: hidden; flex-shrink: 0; }
        .mission-bar::before {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 90% at 8% 0%, rgba(255,255,255,0.10), transparent 60%),
            radial-gradient(ellipse 70% 90% at 100% 130%, rgba(0,0,0,0.16), transparent 60%);
          pointer-events: none;
        }
        .mission-bar::after {
          content: ''; position: absolute; inset: 0; background-image: var(--grain-uri);
          opacity: 0.06; mix-blend-mode: overlay; pointer-events: none;
        }
        .mission-bar > * { position: relative; z-index: 1; }

        .mission-link {
          transition: color 0.25s ease, border-color 0.25s ease;
        }
        .mission-link .arrow {
          display: inline-block;
          transition: transform 0.25s ease;
        }
        .mission-link:hover, .mission-link:focus-visible {
          color: #ffffff !important;
          border-color: rgba(232,245,239,0.9) !important;
        }
        .mission-link:hover .arrow, .mission-link:focus-visible .arrow { transform: translateX(5px); }
        @media (prefers-reduced-motion: reduce) {
          .mission-link .arrow { transition: none; }
          .mission-link:hover .arrow { transform: none; }
        }

        .values-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .value-cell {
          background: #fffef9;
          border-radius: var(--radius-md);
          padding: 38px 32px;
          box-shadow: var(--shadow-card);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
        }
        .value-cell:hover { transform: translateY(-4px); box-shadow: var(--shadow-card-hover); }

        .btn-primary, .btn-outline {
          border-radius: var(--radius-sm);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }
        .btn-primary { box-shadow: 0 1px 2px rgba(15,61,40,0.15), 0 12px 22px -12px rgba(15,61,40,0.55); }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 2px 4px rgba(15,61,40,0.2), 0 18px 28px -12px rgba(15,61,40,0.6); }
        .btn-outline:hover { transform: translateY(-2px); border-color: #6aac88 !important; color: #f0ede4 !important; }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important; min-height: unset;
            /* overflow:hidden kills the flex auto-min-size, so flex:1 would collapse it to 0 */
            flex: none !important;
            background: linear-gradient(168deg, #2a2925 0%, #2a2925 26%, #22523c 50%, #1a6e4a 74%, #1a6e4a 100%);
          }
          .hero-fade { display: none; }
          .recruit-banner { padding: 12px var(--pad-x); gap: 10px; text-align: center; }
        }
        @media (max-width: 900px) {
          .practice-grid { grid-template-columns: 1fr !important; padding: 4px var(--pad-x) 72px; }
          .values-row { grid-template-columns: 1fr !important; }
          .mission-bar { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
        }
        @media (max-width: 620px) {
          .hero-panel { padding: 30px var(--pad-x) !important; }
          .hero-stats { padding-top: 4px !important; }
          .practice-grid { gap: 14px; padding-bottom: 56px; }
          .practice-cell { padding: 26px 22px 24px; }
          .value-cell { padding: 26px 22px; }
          .values-row { gap: 14px; }
          .mission-bar { padding: 40px var(--pad-x) !important; gap: 16px !important; }
          .mission-link { display: inline-flex; align-items: center; min-height: 44px; }
          /* The divider is a vertical rule for a horizontal bar; once the bar
             stacks it reads as a stray tick, so turn it into a short underline. */
          .mission-rule { width: 34px !important; height: 0.5px !important; }
          /* Two ragged-width pills read as a mistake; make them a matched pair. */
          .hero-actions { gap: 10px; }
          .hero-actions a { flex: 1 1 100%; text-align: center; padding: 15px 20px !important; }
        }
        /* Touch devices get no hover, so the lift/underline reveals never fire;
           drop the transforms rather than leave dead transitions on tap. */
        @media (hover: none) {
          .practice-cell:hover, .value-cell:hover, .btn-primary:hover, .btn-outline:hover { transform: none; }
        }
      `}</style>

      <div style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#f7f5ef", color: "#2a2925", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* RECRUITING BANNER */}
        <div className="recruit-banner">
          <span className="recruit-dot" aria-hidden="true" />
          <span className="recruit-label">Recruiting soon</span>
          <span className="recruit-text">
            Applications for our {RECRUITING_TERM} open in {APPLICATIONS_OPEN}. To receive updates, fill out our{" "}
            <a href={INTEREST_FORM_URL} target="_blank" rel="noopener noreferrer" className="recruit-link">
              interest form
            </a>
            .
          </span>
        </div>

        {/* HERO */}
        <section className="hero-grid" style={{ flex: 1 }}>

          {/* LEFT */}
          <div className="hero-panel" style={{ padding: "40px var(--pad-x)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6aac88", marginBottom: 28, fontWeight: 500 }}>
              Johns Hopkins University · Est. 2022
            </p>
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(31px, 8.4vw, 46px)", lineHeight: 1.08, color: "#f0ede4", marginBottom: 24, fontWeight: 400 }}>
              Strategy consulting,{" "}
              <em style={{ fontStyle: "italic", color: "#6aac88" }}>student-led.</em>
              <br />MBB-backed.
            </h1>
            <p style={{ fontSize: 15, color: "#9a9a90", lineHeight: 1.8, maxWidth: 400, marginBottom: 34 }}>
              We partner with startups and Fortune 500 companies to deliver rigorous, data-driven strategy, developed by the next generation of top consultants.
            </p>
            <div className="hero-actions" style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <a href="/work-with-us" className="btn-primary" style={{ backgroundColor: "#1a6e4a", color: "#e8f5ef", padding: "14px 28px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none" }}>
                Work with us
              </a>
              <a href="/past-projects" className="btn-outline" style={{ backgroundColor: "transparent", color: "#c5c5bb", border: "1px solid rgba(106,172,136,0.55)", padding: "14px 28px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none" }}>
                View our work
              </a>
            </div>
          </div>

          {/* RIGHT: stats */}
          <div className="hero-panel hero-stats" style={{ padding: "40px var(--pad-x)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {[
              { num: "25+", label: "Clients served" },
              { num: "$1T+", label: "Combined client market cap" },
              { num: "100%", label: "Data-driven engagements" },
            ].map((s) => (
              <div key={s.label} style={{ borderTop: "0.5px solid rgba(255,255,255,0.15)", padding: "22px 0" }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(34px, 9vw, 46px)", color: "#e8f5ef", lineHeight: 1, marginBottom: 8, fontWeight: 400 }}>{s.num}</div>
                <div style={{ fontSize: 11, color: "rgba(232,245,239,0.55)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="hero-fade" aria-hidden="true" />
        </section>

        {/* WHAT WE DO */}
        <section id="practice-areas" style={{ scrollMarginTop: "var(--nav-h)" }}>
          <div style={{ padding: "72px var(--pad-x) 40px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(26px, 6.6vw, 36px)", color: "#2a2925", fontWeight: 400, lineHeight: 1.1, maxWidth: 640 }}>
                Six capabilities.{" "}
                <em style={{ fontStyle: "italic", color: "#1a6e4a" }}>One standard of excellence.</em>
              </h2>
            </div>
            <p style={{ fontSize: 14, color: "#7a7a74", lineHeight: 1.8, maxWidth: 360 }}>
              Every engagement is scoped around the questions that matter most to the client, then staffed with the analysts best equipped to answer them.
            </p>
          </div>

          <div className="practice-grid">
            {practices.map((p) => (
              <div key={p.num} className="practice-cell">
                <div className="practice-num">{p.num}</div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 23, color: "#2a2925", lineHeight: 1.25, fontWeight: 400, margin: "18px 0 14px" }}>{p.title}</div>
                <div style={{ fontSize: 13, color: "#7a7a74", lineHeight: 1.75 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* MISSION: slim horizontal bar */}
        <div className="mission-bar" style={{ backgroundColor: "#1a6e4a", padding: "52px var(--pad-x)", display: "flex", alignItems: "center", gap: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(232,245,239,0.5)", fontWeight: 500, whiteSpace: "nowrap", flexShrink: 0 }}>Our mission</p>
          <div className="mission-rule" style={{ width: "0.5px", height: 28, backgroundColor: "rgba(232,245,239,0.2)", flexShrink: 0 }} />
          <p style={{ fontSize: 15, color: "rgba(232,245,239,0.85)", lineHeight: 1.65, fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
            Led by MBB-experienced leaders, we develop the next generation of consultants at Johns Hopkins while delivering effective, data-driven strategy.
          </p>
          <a href="/past-projects" className="mission-link" style={{ whiteSpace: "nowrap", fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(232,245,239,0.8)", fontWeight: 500, textDecoration: "none", borderBottom: "0.5px solid rgba(232,245,239,0.4)", paddingBottom: 3, flexShrink: 0 }}>
            Learn more <span className="arrow">→</span>
          </a>
        </div>

        {/* CORE VALUES */}
        <div style={{ padding: "64px var(--pad-x) 72px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 40 }}>How we operate</p>
          <div className="values-row">
            {values.map((v) => (
              <div key={v.title} className="value-cell">
                <div style={{ fontSize: 22, color: "#1a6e4a", marginBottom: 20, lineHeight: 1 }}>{v.icon}</div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: "#2a2925", marginBottom: 14, fontWeight: 400, lineHeight: 1.2 }}>{v.title}</div>
                <div style={{ fontSize: 13, color: "#7a7a74", lineHeight: 1.75 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
