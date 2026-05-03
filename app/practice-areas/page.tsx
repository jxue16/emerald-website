import Nav from "../components/Nav";
import Footer from "../components/Footer";

const practices = [
  { num: "01", title: "Growth & Go-to-Market Strategy" },
  { num: "02", title: "Operational & Financial Modeling" },
  { num: "03", title: "Market & Competitive Analysis" },
  { num: "04", title: "Data Analytics & Visualization" },
  { num: "05", title: "Digital & Product Strategy" },
  { num: "06", title: "Process Automation" },
];

const values = [
  {
    icon: "◈",
    title: "Intellectual rigor",
    desc: "Every recommendation is evidence-based. We apply structured frameworks and first-principles reasoning — intuition is a starting point, never a conclusion.",
  },
  {
    icon: "◎",
    title: "Client-first mindset",
    desc: "Our success is measured by our clients' outcomes. We deliver work that is clear, concrete, and built to move the needle.",
  },
  {
    icon: "◇",
    title: "Developing talent",
    desc: "We invest in our people because great work starts with great consultants. Every engagement is a training ground for the next generation of leaders.",
  },
];

export default function PracticeAreas() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f7f5ef; }

        .practice-card {
          background: #f7f5ef;
          padding: 52px 44px;
          transition: background 0.2s;
          cursor: default;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 220px;
        }
        .practice-card:hover { background: #1a1a18; }
        .practice-card:hover .pc-num { color: #1a6e4a; }
        .practice-card:hover .pc-title { color: #f0ede4; }
        .practice-card:hover .pc-arrow { opacity: 1 !important; color: #1a6e4a; }

        .practice-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #d0cec4;
          border: 0.5px solid #d0cec4;
        }

        .values-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #d0cec4;
          border: 0.5px solid #d0cec4;
        }

        @media (max-width: 900px) {
          .practice-grid { grid-template-columns: 1fr !important; }
          .values-row { grid-template-columns: 1fr !important; }
          .mission-bar { flex-direction: column !important; gap: 20px !important; }
        }
      `}</style>

      <div style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#f7f5ef", color: "#1a1a18", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* PAGE HEADER */}
        <div style={{ backgroundColor: "#1a1a18", padding: "64px 56px 56px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6aac88", marginBottom: 16, fontWeight: 500 }}>What we do</p>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: "#f0ede4", fontWeight: 400, lineHeight: 1.1, maxWidth: 640 }}>
            Six capabilities.<br />
            <em style={{ fontStyle: "italic", color: "#6aac88" }}>One standard of excellence.</em>
          </h1>
        </div>

        {/* PRACTICE GRID — large tiles, no descriptions */}
        <div className="practice-grid">
          {practices.map((p) => (
            <div key={p.num} className="practice-card">
              <div className="pc-num" style={{ fontSize: 11, color: "#ccc", letterSpacing: "0.1em", fontWeight: 500 }}>{p.num}</div>
              <div>
                <div className="pc-title" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 26, color: "#1a1a18", lineHeight: 1.25, fontWeight: 400, marginBottom: 16 }}>{p.title}</div>
                <div className="pc-arrow" style={{ fontSize: 16, color: "#1a6e4a", opacity: 0, transition: "opacity 0.2s" }}>→</div>
              </div>
            </div>
          ))}
        </div>

        {/* MISSION — single slim horizontal bar */}
        <div className="mission-bar" style={{ backgroundColor: "#1a6e4a", padding: "36px 56px", display: "flex", alignItems: "center", gap: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(232,245,239,0.5)", fontWeight: 500, whiteSpace: "nowrap", flexShrink: 0 }}>Our mission</p>
          <div style={{ width: "0.5px", height: 28, backgroundColor: "rgba(232,245,239,0.2)", flexShrink: 0 }} />
          <p style={{ fontSize: 15, color: "rgba(232,245,239,0.85)", lineHeight: 1.65, fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
            Led by MBB-experienced leaders, we develop the next generation of consultants at Johns Hopkins while delivering effective, data-driven strategy.
          </p>
          <a href="/about" style={{ whiteSpace: "nowrap", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(232,245,239,0.6)", fontWeight: 500, textDecoration: "none", borderBottom: "0.5px solid rgba(232,245,239,0.3)", paddingBottom: 2, flexShrink: 0 }}>
            Learn more →
          </a>
        </div>

        {/* CORE VALUES — 3 columns with icons */}
        <div style={{ padding: "64px 56px 56px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 40 }}>How we operate</p>
          <div className="values-row">
            {values.map((v) => (
              <div key={v.title} style={{ backgroundColor: "#f7f5ef", padding: "40px 36px" }}>
                <div style={{ fontSize: 22, color: "#1a6e4a", marginBottom: 20, lineHeight: 1 }}>{v.icon}</div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: "#1a1a18", marginBottom: 14, fontWeight: 400, lineHeight: 1.2 }}>{v.title}</div>
                <div style={{ fontSize: 13, color: "#7a7a74", lineHeight: 1.75 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ backgroundColor: "#1a1a18", padding: "56px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(232,245,239,0.5)", fontWeight: 500, marginBottom: 10 }}>Ready to start?</p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 30, color: "#f0ede4", fontWeight: 400 }}>Let&apos;s work together.</h2>
          </div>
          <a href="/work-with-us" style={{ backgroundColor: "#1a6e4a", color: "#e8f5ef", padding: "14px 32px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none" }}>
            Get in touch →
          </a>
        </div>

        <Footer />
      </div>
    </>
  );
}
