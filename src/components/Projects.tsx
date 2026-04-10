import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "Interactive dashboard for monitoring business metrics with live data visualization and alerts",
    tech: ["React", "Python", "FastAPI", "Redis"],
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    title: "Mobile Task Manager",
    description: "Cross-platform mobile app for team collaboration and project management",
    tech: ["Flutter", "Go", "MongoDB"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "CMS Integration Suite",
    description: "Custom plugins and themes for WordPress, Shopify, and Magento platforms",
    tech: ["PHP", "WordPress", "Shopify", "Magento"],
    gradient: "from-secondary/20 to-secondary/5",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 animate-slide-up">
          <h2 className="font-heading text-5xl md:text-6xl font-bold gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and technical excellence
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="glass glass-hover group glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="font-heading text-2xl flex items-start justify-between gap-4">
                  <span>{project.title}</span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`glass glass-hover bg-gradient-to-br ${project.gradient}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}