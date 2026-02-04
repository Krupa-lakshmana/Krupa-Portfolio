import { useEffect, useRef, useState } from "react";
import { BookOpen } from "lucide-react";

export const ResearchSection = () => {
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

      setStyle({
        opacity: 1 - progress * 0.95,
        transform: `translateY(${-progress * distance}px)`,
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
    <section id="research" className="py-24 px-4 relative">
      <div ref={wrapRef} style={style} className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Research & <span className="text-primary">Publications</span>
        </h2>

        <article
          className="
            group relative rounded-2xl border border-border/60
            bg-card/40 backdrop-blur
            p-6 sm:p-7
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-2xl
            hover:border-primary/50 hover:bg-primary/5
          "
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-primary/0 group-hover:ring-2 group-hover:ring-primary/30 transition-all duration-300" />

          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                CHIRO PLAY — Gesture-Based Interface
              </h3>

              <p className="text-sm text-muted-foreground mb-3">
                Published in IJCRT · 2023
              </p>

              <p className="text-sm leading-relaxed text-muted-foreground">
                Conducted research on gesture-controlled interaction systems, focusing on
                computer vision–based hand tracking and real-time input processing to enable
                touchless gameplay experiences. The work explored usability, system latency,
                and real-world interaction challenges.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
