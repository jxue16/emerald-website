import Nav from "../components/Nav";
import Footer from "../components/Footer";

const practices = [
  { num: "01", title: "Growth & Go-to-Market Strategy", desc: "Positioning, pricing, and launch plans that drive adoption and define where to win. We help companies identify their most valuable customer segments and build a repeatable path to market." },
  { num: "02", title: "Operational & Financial Modeling", desc: "Unit economics, forecasts, and scenario models to support confident planning. From seed-stage pro formas to enterprise budget models, we bring rigor to your numbers." },
  { num: "03", title: "Market & Competitive Analysis", desc: "Map customers, competitors, and trends to surface opportunities and sharpen decisions. We deliver deep-dive reports that equip leadership teams to move decisively." },
  { num: "04", title: "Data Analytics & Visualization", desc: "Clean insights, dashboards, and storytelling visuals that accelerate decision-making. We turn raw data into clear narratives that resonate with investors and executives." },
  { num: "05", title: "Digital & Product Strategy", desc: "Product direction and digital roadmaps grounded in user needs and business impact. We help teams prioritize features, define MVPs, and align product vision with business goals." },
  { num: "06", title: "Process Automation", desc: "From data scraping to workflow automation — streamlining operations with modern tooling. We identify inefficiencies and implement scalable solutions that save time and reduce cost." },
];

export default function PracticeAreas() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f7f5ef; }
        .practice-card { background: #f7f5ef; padding: 40px 36px; transition: background 0.2s; border-bottom: 0.5px solid #d0cec4; }
        .practice-card:hover { background: #1a1a18; }
        .practice-card:hover .pc-num { color: #1a6e4a; }
        .practice-card:hover .pc-title { color: #f0ede4; }
        .practice-card:hover .pc-desc { color: #7a7a74; }
        .practice-card:hover .pc-arrow { color: #1a6e4a; }
      `}</style>
      <div style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#f7f5ef", color: "#1a1a18", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* PAGE HEADER */}
        <div style={{ backgroundColor: "#1a1a18", padding: "64px 56px 56px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6aac88", marginBottom: 16, fontWeight: 500 }}>What we do</p>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 48, color: "#f0ede4", fontWeight: 400, lineHeight: 1.1, maxWidth: 600 }}>
            Our practice <em style={{ fontStyle: "italic", color: "#6aac88" }}>areas.</em>
          </h1>
          <p style={{ fontSize: 14, color: "#9a9a90", lineHeight: 1.8, maxWidth: 520, marginTop: 20 }}>
            Six core capabilities — each built around the analytical frameworks and strategic tools used at top-tier consulting firms.
          </p>
        </div>

        {/* PRACTICES LIST */}
        <div style={{ flex: 1 }}>
          {practices.map((p) => (
            <div key={p.num} className="practice-card">
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 40 }}>
                <div style={{ display: "flex", gap: 32, alignItems: "flex-start", flex: 1 }}>
                  <span className="pc-num" style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.1em", fontWeight: 500, minWidth: 24, paddingTop: 4 }}>{p.num}</span>
                  <div>
                    <div className="pc-title" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: "#1a1a18", marginBottom: 12, lineHeight: 1.2, fontWeight: 400 }}>{p.title}</div>
                    <div className="pc-desc" style={{ fontSize: 14, color: "#7a7a74", lineHeight: 1.7, maxWidth: 680 }}>{p.desc}</div>
                  </div>
                </div>
                <span className="pc-arrow" style={{ fontSize: 20, color: "#ccc", paddingTop: 2 }}>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ backgroundColor: "#1a6e4a", padding: "56px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(232,245,239,0.6)", fontWeight: 500, marginBottom: 10 }}>Ready to start?</p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: "#e8f5ef", fontWeight: 400 }}>Let&apos;s work together.</h2>
          </div>
          <a href="/placements" style={{ backgroundColor: "#0f3d28", color: "#6aac88", padding: "14px 32px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none" }}>
            Get in touch →
          </a>
        </div>

        <Footer />
      </div>
    </>
  );
}
