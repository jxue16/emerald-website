"use client";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Past Projects", href: "/past-projects" },
  { label: "About Us", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Placements", href: "/placements" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <>
      <style>{`
        .nav-cta {
          border-radius: var(--radius-sm);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 1px 2px rgba(15,61,40,0.12), 0 8px 16px -10px rgba(15,61,40,0.4);
        }
        .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 2px 4px rgba(15,61,40,0.16), 0 12px 20px -10px rgba(15,61,40,0.48); }
      `}</style>
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 40px", backgroundColor: "#f7f5ef",
        boxShadow: "0 1px 0 rgba(208,206,196,0.7), 0 10px 24px -20px rgba(42,41,37,0.35)",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <a href="/" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 17, letterSpacing: "0.02em", textDecoration: "none", color: "#2a2925" }}>
          <span style={{ color: "#1a6e4a" }}>Emerald</span> Consulting Group
        </a>
        <ul style={{ display: "flex", gap: 28, listStyle: "none", margin: 0, padding: 0 }}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} style={{
                fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
                fontWeight: 500, textDecoration: "none",
                color: pathname === l.href ? "#1a6e4a" : "#5a5a54",
                borderBottom: pathname === l.href ? "1px solid #1a6e4a" : "none",
                paddingBottom: 2,
              }}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="/work-with-us" className="nav-cta" style={{
          fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500,
          backgroundColor: "#1a6e4a", color: "#e8f5ef", padding: "10px 20px", textDecoration: "none",
        }}>Contact us</a>
      </nav>
    </>
  );
}
