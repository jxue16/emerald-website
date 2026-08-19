"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function WorkWithUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f7f5ef; }
        .form-input {
          display: block; width: 100%; background: white; border: 0.5px solid #d0cec4; border-radius: var(--radius-sm);
          padding: 13px 15px; font-size: 13px; font-family: 'DM Sans', sans-serif; color: #2a2925; margin-bottom: 12px;
          outline: none; appearance: none; box-shadow: 0 1px 2px rgba(42,41,37,0.03);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .form-input:focus { border-color: #1a6e4a; box-shadow: 0 0 0 4px rgba(26,110,74,0.12), 0 1px 2px rgba(42,41,37,0.03); }
        .submit-btn {
          border-radius: var(--radius-sm);
          box-shadow: 0 1px 2px rgba(15,61,40,0.15), 0 14px 24px -12px rgba(15,61,40,0.5);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 2px 4px rgba(15,61,40,0.2), 0 20px 30px -12px rgba(15,61,40,0.55); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
      <div style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#f7f5ef", color: "#2a2925", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* PAGE HEADER */}
        <div style={{ background: "radial-gradient(120% 135% at -5% -10%, rgba(38,140,94,0.38) 0%, rgba(38,140,94,0) 52%), radial-gradient(115% 130% at 105% 112%, rgba(10,44,30,0.78) 0%, rgba(10,44,30,0) 62%), linear-gradient(145deg, #34352e 0%, #2a2925 46%, #1d1c1a 100%)", padding: "64px 56px 56px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6aac88", marginBottom: 16, fontWeight: 500 }}>Get in touch</p>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 48, color: "#f0ede4", fontWeight: 400, lineHeight: 1.1 }}>
            Contact <em style={{ fontStyle: "italic", color: "#6aac88" }}>us.</em>
          </h1>
          <p style={{ fontSize: 14, color: "#9a9a90", lineHeight: 1.8, maxWidth: 520, marginTop: 20 }}>
            Whether you&apos;re a company looking for strategic support or a student interested in joining, we&apos;d love to hear from you.
          </p>
        </div>

        {/* FORM */}
        <div style={{ padding: "64px 56px", flex: 1 }}>
          <div className="contact-grid">
            <div>
              <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 20 }}>Contact us</p>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: "#2a2925", lineHeight: 1.2, marginBottom: 20, fontWeight: 400 }}>
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
                <option value="" disabled>Type of inquiry</option>
                <option>Client engagement</option>
                <option>Join as a consultant</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>
              <textarea className="form-input" placeholder="Tell us about your project or challenge..." style={{ height: 110, resize: "none" }} />
              <button className="submit-btn" style={{ width: "100%", backgroundColor: "#1a6e4a", color: "#e8f5ef", border: "none", padding: "15px", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
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
