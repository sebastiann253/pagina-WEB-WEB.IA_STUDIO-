import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Building2, Code2, Instagram, LayoutTemplate,
  Mail, MessageCircle, PenTool, RefreshCw, Rocket, Search, Menu, X,
} from "lucide-react";

/* ---------- Datos de contacto ---------- */
const BRAND = "WEB.AI STUDIO";
const WHATSAPP = "56942923741";
const EMAIL = "sebastianveracanales1702@gmail.com";
const INSTAGRAM_URL = "https://instagram.com/web.ia_studio"; // ajusta si tu usuario es otro
const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
const WA_QUOTE = waLink("Hola, me interesa cotizar una página web para mi negocio");

/* ---------- Contenido ---------- */
const services = [
  { icon: LayoutTemplate, title: "Landing Pages de Alta Conversión", text: "Una página enfocada en un solo objetivo: captar contactos y vender tu servicio. Mensaje claro, diseño limpio y un llamado a la acción imposible de ignorar.", span: "md:col-span-4" },
  { icon: Building2, title: "Sitios Corporativos y Marca Personal", text: "Diseño a medida, rápido y optimizado para móviles, que transmite confianza desde el primer segundo.", span: "md:col-span-2" },
  { icon: RefreshCw, title: "Rediseño Web", text: "Si tu web actual no convierte, la reconstruimos con mejor estructura, velocidad y estética para que trabaje a tu favor.", span: "md:col-span-6" },
];

const projects = [
  { name: "Casa Marea", tag: "Restaurante", bg: "from-[#0f3d44] to-[#e8d8b8]", dark: false },
  { name: "Huellas", tag: "Veterinaria", bg: "from-[#1f5a3d] to-[#d7ead9]", dark: false },
  { name: "Salón Aurora", tag: "Peluquería", bg: "from-[#6b2d48] to-[#f3d3dc]", dark: false },
  { name: "iPhone Luxe", tag: "Tienda online", bg: "from-[#ffffff] to-[#d9d6d0]", dark: true },
];

const steps = [
  { icon: Search, title: "Descubrimiento y estrategia", text: "Entendemos tu negocio, tu cliente ideal y tus objetivos." },
  { icon: PenTool, title: "Diseño UI/UX", text: "Prototipo visual moderno y pensado para convertir." },
  { icon: Code2, title: "Desarrollo y optimización", text: "Código limpio, ultra rápido y 100% adaptable a móviles." },
  { icon: Rocket, title: "Lanzamiento y entrega", text: "Tu web lista para recibir clientes." },
];

/* ---------- Utilidades ---------- */
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}>
      {children}
    </div>
  );
}

const Eyebrow = ({ children }) => (
  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{children}</p>
);

