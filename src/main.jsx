import React from 'react'
import ReactDOM from 'react-dom/client'
import { Github, Linkedin, ArrowUpRight, Cpu, Terminal, Database, Network, ChevronRight } from 'lucide-react'
import './styles.css'

const projects = [
  {
    eyebrow: 'C++20 · Systems · Low Latency',
    title: 'Low-Latency Limit Order Book',
    description:
      'Exchange-style matching engine focused on predictable latency, cache-friendly data structures, and avoiding allocation on the hot path.',
    stats: [
      ['21.9M', 'ops/sec resting insert'],
      ['17.0M', 'ops/sec exact match'],
      ['~30ns', 'average benchmark latency'],
    ],
    tags: ['C++20', 'SPSC Queue', 'ITCH', 'CMake', 'Benchmarking'],
    icon: Cpu,
    featured: true,
  },
  {
    eyebrow: 'FastAPI · WebSockets · Redis',
    title: 'Real-Time Chat Platform',
    description:
      'Full-stack messaging system with real-time rooms, JWT auth, Redis-backed scaling, background jobs and semantic message search.',
    tags: ['FastAPI', 'React', 'Redis', 'Celery', 'WebSockets'],
    icon: Network,
  },
  {
    eyebrow: 'ML · React · Docker',
    title: 'Fake News Detector',
    description:
      'End-to-end classification product with model inference, explanations, semantic search, moderation tooling and an admin dashboard.',
    tags: ['Python', 'FastAPI', 'React', 'Docker', 'SQLite'],
    icon: Database,
  },
]

function Header() {
  return (
    <header className="nav shell">
      <a className="brand" href="#top">AK<span>.</span></a>
      <nav>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

function ProjectCard({ project }) {
  const Icon = project.icon
  return (
    <article className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div className="project-topline">
        <div className="project-icon"><Icon size={20} /></div>
        <span>{project.eyebrow}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.stats && (
        <div className="stats-grid">
          {project.stats.map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}
      <div className="tag-row">
        {project.tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
      <div className="project-links">
        <a href="#">View case study <ArrowUpRight size={16} /></a>
        <a href="#">GitHub <Github size={16} /></a>
      </div>
    </article>
  )
}

function App() {
  return (
    <div id="top">
      <Header />

      <main>
        <section className="hero shell">
          <div className="status"><span></span> MSc Computing @ Imperial College London</div>
          <h1>
            I build software that is<br />
            <span>fast, useful, and measurable.</span>
          </h1>
          <p className="hero-copy">
            Software engineer focused on systems, distributed computing and high-performance software. I like projects where engineering decisions show up directly in latency, throughput and reliability.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#work">View projects <ChevronRight size={17} /></a>
            <a className="secondary" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            <a className="secondary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          </div>
        </section>

        <section className="marquee-wrap">
          <div className="marquee shell">
            <span>C++</span><span>Python</span><span>TypeScript</span><span>FastAPI</span><span>React</span><span>Redis</span><span>PostgreSQL</span><span>Docker</span><span>AWS</span>
          </div>
        </section>

        <section id="work" className="section shell">
          <div className="section-heading">
            <div>
              <span className="kicker">Selected work</span>
              <h2>Projects with real technical depth.</h2>
            </div>
            <p>Not just demos — systems I used to learn performance, architecture, distributed services and product engineering.</p>
          </div>

          <div className="projects-grid">
            {projects.map(project => <ProjectCard project={project} key={project.title} />)}
          </div>
        </section>

        <section className="section shell" id="about">
          <div className="about-grid">
            <div>
              <span className="kicker">About</span>
              <h2>I care about understanding what the machine is actually doing.</h2>
            </div>
            <div className="about-copy">
              <p>I’m currently studying MSc Computing at Imperial College London after a First-Class degree in Accounting & Finance. I moved into software through self-study, full-stack projects and increasingly systems-focused work.</p>
              <p>My strongest interests are C++, low-latency systems, distributed systems, backend engineering and performance-oriented software.</p>
              <a href="#contact">Get in touch <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="section shell terminal-section">
          <div className="terminal-card">
            <div className="terminal-title"><Terminal size={17} /> benchmark.log</div>
            <pre>{`$ ./orderbook_bench --release\n\nResting Insert\n  throughput    21.9M ops/s\n  avg latency   ~30.6 ns\n\nExact Match\n  throughput    17.0M ops/s\n  avg latency   ~31.1 ns\n\nstatus: benchmark complete ✓`}</pre>
          </div>
        </section>

        <section id="contact" className="cta shell">
          <div>
            <span className="kicker">Contact</span>
            <h2>Building something interesting?</h2>
            <p>I’m always happy to talk systems, software engineering, internships or ambitious technical projects.</p>
          </div>
          <a className="primary" href="mailto:your@email.com">your@email.com <ArrowUpRight size={17} /></a>
        </section>
      </main>

      <footer className="footer shell">
        <span>© 2026 Archie Knight</span>
        <span>Built with React + Vite</span>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
)
