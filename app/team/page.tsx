import Nav from "../components/Nav";
import Footer from "../components/Footer";

const leadership = [
  { name: "Name", role: "President", initials: "—" },
  { name: "Name", role: "Vice President", initials: "—" },
  { name: "Name", role: "Director of Consulting", initials: "—" },
  { name: "Name", role: "Director of Recruitment", initials: "—" },
];

const consultants = [
  { name: "Name", role: "Senior Consultant", initials: "—" },
  { name: "Name", role: "Senior Consultant", initials: "—" },
  { name: "Name", role: "Consultant", initials: "—" },
  { name: "Name", role: "Consultant", initials: "—" },
  { name: "Name", role: "Consultant", initials: "—" },
  { name: "Name", role: "Consultant", initials: "—" },
  { name: "Name", role: "Analyst", initials: "—" },
  { name: "Name", role: "Analyst", initials: "—" },
];

function MemberCard({ name, role, initials }: { name: string; role: string; initials: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Photo placeholder */}
      <div style={{
        width: "100%", aspectRatio: "3/4", backgroundColor: "#e8e6df",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 16, border: "0.5px solid #d0cec4",
      }}>
        <span style={{ fontSize: 13, color: "#aaa8a0", letterSpacing: "0.05em", fontFamily: "'DM Sans', sans-serif" }}>
          Photo
        </span>
      </div>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 17, color: "#1a1a18", marginBottom: 4, fontWeight: 400 }}>{name}</div>
      <div style={{ fontSize: 12, color: "#9a9a90", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 500 }}>{role}</div>
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
        .leadership-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
        .consultants-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
        @media (max-width: 900px) {
          .leadership-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .consultants-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .leadership-grid { grid-template-columns: 1fr !important; }
          .consultants-grid { grid-template-columns: 1fr !important; }
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

        {/* BOARD OF DIRECTORS */}
        <div style={{ padding: "64px 56px", borderBottom: "0.5px solid #d0cec4" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 40 }}>Board of Directors</p>
          <div className="leadership-grid">
            {leadership.map((m, i) => <MemberCard key={i} {...m} />)}
          </div>
        </div>

        {/* ADVISORY BOARD */}
        <div style={{ padding: "64px 56px", borderBottom: "0.5px solid #d0cec4" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 40 }}>Advisory Board</p>
          <div className="leadership-grid">
            {leadership.map((m, i) => <MemberCard key={i} {...m} />)}
          </div>
        </div>

        {/* MANAGING PARTNERS */}
        <div style={{ padding: "64px 56px", borderBottom: "0.5px solid #d0cec4" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 40 }}>Managing Partners</p>
          <div className="leadership-grid">
            {leadership.map((m, i) => <MemberCard key={i} {...m} />)}
          </div>
        </div>

        {/* PROJECT LEADS */}
        <div style={{ padding: "64px 56px", borderBottom: "0.5px solid #d0cec4" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 40 }}>Project Leads</p>
          <div className="leadership-grid">
            {leadership.map((m, i) => <MemberCard key={i} {...m} />)}
          </div>
        </div>

        {/* CONSULTANTS */}
        <div style={{ padding: "64px 56px", borderBottom: "0.5px solid #d0cec4" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 40 }}>Consultants</p>
          <div className="leadership-grid">
            {leadership.map((m, i) => <MemberCard key={i} {...m} />)}
          </div>
        </div>

        {/* ALUMNI */}
        <div style={{ padding: "64px 56px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 40 }}>Alumni</p>
          <div className="consultants-grid">
            {consultants.map((m, i) => <MemberCard key={i} {...m} />)}
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
