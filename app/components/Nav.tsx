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
        .site-nav { padding: 18px 40px; }
        .nav-brand { font-size: 17px; }
        .nav-links { gap: 28px; }
        .nav-link { white-space: nowrap; }
        .nav-cta {
          font-size: 11px; padding: 10px 20px;
          border-radius: var(--radius-sm);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 1px 2px rgba(15,61,40,0.12), 0 8px 16px -10px rgba(15,61,40,0.4);
        }
        .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 2px 4px rgba(15,61,40,0.16), 0 12px 20px -10px rgba(15,61,40,0.48); }

        /* Below ~768px the brand, five links, and CTA no longer fit one row.
           Brand and CTA share the top row; links move to their own row and
           scroll sideways rather than wrapping into a ragged block. */
        @media (max-width: 768px) {
          .site-nav { padding: 12px 18px; flex-wrap: wrap; row-gap: 10px; }
          .nav-brand { font-size: 15px; }
          .nav-links {
            order: 3; width: 100%; gap: 20px;
            overflow-x: auto; -webkit-overflow-scrolling: touch;
            scrollbar-width: none; padding-bottom: 2px;
          }
          .nav-links::-webkit-scrollbar { display: none; }
          .nav-cta { font-size: 10px; padding: 9px 16px; }
        }
        @media (max-width: 380px) {
          .site-nav { padding: 10px 14px; }
          .nav-brand { font-size: 13px; }
          .nav-links { gap: 16px; }
        }
      `}</style>
      <nav className="site-nav" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        backgroundColor: "#f7f5ef",
        boxShadow: "0 1px 0 rgba(208,206,196,0.7), 0 10px 24px -20px rgba(42,41,37,0.35)",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <a href="/" className="nav-brand" style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "0.02em", textDecoration: "none", color: "#2a2925" }}>
          <span style={{ color: "#1a6e4a" }}>Emerald</span> Consulting Group
        </a>
        <ul className="nav-links" style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link" style={{
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
          letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500,
          backgroundColor: "#1a6e4a", color: "#e8f5ef", textDecoration: "none",
        }}>Contact us</a>
      </nav>
    </>
  );
}
