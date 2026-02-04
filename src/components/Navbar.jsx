import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Teaching", href: "#teaching" },
{ name: "Research", href: "#research" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    // 👇 IMPORTANT: pointer-events-none prevents the full-width wrapper blocking clicks (ThemeToggle)
    <div className="fixed top-6 inset-x-0 flex justify-center z-50 pointer-events-none">
      {/* Desktop pill navbar */}
      <nav className="hidden md:flex pointer-events-auto rounded-full bg-background/70 backdrop-blur-md border border-border shadow px-6 py-2 gap-6 ring-1 ring-white/5">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary px-3 py-1.5 rounded-full transition"
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="md:hidden pointer-events-auto p-2 text-foreground absolute right-6"
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden pointer-events-auto"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-background text-foreground shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden pointer-events-auto",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-8 p-8 text-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
