export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0f0f0e", padding: "28px 40px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 15, color: "#6a6a64" }}>
          <span style={{ color: "#1a6e4a" }}>Emerald</span> Consulting Group
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {[
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Instagram", href: "https://instagram.com" },
            { label: "Apply", href: "/placements" },
          ].map((l) => (
            <a key={l.label} href={l.href} style={{
              fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#4a4a46", textDecoration: "none", fontWeight: 500,
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
