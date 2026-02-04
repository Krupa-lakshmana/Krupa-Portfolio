import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { MapPin } from "lucide-react";
import { cn } from '../lib/utils';

export const ContactSection = () => {
  const formRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://formspree.io/f/xrbkobpe", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSubmitted(true);
        formRef.current.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl" ref={wrapRef} style={style}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 justify-center">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"></h4>
                  <a
                    href="mailto:lakshmana.k@northeastern.edu"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    lakshmana.k@northeastern.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"></h4>
                  <a
                    href="tel:+8578676670"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (857) 867-6670
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"></h4>
                  <span className="text-muted-foreground">Boston , MA, USA</span>
                </div>
              </div>
            </div>

            <div className="pt-8 text-center">
              <h4>
                I’m currently looking for Full-time Software , my inbox is always open.
                Whether you have a question or interest in my work, I’ll try my best to get back to you as soon as possible!
              </h4>
              <h4 className="text-2xl font-semibold mt-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/krupa-lakshmana-a420a225b/" target="_blank" rel="noreferrer">
                  <Linkedin />
                </a>
                <a href="https://github.com/Krupa-lakshmana" target="_blank" rel="noreferrer">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name.."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello I'd like to talk about..."
                />
              </div>

              <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                Send Message <Send size={16}/>
              </button>

              {isSubmitted && (
                <p className="text-green-600 text-sm text-center">✅ Message sent successfully!</p>
              )}
              {error && (
                <p className="text-red-600 text-sm text-center">❌ Something went wrong. Please try again later.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
