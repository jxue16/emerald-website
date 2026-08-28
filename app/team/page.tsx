"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import type { CSSProperties } from "react";

// `bio` shows in an overlay on photo hover. Leave it "" to disable the overlay for that person.

const boardOfDirectors = [
  { name: "Ahmad Tabbara", role: "Director", photo: "/team/ahmad.jpg", linkedin: "https://www.linkedin.com/in/ahmad-jr-tabbara-521010232", bio: "" },
  { name: "Travis Chen", role: "Director", photo: "/team/travis.jpg", linkedin: "https://linkedin.com", bio: "" },
  { name: "Dhruv Dubey", role: "Director", photo: "/team/dhruv.jpg", linkedin: "https://www.linkedin.com/in/ddubey1", bio: "" },
  // Hidden for now: placeholder entries only.
  // { name: "Name", role: "Director", photo: "", linkedin: "https://linkedin.com", bio: "" },
  // { name: "Name", role: "Director", photo: "", linkedin: "https://linkedin.com", bio: "" },
];

// Hidden for now: placeholder entries only.
// const advisoryBoard = [
//   { name: "Name", role: "Advisor", photo: "", linkedin: "https://linkedin.com", bio: "" },
//   { name: "Name", role: "Advisor", photo: "", linkedin: "https://linkedin.com", bio: "" },
//   { name: "Name", role: "Advisor", photo: "", linkedin: "https://linkedin.com", bio: "" },
//   { name: "Name", role: "Advisor", photo: "", linkedin: "https://linkedin.com", bio: "" },
// ];

const managingPartners = [
  { name: "Nathan Xiong", role: "Managing Partner", photo: "/team/nathan.jpg", linkedin: "https://www.linkedin.com/in/xiong-nathan", bio: "Nathan is a junior studying Economics and Public Health. Outside of Emerald, he does public health research at JHU's Center for Drug Safety and Effectiveness and is a strategy associate for a medical device startup. In his free time, he enjoys playing and watching soccer and trying new cuisines." },
  { name: "Andrew Zhao", role: "Managing Partner", photo: "/team/andrew.jpg", linkedin: "https://www.linkedin.com/in/andrewzhao30", bio: "Andrew is a senior studying Economics with minors in Accounting and History. Outside of Emerald, he has experience working as a quantitative and investment analyst. In his free time, he enjoys skiing, fashion history, and electronic music." },
  { name: "Anita Zhu", role: "Managing Partner", photo: "/team/anita.jpg", linkedin: "https://www.linkedin.com/in/azhu91", bio: "Anita is a junior majoring in Public Health with a minor in Accounting & Financial Management on the pre-dental track. Outside of Emerald, she conducts psychedelic research and volunteers in underserved communities; in her free time, Anita enjoys writing and ceramics." },
];

const projectLeads = [
  { name: "Mischa Kumar", role: "Project Lead", photo: "/team/mischa.jpg", linkedin: "https://www.linkedin.com/in/mischa-kumar", bio: "Mischa is a junior studying computer science and financial economics. She's passionate about tech consulting and enjoys hiking and dancing in her free time." },
  { name: "Minh Pham", role: "Project Lead", photo: "/team/minh.jpg", linkedin: "https://www.linkedin.com/in/minh-pham-523786231", bio: "Minh is a junior double majoring in biomedical engineering and computer science. He was previously an R&D Engineer intern at P&G and is involved in a design team, a computational genetics lab, and a PILOT leader on campus. Outside of school, he enjoys playing chess, tennis/pickleball, and poker." },
  { name: "Alexander Kim", role: "Project Lead", photo: "/team/alex.jpg", linkedin: "https://www.linkedin.com/in/alexander-kim-463937316", bio: "Alex is a rising junior studying Computer Science and Neuroscience. Outside of school, he has an interest in philosophy and entrepreneurship." },
];

