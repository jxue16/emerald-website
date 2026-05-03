import Nav from "../components/Nav";
import Footer from "../components/Footer";

const projects = [
  {
    id: "01",
    client: "Confidential — Tech Startup",
    industry: "SaaS / B2B",
    practice: "Growth Strategy",
    description: "Developed a full go-to-market strategy for a Series A SaaS company entering a new vertical. Delivered competitive landscape analysis, ICP definition, and a 12-month launch roadmap.",
    outcomes: ["Identified 3 underserved market segments", "Built financial model projecting $2M ARR at 18 months", "Presented to board and investors"],
  },
  {
    id: "02",
    client: "Confidential — Healthcare Organization",
    industry: "Healthcare",
    practice: "Operational Modeling",
    description: "Built a multi-scenario financial model to support a regional healthcare provider's expansion planning. Analysis covered staffing, facility costs, and reimbursement projections.",
    outcomes: ["Modeled 4 expansion scenarios", "Reduced planning cycle time by 30%", "Model adopted for annual budgeting"],
  },
  {
    id: "03",
    client: "Confidential — Consumer Brand",
    industry: "Consumer Goods",
    practice: "Market Analysis",
    description: "Conducted a comprehensive competitive analysis and customer segmentation study for a DTC consumer brand preparing for a Series B raise.",
    outcomes: ["Surveyed 400+ target customers", "Identified 2 unaddressed segments worth $50M+", "Analysis included in investor materials"],
  },
  {
    id: "04",
    client: "Confidential — Fintech",
    industry: "Financial Services",
    practice: "Digital Strategy",
    description: "Defined a product roadmap and digital transformation strategy for an early-stage fintech. Included user research synthesis, feature prioritization framework, and 18-month milestone plan.",
    outcomes: ["Delivered 3-phase product roadmap", "Prioritized 12 features across 2 personas", "Roadmap adopted by founding team"],
  },
  {
    id: "05",
    client: "Confidential — Nonprofit",
    industry: "Nonprofit / Education",
    practice: "Process Automation",
    description: "Automated donor outreach and reporting workflows for a Baltimore-area nonprofit, reducing manual administrative hours significantly.",
    outcomes: ["Automated 6 recurring workflows", "Saved ~15 hrs/week of staff time", "Built custom dashboard for leadership"],
  },
  {
    id: "06",
    client: "Confidential — E-commerce",
    industry: "Retail / E-commerce",
    practice: "Data Analytics",
    description: "Designed and built a sales analytics dashboard giving leadership real-time visibility into product performance, customer LTV, and channel attribution.",
    outcomes: ["Integrated 4 data sources", "Reduced reporting time from days to minutes", "Dashboard used weekly by C-suite"],
  },
];

export default function PastProjects() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f7f5ef; }
        .project-row { padding: 40px 56px; border-bottom: 0.5px solid #d0cec4; transition: background 0.2s; display: grid; grid-template-columns: 80px 1fr 260px; gap: 40px; align-items: start; }
        .project-row:hover { background: #f0ede4; }
        @media (max-width: 900px) {
          .project-row { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
      <div style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#f7f5ef", color: "#1a1a18", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* PAGE HEADER */}
        <div style={{ backgroundColor: "#1a1a18", padding: "64px 56px 56px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6aac88", marginBottom: 16, fontWeight: 500 }}>Our work</p>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 48, color: "#f0ede4", fontWeight: 400, lineHeight: 1.1 }}>
            Past <em style={{ fontStyle: "italic", color: "#6aac88" }}>projects.</em>
          </h1>
          <p style={{ fontSize: 14, color: "#9a9a90", lineHeight: 1.8, maxWidth: 520, marginTop: 20 }}>
            A selection of recent engagements. Client details are kept confidential in line with our non-disclosure commitments.
          </p>
        </div>

        {/* STATS BAR */}
        <div style={{ backgroundColor: "#1a6e4a", padding: "28px 56px", display: "flex", gap: 64, flexWrap: "wrap" }}>
          {[
            { num: "25+", label: "Engagements completed" },
            { num: "6", label: "Industries served" },
            { num: "$1T+", label: "Combined client market cap" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: "#e8f5ef", fontWeight: 400, lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 11, color: "rgba(232,245,239,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* PROJECTS */}
        <div style={{ flex: 1 }}>
          {projects.map((p) => (
            <div key={p.id} className="project-row">
              <div style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.1em", fontWeight: 500, paddingTop: 4 }}>{p.id}</div>
              <div>
                <div style={{ display: "flex", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, backgroundColor: "#e8f0ec", color: "#1a6e4a", padding: "4px 10px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>{p.practice}</span>
                  <span style={{ fontSize: 11, backgroundColor: "#ede8e0", color: "#7a7a74", padding: "4px 10px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>{p.industry}</span>
                </div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: "#1a1a18", marginBottom: 10, fontWeight: 400 }}>{p.client}</div>
                <div style={{ fontSize: 14, color: "#7a7a74", lineHeight: 1.7 }}>{p.description}</div>
              </div>
              <div>
                <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 12 }}>Outcomes</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.outcomes.map((o) => (
                    <li key={o} style={{ fontSize: 13, color: "#5a5a54", lineHeight: 1.5, paddingLeft: 16, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#1a6e4a" }}>↳</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
}
