"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const placements = [
  { name: "Alumni Name", firm: "McKinsey & Company", role: "Business Analyst", year: "2024" },
  { name: "Alumni Name", firm: "Bain & Company", role: "Associate Consultant", year: "2024" },
  { name: "Alumni Name", firm: "Bain & Company", role: "Associate Consultant", year: "2024" },
  { name: "Alumni Name", firm: "Boston Consulting Group", role: "Associate", year: "2024" },
  { name: "Alumni Name", firm: "Boston Consulting Group", role: "Associate", year: "2024" },
  { name: "Alumni Name", firm: "Deloitte Consulting", role: "Analyst", year: "2024" },
  { name: "Alumni Name", firm: "Goldman Sachs", role: "Analyst, Strategy", year: "2023" },
  { name: "Alumni Name", firm: "Amazon", role: "Product Manager", year: "2023" },
];

export default function Placements() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f7f5ef; }
        .placement-row { display: flex; align-items: center; justify-content: space-between; padding: 20px 0; border-bottom: 0.5px solid #e0ddd6; gap: 16px; }
        .form-input { display: block; width: 100%; background: white; border: 0.5px solid #d0cec4; padding: 13px 15px; font-size: 13px; font-family: 'DM Sans', sans-serif; color: #1a1a18; margin-bottom: 12px; outline: none; appearance: none; }
        .form-input:focus { border-color: #1a6e4a; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
      <div style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#f7f5ef", color: "#1a1a18", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* PAGE HEADER */}
        <div style={{ backgroundColor: "#1a1a18", padding: "64px 56px 56px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6aac88", marginBottom: 16, fontWeight: 500 }}>Where we go</p>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 48, color: "#f0ede4", fontWeight: 400, lineHeight: 1.1 }}>
            Alumni <em style={{ fontStyle: "italic", color: "#6aac88" }}>placements.</em>
          </h1>
          <p style={{ fontSize: 14, color: "#9a9a90", lineHeight: 1.8, maxWidth: 520, marginTop: 20 }}>
            Our alumni go on to careers at the world&apos;s top consulting firms, investment banks, and technology companies.
          </p>
        </div>

        {/* PLACEMENTS TABLE */}
        <div style={{ padding: "64px 56px", borderBottom: "0.5px solid #d0cec4" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 32 }}>Recent placements</p>
          <div>
            {placements.map((p, i) => (
              <div key={i} className="placement-row">
                <div style={{ minWidth: 180 }}>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 17, color: "#1a1a18", fontWeight: 400 }}>{p.name}</div>
                </div>
                <div style={{ minWidth: 220 }}>
                  <div style={{ fontSize: 13, color: "#7a7a74" }}>{p.firm}</div>
                </div>
                <div style={{ minWidth: 180 }}>
                  <div style={{ fontSize: 13, color: "#7a7a74" }}>{p.role}</div>
                </div>
                <div style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.08em", fontWeight: 500 }}>{p.year}</div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