const consultants = [
  { name: "Jonathan Xue", role: "Consultant", photo: "/team/jonny.jpg", linkedin: "https://www.linkedin.com/in/jonathanxue", bio: "Jonathan is a sophomore studying Mathematics and Computer Science, with additional interests in AI policy and linguistics. In his free time, he enjoys running casually, baking confections, and meeting new people. " },
  { name: "Bhavya Guru", role: "Consultant", photo: "/team/bhavya.jpg", linkedin: "https://www.linkedin.com/in/bhavya-guru", bio: "Bhavya is a sophomore studying ChemBE and minoring in Entrepreneurship. She is also a Learning Den tutor and involved in cell division research. In her free time, she enjoys reading, hiking, and playing tennis." },
  { name: "Shrey Chettiar", role: "Consultant", photo: "/team/shrey.jpg", linkedin: "https://www.linkedin.com/in/shrey-chettiar-179792251", bio: "Shrey is a sophomore studying ChemBE and minoring in Entrepreneurship & Management. Outside of Emerald, he runs for the Hopkins track team, cooks, DJs, and bandwagons Lamar Jackson." },
  { name: "Tommy Hwang", role: "Consultant", photo: "/team/tommy.jpg", linkedin: "https://www.linkedin.com/in/aidan-tommy-hwang", bio: "Tommy is a sophomore majoring in Economics and Moral & Political Economy. Outside of Emerald, he enjoys playing poker, as well as the piano, guitar, and trumpet. He is also a member of TASA." },
  { name: "Aditya Nimbalagundi", role: "Consultant", photo: "/team/adi.jpg", linkedin: "https://www.linkedin.com/in/aditya-nimbalagundi-516b9324a", bio: "Aditya is a Public Health Studies major who researches allergic airway immunology at the Lajoie Lab, serves as President of Blood Cancer United, and is Assistant Music Director of JHU Kranti acapella." },
  { name: "Parshwa Shah", role: "Consultant", photo: "/team/parshwa.jpg", linkedin: "https://www.linkedin.com/in/parshwashah1", bio: "Parshwa is a sophomore studying Computer Science and Biophysics. Beyond Emerald, he works on surgical robotics research and is running a startup of his own; off the clock, you'll find him reading, playing basketball, or picking up a guitar." },
  { name: "Vivian Wang", role: "Consultant", photo: "/team/vivian.jpg", linkedin: "https://www.linkedin.com/in/vivianm-wang", bio: "Vivian is a sophomore majoring in Public Health. She enjoys playing piano, baking sourdough, and getting food with friends. Outside of Emerald, Vivian does neuroscience research at the med campus and volunteers at UMMC." },
];

const alumni = [
  { name: "Name", year: "2024", linkedin: "https://linkedin.com" },
  { name: "Name", year: "2024", linkedin: "https://linkedin.com" },
  { name: "Name", year: "2024", linkedin: "https://linkedin.com" },
  { name: "Name", year: "2023", linkedin: "https://linkedin.com" },
  { name: "Name", year: "2023", linkedin: "https://linkedin.com" },
  { name: "Name", year: "2023", linkedin: "https://linkedin.com" },
  { name: "Name", year: "2022", linkedin: "https://linkedin.com" },
  { name: "Name", year: "2022", linkedin: "https://linkedin.com" },
];

function LinkedInIcon({ size = 14, style }: { size?: number; style?: CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0, opacity: 0.55, verticalAlign: "middle", ...style }}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MemberCard({ name, role, photo, linkedin, bio }: { name: string; role: string; photo: string; linkedin: string; bio?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="member-photo" tabIndex={bio ? 0 : undefined}>
        {photo ? (
          <img
            src={photo}
            alt={name}
            style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "top", display: "block" }}
          />
        ) : (
          <div style={{
            width: "100%", aspectRatio: "3/4", backgroundColor: "#e8e6df",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 13, color: "#aaa8a0", letterSpacing: "0.05em", fontFamily: "'DM Sans', sans-serif" }}>Photo</span>
          </div>
        )}
        {bio ? <div className="member-bio"><p>{bio}</p></div> : null}
      </div>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="member-name"
        style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "'DM Serif Display', serif", fontSize: 17, color: "#2a2925", marginBottom: 4, fontWeight: 400, textDecoration: "none", transition: "color 0.2s" }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#1a6e4a"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#2a2925"; }}
      >
        {name}
        <LinkedInIcon />
      </a>
      <div style={{ fontSize: 12, color: "#9a9a90", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 500 }}>{role}</div>
      {bio ? <p className="member-bio-static">{bio}</p> : null}
    </div>
  );
}

