import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

function LoopTypewriter({ text, typeSpeed = 20, deleteSpeed = 38, pauseAfterType = 1200, pauseAfterDelete = 350 }) {
  const [out, setOut] = useState("");
  const [mode, setMode] = useState("typing");

  useEffect(() => {
    let t;
    if (mode === "typing") {
      t = out.length < text.length
        ? setTimeout(() => setOut(text.slice(0, out.length + 1)), typeSpeed)
        : setTimeout(() => setMode("pausingAfterType"), pauseAfterType);
    } else if (mode === "pausingAfterType") {
      t = setTimeout(() => setMode("deleting"), 0);
    } else if (mode === "deleting") {
      t = out.length > 0
        ? setTimeout(() => setOut(text.slice(0, out.length - 1)), deleteSpeed)
        : setTimeout(() => setMode("pausingAfterDelete"), pauseAfterDelete);
    } else if (mode === "pausingAfterDelete") {
      t = setTimeout(() => setMode("typing"), 0);
    }
    return () => clearTimeout(t);
  }, [out, mode, text, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="relative z-10 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent font-extrabold">
        {out}
      </span>
      <span
        className="pointer-events-none absolute -inset-x-2 -inset-y-1 z-0 rounded-xl opacity-40 dark:opacity-60"
        style={{
          background: "linear-gradient(90deg,rgba(255,255,255,.08),rgba(255,255,255,.04),rgba(255,255,255,.08))",
          filter: "blur(10px)",
        }}
      />
    </span>
  );
}

function RotatingTypewriterPill({ items, typeSpeed = 55, deleteSpeed = 28, pauseAfterType = 1000, pauseAfterDelete = 250 }) {
  const [idx, setIdx] = useState(0);
  const [out, setOut] = useState("");
  const [mode, setMode] = useState("typing");
  const text = items[idx];

  useEffect(() => {
    let t;
    if (mode === "typing") {
      t = out.length < text.length
        ? setTimeout(() => setOut(text.slice(0, out.length + 1)), typeSpeed)
        : setTimeout(() => setMode("pausingAfterType"), pauseAfterType);
    } else if (mode === "pausingAfterType") {
      t = setTimeout(() => setMode("deleting"), 0);
    } else if (mode === "deleting") {
      t = out.length > 0
        ? setTimeout(() => setOut(text.slice(0, out.length - 1)), deleteSpeed)
        : setTimeout(() => setMode("pausingAfterDelete"), pauseAfterDelete);
    } else if (mode === "pausingAfterDelete") {
      t = setTimeout(() => { setIdx(p => (p + 1) % items.length); setMode("typing"); }, 0);
    }
    return () => clearTimeout(t);
  }, [out, mode, text, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete, items.length]);

  return <span className="whitespace-nowrap"><span className="text-foreground/90">{out}</span></span>;
}

export const HeroSection = () => {
  const headshotSrc = "/projects/Headshot.jpeg";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "linear-gradient(to right,rgba(99,102,241,.35) 1px,transparent 1px),linear-gradient(to bottom,rgba(99,102,241,.35) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(circle at 50% 40%,black 40%,transparent 72%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 40%,black 40%,transparent 72%)",
        }}
      />

      <div className="container mx-auto max-w-6xl z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <div className="space-y-6">

              {/* ✅ NEW: Open-to-work status badge */}
              <div className="flex justify-center md:justify-start">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium tracking-wide">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Open to Full-Time Opportunities
                </span>
              </div>

              {/* Everything below is exactly as before */}
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                <div className="text-foreground/90">Hi, I'm</div>
                <div className="mt-2">
                  <LoopTypewriter text="Krupa Lakshmana" typeSpeed={30} pauseAfterType={1200} pauseAfterDelete={400} />
                </div>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
                I'm passionate about building intelligent systems that learn, adapt,
                and solve real-world challenges.
                <br />
                Combining software engineering with machine learning, I craft
                solutions that think ahead.
              </p>

              <div className="pt-6 flex items-center gap-5 justify-center md:justify-start">
                <a href="#projects" className="cosmic-button">View my Work</a>

                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/in/krupa-lakshmana-a420a225b/" target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-full border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
                  </a>
                  <a href="https://github.com/Krupa-lakshmana" target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-full border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                    <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
                  </a>
                  {/* ✅ FIXED: mailto: prefix was missing in original */}
                  <a href="mailto:lakshmana.k@northeastern.edu"
                    className="p-2 rounded-full border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                    <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — untouched */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full translate-x-4 translate-y-4 border border-primary/20 bg-white/5 backdrop-blur-sm" />
              <div className="absolute -inset-12 rounded-full bg-primary/20 blur-3xl opacity-55 transition-opacity duration-300 group-hover:opacity-80" />

              <div className="pointer-events-none absolute inset-0 rounded-full border-2 border-purple-600 opacity-0 shadow-[0_0_25px_rgba(124,58,237,0.5)]"
                style={{ animation: "pulseRing 2.8s ease-out infinite" }} />
              <div className="pointer-events-none absolute inset-0 rounded-full border-2 border-cyan-500 opacity-0 shadow-[0_0_25px_rgba(6,182,212,0.45)]"
                style={{ animation: "pulseRing 2.8s ease-out infinite", animationDelay: "1.4s" }} />

              <div className="relative p-[4px] rounded-full bg-gradient-to-tr from-primary via-indigo-500 to-cyan-400 shadow-lg">
                <div className="rounded-full bg-background p-[3px]">
                  <div className="relative w-72 h-72 md:w-[340px] md:h-[340px] rounded-full overflow-hidden">
                    <img
                      src={headshotSrc}
                      alt="Krupa Lakshmana"
                      className="absolute inset-0 w-full h-full object-cover scale-[1.06] -translate-y-5 md:-translate-y-6 transition-transform duration-300 group-hover:scale-[1.08]"
                      loading="eager"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
                <div className="px-4 py-2 rounded-full border border-primary/20 bg-background/70 backdrop-blur-md text-xs md:text-sm text-muted-foreground shadow-sm">
                  <RotatingTypewriterPill
                    items={["'Software Development Engineer'", "'Backend Engineer'", "'AI/ML Engineer'"]}
                    typeSpeed={55} deleteSpeed={28} pauseAfterType={1100} pauseAfterDelete={250}
                  />
                </div>
              </div>

              <style>{`
                @keyframes pulseRing {
                  0%   { transform: scale(1);    opacity: 0;   }
                  15%  {                          opacity: 0.8; }
                  70%  {                          opacity: 0.25;}
                  100% { transform: scale(1.25); opacity: 0;   }
                }
              `}</style>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};