const Cta = ({ href, children, ghost }) => (
  <a href={href} target="_blank" rel="noreferrer"
    className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
      ghost ? "border border-line text-bone hover:border-accent/60 hover:bg-white/5"
            : "bg-accent text-white shadow-[0_8px_30px_-8px_rgba(59,107,255,0.7)] hover:-translate-y-0.5 hover:bg-[#5580ff]"}`}>
    {children}
  </a>
);

/* ---------- Secciones ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [["Servicios", "#servicios"], ["Portafolio", "#portafolio"], ["Proceso", "#proceso"]];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-sm font-extrabold tracking-[0.18em]">
          {BRAND}<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-sm text-bone/70 transition-colors hover:text-white">{l}</a>
          ))}
          <a href={WA_QUOTE} target="_blank" rel="noreferrer"
            className="rounded-full border border-line px-4 py-2 text-sm font-medium transition hover:border-accent hover:bg-accent/10">
            Cotizar
          </a>
        </nav>
        <button aria-label="Menú" className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-4 border-t border-line bg-ink px-5 py-5 md:hidden">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="text-bone/80">{l}</a>
          ))}
          <a href={WA_QUOTE} target="_blank" rel="noreferrer" className="font-semibold text-accent">Cotizar mi proyecto</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-24 pt-36 md:pb-32 md:pt-44">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{ backgroundImage: "linear-gradient(#26262B 1px,transparent 1px),linear-gradient(90deg,#26262B 1px,transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at 50% 0%, #000 20%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, #000 20%, transparent 70%)" }} />
      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-violet/20 blur-[110px]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card/70 px-4 py-1.5 text-xs text-bone/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Estudio de diseño web · Chile
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Webs estratégicas que convierten{" "}
            <span className="bg-gradient-to-r from-accent to-violet bg-clip-text text-transparent">visitas en clientes</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-bone/70 md:text-lg">
            Combino diseño moderno, velocidad y estrategia comercial para que tu negocio tenga una web a la altura de tu talento y trabaje para ti las 24 horas.
          </p>
        </Reveal>
        <Reveal delay={240} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Cta href={WA_QUOTE}>Cotizar mi proyecto <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Cta>
          <a href="#portafolio" className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3.5 text-sm font-semibold transition hover:border-accent/60 hover:bg-white/5">Ver portafolio</a>
        </Reveal>
        <Reveal delay={320}>
          <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs uppercase tracking-widest text-bone/45">
            <li>Diseño a medida</li><li>Carga ultra rápida</li><li>100% móvil</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal className="mb-12 max-w-2xl">
        <Eyebrow>Servicios</Eyebrow>
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">Lo que hago para que vendas más</h2>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-6">
        {services.map(({ icon: Icon, title, text, span }, i) => (
          <Reveal key={title} delay={i * 90} className={span}>
            <article className="group h-full rounded-3xl border border-line bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_50px_-20px_rgba(59,107,255,0.45)] md:p-9">
              <span className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-ink text-accent transition group-hover:border-accent/60">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <h3 className="font-display text-xl font-bold md:text-2xl">{title}</h3>
              <p className="mt-3 max-w-xl leading-relaxed text-bone/65">{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portafolio" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal className="mb-12 max-w-2xl">
        <Eyebrow>Portafolio</Eyebrow>
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">Proyectos destacados</h2>
        <p className="mt-4 text-bone/60">Demostraciones conceptuales por rubro, para que veas cómo podría verse tu web.</p>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <article className="group overflow-hidden rounded-3xl border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
              <div className="p-4 pb-0">
                <div className="overflow-hidden rounded-t-xl border border-b-0 border-line bg-ink">
                  <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
                    <i className="h-2 w-2 rounded-full bg-line" /><i className="h-2 w-2 rounded-full bg-line" /><i className="h-2 w-2 rounded-full bg-line" />
                  </div>
                  <div className={`relative flex h-44 items-end bg-gradient-to-br ${p.bg} p-5 transition-transform duration-500 group-hover:scale-[1.03]`}>
                    <span className={`font-display text-2xl font-extrabold tracking-tight ${p.dark ? "text-neutral-900" : "text-white"}`}>{p.name}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="font-display text-lg font-bold">{p.name}</h3>
                  <p className="text-sm text-bone/55">{p.tag} · Demostración conceptual</p>
                </div>
                <ArrowUpRight size={20} className="text-bone/40 transition group-hover:text-accent" />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal className="mb-12 max-w-2xl">
        <Eyebrow>Proceso</Eyebrow>
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">Cómo trabajamos, en 4 pasos</h2>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 90}>
            <article className="h-full rounded-3xl border border-line bg-card p-7 transition hover:border-accent/50">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-4xl font-extrabold text-line">0{i + 1}</span>
                <Icon size={20} strokeWidth={1.75} className="text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bone/65">{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-5 pb-24 pt-12">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-line bg-card px-6 py-16 text-center md:py-24">
          <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full bg-accent/25 blur-[100px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold tracking-tight md:text-5xl">
              Da el salto digital hoy mismo
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-bone/65">
              Cuéntame sobre tu negocio y te propongo una web pensada para atraer y convertir a tus clientes.
            </p>
            <div className="mt-9 flex justify-center">
              <Cta href={WA_QUOTE}><MessageCircle size={17} /> Cotizar por WhatsApp</Cta>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-sm font-extrabold tracking-[0.18em]">{BRAND}<span className="text-accent">.</span></p>
          <p className="mt-1 text-xs text-bone/45">© 2026 {BRAND}. Todos los derechos reservados.</p>
        </div>
        <div className="flex items-center gap-3">
          {[[INSTAGRAM_URL, Instagram, "Instagram"], [`mailto:${EMAIL}`, Mail, "Correo"], [WA_QUOTE, MessageCircle, "WhatsApp"]].map(([href, Icon, label]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-bone/70 transition hover:border-accent hover:text-white">
              <Icon size={17} strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
