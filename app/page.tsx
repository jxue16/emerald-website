"use client";
import { useEffect, useRef } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const tickerItems = [
  "Growth & Go-to-Market",
  "Financial Modeling",
  "Market Analysis",
  "Data Analytics",
  "Product Strategy",
  "Process Automation",
];

export default function Home() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;
    let pos = 0;
    const speed = 0.5;
    let raf: number;
    const tick = () => {
      pos -= speed;
      const half = el.scrollWidth / 2;
      if (Math.abs(pos) >= half) pos = 0;
      el.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { height: 100%; background: #f7f5ef; }

        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; min-height: calc(100vh - 57px - 48px - 14px); }
        .ticker-wrap { overflow: hidden; background: #0f3d28; padding: 14px 0 28px; cursor: pointer; }
        .ticker-track { display: flex; width: max-content; }
        .ticker-item { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #6aac88; white-space: nowrap; font-weight: 500; padding: 0 36px; font-family: 'DM Sans', sans-serif; }
        .ticker-item::before { content: '◆'; color: #2a6e46; margin-right: 16px; }
        .ticker-wrap:hover .ticker-item { color: #8fcca8; }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; min-height: unset; }
        }
      `}</style>

      <div style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#f7f5ef", color: "#1a1a18", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* HERO */}
        <section className="hero-grid" style={{ flex: 1 }}>

          {/* LEFT */}
          <div style={{ backgroundColor: "#1a1a18", padding: "48px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6aac88", marginBottom: 28, fontWeight: 500 }}>
              Johns Hopkins University · Est. 2022
            </p>
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 52, lineHeight: 1.08, color: "#f0ede4", marginBottom: 28, fontWeight: 400 }}>
              Strategy consulting,{" "}
              <em style={{ fontStyle: "italic", color: "#6aac88" }}>student-led.</em>
              <br />MBB-backed.
            </h1>
            <p style={{ fontSize: 15, color: "#9a9a90", lineHeight: 1.8, maxWidth: 400, marginBottom: 44 }}>
              We partner with startups and Fortune 500 companies to deliver rigorous, data-driven strategy — developed by the next generation of top consultants.
            </p>
            <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <a href="/work-with-us" style={{ backgroundColor: "#1a6e4a", color: "#e8f5ef", padding: "14px 28px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none" }}>
                Work with us
              </a>
              <a href="/past-projects" style={{ backgroundColor: "transparent", color: "#9a9a90", border: "0.5px solid #444440", padding: "14px 28px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none" }}>
                View our work
              </a>
            </div>
          </div>

          {/* RIGHT — stats */}
          <div style={{ backgroundColor: "#1a6e4a", padding: "48px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {[
              { num: "25+", label: "Clients served" },
              { num: "$1T+", label: "Combined client market cap" },
              { num: "100%", label: "MBB-experienced leadership" },
            ].map((s) => (
              <div key={s.label} style={{ borderTop: "0.5px solid rgba(255,255,255,0.15)", padding: "28px 0" }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 54, color: "#e8f5ef", lineHeight: 1, marginBottom: 8, fontWeight: 400 }}>{s.num}</div>
                <div style={{ fontSize: 11, color: "rgba(232,245,239,0.55)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ROTATING TICKER — clicks to /practice-areas */}
        <div
          className="ticker-wrap"
          onClick={() => window.location.href = "/practice-areas"}
          title="View practice areas"
        >
          <div className="ticker-track" ref={tickerRef}>
            {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
              <span className="ticker-item" key={i}>{item}</span>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
