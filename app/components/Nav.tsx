"use client";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "About Us", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Past Projects", href: "/past-projects" },
  { label: "Placements", href: "/placements" },
  { label: "Work With Us", href: "/work-with-us" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 40px", backgroundColor: "#f7f5ef",
      borderBottom: "0.5px solid #d0cec4", position: "sticky", top: 0, zIndex: 100,
    }}>
      <a href="/" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 17, letterSpacing: "0.02em", textDecoration: "none", color: "#1a1a18" }}>
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
      <a href="/work-with-us" style={{
        fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500,
        backgroundColor: "#1a6e4a", color: "#e8f5ef", padding: "10px 20px", textDecoration: "none",
      }}>Work with us</a>
    </nav>
  );
}
