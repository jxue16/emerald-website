"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useMemo, useState } from "react";

// Standardized tag vocabulary — every project draws from these lists only.
const PRACTICES = [
  "Market & Competitive Analysis",
  "Operational & Financial Modeling",
  "Digital & Product Strategy",
  "Data Analytics & Visualization",
  "Process Automation",
];

const SECTORS = [
  "Healthcare & Life Sciences",
  "Technology & AI",
  "Social Impact & Nonprofit",
  "Education",
  "Consumer & Sports",
];

const PAGE_SIZE = 6;

const projects = [
  {
    id: "01",
    client: "Healthcare AI Startup",
    term: "Spring 2026",
    practices: ["Digital & Product Strategy", "Market & Competitive Analysis"],
    sectors: ["Healthcare & Life Sciences", "Technology & AI"],
    description: "Shaped the go-to-market and product positioning for an early-stage healthcare AI venture, covering buyer segmentation across provider and payer channels, competitive landscape mapping, and a phased rollout plan.",
    outcomes: ["Mapped the competitive AI landscape", "Defined priority buyer segments", "Delivered a phased launch roadmap"],
  },
  {
    id: "02",
    client: "Federally Qualified Health Center",
    term: "Spring 2026",
    practices: ["Operational & Financial Modeling"],
    sectors: ["Healthcare & Life Sciences", "Social Impact & Nonprofit"],
    description: "Supported a 501(c)(3) community health center with capacity and staffing analysis across its clinic network, modeling patient volume, provider utilization, and reimbursement mix.",
    outcomes: ["Modeled multi-site capacity scenarios", "Identified scheduling bottlenecks", "Model handed off for annual planning"],
  },
  {
    id: "03",
    client: "Healthcare Technology Company",
    term: "Fall 2025",
    practices: ["Market & Competitive Analysis"],
    sectors: ["Healthcare & Life Sciences", "Technology & AI"],
    description: "Assessed expansion opportunities for a remote patient monitoring company, sizing adjacent care settings and benchmarking the reimbursement and regulatory pathway for each.",
    outcomes: ["Sized three adjacent care settings", "Benchmarked reimbursement pathways", "Recommended a lead market to pursue"],
  },
  {
    id: "04",
    client: "Social Impact Organization",
    term: "Fall 2025",
    practices: ["Market & Competitive Analysis"],
    sectors: ["Social Impact & Nonprofit"],
    description: "Built a partnership and community-growth strategy for a mission-driven organization, including stakeholder mapping, an outreach playbook, and a framework for measuring program reach.",
    outcomes: ["Built a prioritized partnership pipeline", "Delivered an outreach playbook", "Defined impact measurement metrics"],
  },
  {
    id: "05",
    client: "Sports Technology Startup",
    term: "Fall 2025",
    practices: ["Digital & Product Strategy"],
    sectors: ["Consumer & Sports", "Technology & AI"],
    description: "Advised a recreational-league platform on user acquisition and retention, synthesizing player research into a feature prioritization framework and a monetization model for league operators.",
    outcomes: ["Synthesized player and operator research", "Prioritized the near-term feature set", "Modeled monetization options"],
  },
  {
    id: "06",
    client: "Student-Founded Food & Beverage Venture",
    term: "Spring 2025",
    practices: ["Operational & Financial Modeling"],
    sectors: ["Consumer & Sports"],
    description: "Built a unit-economics and staffing model for a student-run retail food concept, covering menu margin, peak-hour throughput, and the break-even case for expanded hours.",
    outcomes: ["Modeled unit economics by menu item", "Right-sized peak-hour staffing", "Established a break-even case"],
  },
  {
    id: "07",
    client: "Legal Technology Startup",
    term: "Spring 2025",
    practices: ["Market & Competitive Analysis"],
    sectors: ["Technology & AI"],
    description: "Ran a competitive and customer-discovery study for a student-founded legal AI startup, testing willingness to pay across small-firm and in-house segments.",
    outcomes: ["Benchmarked competing legal AI tools", "Tested pricing across two segments", "Recommended an initial wedge market"],
  },
  {
    id: "08",
    client: "Music Education Nonprofit",
    term: "Spring 2025",
    practices: ["Process Automation"],
    sectors: ["Education", "Social Impact & Nonprofit"],
    description: "Automated enrollment, scheduling, and donor reporting workflows for a 501(c)(3) music education nonprofit running on manual spreadsheets.",
    outcomes: ["Automated recurring admin workflows", "Cut manual data entry substantially", "Built a leadership reporting dashboard"],
  },
  {
    id: "09",
    client: "Digital Health & Medical Device Software Program",
    term: "Fall 2024",
    practices: ["Data Analytics & Visualization"],
    sectors: ["Healthcare & Life Sciences", "Technology & AI"],
    description: "Analyzed wearable-derived patient data for a clinical digital health program, building visualizations that made adherence and event patterns legible to the research team.",
    outcomes: ["Standardized the analysis pipeline", "Surfaced adherence patterns in the cohort", "Delivered a reusable dashboard"],
  },
  {
    id: "10",
    client: "EdTech Company",
    term: "Fall 2024",
    practices: ["Digital & Product Strategy"],
    sectors: ["Education", "Technology & AI"],
    description: "Defined a product roadmap for an education management software platform, translating administrator interviews into a prioritized feature set and a staged release plan.",
    outcomes: ["Synthesized administrator interviews", "Prioritized features across two personas", "Delivered a staged release plan"],
  },
  {
    id: "11",
    client: "Surgical AI Company",
    term: "",
    practices: ["Market & Competitive Analysis"],
    sectors: ["Healthcare & Life Sciences", "Technology & AI"],
    description: "Sized the addressable market for an AI-assisted surgical platform and mapped the competitive and regulatory landscape ahead of a fundraising round.",
    outcomes: ["Sized the addressable market", "Mapped competitors and clearance paths", "Analysis used in investor materials"],
  },
  {
    id: "12",
    client: "Mental Health Telehealth Platform",
    term: "",
    practices: ["Market & Competitive Analysis", "Digital & Product Strategy"],
    sectors: ["Healthcare & Life Sciences", "Technology & AI"],
    description: "Developed an acquisition and retention strategy for a telehealth mental health service, including channel analysis and a segmentation of underserved patient populations.",
    outcomes: ["Evaluated acquisition channels", "Segmented underserved patient groups", "Recommended a retention playbook"],
  },
  {
    id: "13",
    client: "Sustainability & Waste Management Firm",
    term: "",
    practices: ["Operational & Financial Modeling"],
    sectors: ["Social Impact & Nonprofit"],
    description: "Modeled route and cost structures for a waste and recycling services company, quantifying the savings available from consolidation and diversion improvements.",
    outcomes: ["Modeled route-level cost structure", "Quantified diversion savings", "Prioritized operational fixes"],
  },
  {
    id: "14",
    client: "Biotech Therapeutics Company",
    term: "",
    practices: ["Market & Competitive Analysis"],
    sectors: ["Healthcare & Life Sciences"],
    description: "Conducted a therapeutic landscape review for a preclinical biotech, profiling competing programs and the commercial case for each candidate indication.",
    outcomes: ["Profiled competing programs", "Compared candidate indications", "Recommended a lead indication"],
  },
  {
    id: "15",
    client: "Community Health & Wellness Organization",
    term: "",
    practices: ["Market & Competitive Analysis"],
    sectors: ["Healthcare & Life Sciences", "Social Impact & Nonprofit"],
    description: "Built a community engagement and expansion plan for a wellness organization, grounded in local demographic analysis and partnership opportunity mapping.",
    outcomes: ["Analyzed local demographics", "Mapped partnership opportunities", "Delivered an expansion plan"],
  },
];

