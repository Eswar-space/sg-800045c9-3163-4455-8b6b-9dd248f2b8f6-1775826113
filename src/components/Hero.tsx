import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
        {/* Name & Title */}
        <div className="space-y-4">
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <span className="gradient-text">Eswar</span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-primary">
            Full Stack Developer
          </p>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Crafting exceptional web experiences with modern technologies. 
          Specialized in building scalable applications from concept to deployment.
        </p>

        {/* CTA Button */}
        <div className="flex items-center justify-center pt-8">
          <Button 
            size="lg" 
            className="gap-2 glow group"
            onClick={scrollToContact}
          >
            <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Get in Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button 
            size="icon" 
            variant="ghost" 
            className="glass glass-hover rounded-full"
            asChild
          >
            <a href="https://www.linkedin.com/in/ceswar/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button 
            size="icon" 
            variant="ghost" 
            className="glass glass-hover rounded-full"
            onClick={scrollToContact}
          >
            <Mail className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
