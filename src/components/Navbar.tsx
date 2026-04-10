import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass glow py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-heading text-xl font-bold gradient-text"
        >
          Eswar.dev
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Experience
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            size="sm"
            className="glow"
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
}