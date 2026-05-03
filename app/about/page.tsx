import Nav from "../components/Nav";
import Footer from "../components/Footer";

const pillars = [
  { num: "01", title: "Talent development", desc: "We immerse JHU students in real client engagements, building the analytical and communication skills that launch consulting careers at top firms." },
  { num: "02", title: "Client impact", desc: "We deliver rigorous, actionable strategy to companies ranging from early-stage startups to Fortune 500s — the same quality of work, regardless of client size." },
  { num: "03", title: "MBB-grade rigor", desc: "Every engagement is overseen by leaders with direct McKinsey, Bain, and BCG experience, ensuring our work meets the highest professional standards." },
  { num: "04", title: "Data-driven decisions", desc: "We don't rely on intuition alone. Every recommendation is backed by quantitative analysis, market research, and structured frameworks." },
];

const values = [
  { title: "Intellectual humility", desc: "We approach every problem as a learning opportunity and never assume we know the answer before doing the work." },
  { title: "Rigorous thinking", desc: "We apply structured frameworks and first-principles reasoning to cut through noise and identify what truly matters." },
  { title: "Client-first mindset", desc: "Our success is measured by our clients' outcomes, not the volume of slides we produce." },
  { title: "Developing talent", desc: "We invest in our people because great work starts with great consultants." },
];

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f7f5ef; }
        .values-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: #d0cec4; border: 0.5px solid #d0cec4; }
        .value-card { background: #f7f5ef; padding: 36px 32px; }
        .value-card:hover { background: #1a1a18; }
        .value-card:hover .v-title { color: #f0ede4; }
        .value-card:hover .v-desc { color: #7a7a74; }
        @media (max-width: 768px) {
          .about-split { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#f7f5ef", color: "#1a1a18", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* PAGE HEADER */}
        <div style={{ backgroundColor: "#1a1a18", padding: "64px 56px 56px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6aac88", marginBottom: 16, fontWeight: 500 }}>Who we are</p>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 48, color: "#f0ede4", fontWeight: 400, lineHeight: 1.1, maxWidth: 600 }}>
            About <em style={{ fontStyle: "italic", color: "#6aac88" }}>Emerald.</em>
          </h1>
        </div>

        {/* MISSION SPLIT */}
        <div className="about-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "0.5px solid #d0cec4" }}>
          <div style={{ padding: "64px 56px", borderRight: "0.5px solid #d0cec4" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 20 }}>Our mission</p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 30, color: "#1a1a18", lineHeight: 1.2, marginBottom: 24, fontWeight: 400 }}>
              Developing the next generation of{" "}
              <em style={{ fontStyle: "italic", color: "#1a6e4a" }}>elite consultants.</em>
            </h2>
            <p style={{ fontSize: 14, color: "#7a7a74", lineHeight: 1.8 }}>
              Led by a board of exclusively MBB-experienced leaders, our mission is rooted in a dual commitment: develop top consultants at Johns Hopkins through immersive, hands-on engagement — and help organizations of any size unlock their full potential through data-driven strategy.
            </p>
          </div>
          <div style={{ padding: "64px 56px" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 20 }}>Our story</p>
            <p style={{ fontSize: 14, color: "#7a7a74", lineHeight: 1.8, marginBottom: 20 }}>
              Emerald was founded in 2022 by a group of Johns Hopkins students who saw a gap: elite consulting talent existed on campus, but there was no structured vehicle to apply it meaningfully.
            </p>
            <p style={{ fontSize: 14, color: "#7a7a74", lineHeight: 1.8 }}>
              Since then, we&apos;ve grown into a full-service consulting organization, completing 25+ engagements across industries and placing our alumni at top firms globally.
            </p>
          </div>
        </div>

        {/* PILLARS */}
        <div style={{ padding: "64px 56px", backgroundColor: "#1a1a18" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6aac88", fontWeight: 500, marginBottom: 48 }}>What drives us</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {pillars.map((p, i) => (
              <div key={p.num} style={{ display: "flex", gap: 40, alignItems: "flex-start", padding: "32px 0", borderTop: i === 0 ? "0.5px solid #2a2a28" : "0.5px solid #2a2a28" }}>
                <span style={{ fontSize: 11, color: "#3a6e54", letterSpacing: "0.1em", fontWeight: 500, minWidth: 24, paddingTop: 3 }}>{p.num}</span>
                <div>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: "#f0ede4", marginBottom: 10, fontWeight: 400 }}>{p.title}</div>
                  <div style={{ fontSize: 14, color: "#8a8a84", lineHeight: 1.7, maxWidth: 600 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VALUES */}
        <div style={{ padding: "64px 56px 40px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 40 }}>Our values</p>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card" style={{ transition: "background 0.2s" }}>
                <div className="v-title" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: "#1a1a18", marginBottom: 12, fontWeight: 400 }}>{v.title}</div>
                <div className="v-desc" style={{ fontSize: 13, color: "#7a7a74", lineHeight: 1.7 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
