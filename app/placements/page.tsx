"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const placements = [
  { firm: "McKinsey & Company", role: "Business Analyst", year: "2024" },
  { firm: "Bain & Company", role: "Associate Consultant", year: "2024" },
  { firm: "Boston Consulting Group", role: "Associate", year: "2024" },
  { firm: "Deloitte Consulting", role: "Analyst", year: "2024" },
  { firm: "Goldman Sachs", role: "Analyst, Strategy", year: "2023" },
  { firm: "Amazon", role: "Product Manager", year: "2023" },
  { firm: "Oliver Wyman", role: "Analyst", year: "2023" },
  { firm: "Accenture Strategy", role: "Analyst", year: "2023" },
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
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: "#1a1a18", fontWeight: 400 }}>{p.firm}</div>
                <div style={{ fontSize: 13, color: "#7a7a74" }}>{p.role}</div>
                <div style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.08em", fontWeight: 500 }}>{p.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT FORM */}
        <div style={{ padding: "64px 56px" }}>
          <div className="contact-grid">
            <div>
              <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 20 }}>Work with us</p>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: "#1a1a18", lineHeight: 1.2, marginBottom: 20, fontWeight: 400 }}>
                Ready to work<br />together?
              </h2>
              <p style={{ fontSize: 14, color: "#7a7a74", lineHeight: 1.7, marginBottom: 32 }}>
                Tell us about your organization and the challenge you&apos;re facing. We&apos;ll follow up within 48 hours to discuss fit and next steps.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ color: "#1a6e4a", fontSize: 14 }}>📍</span>
                  <span style={{ fontSize: 13, color: "#7a7a74" }}>3301 N Charles St, Baltimore, MD 21218</span>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ color: "#1a6e4a", fontSize: 14 }}>✉</span>
                  <span style={{ fontSize: 13, color: "#7a7a74" }}>emeraldconsultinggroup.jhu@gmail.com</span>
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <input className="form-input" type="text" placeholder="First name" />
                <input className="form-input" type="text" placeholder="Last name" />
              </div>
              <input className="form-input" type="text" placeholder="Organization" />
              <input className="form-input" type="email" placeholder="Email address" />
              <select className="form-input">
                <option value="" disabled selected>Type of inquiry</option>
                <option>Client engagement</option>
                <option>Join as a consultant</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>
              <textarea className="form-input" placeholder="Tell us about your project or challenge..." style={{ height: 110, resize: "none" }} />
              <button style={{ width: "100%", backgroundColor: "#1a6e4a", color: "#e8f5ef", border: "none", padding: "15px", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                Submit inquiry
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
