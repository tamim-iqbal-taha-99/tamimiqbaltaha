import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Nebula Dashboard",
    desc: "Real-time analytics platform with live charts, alerting, and a plugin system.",
    tags: ["React", "TypeScript", "WebSockets"],
  },
  {
    title: "Orbit Commerce",
    desc: "Headless storefront with 3D product previews and one-click checkout.",
    tags: ["Next.js", "Three.js", "Stripe"],
  },
  {
    title: "Pulse Chat",
    desc: "End-to-end encrypted messaging app with rooms, threads, and voice notes.",
    tags: ["React Native", "Supabase"],
  },
  {
    title: "Forge CLI",
    desc: "Developer tool that scaffolds full-stack apps from a single config file.",
    tags: ["Node.js", "Rust"],
  },
];

const skills = ["TypeScript", "React", "Three.js", "Node.js", "Python", "PostgreSQL", "AWS", "Docker", "GraphQL", "Figma"];

export function Overlay() {
  return (
    <div className="relative z-10">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 md:px-12">
        <span className="font-display text-lg tracking-widest text-primary">TT</span>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <a href="#about" className="story-link hover:text-foreground">About</a>
          <a href="#projects" className="story-link hover:text-foreground">Projects</a>
          <a href="#contact" className="story-link hover:text-foreground">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-primary animate-fade-in">Creative Developer</p>
        <h1 className="font-display text-5xl leading-tight text-foreground md:text-8xl animate-fade-in">
          Tamim Iqbal <span className="text-primary">Taha</span>
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground animate-fade-in">
          I build immersive digital experiences where design meets engineering — interactive, fast, and alive.
        </p>
        <a
          href="#about"
          className="mt-12 flex h-12 w-12 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-accent"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-3xl px-6 py-32">
        <h2 className="font-display text-4xl text-foreground md:text-5xl">About</h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          I'm a developer focused on crafting interactive web experiences — from real-time apps to 3D interfaces.
          I care about the details: motion, performance, and the feeling a product leaves behind.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-card-foreground backdrop-blur">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-6 py-32">
        <h2 className="font-display text-4xl text-foreground md:text-5xl">Selected Work</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-border bg-card/60 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_60px_-20px] hover:shadow-primary/30"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-2xl text-card-foreground">{p.title}</h3>
                <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <p className="mt-3 text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h2 className="font-display text-4xl text-foreground md:text-6xl">Let's build something</h2>
        <p className="mt-4 max-w-md text-muted-foreground">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
        <a
          href="mailto:hello@example.com"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition-transform hover:scale-105"
        >
          <Mail className="h-4 w-4" /> Get in touch
        </a>
        <div className="mt-10 flex gap-5 text-muted-foreground">
          <a href="https://github.com" aria-label="GitHub" className="transition-colors hover:text-primary"><Github className="h-6 w-6" /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="transition-colors hover:text-primary"><Linkedin className="h-6 w-6" /></a>
        </div>
        <p className="mt-16 pb-10 text-xs text-muted-foreground">© 2026 Tamim Iqbal Taha</p>
      </section>
    </div>
  );
}
