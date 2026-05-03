import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emerald Consulting Group | JHU",
  description:
    "MBB-led student consulting group at Johns Hopkins University. Strategy consulting for startups and Fortune 500 companies.",
};

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

const pillars = [
  {
    title: "Talent development",
    desc: "We immerse JHU students in real client engagements, building the skills that launch consulting careers.",
  },
  {
    title: "Client impact",
    desc: "We deliver rigorous, actionable strategy to companies ranging from early-stage startups to Fortune 500s.",
  },
  {
    title: "MBB-grade rigor",
    desc: "Every engagement is guided by leaders with direct McKinsey, Bain, and BCG experience.",
  },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#f7f5ef", color: "#1a1a18" }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f7f5ef; }

        .nav-link { font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #5a5a54; text-decoration: none; font-weight: 500; transition: color 0.2s; }
        .nav-link:hover { color: #1a6e4a; }

        .practice-card { background: #f7f5ef; padding: 32px 28px; transition: background 0.2s; cursor: default; }
        .practice-card:hover { background: #1a1a18; }
        .practice-card:hover .pc-title { color: #e8f5ef; }
        .practice-card:hover .pc-desc { color: #7a7a74; }
        .practice-card:hover .pc-num { color: #1a6e4a; }

        .form-input { display: block; width: 100%; background: white; border: 0.5px solid #d0cec4; padding: 12px 14px; font-size: 13px; font-family: 'DM Sans', sans-serif; color: #1a1a18; margin-bottom: 12px; outline: none; }
        .form-input:focus { border-color: #1a6e4a; }

        .about-link { font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #6aac88; text-decoration: none; font-weight: 500; border-bottom: 0.5px solid #1a6e4a; padding-bottom: 2px; }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .practices-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .footer-inner { flex-direction: column; gap: 16px; align-items: flex-start !important; }
          .nav-links { display: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 40px", backgroundColor: "#f7f5ef", borderBottom: "0.5px solid #d0cec4" }}>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, letterSpacing: "0.02em" }}>
          <span style={{ color: "#1a6e4a" }}>Emerald</span> Consulting Group
        </div>
        <ul className="nav-links" style={{ display: "flex", gap: 32, listStyle: "none" }}>
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/about" className="nav-link">About</a></li>
          <li><a href="/team" className="nav-link">Team</a></li>
          <li><a href="/placements" className="nav-link">Placements</a></li>
        </ul>
        <a href="/contact" style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500, backgroundColor: "#1a6e4a", color: "#e8f5ef", padding: "10px 20px", textDecoration: "none" }}>
          Work with us
        </a>
      </nav>

      {/* HERO */}
      <section className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 460 }}>
        <div style={{ backgroundColor: "#1a1a18", padding: "60px 48px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6aac88", marginBottom: 24, fontWeight: 500 }}>
              Johns Hopkins University · Est. 2022
            </p>
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 42, lineHeight: 1.1, color: "#f0ede4", marginBottom: 24, fontWeight: 400 }}>
              Strategy consulting,{" "}
              <em style={{ fontStyle: "italic", color: "#6aac88" }}>student-led.</em>
              <br />MBB-backed.
            </h1>
            <p style={{ fontSize: 14, color: "#9a9a90", lineHeight: 1.7, maxWidth: 360, marginBottom: 36 }}>
              We partner with startups and Fortune 500 companies to deliver rigorous, data-driven strategy — developed by the next generation of top consultants.
            </p>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <a href="/contact" style={{ backgroundColor: "#1a6e4a", color: "#e8f5ef", padding: "12px 24px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none" }}>
                Work with us
              </a>
              <a href="/placements" style={{ backgroundColor: "transparent", color: "#9a9a90", border: "0.5px solid #444440", padding: "12px 24px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none" }}>
                View our work
              </a>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#1a6e4a", padding: "60px 48px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 32 }}>
          {[
            { num: "25+", label: "Clients served" },
            { num: "$1T+", label: "Combined client market cap" },
            { num: "100%", label: "MBB-experienced leadership" },
          ].map((s) => (
            <div key={s.label} style={{ borderTop: "0.5px solid rgba(255,255,255,0.2)", paddingTop: 20 }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 48, color: "#e8f5ef", lineHeight: 1, marginBottom: 6, fontWeight: 400 }}>{s.num}</div>
              <div style={{ fontSize: 12, color: "rgba(232,245,239,0.65)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TICKER */}
      <div style={{ backgroundColor: "#0f3d28", padding: "12px 40px", display: "flex", gap: 48, overflowX: "auto" }}>
        {["Growth Strategy", "Financial Modeling", "Market Analysis", "Data Analytics", "Digital Strategy", "Process Automation", "MBB Leadership"].map((item) => (
          <span key={item} style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6aac88", whiteSpace: "nowrap", fontWeight: 500 }}>
            <span style={{ color: "#3a8c5e", marginRight: 16 }}>◆</span>{item}
          </span>
        ))}
      </div>

      {/* PRACTICE AREAS */}
      <section style={{ padding: "64px 40px" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 40, display: "flex", alignItems: "center", gap: 12 }}>
          Practice areas
          <span style={{ flex: 1, height: "0.5px", backgroundColor: "#d0cec4", maxWidth: 80, display: "inline-block" }} />
        </div>
        <div className="practices-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, backgroundColor: "#d0cec4", border: "0.5px solid #d0cec4" }}>
          {practices.map((p) => (
            <div key={p.num} className="practice-card">
              <div className="pc-num" style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.1em", marginBottom: 16, fontWeight: 500 }}>{p.num}</div>
              <div className="pc-title" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 17, color: "#1a1a18", marginBottom: 10, lineHeight: 1.3, fontWeight: 400 }}>{p.title}</div>
              <div className="pc-desc" style={{ fontSize: 13, color: "#7a7a74", lineHeight: 1.6 }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-grid" style={{ backgroundColor: "#1a1a18", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div style={{ padding: "64px 48px", borderRight: "0.5px solid #333330" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 24 }}>Our mission</div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: "#f0ede4", lineHeight: 1.2, marginBottom: 24, fontWeight: 400 }}>
            Developing the next generation of{" "}
            <em style={{ fontStyle: "italic", color: "#6aac88" }}>elite consultants.</em>
          </h2>
          <p style={{ fontSize: 14, color: "#8a8a84", lineHeight: 1.8, marginBottom: 32 }}>
            Led by a board of exclusively MBB-experienced leaders, our mission is rooted in a dual commitment: develop top consultants at Johns Hopkins through immersive, hands-on engagement — and help organizations of any size unlock their full potential through data-driven strategy.
          </p>
          <a href="/about" className="about-link">Meet our team →</a>
        </div>
        <div style={{ padding: "64px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {pillars.map((p) => (
              <div key={p.title} style={{ borderLeft: "2px solid #1a6e4a", paddingLeft: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#f0ede4", marginBottom: 4, letterSpacing: "0.02em" }}>{p.title}</div>
                <div style={{ fontSize: 13, color: "#6a6a64", lineHeight: 1.6 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-grid" style={{ padding: "64px 40px", backgroundColor: "#f7f5ef", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 20 }}>Contact</div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: "#1a1a18", lineHeight: 1.2, marginBottom: 16, fontWeight: 400 }}>
            Ready to work<br />together?
          </h2>
          <p style={{ fontSize: 14, color: "#7a7a74", lineHeight: 1.7, marginBottom: 28 }}>
            Tell us about your organization and the challenge you&apos;re facing. We&apos;ll follow up within 48 hours to discuss fit and next steps.
          </p>
          <p style={{ fontSize: 13, color: "#aaa8a0", lineHeight: 1.8 }}>
            3301 N Charles St, Baltimore, MD 21218<br />
            emeraldconsultinggroup.jhu@gmail.com
          </p>
        </div>
        <div>
          <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <input className="form-input" type="text" placeholder="First name" />
            <input className="form-input" type="text" placeholder="Last name" />
          </div>
          <input className="form-input" type="text" placeholder="Organization" />
          <input className="form-input" type="email" placeholder="Email address" />
          <textarea className="form-input" placeholder="Tell us about your project or challenge..." style={{ height: 100, resize: "none" }} />
          <button style={{ width: "100%", backgroundColor: "#1a6e4a", color: "#e8f5ef", border: "none", padding: 14, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", marginTop: 4 }}>
            Submit inquiry
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#0f0f0e", padding: "28px 40px" }}>
        <div className="footer-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 15, color: "#6a6a64" }}>
            <span style={{ color: "#1a6e4a" }}>Emerald</span> Consulting Group
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {["LinkedIn", "Instagram", "Apply"].map((l) => (
              <a key={l} href="#" style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4a4a46", textDecoration: "none", fontWeight: 500 }}>{l}</a>
            ))}
          </div>
          <div style={{ fontSize: 11, color: "#3a3a38", letterSpacing: "0.05em" }}>© 2026 Emerald Consulting Group</div>
        </div>
      </footer>

    </main>
  );
}
