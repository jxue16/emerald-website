"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const companies = [
  // `logo` overrides the favicon fallback with a local, full-resolution wordmark.
  { name: "AstraZeneca", domain: "astrazeneca.com", logo: "/logos/astrazeneca.svg" },
  { name: "Bain & Company", domain: "bain.com" },
  { name: "Boston Consulting Group", domain: "bcg.com" },
  { name: "Deloitte", domain: "deloitte.com" },
  { name: "Booz Allen Hamilton", domain: "boozallen.com" },
  { name: "JPMorgan Chase", domain: "jpmorganchase.com" },
  { name: "Oliver Wyman", domain: "oliverwyman.com" },
  { name: "Accenture", domain: "accenture.com" },
  { name: "PwC Strategy&", domain: "pwc.com" },
  { name: "Morgan Stanley", domain: "morganstanley.com" },
  { name: "Google", domain: "google.com" },
  { name: "Kearney", domain: "kearney.com" },
  { name: "EY-Parthenon", domain: "ey.com" },
  { name: "ING", domain: "ing.com" },
  { name: "Mastercard", domain: "mastercard.com" },
];

const alumniClasses = [
  { year: "2026", names: ["Ahmad Tabbara", "Travis Chen", "Kevin Lu", "Jonathan Lai"] },
  { year: "2025", names: ["Aryan Anand", "Riddhi Bharj", "Jingxing Zou", "Katie Liang", "Shantanu Misra", "Zayeed Akhter", "Shiraj Chowdhury", "Dhruv Mahajan", "Yagmur Ozturk", "Dhruv Dubey", "Aashna Iragamreddy"] },
  { year: "2024", names: ["Adit Bajaj", "Jaeyoon Wang"] },
];

