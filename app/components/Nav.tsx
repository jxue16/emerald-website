"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Past Projects", href: "/past-projects" },
  { label: "About Us", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Placements", href: "/placements" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer if the viewport grows back to the desktop layout, so the
  // panel can't be left hanging open behind the inline links.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 821px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    // Lock the page behind the drawer so a stray drag doesn't scroll the
    // content out from under the menu.
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <style>{`
        .site-nav { padding: 18px var(--pad-x); }
        .nav-brand { font-size: 17px; gap: 10px; min-width: 0; }
        .nav-brand span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .nav-mark { width: 26px; height: 26px; display: block; flex-shrink: 0; }
        .nav-links { gap: 28px; }
        .nav-link { white-space: nowrap; }
        .nav-cta {
          font-size: 11px; padding: 10px 20px;
          border-radius: var(--radius-sm);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 1px 2px rgba(15,61,40,0.12), 0 8px 16px -10px rgba(15,61,40,0.4);
        }
        .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 2px 4px rgba(15,61,40,0.16), 0 12px 20px -10px rgba(15,61,40,0.48); }

        /* The toggle and drawer only exist below the breakpoint. */
        .nav-toggle { display: none; }
        .nav-drawer { display: none; }
        .nav-scrim { display: none; }

        /* Below ~820px the brand, five links, and CTA no longer fit one row.
           Rather than cutting the link strip off mid-word, collapse it into a
           tap-friendly drawer behind a menu button. */
        @media (max-width: 820px) {
          .site-nav { padding: 9px var(--pad-x); }
          .nav-brand { font-size: 15px; gap: 8px; min-height: 44px; }
          .nav-mark { width: 22px; height: 22px; }
          .nav-links, .site-nav > .nav-cta { display: none !important; }

          .nav-toggle {
            display: flex; align-items: center; justify-content: center;
            width: 44px; height: 44px; margin-right: -10px; flex-shrink: 0;
            background: none; border: none; padding: 0; cursor: pointer;
            color: #2a2925; -webkit-tap-highlight-color: transparent;
          }
          .nav-toggle:focus-visible { outline: 2px solid #1a6e4a; outline-offset: -4px; border-radius: var(--radius-sm); }
          .nav-toggle .bars { position: relative; width: 20px; height: 14px; display: block; }
          .nav-toggle .bars i {
            position: absolute; left: 0; width: 100%; height: 1.5px; border-radius: 1px;
            background: currentColor; transition: transform 0.25s ease, opacity 0.2s ease;
          }
          .nav-toggle .bars i:nth-child(1) { top: 0; }
          .nav-toggle .bars i:nth-child(2) { top: 6.25px; }
          .nav-toggle .bars i:nth-child(3) { top: 12.5px; }
          .nav-toggle[aria-expanded="true"] .bars i:nth-child(1) { transform: translateY(6.25px) rotate(45deg); }
          .nav-toggle[aria-expanded="true"] .bars i:nth-child(2) { opacity: 0; }
          .nav-toggle[aria-expanded="true"] .bars i:nth-child(3) { transform: translateY(-6.25px) rotate(-45deg); }

          /* Sits behind the nav (z 100) rather than being offset by --nav-h, so
             the bar stays crisp no matter what the header actually measures. */
          .nav-scrim {
            display: block; position: fixed; inset: 0; z-index: 90;
            background: rgba(30,29,26,0.42); border: none; padding: 0; margin: 0;
            animation: nav-fade 0.2s ease;
          }
          @keyframes nav-fade { from { opacity: 0; } to { opacity: 1; } }

          .nav-drawer {
            display: block; position: absolute; top: 100%; left: 0; right: 0; z-index: 95;
            background: #f7f5ef; padding: 6px var(--pad-x) 20px;
            box-shadow: 0 18px 30px -18px rgba(42,41,37,0.5);
            border-top: 0.5px solid #e2dfd5;
            animation: nav-drop 0.22s ease;
          }
          @keyframes nav-drop { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
          .nav-drawer ul { list-style: none; margin: 0; padding: 0; }
          .nav-drawer .nav-link {
            display: flex; align-items: center; min-height: 48px;
            font-size: 13px; border-bottom: none !important; padding-bottom: 0;
            border-top: 0.5px solid #e6e3d9;
          }
          .nav-drawer li:first-child .nav-link { border-top: none; }
          .nav-drawer .nav-link[aria-current="page"] { color: #1a6e4a; }
          .nav-drawer .nav-cta {
            display: block; margin-top: 14px; text-align: center;
            font-size: 12px; padding: 15px 20px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .nav-toggle .bars i, .nav-scrim, .nav-drawer { animation: none; transition: none; }
        }
      `}</style>
      <nav className="site-nav" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
        backgroundColor: "#f7f5ef",
        boxShadow: "0 1px 0 rgba(208,206,196,0.7), 0 10px 24px -20px rgba(42,41,37,0.35)",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <a href="/" className="nav-brand" style={{
          display: "flex", alignItems: "center",
          fontFamily: "'DM Serif Display', serif", letterSpacing: "0.02em",
          textDecoration: "none", color: "#2a2925",
        }}>
          <img src="/emerald-mark.png" alt="" className="nav-mark" />
          <span><span style={{ color: "#1a6e4a" }}>Emerald</span> Consulting Group</span>
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

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-drawer"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="bars" aria-hidden="true"><i /><i /><i /></span>
        </button>

        {open && (
          <div id="nav-drawer" className="nav-drawer">
            <ul>
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="nav-link"
                    aria-current={pathname === l.href ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    style={{
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      fontWeight: 500, textDecoration: "none",
                      color: pathname === l.href ? "#1a6e4a" : "#5a5a54",
                    }}
                  >{l.label}</a>
                </li>
              ))}
            </ul>
            <a href="/work-with-us" className="nav-cta" onClick={() => setOpen(false)} style={{
              letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500,
              backgroundColor: "#1a6e4a", color: "#e8f5ef", textDecoration: "none",
            }}>Contact us</a>
          </div>
        )}
      </nav>
      {open && (
        <button
          type="button"
          className="nav-scrim"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
