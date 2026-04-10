import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend Technologies",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Vue",
      "Bootstrap",
    ],
    icon: "🎨",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Backend Technologies",
    skills: [
      "Node.js",
      "NestJS",
      "Python",
      "FastAPI",
      "Django",
      "Go",
      "Spring Boot",
      "PHP",
    ],
    icon: "⚙️",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    title: "Databases & Caching",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    icon: "💾",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "DevOps & Infrastructure",
    skills: ["Docker", "Kubernetes"],
    icon: "🚀",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    title: "Mobile Development",
    skills: ["Flutter", "React Native", "Kotlin"],
    icon: "📱",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "CMS & E-Commerce",
    skills: ["WordPress", "Magento", "Shopify"],
    icon: "🛍️",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    title: "Design & UI/UX",
    skills: ["UI/UX", "Responsive Design", "Web Design"],
    icon: "✨",
    gradient: "from-primary/20 to-primary/5",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 animate-slide-up">
          <h2 className="font-heading text-5xl md:text-6xl font-bold gradient-text">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across modern technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass glass-hover group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-heading text-xl">
                  <div className={`text-3xl p-2 rounded-xl bg-gradient-to-br ${category.gradient} group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="glass glass-hover text-sm px-3 py-1.5 font-medium"
                    >
                      {skill}
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