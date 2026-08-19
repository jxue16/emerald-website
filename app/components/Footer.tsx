export default function Footer() {
  return (
    <footer style={{ background: "radial-gradient(85% 240% at 100% 0%, rgba(34,140,92,0.26) 0%, transparent 60%), linear-gradient(180deg, #2c2b25 0%, #201f1c 68%, #191815 100%)", padding: "28px 40px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 15, color: "#6a6a64" }}>
          <span style={{ color: "#1a6e4a" }}>Emerald</span> Consulting Group
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/company/emerald-consulting-group-jhu" },
            { label: "Instagram", href: "https://www.instagram.com/emerald.jhu/" },
            { label: "Apply", href: "/work-with-us" },
          ].map((l) => (
            <a key={l.label} href={l.href} className="footer-link" style={{
              fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#d5d2c8", textDecoration: "none", fontWeight: 500,
            }}>{l.label}</a>
          ))}
        </div>
        <div style={{ fontSize: 11, color: "#3a3a38", letterSpacing: "0.05em" }}>
          © {new Date().getFullYear()} Emerald Consulting Group · Johns Hopkins University
        </div>
      </div>
    </footer>
  );
}
