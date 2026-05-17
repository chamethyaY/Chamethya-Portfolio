import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Code2,
  Database,
  Wrench,
  GitBranch,
  Users,
  Layers,
  GraduationCap,
  Award,
  ExternalLink,
  Send,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import profileImg from "@/assets/chamethya.jpg";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const postmanCertificate = new URL("../../postman .jpg", import.meta.url).href;
const javaOopCertificate = new URL("../../java OOP beginners.jpg", import.meta.url).href;
const advancedJavaCertificate = new URL("../../advanced java.jpg", import.meta.url).href;
const machineLearningCertificate = new URL("../../machine learning.jpg", import.meta.url).href;

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Chamethya Yasodie — Computer Science Undergraduate" },
      {
        name: "description",
        content: "Full-stack developer portfolio: projects, skills, education and contact.",
      },
    ],
  }),
});

const competencies = [
  {
    icon: Code2,
    title: "Languages & Web Essentials",
    items: ["JavaScript", "TypeScript", "Java", "Python", "HTML5", "CSS3"],
  },
  {
    icon: Layers,
    title: "Frameworks",
    items: ["React.js", "Node.js", "Next.js"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["VS Code", "Figma", "Postman", "Docker", "Jira", "IntelliJ", "Apache NetBeans"],
  },
  { icon: GitBranch, title: "Version Control", items: ["Git", "GitHub"] },
  {
    icon: Users,
    title: "Soft Skills",
    items: [
      "Strong Communication Skills(English ,Sinhala)",
      "Problem Solving",
      "Teamwork",
      "Adaptability",
      "Leadership",
      "Time Management",
    ],
  },
];

const projects = [
  {
    img: project1,
    title: "Safety On Speed",
    desc: "A cross-platform mobile safety app featuring a one-tap SOS system, automated guardian calls, and real-time GPS tracking.",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express",
      "Twilio API",
      "Google Maps API",
    ],
    link: "#",
  },
  {
    img: project2,
    title: "CareerForge",
    desc: "An AI-powered career operating system cross-platform mobile app that transforms student developers into internship-ready candidates through real-time readiness scores, personalized learning roadmaps, and an AI mentor.",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Gemini AI",
      "Edge Functions",
    ],
    link: "#",
  },
  {
    img: project3,
    title: "Nexus-Employee-Portal",
    desc: "A full-stack management web application utilizing OOP principles to manage employee data with efficient CRUD operations.",
    tags: ["Java", "Spring Boot", "Thymeleaf", "Spring Data JPA", "JavaScript"],
    link: "#",
  },
  {
    img: project1,
    title: "360 - Wellness Website",
    desc: "A fully responsive, multi-page wellness website featuring dynamic DOM manipulations and interactive client-side forms.",
    tags: ["HTML5", "CSS3", "JavaScript", "Flexbox", "Grid"],
    link: "#",
  },
  {
    img: project2,
    title: "Smart Campus API",
    desc: "A fully RESTful, HATEOAS-compliant JAX-RS backend engine built with Jersey and Grizzly, orchestrating real-time campus sensor feeds and room configurations using thread-safe in-memory architectures.",
    tags: ["Java 17", "JAX-RS", "Jersey", "Grizzly Server", "REST API", "Maven"],
    link: "https://github.com/chamethyaY/smart-campus-api",
  },

  {
    img: project3,
    title: "Graph Acyclicity Validator",
    desc: "A high-performance algorithmic tool that detects cycles in directed graphs using the Sink Elimination Algorithm.",
    tags: ["Java", "Algorithms", "Data Structures"],
    link: "#",
  },
];

const education = [
  {
    year: "2024 — 2028",
    title: "B.Sc. in Computer Science",
    place: "University of Technology",
    desc: "Computer Science Undergraduate. Focus on software engineering and AI.",
  },
  {
    year: "2009 — 2022",
    title: "Nursery — G.C.E. Advanced Level",
    place: "Anula Vidyalaya, Nugegoda",
    desc: "Advanced Level: Physical Science Stream (Combined Mathematics, Physics, Chemistry)\nG.C.E. Ordinary Level: Successfully completed with 9 Distinction passes (9 A's)",
    achievements: [
      "National-level Sharp Shooter (100m Air Rifle) and Netball Player",
      "Vice Games Captain (2021-2022)",
      "Senior Prefect of Anula Vidyalaya (2018-2019)",
    ],
  },
];

