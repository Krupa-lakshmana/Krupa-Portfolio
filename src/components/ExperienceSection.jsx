import { useEffect, useRef, useState } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Cloud Software Engineer",
    company: "Acmegrade",
    location: "Bangalore, India",
    dates: "Jan 2023 – Aug 2024",
    points: [
      "I worked on building production-grade backend services in Python that powered AI/ML data ingestion pipelines, where I focused on resource estimation (CPU, memory, I/O) and system behavior under real-world concurrent workloads.",
      "A big part of my role was benchmarking and optimizing data pipelines, where I improved overall performance, throughput, and reliability by ~30% through multithreading, preprocessing optimization, and execution tuning.",
      "I also owned observability and documentation, setting up monitoring pipelines and writing architecture docs and runbooks, which helped the team debug faster and significantly reduced production incident resolution time (MTTR).",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Tech Fortune",
    location: "Bangalore, India",
    dates: "Sep 2022 – Jan 2023",
    points: [
      "I built and optimized low-latency AI inference and retrieval services, working across Python-based ML pipelines that supported 100+ concurrent users in early-stage production environments.",
      "I was responsible for estimating compute, memory, and storage requirements for large-scale NLP workflows processing millions of documents, and used benchmarking experiments to reduce end-to-end processing time by ~78%.",
      "Alongside model work, I developed automation and analysis tools and wrote clear technical documentation, helping align ML experimentation with production-ready engineering practices.",
    ],
  },
];

export const ExperienceSection = () => {
  // ✅ keep same fade style as your other sections
  const wrapRef = useRef(null);
  const [style, setStyle] = useState({ opacity: 1, transform: "translateY(0px)" });

  useEffect(() => {
    let raf = 0;
    const range = 320;
    const distance = 40;

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

  return (
    <section id="experience" className="py-24 px-4 relative scroll-mt-28">
      <div className="container mx-auto max-w-5xl" ref={wrapRef} style={style}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Professional <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <article   
                key={`${exp.company}-${exp.role}`}
                className="
                group relative rounded-2xl border border-border/60
                bg-card/40 backdrop-blur
                p-6 sm:p-7
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-2xl
                hover:border-primary/50 hover:bg-primary/5
                "
            >
              <div
                className="
                pointer-events-none absolute inset-0 rounded-2xl
                ring-0 ring-primary/0
                group-hover:ring-2 group-hover:ring-primary/30
                transition-all duration-300
                "
                />
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <h3 className="text-xl font-semibold leading-snug">
                      {exp.role} — <span className="text-primary">{exp.company}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.location} · {exp.dates}
                    </p>
                  </div>

                  {/* Talk-style 3 points */}
                  <div className="mt-4 space-y-3 text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
                    {exp.points.map((p, idx) => (
                      <p key={idx} className="group-hover:text-foreground/80 transition-colors">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
