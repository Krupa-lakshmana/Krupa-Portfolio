import { useEffect, useRef, useState } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Acmegrade",
    location: "Bangalore, India",
    dates: "JFeb 2024 – Aug 2024",
    points: [
      "Reduced average API latency from 220ms to 150ms by profiling the Python backend, introducing multithreading, and optimizing I/O-heavy transformation steps",
      "Built a data ingestion backend processing 2–5GB of text/log data daily, feeding ML pipelines for ~8 data scientists",
      "Cut mean time to resolution from multi-day investigations to under several hours with centralized logging and monitoring dashboards",
      "Containerized with Docker, deployed on Kubernetes with autoscaling — cut deployment time by 40%",
    ],
  },
  {
    role: "Software Engineer",
    company: "Tech Fortune",
    location: "Bangalore, India",
    dates: "May 2023 – Jan 2024",
    points: [
      "Broke a monolithic ML pipeline into independently deployable services for ingestion, embedding, inference, and evaluation",
      "Operated a low-latency inference backend handling 100+ concurrent requests with sub-200ms response time",
      "Reduced pipeline failure rate by 25% with structured error handling, retry logic, and fault isolation",
      "Built P50/P95/P99 observability dashboards tracking latency and error rates across services",
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
