import { Code2, Rocket, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 animate-slide-up">
          <h2 className="font-heading text-5xl md:text-6xl font-bold gradient-text">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with expertise across the full stack
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio */}
          <Card className="glass glass-hover glow">
            <CardContent className="p-8 space-y-4">
              <h3 className="font-heading text-2xl font-bold text-primary">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Full-stack developer with a passion for creating elegant, efficient solutions. 
                I specialize in building modern web applications using cutting-edge technologies 
                and best practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From frontend interfaces to backend architectures, I bring ideas to life with 
                clean code and thoughtful design. I thrive on solving complex problems and 
                continuously learning new technologies.
              </p>
            </CardContent>
          </Card>

          {/* Highlights */}
          <div className="space-y-4">
            <Card className="glass glass-hover group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 glow group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold mb-1">Clean Code Advocate</h4>
                  <p className="text-sm text-muted-foreground">
                    Writing maintainable, scalable code following industry best practices
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass glass-hover group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/10 glow-purple group-hover:scale-110 transition-transform">
                  <Rocket className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold mb-1">Fast Learner</h4>
                  <p className="text-sm text-muted-foreground">
                    Quickly adapting to new technologies and frameworks
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass glass-hover group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 glow group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold mb-1">Team Player</h4>
                  <p className="text-sm text-muted-foreground">
                    Collaborating effectively in agile environments
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}