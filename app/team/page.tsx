"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const boardOfDirectors = [
  { name: "Name", role: "Director", initials: "-", linkedin: "https://linkedin.com" },
  { name: "Name", role: "Director", initials: "—", linkedin: "https://linkedin.com" },
  { name: "Name", role: "Director", initials: "—", linkedin: "https://linkedin.com" },
  { name: "Name", role: "Director", initials: "—", linkedin: "https://linkedin.com" },
];

const advisoryBoard = [
  { name: "Name", role: "Advisor", initials: "—", linkedin: "https://linkedin.com" },
  { name: "Name", role: "Advisor", initials: "—", linkedin: "https://linkedin.com" },
  { name: "Name", role: "Advisor", initials: "—", linkedin: "https://linkedin.com" },
  { name: "Name", role: "Advisor", initials: "—", linkedin: "https://linkedin.com" },
];

const managingPartners = [
  { name: "Name", role: "Managing Partner", initials: "—", linkedin: "https://linkedin.com" },
  { name: "Name", role: "Managing Partner", initials: "—", linkedin: "https://linkedin.com" },
  { name: "Name", role: "Managing Partner", initials: "—", linkedin: "https://linkedin.com" },
  { name: "Name", role: "Managing Partner", initials: "—", linkedin: "https://linkedin.com" },
];

const projectLeads = [
  { name: "Name", role: "Project Lead", initials: "—", linkedin: "https://linkedin.com" },
  { name: "Name", role: "Project Lead", initials: "—", linkedin: "https://linkedin.com" },
  { name: "Name", role: "Project Lead", initials: "—", linkedin: "https://linkedin.com" },
  { name: "Name", role: "Project Lead", initials: "—", linkedin: "https://linkedin.com" },
];

const consultants = [
  { name: "Name", role: "Consultant", initials: "—", linkedin: "https://linkedin.com" },
  { name: "Name", role: "Consultant", initials: "—", linkedin: "https://linkedin.com" },
  { name: "Name", role: "Consultant", initials: "—", linkedin: "https://linkedin.com" },
  { name: "Name", role: "Consultant", initials: "—", linkedin: "https://linkedin.com" },
];

// Alumni — no photos, just name + year + linkedin
const alumni = [
  { name: "Name", year: "2024", linkedin: "https://linkedin.com" },
  { name: "Name", year: "2024", linkedin: "https://linkedin.com" },
  { name: "Name", year: "2024", linkedin: "https://linkedin.com" },
  { name: "Name", year: "2023", linkedin: "https://linkedin.com" },
  { name: "Name", year: "2023", linkedin: "https://linkedin.com" },
  { name: "Name", year: "2023", linkedin: "https://linkedin.com" },
  { name: "Name", year: "2022", linkedin: "https://linkedin.com" },
  { name: "Name", year: "2022", linkedin: "https://linkedin.com" },
];

function MemberCard({ name, role, linkedin }: { name: string; role: string; initials: string; linkedin: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Photo placeholder — replace with <img src="/team/filename.jpg"> when ready */}
      <div style={{
        width: "100%", aspectRatio: "3/4", backgroundColor: "#e8e6df",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 16, border: "0.5px solid #d0cec4",
      }}>
        <span style={{ fontSize: 13, color: "#aaa8a0", letterSpacing: "0.05em", fontFamily: "'DM Sans', sans-serif" }}>
          Photo
        </span>
      </div>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontFamily: "'DM Serif Display', serif", fontSize: 17, color: "#1a1a18", marginBottom: 4, fontWeight: 400, textDecoration: "none", borderBottom: "0.5px solid transparent", transition: "border-color 0.2s, color 0.2s" }}
        onMouseEnter={e => { (e.target as HTMLElement).style.color = "#1a6e4a"; (e.target as HTMLElement).style.borderBottomColor = "#1a6e4a"; }}
        onMouseLeave={e => { (e.target as HTMLElement).style.color = "#1a1a18"; (e.target as HTMLElement).style.borderBottomColor = "transparent"; }}
      >
        {name}
      </a>
      <div style={{ fontSize: 12, color: "#9a9a90", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 500 }}>{role}</div>
    </div>
  );
}

function Section({ title, members, borderBottom = true }: { title: string; members: typeof boardOfDirectors; borderBottom?: boolean }) {
  return (
    <div style={{ padding: "64px 56px", borderBottom: borderBottom ? "0.5px solid #d0cec4" : "none" }}>
      <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 40 }}>{title}</p>
      <div className="member-grid">
        {members.map((m, i) => <MemberCard key={i} {...m} />)}
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f7f5ef; }

        .member-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }

        .alumni-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border: 0.5px solid #d0cec4; }
        .alumni-cell { padding: 20px 24px; border-bottom: 0.5px solid #d0cec4; border-right: 0.5px solid #d0cec4; }
        .alumni-cell:nth-child(4n) { border-right: none; }
        .alumni-name { font-family: 'DM Serif Display', serif; font-size: 16px; color: #1a1a18; font-weight: 400; text-decoration: none; transition: color 0.2s; display: block; margin-bottom: 4px; }
        .alumni-name:hover { color: #1a6e4a; }
        .alumni-year { font-size: 11px; color: #aaa8a0; letter-spacing: 0.08em; font-weight: 500; }

        @media (max-width: 900px) {
          .member-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .alumni-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .alumni-cell:nth-child(4n) { border-right: 0.5px solid #d0cec4; }
          .alumni-cell:nth-child(2n) { border-right: none !important; }
        }
        @media (max-width: 500px) {
          .member-grid { grid-template-columns: 1fr !important; }
          .alumni-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#f7f5ef", color: "#1a1a18", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* PAGE HEADER */}
        <div style={{ backgroundColor: "#1a1a18", padding: "64px 56px 56px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6aac88", marginBottom: 16, fontWeight: 500 }}>The people</p>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 48, color: "#f0ede4", fontWeight: 400, lineHeight: 1.1 }}>
            Our <em style={{ fontStyle: "italic", color: "#6aac88" }}>team.</em>
          </h1>
        </div>

        <Section title="Board of Directors" members={boardOfDirectors} />
        <Section title="Advisory Board" members={advisoryBoard} />
        <Section title="Managing Partners" members={managingPartners} />
        <Section title="Project Leads" members={projectLeads} />
        <Section title="Consultants" members={consultants} borderBottom={true} />

        {/* ALUMNI */}
        <div style={{ padding: "64px 56px", borderBottom: "0.5px solid #d0cec4" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 40 }}>Alumni</p>
          <div className="alumni-grid">
            {alumni.map((a, i) => (
              <div key={i} className="alumni-cell">
                <a href={a.linkedin} target="_blank" rel="noopener noreferrer" className="alumni-name">{a.name}</a>
                <span className="alumni-year">{a.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* JOIN CTA */}
        <div style={{ backgroundColor: "#1a1a18", padding: "56px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(232,245,239,0.5)", fontWeight: 500, marginBottom: 10 }}>Join us</p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 30, color: "#f0ede4", fontWeight: 400 }}>Interested in joining Emerald?</h2>
          </div>
          <a href="/work-with-us" style={{ backgroundColor: "#1a6e4a", color: "#e8f5ef", padding: "14px 32px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none" }}>
            Apply now →
          </a>
        </div>

        <Footer />
      </div>
    </>
  );
}
