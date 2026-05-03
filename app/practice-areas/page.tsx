import Nav from "../components/Nav";
import Footer from "../components/Footer";

const practices = [
  {
    num: "01",
    title: "Growth & Go-to-Market Strategy",
    desc: "Positioning, pricing, and launch plans that drive adoption and define where to win.",
  },
  {
    num: "02",
    title: "Operational & Financial Modeling",
    desc: "Unit economics, forecasts, and scenario models to support confident planning.",
  },
  {
    num: "03",
    title: "Market & Competitive Analysis",
    desc: "Map customers, competitors, and trends to surface opportunities and sharpen decisions.",
  },
  {
    num: "04",
    title: "Data Analytics & Visualization",
    desc: "Clean insights, dashboards, and storytelling visuals that accelerate decision-making.",
  },
  {
    num: "05",
    title: "Digital & Product Strategy",
    desc: "Product direction and digital roadmaps grounded in user needs and business impact.",
  },
  {
    num: "06",
    title: "Process Automation",
    desc: "From data scraping to workflow automation — streamlining operations with modern tooling.",
  },
];

const values = [
  {
    num: "01",
    title: "Intellectual rigor",
    desc: "We apply structured frameworks and first-principles reasoning to every problem. Intuition is a starting point — conclusions are always evidence-based.",
  },
  {
    num: "02",
    title: "Client-first mindset",
    desc: "Our success is measured by our clients' outcomes. Every recommendation we make is shaped by what genuinely moves the needle for the organizations we serve.",
  },
  {
    num: "03",
    title: "Developing talent",
    desc: "Great work starts with great people. We invest heavily in our consultants — through training, mentorship, and real-world engagement — because we believe in building careers, not just resumes.",
  },
  {
    num: "04",
    title: "Intellectual humility",
    desc: "We approach every engagement as a learning opportunity. We ask hard questions, challenge assumptions — including our own — and never assume we know the answer before doing the work.",
  },
  {
    num: "05",
    title: "Bias toward action",
    desc: "We move with urgency. Analysis is only valuable when it leads to decisions, and we hold ourselves accountable to delivering recommendations that are clear, concrete, and actionable.",
  },
  {
    num: "06",
    title: "Integrity in all we do",
    desc: "We hold ourselves to the highest ethical standards — in how we work with clients, how we treat each other, and how we represent Johns Hopkins and the consulting profession.",
  },
];

export default function PracticeAreas() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f7f5ef; }

        .practice-card { background: #f7f5ef; padding: 36px 32px; transition: background 0.2s; cursor: default; }
        .practice-card:hover { background: #1a1a18; }
        .practice-card:hover .pc-num { color: #1a6e4a; }
        .practice-card:hover .pc-title { color: #f0ede4; }
        .practice-card:hover .pc-desc { color: #7a7a74; }

        .value-card { background: #f7f5ef; padding: 36px 32px; transition: background 0.2s; cursor: default; }
        .value-card:hover { background: #1a6e4a; }
        .value-card:hover .vc-num { color: rgba(232,245,239,0.4); }
        .value-card:hover .vc-title { color: #e8f5ef; }
        .value-card:hover .vc-desc { color: rgba(232,245,239,0.7); }

        .two-grid { display: grid; grid-template-columns: 1fr 1fr; }
        .three-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: #d0cec4; border: 0.5px solid #d0cec4; }

        @media (max-width: 900px) {
          .three-grid { grid-template-columns: 1fr !important; }
          .two-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#f7f5ef", color: "#1a1a18", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* PAGE HEADER */}
        <div style={{ backgroundColor: "#1a1a18", padding: "64px 56px 0" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6aac88", marginBottom: 16, fontWeight: 500 }}>What we do</p>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 48, color: "#f0ede4", fontWeight: 400, lineHeight: 1.1, maxWidth: 640 }}>
            Six capabilities.<br />
            <em style={{ fontStyle: "italic", color: "#6aac88" }}>One standard of excellence.</em>
          </h1>
          <p style={{ fontSize: 14, color: "#9a9a90", lineHeight: 1.8, maxWidth: 520, margin: "20px 0 56px" }}>
            Each practice area is built around the analytical frameworks and strategic tools used at top-tier consulting firms — applied by the next generation of talent.
          </p>
        </div>

        {/* PRACTICE GRID */}
        <div className="three-grid">
          {practices.map((p) => (
            <div key={p.num} className="practice-card">
              <div className="pc-num" style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.1em", marginBottom: 20, fontWeight: 500 }}>{p.num}</div>
              <div className="pc-title" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 19, color: "#1a1a18", marginBottom: 12, lineHeight: 1.3, fontWeight: 400 }}>{p.title}</div>
              <div className="pc-desc" style={{ fontSize: 13, color: "#7a7a74", lineHeight: 1.7 }}>{p.desc}</div>
            </div>
          ))}
        </div>

        {/* MISSION STATEMENT */}
        <div className="two-grid" style={{ borderTop: "0.5px solid #d0cec4", borderBottom: "0.5px solid #d0cec4" }}>
          <div style={{ backgroundColor: "#1a6e4a", padding: "72px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(232,245,239,0.55)", fontWeight: 500, marginBottom: 20 }}>Our mission</p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: "#e8f5ef", fontWeight: 400, lineHeight: 1.2, marginBottom: 24 }}>
              Developing the next generation of{" "}
              <em style={{ fontStyle: "italic" }}>elite consultants.</em>
            </h2>
            <p style={{ fontSize: 14, color: "rgba(232,245,239,0.7)", lineHeight: 1.8 }}>
              Led by a board of exclusively MBB-experienced leaders, our work is rooted in a dual commitment: develop top consultants at Johns Hopkins through immersive, hands-on engagement — and help organizations of any size unlock their full potential through data-driven strategy.
            </p>
          </div>
          <div style={{ backgroundColor: "#f7f5ef", padding: "72px 56px", display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "0.5px solid #d0cec4" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 20 }}>By the numbers</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { num: "25+", label: "Client engagements completed" },
                { num: "$1T+", label: "Combined client market cap" },
                { num: "100%", label: "MBB-experienced leadership" },
                { num: "6", label: "Core practice areas" },
              ].map((s, i) => (
                <div key={s.label} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", padding: "18px 0", borderBottom: i < 3 ? "0.5px solid #e0ddd6" : "none", gap: 16 }}>
                  <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: "#1a1a18", fontWeight: 400 }}>{s.num}</span>
                  <span style={{ fontSize: 12, color: "#9a9a90", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500, textAlign: "right", maxWidth: 200 }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CORE VALUES */}
        <div style={{ padding: "64px 56px 40px", backgroundColor: "#f7f5ef" }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 12 }}>How we operate</p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: "#1a1a18", fontWeight: 400, lineHeight: 1.1 }}>
              Our core <em style={{ fontStyle: "italic", color: "#1a6e4a" }}>values.</em>
            </h2>
          </div>
          <div className="three-grid">
            {values.map((v) => (
              <div key={v.num} className="value-card">
                <div className="vc-num" style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.1em", marginBottom: 20, fontWeight: 500 }}>{v.num}</div>
                <div className="vc-title" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 19, color: "#1a1a18", marginBottom: 12, lineHeight: 1.3, fontWeight: 400 }}>{v.title}</div>
                <div className="vc-desc" style={{ fontSize: 13, color: "#7a7a74", lineHeight: 1.7 }}>{v.desc}</div>
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
