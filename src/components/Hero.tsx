import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
        {/* Profile Photo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50 animate-pulse" />
            <Avatar className="relative w-32 h-32 border-4 border-primary/50 glow">
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-4xl font-bold">
                EC
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Name & Title */}
        <div className="space-y-4">
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <span className="gradient-text">Eswar Chinthakayala</span>
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

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
          <Button 
            size="lg" 
            className="gap-2 glow group"
            onClick={scrollToContact}
          >
            <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Get in Touch
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2 glass glass-hover"
          >
            <Download className="w-5 h-5" />
            Download CV
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button 
            size="icon" 
            variant="ghost" 
            className="glass glass-hover rounded-full"
            asChild
          >
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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