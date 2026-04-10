import { Award, Code, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: Code,
    value: "50+",
    label: "Projects Completed",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Users,
    value: "30+",
    label: "Happy Clients",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Award,
    value: "5+",
    label: "Years Experience",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Zap,
    value: "100%",
    label: "Success Rate",
    gradient: "from-secondary/20 to-secondary/5",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 animate-slide-up">
          <h2 className="font-heading text-5xl md:text-6xl font-bold gradient-text">
            Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence and measurable results
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="glass glass-hover group glow text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-4">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="font-heading text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}