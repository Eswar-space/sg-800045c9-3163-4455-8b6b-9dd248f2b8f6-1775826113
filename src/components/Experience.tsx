import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description: "Leading development of enterprise applications using Next.js, Python, and cloud infrastructure",
    achievements: [
      "Architected microservices platform serving 100K+ users",
      "Reduced deployment time by 60% with CI/CD automation",
      "Mentored team of 5 junior developers",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Digital Innovations",
    period: "2021 - 2023",
    description: "Built scalable web applications and APIs for e-commerce clients",
    achievements: [
      "Developed custom Shopify integrations processing $2M+ annually",
      "Optimized database queries improving response times by 40%",
      "Implemented real-time features with WebSockets",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Creative Web Studio",
    period: "2019 - 2021",
    description: "Created responsive interfaces and interactive user experiences",
    achievements: [
      "Built 20+ client websites with React and Vue",
      "Improved page load speeds by 50% through optimization",
      "Established component library for team consistency",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 animate-slide-up">
          <h2 className="font-heading text-5xl md:text-6xl font-bold gradient-text">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey and key achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

          {experiences.map((exp, index) => (
            <div
              key={exp.role}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow" />

              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} ml-8 md:ml-0`}>
                <Card className="glass glass-hover glow group">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-primary mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}