import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  //🧠 Core Programming & CS Skills
  { name: "Java", level: 90, category: "programming" },
  { name: "Python", level: 90, category: "programming" },
  { name: "JavaScript", level: 80, category: "programming" },
  { name: "Object-Oriented Programming (OOP)", level: 85, category: "programming" },
  { name: "Version Control", level: 80, category: "programming" },

  // Backend
  { name: "Java (Spring Boot)", level: 80, category: "backend" },
  { name: "RESTful API", level: 80, category: "backend" },
  { name: "SQL (PostgreSQL, MySQL)", level: 75, category: "backend" },
  { name: "NoSQL (MongoDB, Firebase)", level: 80, category: "backend" },
  { name: "Docker", level: 80, category: "backend" },

  // AI & Machine Learning
  { name: "Pandas, NumPy, scikit-learn, TensorFlow, Keras", level: 80, category: "AI & ML" },
  { name: "NLTK, LLM, Hugging Face Transformers", level: 70, category: "AI & ML" },
  { name: "OpenAI API, LangChain", level: 70, category: "AI & ML" },
  { name: "Matplotlib, Seaborn", level: 80, category: "AI & ML" },
  { name: "UML, ER diagrams", level: 75, category: "AI & ML" },
];

const categories = ["all", "programming", "backend", "AI & ML"];

function SkillChip({ name, level }) {
  // conic gradient ring uses level as percentage
  const ringStyle = {
    background: `conic-gradient(hsl(var(--primary)) ${level}%, rgba(255,255,255,0.08) 0)`,
  };

  return (
    <div
      className="
        group relative
        rounded-2xl border border-border/60 bg-card/70 backdrop-blur
        px-4 py-3
        transition
        hover:-translate-y-0.5 hover:shadow-xl
      "
    >
      {/* neon ring/glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-primary/0 group-hover:ring-2 group-hover:ring-primary/25 transition" />
      <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-0 blur-xl group-hover:opacity-100 transition" />

      <div className="flex items-center gap-3">
        {/* progress ring */}
        <div
          className="h-10 w-10 rounded-full p-[2px] shrink-0"
          style={ringStyle}
          aria-label={`${name} proficiency ${level}%`}
        >
          <div className="h-full w-full rounded-full bg-background/80 grid place-items-center border border-border/40">
            <span className="text-[11px] font-semibold text-foreground/90">
              {level}%
            </span>
          </div>
        </div>

        {/* skill text */}
        <div className="min-w-0">
          <p className="font-semibold text-foreground leading-snug truncate">
            {name}
          </p>
          <p className="text-xs text-muted-foreground">
            Hover to highlight
          </p>
        </div>
      </div>
    </div>
  );
}

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Optional: fade + slight slide like your other sections
  const wrapRef = useRef(null);
  const [style, setStyle] = useState({ opacity: 1, transform: "translateY(0px)" });

  useEffect(() => {
    let raf = 0;
    const range = 420;
    const distance = 36;

    const onScroll = () => {
      if (!wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (0 - rect.top) / range));
      const opacity = 1 - progress * 0.95;
      const translateY = -progress * distance;

      setStyle({
        opacity,
        transform: `translateY(${translateY}px)`,
        willChange: "opacity, transform",
        transition: "transform 60ms linear, opacity 60ms linear",
      });
    };

    const loop = () => {
      onScroll();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const filteredSkills = useMemo(() => {
    return skills
      .filter((s) => activeCategory === "all" || s.category === activeCategory)
      .sort((a, b) => b.level - a.level); // highest first
  }, [activeCategory]);

  return (
    <section id="skills" className="py-24 px-4 relative scroll-mt-28">
      <div className="container mx-auto max-w-5xl" ref={wrapRef} style={style}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          A quick snapshot of what I use most—filter by category and hover to see the glow.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm border",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary/40 shadow-[0_0_22px_rgba(139,92,246,0.35)]"
                    : "bg-background/40 text-foreground/80 border-border/60 hover:bg-primary/10 hover:border-primary/40"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skill Constellation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <SkillChip key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
};
