import Nav from "../components/Nav";
import Footer from "../components/Footer";

const timelineEvents = [
  {
    year: "2022",
    title: "Founded",
    body: "Emerald Consulting Group was founded in April 2022 by Johns Hopkins University undergraduates Aryan Anand, Dhruv Dubey, and Zayeed Akhter. Established to bring analytical innovation to healthcare strategy, the organization partnered with clients to deliver smarter, data-driven decisions with measurable impact.",
    image: "/about/2022.jpg",
    imageAlt: "Emerald founding team 2022",
  },
  {
    year: "2023",
    title: "Early growth",
    body: "Emerald quickly grew to a team of 15+ members and executed 5+ client engagements across various industries. With a strong focus on life sciences and biotech, we sharpened our domain expertise and built a durable foundation for high-impact, client-ready consulting work.",
    image: "/about/2023.jpg",
    imageAlt: "Emerald team 2023",
  },
  {
    year: "2025",
    title: "Expansion",
    body: "Building on prior momentum, we expanded into new sectors — including energy, education, and artificial intelligence — while growing to a 30-member team of dedicated consultants. With greater capacity and deeper expertise, we supported a client base totaling over $45 billion in combined market capitalization.",
    image: "/about/2024.jpg",
    imageAlt: "Emerald team 2025",
  },
  {
    year: "2026",
    title: "Today",
    body: "Our mission is rooted in a dual commitment: to develop the next generation of consultants at Johns Hopkins University through immersive, hands-on engagement, and to help organizations of any size unlock their full potential through data-driven innovation and insightful strategic guidance.",
    image: "/about/2025.jpg",
    imageAlt: "Emerald team 2026",
  },
];

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f7f5ef; }

        .mission-grid { display: grid; grid-template-columns: 1fr 1fr; }

        /* Timeline */
        .timeline { position: relative; padding: 80px 56px; background: #242320; }
        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0; bottom: 0;
          width: 0.5px;
          background: #2a2a28;
          transform: translateX(-50%);
        }

        .tl-row {
          display: grid;
          grid-template-columns: 1fr 80px 1fr;
          gap: 0;
          margin-bottom: 96px;
          align-items: center;
        }
        .tl-row:last-child { margin-bottom: 0; }

        /* Even rows: text left, image right */
        .tl-text { padding: 0 48px 0 0; }
        .tl-image { padding: 0 0 0 48px; }

        /* Odd rows: image left, text right */
        .tl-row.reverse .tl-text { order: 3; padding: 0 0 0 48px; }
        .tl-row.reverse .tl-node { order: 2; }
        .tl-row.reverse .tl-image { order: 1; padding: 0 48px 0 0; }

        .tl-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          position: relative;
          z-index: 2;
        }
        .tl-dot {
          width: 10px; height: 10px;
          background: #1a6e4a;
          border-radius: 50%;
          border: 2px solid #1a6e4a;
          box-shadow: 0 0 0 4px #242320;
        }
        .tl-year {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #1a6e4a;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
        }

        .tl-title {
          font-family: 'DM Serif Display', serif;
          font-size: 26px;
          color: #f0ede4;
          font-weight: 400;
          margin-bottom: 14px;
          line-height: 1.2;
        }
        .tl-body {
          font-size: 16.5px;
          color: #8f8f89;
          line-height: 1.8;
        }

        .tl-img {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          display: block;
          filter: grayscale(20%);
          border-radius: var(--radius-lg);
          box-shadow: 0 1px 2px rgba(0,0,0,0.2), 0 24px 40px -18px rgba(0,0,0,0.55);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .tl-img:hover { transform: translateY(-4px); box-shadow: 0 2px 4px rgba(0,0,0,0.25), 0 30px 46px -16px rgba(0,0,0,0.6); }
        @media (max-width: 900px) {
          .mission-grid { grid-template-columns: 1fr !important; }
          .timeline::before { left: 20px; }
          .tl-row { grid-template-columns: 40px 1fr; gap: 24px; margin-bottom: 64px; }
          .tl-row.reverse .tl-text { order: unset; padding: 0; }
          .tl-row.reverse .tl-node { order: unset; }
          .tl-row.reverse .tl-image { order: unset; padding: 0; display: none; }
          .tl-text { padding: 0; }
          .tl-image { display: none; }
          .tl-node { grid-column: 1; }
          .tl-text { grid-column: 2; }
        }
      `}</style>

      <div style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#f7f5ef", color: "#2a2925", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* PAGE HEADER */}
        <div style={{ background: "radial-gradient(120% 135% at -5% -10%, rgba(38,140,94,0.38) 0%, rgba(38,140,94,0) 52%), radial-gradient(115% 130% at 105% 112%, rgba(10,44,30,0.78) 0%, rgba(10,44,30,0) 62%), linear-gradient(145deg, #34352e 0%, #2a2925 46%, #1d1c1a 100%)", padding: "64px 56px 56px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6aac88", marginBottom: 16, fontWeight: 500 }}>Who we are</p>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 48, color: "#f0ede4", fontWeight: 400, lineHeight: 1.1, maxWidth: 600 }}>
            About <em style={{ fontStyle: "italic", color: "#6aac88" }}>Emerald.</em>
          </h1>
        </div>

        {/* MISSION SPLIT */}
        <div className="mission-grid" style={{ borderBottom: "0.5px solid #d0cec4" }}>
          <div style={{ padding: "64px 56px", borderRight: "0.5px solid #d0cec4" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 20 }}>Our mission</p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 30, color: "#2a2925", lineHeight: 1.2, marginBottom: 24, fontWeight: 400 }}>
              Developing the next generation of{" "}
              <em style={{ fontStyle: "italic", color: "#1a6e4a" }}>elite consultants.</em>
            </h2>
            <p style={{ fontSize: 14, color: "#7a7a74", lineHeight: 1.8 }}>
              Led by a board of exclusively MBB-experienced leaders, our mission is rooted in a dual commitment: develop top consultants at Johns Hopkins through immersive, hands-on engagement — and help organizations of any size unlock their full potential through data-driven strategy.
            </p>
          </div>
          <div style={{ padding: "64px 56px" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 20 }}>What we do</p>
            <p style={{ fontSize: 14, color: "#7a7a74", lineHeight: 1.8, marginBottom: 20 }}>
              Emerald Consulting Group is the premier student-led strategy consulting organization at Johns Hopkins University. Our experience spans 25+ clients, from startups to Fortune 500 firms, totaling over $1 trillion in combined market capitalization.
            </p>
            <p style={{ fontSize: 14, color: "#7a7a74", lineHeight: 1.8 }}>
              Surrounded by world-class research institutions, we use a rigorous data-driven approach to add value for stakeholders, create measurable impact, and solve real-world challenges.
            </p>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="timeline">
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6aac88", fontWeight: 500, marginBottom: 72, textAlign: "center" }}>Our story</p>

          {timelineEvents.map((event, i) => (
            <div key={event.year} className={`tl-row${i % 2 !== 0 ? " reverse" : ""}`}>

              {/* TEXT */}
              <div className="tl-text">
                <div className="tl-title">{event.title}</div>
                <div className="tl-body">{event.body}</div>
              </div>

              {/* NODE */}
              <div className="tl-node">
                <div className="tl-dot" />
                <div className="tl-year">{event.year}</div>
              </div>

              {/* IMAGE */}
              <div className="tl-image">
                <img src={event.image} alt={event.imageAlt} className="tl-img" />
              </div>

            </div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
}
