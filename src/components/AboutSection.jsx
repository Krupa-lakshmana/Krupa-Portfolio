import { useEffect, useRef, useState } from "react";
import { Cloud, BrainCircuit, ServerCog } from "lucide-react";

export const AboutSection = () => {
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

    const loop = () => { onScroll(); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);

    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl" ref={wrapRef} style={style}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* ✅ CHANGED: Removed "Aspiring" — leads with disciplines + experience level */}
            <h3 className="text-2xl font-semibold">
              👩🏻‍💻 Software Engineer | Backend · GenAI · Cloud Systems
            </h3>

            {/* ✅ CHANGED: Leads with experience + production impact, not student status */}
            <p className="text-muted-foreground">
              I'm a Software Engineer with 2+ years of experience building
              production-grade backend systems, GenAI pipelines, and cloud-native
              infrastructure across both cloud and on-prem environments. I focus on
              distributed systems that are fault-tolerant, observable, and built to
              handle real workloads.
            </p>

            {/* ✅ CHANGED: Confident, direct CTA — not "lookout" or "keep learning" */}
            <p className="text-muted-foreground">
              I'm actively seeking full-time <strong className="text-primary">Software Engineer — Backend</strong> roles.
              If you're building systems that need to be fast, reliable, and scalable — let's talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">Get In Touch</a>
              <a
                href=" "
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ServerCog className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Engineer</h4>
                  <p className="text-muted-foreground">
                    Designing distributed, fault-tolerant backend systems with
                    high-throughput APIs, event-driven architecture, and production-grade observability.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud & Infrastructure</h4>
                  <p className="text-muted-foreground">
                    Deploying containerized workloads on AWS and Kubernetes with CI/CD
                    pipelines, CloudWatch monitoring, and infrastructure automation.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI-Powered Systems</h4>
                  <p className="text-muted-foreground">
                    Integrating GenAI and ML capabilities into backend services —
                    RAG pipelines, vector search, and LLM inference at production scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};