function LogoCell({ name, domain, logo }: { name: string; domain: string; logo?: string }) {
  return (
    <div className="logo-cell">
      <img
        className={logo ? "wordmark" : undefined}
        src={logo ?? `https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
        alt={name}
        ref={(img) => { if (img && img.complete && img.naturalWidth === 0) img.style.display = "none"; }}
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
      />
      <span>{name}</span>
    </div>
  );
}

export default function Placements() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f7f5ef; }

        .plc { font-family: 'DM Sans', sans-serif; color: #2a2925; min-height: 100vh; display: flex; flex-direction: column; background: #f7f5ef; }
        .eyebrow { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #1a6e4a; font-weight: 500; }
        .display { font-family: 'DM Serif Display', serif; font-weight: 400; color: #2a2925; line-height: 1.06; }
        .display em { font-style: italic; color: #1a6e4a; }

        /* paper grain */
        .grain { position: absolute; inset: 0; z-index: 4; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
        .grain-light { mix-blend-mode: multiply; opacity: 0.05; }
        .grain-dark { mix-blend-mode: overlay; opacity: 0.10; }

        /* ── HERO (softened dark, for contrast) ─── */
        .plc-hero {
          position: relative; overflow: hidden; flex: 0 0 auto;
          padding: 92px var(--pad-x) 88px; color: #f0ede4;
          background:
            radial-gradient(120% 135% at -5% -10%, rgba(38,140,94,0.38) 0%, rgba(38,140,94,0) 52%),
            radial-gradient(115% 130% at 105% 112%, rgba(10,44,30,0.78) 0%, rgba(10,44,30,0) 62%),
            linear-gradient(145deg, #34352e 0%, #2a2925 46%, #1d1c1a 100%);
        }
        .plc-hero::before {
          content: ""; position: absolute; top: -30%; left: -8%; width: 72%; height: 130%; z-index: 0;
          background: radial-gradient(circle at 40% 42%, rgba(96,196,144,0.22) 0%, transparent 60%);
          pointer-events: none;
        }
        .plc-hero-inner { position: relative; z-index: 1; }
        .plc-hero .eyebrow { color: #6aac88; }
        .plc-hero .display { font-size: clamp(36px, 9.5vw, 56px); color: #f0ede4; margin: 18px 0 22px; }
        .plc-hero .display em { color: #6aac88; }
        .plc-hero .lede { font-size: 14.5px; color: #a9a79c; line-height: 1.8; max-width: 520px; }
        .plc-hero .hero-meta { display: flex; align-items: center; gap: 12px; margin-top: 26px; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(240,237,228,0.45); font-weight: 500; }
        .plc-hero .hero-meta .rule { width: 34px; height: 0.5px; background: #6aac88; opacity: 0.75; }

        /* ── FIRMS (logo wall) ────────────────── */
        .firms { position: relative; overflow: hidden; flex: 0 0 auto; padding: 74px var(--pad-x) 90px; background: #f2f0e9; border-top: 0.5px solid #d9d6cc; border-bottom: 0.5px solid #d9d6cc; }
        .firms .eyebrow { position: relative; z-index: 1; margin-bottom: 42px; }
        .logo-wall { position: relative; z-index: 1; display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
        .logo-cell {
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px;
          min-height: 120px; padding: 26px 18px; border-radius: 4px;
          background: linear-gradient(180deg, #ffffff 0%, #faf8f3 100%);
          border: 0.5px solid #e4e1d8;
          box-shadow: 0 1px 1px rgba(40,40,36,0.03), 0 10px 22px -18px rgba(40,40,36,0.18);
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .logo-cell:hover { transform: translateY(-3px); box-shadow: 0 1px 1px rgba(40,40,36,0.04), 0 22px 36px -18px rgba(40,40,36,0.30); border-color: #d3cfc4; }
        .logo-cell img { height: 30px; width: auto; max-width: 76%; object-fit: contain; filter: opacity(0.85); transition: filter .25s ease, transform .25s ease; }
        .logo-cell:hover img { filter: opacity(1); transform: scale(1.06); }
        /* wide wordmarks read better a touch shorter and wider than square favicons */
        .logo-cell img.wordmark { height: 22px; max-width: 88%; }
        .logo-cell span { font-size: 12px; color: #6a6a62; font-weight: 500; text-align: center; line-height: 1.3; }

        /* ── ALUMNI ───────────────────────────── */
        .alumni { position: relative; overflow: hidden; flex: 1 0 auto; padding: 78px var(--pad-x) 98px; background: #f7f5ef; }
        .alumni-head { position: relative; z-index: 1; }
        .alumni .display { font-size: clamp(26px, 7vw, 34px); margin-top: 14px; }
        .alumni-sub { font-size: 13.5px; color: #8a8a82; margin-top: 12px; max-width: 460px; line-height: 1.7; }
        .alumni-list { position: relative; z-index: 1; margin-top: 48px; display: flex; flex-direction: column; gap: 16px; }
        .alumni-row {
          display: grid; grid-template-columns: 170px 1fr; gap: 32px; align-items: center;
          padding: 34px 40px;
          background: linear-gradient(180deg, #fffefb 0%, #faf8f2 100%);
          box-shadow: var(--shadow-soft);
        }
        .alumni-year {
          font-family: 'DM Serif Display', serif; font-size: 52px; line-height: 0.85;
          background: linear-gradient(135deg, #1a6e4a, #6aac88);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .alumni-year small { display: block; font-family: 'DM Sans', sans-serif; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #b7b3a7; font-weight: 500; margin-bottom: 10px; -webkit-text-fill-color: #b7b3a7; }
        .alumni-names { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px 28px; align-content: start; }
        .alumni-name { display: flex; align-items: center; gap: 12px; padding: 8px 0; }
        .alumni-avatar {
          width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: 'DM Sans', sans-serif; font-size: 10.5px; font-weight: 600; letter-spacing: 0.02em;
          color: #1a6e4a; background: linear-gradient(135deg, rgba(26,110,74,0.14), rgba(106,172,136,0.24));
          box-shadow: inset 0 0 0 0.5px rgba(26,110,74,0.18);
        }
        .alumni-name-text { font-family: 'DM Serif Display', serif; font-size: 16px; color: #2c2c28; }

        @media (max-width: 960px) { .logo-wall { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 860px) {
          .alumni-row { grid-template-columns: 1fr; gap: 18px; padding: 28px; }
          .alumni-year { font-size: 38px; }
          .alumni-names { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 620px) {
          .plc-hero { padding: 58px var(--pad-x) 54px; }
          .firms { padding: 52px var(--pad-x) 60px; }
          .alumni { padding: 54px var(--pad-x) 64px; }
          .logo-wall { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .logo-cell { min-height: 104px; padding: 20px 12px; gap: 12px; }
          .logo-cell img { height: 26px; }
          .logo-cell img.wordmark { height: 19px; }
          .alumni-row { padding: 24px 20px; gap: 14px; }
          /* Two short columns of names beat one very long single column. */
          .alumni-names { grid-template-columns: repeat(2, 1fr); gap: 4px 12px; }
          .alumni-name { gap: 9px; padding: 6px 0; }
          .alumni-avatar { width: 26px; height: 26px; font-size: 9.5px; }
          .alumni-name-text { font-size: 14px; }
        }
        @media (max-width: 380px) {
          .alumni-names { grid-template-columns: 1fr; }
        }
        @media (hover: none) {
          .logo-cell:hover { transform: none; }
          .logo-cell:hover img { transform: none; }
        }
      `}</style>

      <div className="plc">
        <Nav />

        {/* HERO */}
        <header className="plc-hero">
          <div className="grain grain-dark" />
          <div className="plc-hero-inner">
            <p className="eyebrow">Where we go</p>
            <h1 className="display">Alumni <em>placements.</em></h1>
            <p className="lede">
              Our alumni go on to careers at the world&apos;s top consulting firms, investment
              banks, and technology companies.
            </p>
            <div className="hero-meta">
              <span className="rule" />
              Johns Hopkins University · Since 2022
            </div>
          </div>
        </header>

        {/* FIRMS — logo wall */}
        <section className="firms">
          <div className="grain grain-light" />
          <p className="eyebrow">Where our alumni work</p>
          <div className="logo-wall">
            {companies.map((c) => <LogoCell key={c.name} {...c} />)}
          </div>
        </section>

        {/* ALUMNI */}
        <section className="alumni">
          <div className="grain grain-light" />
          <div className="alumni-head">
            <p className="eyebrow">The network</p>
            <h2 className="display">Our <em>alumni.</em></h2>
            <p className="alumni-sub">
              The people who built Emerald, now across industry and academia.
            </p>
          </div>

          <div className="alumni-list">
            {alumniClasses.map((cls) => (
              <div className="alumni-row" key={cls.year}>
                <div className="alumni-year">
                  <small>Class of</small>
                  {cls.year}
                </div>
                <div className="alumni-names">
                  {cls.names.map((n, i) => (
                    <span className="alumni-name" key={i}>
                      <span className="alumni-avatar" aria-hidden="true">
                        {n.split(" ").map((part) => part[0]).slice(0, 2).join("")}
                      </span>
                      <span className="alumni-name-text">{n}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
