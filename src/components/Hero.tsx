import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Gradient Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="space-y-4">
          <div className="inline-block">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
              Eswar Chinthakayala
            </h1>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <p className="text-xl md:text-2xl text-primary font-semibold">
              Full Stack Developer
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>

        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-medium">
          Building robust, scalable web applications with modern technologies. Experienced across the full stack—from React and Next.js to Python, Go, and cloud infrastructure.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <Button 
            size="lg" 
            className="gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            onClick={scrollToContact}
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2 border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2 border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            asChild
          >
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}