function Section({ title, members, borderBottom = true }: { title: string; members: typeof boardOfDirectors; borderBottom?: boolean }) {
  return (
    <div className="team-section" style={{ padding: "64px var(--pad-x)", borderBottom: borderBottom ? "0.5px solid #d0cec4" : "none" }}>
      <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a6e4a", fontWeight: 500, marginBottom: 40 }}>{title}</p>
      <div className="member-grid">
        {members.map((m, i) => <MemberCard key={i} {...m} />)}
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f7f5ef; }

        .member-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }

        .member-photo {
          position: relative;
          overflow: hidden;
          margin-bottom: 16px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-soft);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .member-photo:hover, .member-photo:focus-visible { transform: translateY(-3px); box-shadow: var(--shadow-card-hover); }
        .member-photo:focus-visible { outline: 2px solid #1a6e4a; outline-offset: 2px; }

        .member-bio {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          min-height: 40%;
          display: flex;
          align-items: flex-end;
          padding: 22px 18px 16px;
          background: linear-gradient(to top, rgba(26,32,28,0.66) 0%, rgba(26,32,28,0.52) 40%, rgba(26,32,28,0.24) 72%, rgba(26,32,28,0) 100%);
          transform: translateY(101%);
          opacity: 0;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease;
          pointer-events: none;
        }
        .member-bio p {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          line-height: 1.6;
          color: #f4f7f4;
          font-weight: 400;
          text-shadow: 0 1px 3px rgba(0,0,0,0.55);
        }
        .member-photo:hover .member-bio,
        .member-photo:focus-visible .member-bio { transform: translateY(0); opacity: 1; }

        @media (prefers-reduced-motion: reduce) {
          .member-photo, .member-bio { transition: opacity 0.2s ease; }
          .member-bio { transform: translateY(0); }
        }

        .alumni-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .alumni-cell {
          padding: 20px 24px;
          border-radius: var(--radius-sm);
          background: #fffef9;
          box-shadow: var(--shadow-soft);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .alumni-cell:hover { transform: translateY(-3px); box-shadow: var(--shadow-card-hover); }
        .alumni-name { font-family: 'DM Serif Display', serif; font-size: 16px; color: #2a2925; font-weight: 400; text-decoration: none; transition: color 0.2s; display: block; margin-bottom: 4px; }
        .alumni-name:hover { color: #1a6e4a; }
        .alumni-year { font-size: 11px; color: #aaa8a0; letter-spacing: 0.08em; font-weight: 500; }

        .join-cta { position: relative; overflow: hidden; border-radius: var(--radius-lg); margin: 0 var(--pad-x) 64px; }
        .join-cta::before {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 90% at 8% 0%, rgba(255,255,255,0.06), transparent 60%),
            radial-gradient(ellipse 70% 90% at 100% 130%, rgba(0,0,0,0.22), transparent 60%);
          pointer-events: none;
        }
        .join-cta::after {
          content: ''; position: absolute; inset: 0; background-image: var(--grain-uri);
          opacity: 0.07; mix-blend-mode: overlay; pointer-events: none;
        }
        .join-cta > * { position: relative; z-index: 1; }
        .join-btn {
          border-radius: var(--radius-sm);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 1px 2px rgba(15,61,40,0.15), 0 14px 24px -12px rgba(15,61,40,0.55);
        }
        .join-btn:hover { transform: translateY(-2px); box-shadow: 0 2px 4px rgba(15,61,40,0.2), 0 20px 30px -12px rgba(15,61,40,0.6); }

        @media (max-width: 900px) {
          .member-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px; }
          .alumni-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 620px) {
          /* One card per row turned each member into a full screen of photo and
             the roster into an endless scroll; two columns keeps it scannable. */
          .member-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 20px 14px; }
          .alumni-grid { grid-template-columns: 1fr !important; }
          .team-section { padding: 44px var(--pad-x) !important; }
          .join-cta { margin: 0 var(--pad-x) 44px !important; padding: 34px 26px !important; }
          .join-btn { width: 100%; text-align: center; }
          /* A 26px-tall name+icon link is an awkward thumb target on a phone. */
          .member-name { min-height: 44px; margin-top: -6px; margin-bottom: 0 !important; }
        }

        /* Touch devices never fire :hover, so the bio overlay was unreachable;
           on those devices the bio sits under the photo as plain text instead. */
        .member-bio-static { display: none; }
        @media (hover: none) {
          .member-photo:hover { transform: none; box-shadow: var(--shadow-soft); }
          .member-bio { display: none; }
          .member-bio-static {
            display: block;
            font-size: 12px; line-height: 1.6; color: #7a7a74;
            margin-top: 8px;
          }
          .alumni-cell:hover, .join-btn:hover { transform: none; }
        }
      `}</style>

      <div style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#f7f5ef", color: "#2a2925", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* PAGE HEADER */}
        <div style={{ background: "radial-gradient(120% 135% at -5% -10%, rgba(38,140,94,0.38) 0%, rgba(38,140,94,0) 52%), radial-gradient(115% 130% at 105% 112%, rgba(10,44,30,0.78) 0%, rgba(10,44,30,0) 62%), linear-gradient(145deg, #34352e 0%, #2a2925 46%, #1d1c1a 100%)", padding: "64px var(--pad-x) 56px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6aac88", marginBottom: 16, fontWeight: 500 }}>The people</p>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(34px, 9vw, 48px)", color: "#f0ede4", fontWeight: 400, lineHeight: 1.1 }}>
            Our <em style={{ fontStyle: "italic", color: "#6aac88" }}>team.</em>
          </h1>
          <p style={{ fontSize: 14, color: "#9a9a90", lineHeight: 1.8, maxWidth: 500, marginTop: 20 }}>
            A group of driven students at Johns Hopkins, guided by MBB-experienced leadership and united by a commitment to rigorous, impactful work.
          </p>
        </div>

        <Section title="Managing Partners" members={managingPartners} />
        <Section title="Project Leads" members={projectLeads} />
        <Section title="Consultants" members={consultants} />
        <Section title="Board of Directors" members={boardOfDirectors} />
        {/* Hidden for now: placeholder entries only.
        <Section title="Advisory Board" members={advisoryBoard} /> */}

        {/* JOIN CTA */}
        <div className="join-cta" style={{ backgroundColor: "#2a2925", padding: "56px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(232,245,239,0.5)", fontWeight: 500, marginBottom: 10 }}>Join us</p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(23px, 5.6vw, 30px)", color: "#f0ede4", fontWeight: 400 }}>Interested in joining Emerald?</h2>
          </div>
          <a href="/work-with-us" className="join-btn" style={{ backgroundColor: "#1a6e4a", color: "#e8f5ef", padding: "14px 32px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none" }}>
            Apply now →
          </a>
        </div>

        <Footer />
      </div>
    </>
  );
}