const TERMS = ["Spring 2026", "Fall 2025", "Spring 2025", "Fall 2024"];

export default function PastProjects() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [pageState, setPageState] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggle = (tag: string) => {
    setPageState(1);
    setSelected((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const tagsOf = (p: (typeof projects)[number]) => [...p.practices, ...p.sectors, ...(p.term ? [p.term] : [])];

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const tags = tagsOf(p);
      if (!selected.every((t) => tags.includes(t))) return false;
      if (!q) return true;
      return [p.client, p.description, ...tags, ...p.outcomes].join(" ").toLowerCase().includes(q);
    });
  }, [query, selected]);

  // A tag is offered only if some currently visible project carries it.
  const available = useMemo(() => new Set(visible.flatMap(tagsOf)), [visible]);

  const filtering = selected.length > 0 || query.trim() !== "";

  const pageCount = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const page = Math.min(pageState, pageCount);
  const shown = visible.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const goTo = (n: number) => {
    setPageState(Math.min(Math.max(1, n), pageCount));
    document.getElementById("project-filters")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f7f5ef; }
        .project-row { padding: 40px var(--pad-x); border-bottom: 0.5px solid #d0cec4; transition: background 0.2s; display: grid; grid-template-columns: 80px 1fr 260px; gap: 40px; align-items: start; }
        .project-row:hover { background: #f0ede4; }

        /* Featured project */
        .featured { position: relative; overflow: hidden; padding: 56px var(--pad-x); background: radial-gradient(90% 170% at 100% -10%, rgba(38,140,94,0.10) 0%, transparent 55%), linear-gradient(180deg, #faf9f3 0%, #f3f1e9 100%); border-bottom: 0.5px solid #d0cec4; }
        .featured-inner { position: relative; display: grid; grid-template-columns: 1.7fr 1fr; align-items: stretch; border: 0.5px solid #e0ddd4; border-radius: 7px; overflow: hidden; background: linear-gradient(180deg, #ffffff 0%, #faf8f2 100%); box-shadow: 0 1px 2px rgba(40,40,36,0.04), 0 34px 54px -32px rgba(40,40,36,0.34); }
        .featured-main { padding: 46px 44px; }
        .feat-eyebrow { display: inline-flex; align-items: center; gap: 9px; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #1a6e4a; font-weight: 500; margin-bottom: 18px; }
        .feat-eyebrow .dot { width: 6px; height: 6px; border-radius: 50%; background: #1a6e4a; box-shadow: 0 0 0 4px rgba(26,110,74,0.14); }
        .feat-title { font-family: 'DM Serif Display', serif; font-size: 34px; color: #2a2925; font-weight: 400; line-height: 1.12; display: flex; align-items: center; flex-wrap: wrap; gap: 12px; }
        .feat-title img { height: 30px; width: auto; }
        .feat-desc { font-size: 14.5px; color: #6f6f68; line-height: 1.85; margin-top: 20px; max-width: 540px; }
        .feat-meta { display: flex; gap: 34px; margin-top: 30px; flex-wrap: wrap; }
        .feat-meta .k { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: #a8a69c; font-weight: 500; }
        .feat-meta .v { font-family: 'DM Serif Display', serif; font-size: 16px; color: #2a2925; margin-top: 6px; }
        .featured-aside { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; padding: 40px; border-left: 0.5px solid #ece9e1; background: radial-gradient(120% 120% at 50% 25%, rgba(38,140,94,0.07) 0%, transparent 62%), #fcfbf6; }
        .featured-aside img { width: 132px; max-width: 100%; height: auto; }
        .feat-tag { font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #b0ada2; font-weight: 500; }

        /* Filter bar */
        .filters { padding: 32px var(--pad-x) 28px; border-bottom: 0.5px solid #d0cec4; background: #faf9f3; }
        .filter-top { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; flex-wrap: wrap; margin-bottom: 24px; }
        .filter-search { position: relative; flex: 1; min-width: 260px; max-width: 420px; }
        .filter-search input { width: 100%; font-family: inherit; font-size: 14px; color: #2a2925; background: transparent; border: none; border-bottom: 0.5px solid #c8c5ba; padding: 8px 8px 10px 24px; outline: none; transition: border-color 0.2s; }
        .filter-search input:focus { border-bottom-color: #1a6e4a; }
        .filter-search input::placeholder { color: #b0ada2; }
        .filter-search .icon { position: absolute; left: 2px; bottom: 12px; color: #b0ada2; pointer-events: none; }
        .filter-count { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #a8a69c; font-weight: 500; display: flex; align-items: center; gap: 14px; padding-bottom: 10px; }
        .filter-clear { font-family: inherit; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 500; color: #1a6e4a; background: none; border: none; padding: 0; cursor: pointer; text-decoration: underline; text-underline-offset: 3px; }
        /* Label sits in its own column so wrapped pills stay aligned with the first pill. */
        .filter-group { display: flex; align-items: baseline; gap: 16px; margin-top: 14px; }
        .filter-group > .label { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink); font-weight: 500; width: 78px; flex-shrink: 0; padding-top: 7px; opacity: 0.75; }
        .filter-group > .pills { display: flex; flex-wrap: wrap; gap: 10px; flex: 1; min-width: 0; }

        /* Tag groups stay collapsed until the user opens them. */
        .filter-toggle {
          font-family: inherit; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 500;
          color: #1a6e4a; background: none; border: none; padding: 0; cursor: pointer;
          display: inline-flex; align-items: center; gap: 7px;
        }
        .filter-toggle .chev { transition: transform 0.2s ease; }
        .filter-toggle[aria-expanded="true"] .chev { transform: rotate(180deg); }
        .filter-toggle .count { color: #a8a69c; letter-spacing: 0.06em; }
        /* 0fr -> 1fr lets the panel animate to its natural height without measuring it in JS. */
        .filter-panel { display: grid; grid-template-rows: minmax(0, 0fr); transition: grid-template-rows 0.34s cubic-bezier(0.4, 0, 0.2, 1); }
        .filter-panel.open { grid-template-rows: minmax(0, 1fr); }
        .filter-panel > .inner { overflow: hidden; min-height: 0; padding-top: 6px; opacity: 0; transform: translateY(-6px); transition: opacity 0.2s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .filter-panel.open > .inner { opacity: 1; transform: none; transition-delay: 0.06s; }
        @media (prefers-reduced-motion: reduce) {
          .filter-toggle .chev { transition: none; }
          .filter-panel, .filter-panel > .inner { transition: none; }
        }

        /* One colour per tag family: practice = emerald, sector = clay, term = stone. */
        .practice { --ink: #1a6e4a; --wash: #e4efe9; --wash-hi: #d3e6dc; }
        .sector   { --ink: #8a5b3a; --wash: #f2e7dd; --wash-hi: #e8d8c9; }
        .term     { --ink: #6f6f68; --wash: #eceae2; --wash-hi: #e0ddd2; }

        .pill { font-family: inherit; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 500; padding: 6px 13px; border-radius: 999px; border: 0.5px solid transparent; background: var(--wash); color: var(--ink); cursor: pointer; transition: all 0.15s; }
        .pill:hover { background: var(--wash-hi); }
        .pill.on { background: var(--ink); color: #faf9f3; box-shadow: 0 4px 10px -6px rgba(40,40,36,0.5); }
        .pill:disabled { opacity: 0.34; cursor: default; }
        .pill:disabled:hover { background: var(--wash); }

        /* Row tags share the family colours */
        .tag { font-family: inherit; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 500; padding: 5px 12px; border-radius: 999px; border: 0.5px solid transparent; background: var(--wash); color: var(--ink); cursor: pointer; transition: all 0.15s; }
        .tag:hover { background: var(--wash-hi); }

        /* Pagination */
        .pager { display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap; padding: 34px var(--pad-x) 44px; }
        .pager button { font-family: inherit; font-size: 12px; letter-spacing: 0.06em; font-weight: 500; min-width: 32px; height: 32px; padding: 0 10px; border-radius: 999px; border: 0.5px solid #d0cec4; background: transparent; color: #7a7a74; cursor: pointer; transition: all 0.15s; }
        .pager button:hover:not(:disabled) { border-color: #1a6e4a; color: #1a6e4a; }
        .pager button.on { background: #1a6e4a; border-color: #1a6e4a; color: #f0ede4; }
        .pager button:disabled { opacity: 0.3; cursor: default; }
        .pager .step { letter-spacing: 0.1em; text-transform: uppercase; font-size: 11px; }

        .stats-surface { position: relative; overflow: hidden; }
        .stats-surface::before {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 90% at 8% 0%, rgba(255,255,255,0.10), transparent 60%),
            radial-gradient(ellipse 70% 90% at 100% 130%, rgba(0,0,0,0.16), transparent 60%);
          pointer-events: none;
        }
        .stats-surface::after {
          content: ''; position: absolute; inset: 0; background-image: var(--grain-uri);
          opacity: 0.06; mix-blend-mode: overlay; pointer-events: none;
        }
        .stats-surface > * { position: relative; z-index: 1; }

        @media (max-width: 900px) {
          .project-row { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
        @media (max-width: 760px) {
          /* The label only stacks above the pills if the row is allowed to wrap;
             without this the 100%-wide label shoves .pills off-screen entirely. */
          .filter-group { flex-wrap: wrap; align-items: flex-start; gap: 8px; }
          .filter-group > .label { width: 100%; padding-top: 0; }
          .filter-group > .pills { flex: 1 1 100%; }
          .filter-top { gap: 14px; margin-bottom: 18px; }
          /* Give search the full row; the count + toggle wrap beneath it. */
          .filter-search { flex: 1 1 100%; max-width: none; min-width: 0; }
          /* <16px text makes iOS Safari zoom the page on focus and never zoom back. */
          .filter-search input { font-size: 16px; }
          .filter-count { padding-bottom: 0; flex-wrap: wrap; gap: 10px 14px; }
          .filter-toggle, .filter-clear { min-height: 44px; }
          .pill { padding: 9px 14px; }

          .featured { padding: 40px var(--pad-x); }
          .featured-inner { grid-template-columns: 1fr; }
          .featured-aside { border-left: none; border-top: 0.5px solid #ece9e1; flex-direction: row; padding: 26px; }
          .featured-aside img { width: 92px; }
          .featured-main { padding: 30px 24px; }
          .feat-title { font-size: 25px; gap: 9px; }
          .feat-title img { height: 24px; }
          .feat-desc { font-size: 14px; margin-top: 16px; }
          .feat-meta { gap: 20px; margin-top: 22px; }

          .project-row { padding: 30px var(--pad-x); }
          .tag { padding: 7px 12px; }
          .pager { padding: 26px var(--pad-x) 36px; }
        }
        @media (hover: none) {
          .logo-cell:hover, .project-row:hover { background: inherit; }
        }
      `}</style>
      <div style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#f7f5ef", color: "#2a2925", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* PAGE HEADER */}
        <div style={{ background: "radial-gradient(120% 135% at -5% -10%, rgba(38,140,94,0.38) 0%, rgba(38,140,94,0) 52%), radial-gradient(115% 130% at 105% 112%, rgba(10,44,30,0.78) 0%, rgba(10,44,30,0) 62%), linear-gradient(145deg, #34352e 0%, #2a2925 46%, #1d1c1a 100%)", padding: "64px var(--pad-x) 56px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6aac88", marginBottom: 16, fontWeight: 500 }}>Our work</p>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(34px, 9vw, 48px)", color: "#f0ede4", fontWeight: 400, lineHeight: 1.1 }}>
            Past <em style={{ fontStyle: "italic", color: "#6aac88" }}>projects.</em>
          </h1>
          <p style={{ fontSize: 14, color: "#9a9a90", lineHeight: 1.8, maxWidth: 520, marginTop: 20 }}>
            A selection of recent engagements. Client details are kept confidential in line with our non-disclosure commitments.
          </p>
        </div>

        {/* STATS BAR */}
        <div className="stats-surface" style={{ backgroundColor: "#1a6e4a", padding: "28px var(--pad-x)", display: "flex", gap: "22px 64px", flexWrap: "wrap" }}>
          {[
            { num: "20+", label: "Engagements completed" },
            { num: "10", label: "Sectors served" },
            { num: "F500", label: "To seed-stage clients" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: "#e8f5ef", fontWeight: 400, lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 11, color: "rgba(232,245,239,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* FEATURED PROJECT — Volvo */}
        <section className="featured">
          <div className="featured-inner">
            <div className="featured-main">
              <p className="feat-eyebrow"><span className="dot" /> Featured project</p>
              <h2 className="feat-title">
                A project with
                <img src="/volvo-iron-mark.svg" alt="" />
                Volvo.
              </h2>
              <p className="feat-desc">
                A public multinational in automotive and heavy manufacturing, and the largest
                organization we have worked with. Our team evaluated a growth opportunity adjacent to
                the core business, building the competitive landscape, sizing the market, and
                presenting a recommendation directly to the client team.
              </p>
            </div>
            <aside className="featured-aside">
              <img src="/volvo-iron-mark.svg" alt="Volvo" />
              <span className="feat-tag">Featured client</span>
            </aside>
          </div>
        </section>

        {/* FILTERS */}
        <div id="project-filters" className="filters" style={{ scrollMarginTop: "var(--nav-h)" }}>
          <div className="filter-top">
            <div className="filter-search">
              <svg className="icon" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <circle cx="7" cy="7" r="4.6" />
                <path d="M10.4 10.4 L14 14" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setPageState(1); }}
                placeholder="Search projects, sectors, or outcomes"
                aria-label="Search projects"
              />
            </div>
            <div className="filter-count">
              <span>
                {visible.length === 0
                  ? `0 of ${projects.length} projects`
                  : `${(page - 1) * PAGE_SIZE + 1}–${(page - 1) * PAGE_SIZE + shown.length} of ${visible.length} project${visible.length === 1 ? "" : "s"}`}
              </span>
              <button
                className="filter-toggle"
                onClick={() => setFiltersOpen((o) => !o)}
                aria-expanded={filtersOpen}
                aria-controls="filter-panel"
              >
                {filtersOpen ? "Hide filters" : "Show filters"}
                {selected.length > 0 && <span className="count">({selected.length})</span>}
                <svg className="chev" width="9" height="6" viewBox="0 0 9 6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M1 1.5 4.5 4.75 8 1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {filtering && (
                <button className="filter-clear" onClick={() => { setSelected([]); setQuery(""); setPageState(1); }}>Clear</button>
              )}
            </div>
          </div>

          <div
            id="filter-panel"
            className={filtersOpen ? "filter-panel open" : "filter-panel"}
            inert={!filtersOpen}
          >
          <div className="inner">
          {[
            { label: "Practice", kind: "practice", tags: PRACTICES },
            { label: "Sector", kind: "sector", tags: SECTORS },
            { label: "Term", kind: "term", tags: TERMS },
          ].map((group) => (
            <div key={group.label} className={`filter-group ${group.kind}`}>
              <span className="label">{group.label}</span>
              <div className="pills">
                {group.tags.map((tag) => {
                  const on = selected.includes(tag);
                  return (
                    <button
                      key={tag}
                      className={on ? "pill on" : "pill"}
                      onClick={() => toggle(tag)}
                      disabled={!on && !available.has(tag)}
                      aria-pressed={on}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
          </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div id="projects" style={{ flex: 1, scrollMarginTop: "var(--nav-h)" }}>
          {visible.length === 0 && (
            <div style={{ padding: "72px var(--pad-x)", textAlign: "center" }}>
              <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: "#2a2925", marginBottom: 10 }}>No projects match that.</p>
              <p style={{ fontSize: 14, color: "#7a7a74" }}>Try removing a filter or broadening your search.</p>
            </div>
          )}
          {shown.map((p) => (
            <div key={p.id} className="project-row">
              <div style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.1em", fontWeight: 500, paddingTop: 4 }}>{p.id}</div>
              <div>
                <div style={{ display: "flex", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
                  {p.practices.map((t) => (
                    <button key={t} className="tag practice" onClick={() => toggle(t)} title={`Filter by ${t}`}>{t}</button>
                  ))}
                  {p.sectors.map((t) => (
                    <button key={t} className="tag sector" onClick={() => toggle(t)} title={`Filter by ${t}`}>{t}</button>
                  ))}
                  {p.term && (
                    <button className="tag term" onClick={() => toggle(p.term)} title={`Filter by ${p.term}`}>{p.term}</button>
                  )}
                </div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: "#2a2925", marginBottom: 10, fontWeight: 400 }}>{p.client}</div>
                <div style={{ fontSize: 14, color: "#7a7a74", lineHeight: 1.7 }}>{p.description}</div>
              </div>
              <div>
                <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 12 }}>Outcomes</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.outcomes.map((o) => (
                    <li key={o} style={{ fontSize: 13, color: "#5a5a54", lineHeight: 1.5, paddingLeft: 16, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#1a6e4a" }}>↳</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {pageCount > 1 && (
            <nav className="pager" aria-label="Project pages">
              <button className="step" onClick={() => goTo(page - 1)} disabled={page === 1}>Prev</button>
              {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  className={n === page ? "on" : ""}
                  onClick={() => goTo(n)}
                  aria-current={n === page ? "page" : undefined}
                >
                  {n}
                </button>
              ))}
              <button className="step" onClick={() => goTo(page + 1)} disabled={page === pageCount}>Next</button>
            </nav>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
