import { useEffect, useState } from "react";
import "./App.css";

import multiVendorImg from "./assets/Image/Multi-Vendor E-Commerce.png";
import holidayWaterParkImg from "./assets/Image/Holiday Water Park.png";
import neelkanthElectricalImg from "./assets/Image/Neelkanth Electrical.png";
import vishwashPortfolioImg from "./assets/Image/Vishwash Portfolio.png";

const skills = [
  {
    name: "React.js",
    type: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    type: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    type: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    type: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind CSS",
    type: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    type: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    type: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    type: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Mongoose",
    type: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
  },
  {
    name: "REST APIs",
    type: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Git & GitHub",
    type: "Tools",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Vite",
    type: "Tools",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "Bootstrap",
    type: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
];

const projects = [
  {
    title: "Multi-Vendor E-Commerce",
    text: "A responsive marketplace experience with vendor, customer and admin workflows.",
    tags: ["React", "Node.js", "MongoDB"],
    image: multiVendorImg,
    link: "https://multi-vendor-1.onrender.com/",
  },
  {
    title: "Water Park Website",
    text: "A modern responsive booking and information website with engaging sections and smooth interactions.",
    tags: ["React", "CSS", "JavaScript"],
    image: holidayWaterParkImg,
    link: "https://water-park-nil.vercel.app/",
  },
  {
    title: "Neelkanth Electrical",
    text: "A full-stack e-commerce store featuring product listings, category filtering, and seamless cart management.",
    tags: ["React", "Node.js", "MongoDB"],
    image: neelkanthElectricalImg,
    link: "https://neelkanth-electrical.onrender.com/",
  },
  {
    title: "Portfolio Development",
    text: "A modern and responsive developer portfolio website designed with clean UI, smooth animations and an interactive user experience.",
    tags: ["React", "JavaScript", "CSS"],
    image: vishwashPortfolioImg,
    link: "https://vishwash-portfolio-phi.vercel.app/",
  },
];

const whatIBuild = [
  "React.js Applications",
  "JavaScript Projects",
  "Food Ordering Management",
  "Banking Applications",
  "Expense Management",
  "Movie Booking System",
  "Employee Management",
  "To-Do Applications",
  "Student Management",
  "Login & Authentication System",
  "Admin Dashboards",
  "E-Commerce Website",
  "Responsive Web Applications",
];

const services = [
  {
    icon: "</>",
    title: "Custom Software Development",
    text: "Tailored applications designed specifically for your unique business requirements.",
  },
  {
    icon: "💻",
    title: "Web Application Development",
    text: "Responsive, fast, and secure web apps built with modern frontend frameworks.",
  },
  {
    icon: "⚙️",
    title: "Business Automation Systems",
    text: "Streamline workflows and reduce manual labor with smart automation tools.",
  },
  {
    icon: "🔌",
    title: "API Development",
    text: "RESTful and GraphQL APIs to connect your services and data seamlessly.",
  },
  {
    icon: "🗄️",
    title: "Database Design",
    text: "Optimized database schemas using MongoDB and Mongoose for performance.",
  },
  {
    icon: "🚀",
    title: "Deployment & Hosting",
    text: "Secure cloud infrastructure setup, CI/CD pipelines, and application deployment.",
  },
];

function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const [certificate, setCertificate] = useState(false);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = [
    "MERN Stack Web Developer",
    "Responsive Web Designer",
    "React.js Specialist",
    "Clean & Interactive UI",
  ];

  const splitIndices = [10, 10, 8, 10];
  const currentSplitIndex = splitIndices[loopNum % toRotate.length];
  const textPart1 = text.substring(0, currentSplitIndex);
  const textPart2 = text.substring(currentSplitIndex);

  useEffect(() => {
    let ticker = setInterval(() => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];

      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setTypingSpeed(50);
      } else {
        setTypingSpeed(70);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setTypingSpeed(1500);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 500);
      const sections = [
        "home",
        "about",
        "services",
        "skills",
        "projects",
        "certificate",
        "contact",
      ];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const box = el.getBoundingClientRect();
        return box.top <= 140 && box.bottom >= 140;
      });
      if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();

    const updateCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateCursor);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  const go = (id) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      <div
        className="cursor-dot"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      ></div>
      <div
        className="cursor-outline"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      ></div>

      <header className="navbar">
        <div className="container nav-inner">
          <button
            className="brand"
            onClick={() => go("home")}
            aria-label="Go home"
          >
            <span>NS</span> Nil Sanghani
          </button>
          <button
            className="menu-btn"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <nav className={menu ? "nav-links open" : "nav-links"}>
            {[
              "home",
              "about",
              "services",
              "skills",
              "projects",
              "certificate",
              "contact",
            ].map((item) => (
              <button
                key={item}
                className={active === item ? "active" : ""}
                onClick={() => go(item)}
              >
                {item}
              </button>
            ))}
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button className="hire-me-btn" onClick={() => go("contact")}>
                Hire Me ↗
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">
                <span className="pulse" /> Available for opportunities
              </div>
              <p className="hero-kicker">Hello, I'm</p>
              <h1>
                Nil <span>Sanghani</span>
              </h1>
              <h2>
                <span className="text-green">{textPart1}</span>
                <span className="text-white">{textPart2}</span>
                <span className="blinking-cursor">|</span>
              </h2>
              <p className="hero-text">
                I build clean, responsive and user-focused web applications from
                frontend interfaces to powerful backend APIs and databases.
              </p>
              <div className="hero-actions">
                <button className="primary" onClick={() => go("projects")}>
                  View My Work <span>→</span>
                </button>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <a
                    className="secondary"
                    href="https://github.com/nilpatel43"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                  <a
                    className="secondary"
                    href="https://www.linkedin.com/in/nil-sanghani-8n1i4l1/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
              <div className="hero-meta">
                <span>⚡ React.js</span>
                <span>◈ Node.js</span>
                <span>◆ MongoDB</span>
              </div>
            </div>
            <div className="code-card-wrap reveal delay">
              <div className="orbit orbit-a" />
              <div className="orbit orbit-b" />
              <div className="code-card">
                <div className="window-bar">
                  <span />
                  <span />
                  <span />
                  <b>portfolio.js</b>
                </div>
                <pre>
                  <code>
                    <i>const</i> developer = {"{"}
                    {`\n`} name: <em>"Nil Sanghani"</em>,{`\n`} role:{" "}
                    <em>"MERN Stack Developer"</em>,{`\n`} stack: [
                    <em>"React"</em>, <em>"Node"</em>,{`\n`} <em>"MongoDB"</em>
                    ],{`\n`} passion: <em>"Building great web"</em>
                    {`\n`}
                    {"}"};
                  </code>
                </pre>
                <div className="terminal-line">
                  <span>➜</span> npm run create-awesome
                </div>
                <div className="status">✓ Ready to build</div>
              </div>
            </div>
          </div>
          <button className="scroll-hint" onClick={() => go("about")}>
            Scroll to explore <span>↓</span>
          </button>
        </section>

        <section id="about" className="section about">
          <div className="container">
            <div className="section-head">
              <p className="label">01 — ABOUT ME</p>
              <h2>
                Turning ideas into <span>digital experiences.</span>
              </h2>
            </div>

            <div className="about-modern-grid">
              <div className="about-modern-card reveal">
                <div className="card-icon">💻</div>
                <h3>Experience & Passion</h3>
                <p>
                  I'm a <strong>MERN Stack Web Developer</strong> who enjoys
                  creating websites and applications that look great, feel
                  smooth and work reliably.
                </p>
                <p>
                  My focus is on writing maintainable code, building responsive
                  interfaces and connecting them with practical backend services
                  and databases.
                </p>
              </div>

              <div className="about-modern-card reveal delay-1">
                <div className="card-icon">⚡</div>
                <h3>Quick Stats</h3>
                <div className="stats-modern">
                  <div className="stat-item">
                    <strong>04+</strong>
                    <span>Projects Completed</span>
                  </div>
                  <div className="stat-item">
                    <strong>10+</strong>
                    <span>Technologies Mastered</span>
                  </div>
                  <div className="stat-item">
                    <strong>100%</strong>
                    <span>Passion & Dedication</span>
                  </div>
                </div>
              </div>

              <div className="about-modern-card span-full reveal delay-2">
                <h3>What I Build</h3>
                <div className="build-chips">
                  {whatIBuild.map((item, index) => (
                    <span key={index} className="build-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <div className="section-head center">
              <p className="label">02 — SERVICES</p>
              <h2>
                What I <span>offer.</span>
              </h2>
              <p>
                Comprehensive technical solutions to elevate your business
                operations and digital presence.
              </p>
            </div>
            <div className="services-grid">
              {services.map((srv, index) => (
                <div className="service-card" key={index}>
                  <div className="service-icon">{srv.icon}</div>
                  <h3 className="service-title">{srv.title}</h3>
                  <p className="service-text">{srv.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <div className="section-head center">
              <p className="label">03 — SKILLS</p>
              <h2>
                My <span>toolkit.</span>
              </h2>
              <p>Technologies I use to turn concepts into working products.</p>
            </div>
            <div className="skill-grid">
              {skills.map((skill, i) => (
                <div className="skill" key={skill.name} style={{ "--i": i }}>
                  <div className="skill-icon">
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      loading="lazy"
                    />
                  </div>
                  <div className="skill-info">
                    <strong>{skill.name}</strong>
                    <small>{skill.type}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="container">
            <div className="section-head">
              <p className="label">04 — PROJECTS</p>
              <h2>
                Things I've <span>built.</span>
              </h2>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project" key={project.title}>
                  <div className="project-visual">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="grid-lines" />
                  </div>
                  <div className="project-body">
                    <p className="project-number">FEATURED PROJECT</p>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      View project <span>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certificate" className="section certificate">
          <div className="container certificate-box">
            <div className="certificate-copy">
              <p className="label">05 — CERTIFICATION</p>
              <h2>
                Proof of <span>learning.</span>
              </h2>
              <p>
                My MDIDM certificate will be showcased here. The certificate
                area is ready for the real certificate image.
              </p>
              <button className="primary" onClick={() => setCertificate(true)}>
                View Certificate <span>↗</span>
              </button>
            </div>
            <button
              className="certificate-placeholder"
              onClick={() => setCertificate(true)}
            >
              <div className="cert-paper">
                <div className="cert-logo">MDIDM</div>
                <h3>Certificate</h3>
                <p>MDIDM Certificate</p>
                <small>
                  Replace this placeholder with your certificate image
                </small>
                <div className="cert-line" />
              </div>
            </button>
          </div>
        </section>

        <section className="section why-choose-me">
          <div className="container">
            <div className="why-box">
              <div className="why-content">
                <h2>
                  Why <span>Choose Me?</span>
                </h2>
                <p>
                  I don't just write code; I solve business problems. When you
                  hire me, you get a technical partner invested in your
                  project's success.
                </p>
              </div>

              <div className="why-list">
                <div className="why-item">
                  <span className="why-icon">✓</span>
                  <p>Clean, scalable, and maintainable code architecture.</p>
                </div>
                <div className="why-item">
                  <span className="why-icon">✓</span>
                  <p>Reliable delivery with strict adherence to deadlines.</p>
                </div>
                <div className="why-item">
                  <span className="why-icon">✓</span>
                  <p>Fast, transparent, and proactive communication.</p>
                </div>
                <div className="why-item">
                  <span className="why-icon">✓</span>
                  <p>
                    Custom solutions tailored exactly to your business logic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div>
              <p className="label">06 — CONTACT</p>
              <h2>
                Let's build something <span>great.</span>
              </h2>
              <p className="contact-intro">
                Have a project, opportunity or idea? I'd love to hear about it.
              </p>
              <div className="contact-links">
                <a
                  href="https://github.com/nilpatel43"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>gh</span> GitHub <b>↗</b>
                </a>
                <a
                  href="https://www.linkedin.com/in/nil-sanghani-8n1i4l1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>in</span> LinkedIn <b>↗</b>
                </a>
                <a href="mailto:nilsanghani43@gmail.com">
                  <span>✉</span> nilsanghani43@gmail.com <b>↗</b>
                </a>
              </div>
            </div>
            <form
              className="contact-form"
              action="https://formsubmit.co/nilsanghani43@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New project inquiry from Portfolio!"
              />

              <label>
                Name
                <input required name="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Message
                <textarea
                  required
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                />
              </label>
              <button className="primary" type="submit">
                Send Message <span>→</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="new-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-info">
              <h3>Nil Sanghani</h3>
              <p>
                MERN Stack Web Developer building custom web applications and
                robust backend systems.
              </p>
            </div>
            <div className="footer-socials">
              <a
                href="https://github.com/nilpatel43"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/nil-sanghani-8n1i4l1/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="tel:+918141384325" aria-label="Call">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
              </a>
              <a
                href="https://wa.me/918141384325"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a href="mailto:nilsanghani43@gmail.com" aria-label="Email">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Nil Sanghani. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {showTop && (
        <button className="top-btn" onClick={() => go("home")}>
          ↑
        </button>
      )}
      {certificate && (
        <div className="modal" onClick={() => setCertificate(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setCertificate(false)}>×</button>
            <div className="cert-paper large">
              <div className="cert-logo">MDIDM</div>
              <h3>MDIDM Certificate</h3>
              <p>Certificate image placeholder</p>
              <small>
                Replace this area with your actual certificate image in the
                assets folder.
              </small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
