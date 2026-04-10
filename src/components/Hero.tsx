import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight">
            Eswar Chinthakayala
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Full Stack Developer
          </p>
        </div>

        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Building robust web applications with modern technologies. Experienced in both frontend and backend development, with expertise across multiple tech stacks.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Button size="lg" className="gap-2">
            <Mail className="w-4 h-4" />
            Get in Touch
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Github className="w-4 h-4" />
            GitHub
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}