const certifications = [
  {
    title: "Machine Learning by Informatics Institute Of Technology",
    image: machineLearningCertificate,
  },
  {
    title: "API Beginner Learning Path offered by Postman Academy",
    image: postmanCertificate,
  },
  {
    title: "Advanced Java OOP Programmin by simplilearn",
    image: advancedJavaCertificate,
  },
  {
    title: "Java Fundamentals by simplilearn",
    image: javaOopCertificate,
  },
];

// Replace with your Formspree endpoint: https://formspree.io/f/your-id
const FORM_ENDPOINT = "https://formspree.io/f/xzdwpjjw";

function Portfolio() {
  const [form, setForm] = useState({ name: "", contact: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [portrait, setPortrait] = useState<string>(profileImg);
  const [credentialsOpen, setCredentialsOpen] = useState(false);
  const [selectedCredential, setSelectedCredential] = useState<
    (typeof certifications)[number] | null
  >(null);

  useEffect(() => {
    // Probe for a user-provided image at runtime without using dynamic import.
    // Check both .jpeg and .jpg variants and use the first that loads.
    const candidates = ["/src/assets/chamethya.jpeg", "/src/assets/chamethya.jpg"];
    let found = false;
    for (const c of candidates) {
      // eslint-disable-next-line no-loop-func
      const img = new Image();
      img.onload = () => {
        if (!found) {
          found = true;
          setPortrait(c);
        }
      };
      img.onerror = () => {
        /* try next */
      };
      img.src = c;
    }
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, contact: form.contact, subject: form.subject, message: form.message }),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: "", contact: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 3000);
      } else {
        console.error("Form submit failed", res.status);
        alert("Failed to send message. Please try again or contact me directly at k.chamethya@gmail.com");
      }
    } catch (err) {
      console.error(err);
      alert("Network error while sending message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-display text-xl font-bold">
            <span className="text-primary">C</span>hamethya<span className="text-primary">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            {["About", "Skills", "Education", "Projects", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                {l}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:shadow-glow transition-smooth"
          >
            Hire Me <ArrowRight className="w-4 h-4" />
          </a>
        </nav>
      </header>

      {/* HERO / INTRO */}
      <section id="home" className="relative pt-32 pb-24 bg-hero-glow overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full border-glow text-primary text-xs uppercase tracking-widest mb-6">
              Computer Science Undergraduate
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.02] mb-4">
              Hi, I'm <span className="text-foreground">Chamethya Yasodie</span>, Computer Science
              Undergraduate
            </h1>
            <p className="text-lg text-primary font-semibold mb-3">Mobile and Web Developer</p>
            <p className="text-base text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Undergraduate, Focused on Full Stack Development. Enthusiastic about building dynamic,
              responsive, and user-friendly applications that combine creativity with technical
              precision. Passionate about designing seamless digital experiences through modern
              frameworks and tools, while continuously expanding knowledge in front-end and back-end
              technologies. Driven by curiosity and a commitment to growth, with a strong interest
              in exploring emerging trends in web technologies and applying them to solve real-world
              challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-glow transition-smooth"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-smooth"
              >
                Get In Touch
              </a>
            </div>
            <div className="flex items-center gap-5 mt-10">
              <SocialIcon href="mailto:k.chamethya@gmail.com" icon={Mail} />
              <SocialIcon href="https://github.com/chamethyaY" icon={Github} />
              <SocialIcon
                href="https://www.linkedin.com/in/chamethya-yasodie-a8278a349/"
                icon={Linkedin}
              />
            </div>
          </div>

          <div className="relative mx-auto md:ml-auto">
            <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-3xl" />
            <div className="relative w-72 h-72 md:w-80 md:h-96 rounded-3xl overflow-hidden border-glow shadow-glow">
              <img
                src={portrait}
                alt="Chamethya Yasodie portrait"
                width={768}
                height={960}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Expertise" title="Core Competencies">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {competencies.map((c) => (
            <div
              key={c.title}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/60 hover:-translate-y-1 transition-smooth shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <c.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{c.title}</h3>
              <div className="flex flex-wrap gap-2">
                {c.items.map((i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* EDUCATION & CERTIFICATIONS */}
      <Section id="education" eyebrow="Background" title="Education & Certifications">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
              <GraduationCap className="text-primary" /> Education
            </h3>
            <div className="space-y-5">
              {education.map((e) => (
                <div key={e.title} className="relative pl-6 border-l-2 border-primary/40">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary shadow-glow" />
                  <div className="text-xs text-primary uppercase tracking-widest">{e.year}</div>
                  <div className="font-semibold mt-1">{e.title}</div>
                  <div className="text-sm text-muted-foreground">{e.place}</div>
                  <p className="text-sm text-muted-foreground mt-2">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold">
                <Award className="text-primary" /> Certifications
              </h3>
              <button
                onClick={() => {
                  setSelectedCredential(null);
                  setCredentialsOpen(true);
                }}
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:border-primary/60 flex items-center justify-center transition-smooth"
                title="View Credentials"
              >
                <Award className="w-5 h-5 text-primary" />
              </button>
            </div>
            <div className="space-y-3">
              {certifications.map((c) => (
                <div
                  key={c.title}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/60 transition-smooth"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-medium">{c.title}</div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedCredential(c);
                      setCredentialsOpen(true);
                    }}
                    className="inline-flex items-center justify-center gap-2 self-start rounded-lg border border-primary/30 px-4 py-2 text-sm font-medium text-primary hover:border-primary hover:bg-primary/10 transition-smooth"
                  >
                    Credentials <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="Selected Work" title="Featured Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/60 transition-smooth shadow-card"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Get in touch" title="Let's Work Together">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind or just want to say hello? I'd love to hear from you. Reach out
              through the form or any of the channels below.
            </p>
            <div className="space-y-4">
              <ContactRow icon={Mail} label="Email" value="k.chamethya@gmail.com" />
              <ContactRow icon={Phone} label="Phone" value="0784537626" />
              <ContactRow icon={MapPin} label="Location" value="Nugegoda, Colombo" />
            </div>
            <div className="flex gap-4 pt-2">
              <SocialIcon href="mailto:k.chamethya@gmail.com" icon={Mail} />
              <SocialIcon href="https://github.com/chamethyaY" icon={Github} />
              <SocialIcon
                href="https://www.linkedin.com/in/chamethya-yasodie-a8278a349/"
                icon={Linkedin}
              />
            </div>
          </div>

          <form
            onSubmit={submit}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Your name"
                required
              />
              <Field
                label="Contact"
                value={form.contact}
                onChange={(v) => setForm({ ...form, contact: v })}
                placeholder="Email or phone"
                required
              />
            </div>
            <Field
              label="Subject"
              value={form.subject}
              onChange={(v) => setForm({ ...form, subject: v })}
              placeholder="What's this about?"
              required
            />
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                required
                rows={5}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-smooth resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-glow transition-smooth"
            >
              {sent ? (
                "Message Sent ✓"
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border mt-10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Chamethya Yasodie. Crafted with passion.</div>
            <div className="flex gap-4">
            <a href="mailto:k.chamethya@gmail.com" className="hover:text-primary transition-smooth">
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/chamethyaY"
              className="hover:text-primary transition-smooth"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/chamethya-yasodie-a8278a349/"
              className="hover:text-primary transition-smooth"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

      {/* CREDENTIALS MODAL */}
      <Dialog open={credentialsOpen} onOpenChange={setCredentialsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Award className="text-primary" />
              {selectedCredential?.title ?? "Credentials"}
            </DialogTitle>
          </DialogHeader>
          {selectedCredential?.image ? (
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-3">
                <img
                  src={selectedCredential.image}
                  alt={selectedCredential.title}
                  className="w-full max-h-[70vh] object-contain rounded-lg"
                />
              </div>
              <p className="text-sm text-muted-foreground">{selectedCredential.title}</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {certifications.map((c, index) => (
                <div
                  key={index}
                  className="p-4 bg-card border border-border rounded-lg hover:border-primary/60 transition-smooth"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm font-medium leading-relaxed">{c.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="text-primary text-xs uppercase tracking-[0.3em] mb-3">{eyebrow}</div>
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          <div className="h-1 w-16 bg-primary rounded-full mt-4 shadow-glow" />
        </div>
        {children}
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-glow transition-smooth"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type="text"
        required={required}
        maxLength={255}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-smooth"
      />
    </div>
  );
}
