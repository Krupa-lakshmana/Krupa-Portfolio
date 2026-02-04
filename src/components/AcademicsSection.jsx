import { useEffect, useRef, useState } from "react";
import { GraduationCap, MapPin } from "lucide-react";

const academics = [
  {
    id: "ms",
    degree: "Master of Science (M.S.), Software Engineering Systems",
    school: "Northeastern University",
    schoolUrl: "https://www.northeastern.edu/",
    location: "Boston, MA",
    dates: "Sep 2024 – May 2026",
    gpaLabel: "GPA",
    gpaValue: "3.6/4.0",
    logo: "/projects/northeastern.png", // your logo path
  },
  {
    id: "be",
    degree: "Bachelor of Engineering (B.E.), Artificial Intelligence and Machine Learning",
    school: "Don Bosco Institute of Technology",
    schoolUrl: "https://www.bmsce.ac.in/", // keep your link as-is
    location: "Bengaluru, India",
    dates: "Aug 2020 – Jun 2024",
    gpaLabel: "CGPA",
    gpaValue: "8.25/10",
    logo: "/projects/donbosco.jpeg",
  },
];

export default function AcademicsSection() {
  // fade + slide like your other sections
  const wrapRef = useRef(null);
  const [style, setStyle] = useState({ opacity: 1, transform: "translateY(0px)" });

  useEffect(() => {
    let raf = 0;
    const range = 380;   // increase for slower fade
    const distance = 48; // increase for more upward slide

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

    const loop = () => { onScroll(); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="education" className="py-24 px-4 relative scroll-mt-28">
      <div className="container mx-auto max-w-5xl" ref={wrapRef} style={style}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Academic <span className="text-primary">Credentials</span>
        </h2>

        <div className="space-y-6">
          {academics.map((item) => (
            <article
              key={item.id}
              className="
                group relative overflow-hidden
                rounded-2xl border border-border/60
                bg-gradient-to-br from-primary/10 via-background to-background
                backdrop-blur
                p-5 sm:p-6
                transition
                hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.015]
                focus-within:shadow-xl focus-within:-translate-y-0.5 focus-within:scale-[1.015]
              "
              tabIndex={0}
            >
              {/* hover/focus ring */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-primary/0 group-hover:ring-2 group-hover:ring-primary/30 group-focus:ring-2 group-focus:ring-primary/30 transition" />

              <div className="flex items-start gap-4 sm:gap-6">
                {/* Logo */}
                <div className="shrink-0 grid place-items-center size-14 sm:size-16 rounded-xl bg-card border border-border">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={`${item.school} logo`}
                      className="max-h-12 sm:max-h-14 w-auto object-contain"
                    />
                  ) : (
                    <GraduationCap className="opacity-80" />
                  )}
                </div>

                {/* Middle column (fixed alignment) */}
                <div className="flex-1 min-w-0">
                  {/* Degree */}
                  <h3 className="text-base sm:text-lg font-semibold leading-snug">
                    {item.degree}
                  </h3>

                  {/* School (bigger) + Location (smaller) stacked */}
                  <div className="mt-2">
                    <a
                      href={item.schoolUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="block text-lg sm:text-xl font-semibold leading-tight text-primary hover:underline"
                    >
                      {item.school}
                    </a>
                    <div className="mt-1 inline-flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 opacity-80" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Right column: dates + GPA */}
                <div className="text-right shrink-0">
                  <div className="text-sm text-muted-foreground">{item.dates}</div>
                  <div className="mt-1 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1">
                    <span className="text-xs uppercase tracking-wide text-emerald-400/90">
                      {item.gpaLabel}:
                    </span>
                    <span className="font-semibold text-emerald-400">{item.gpaValue}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
