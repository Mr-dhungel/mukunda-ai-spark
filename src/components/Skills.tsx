import { Code2, Brain, BarChart3, Loader } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const primarySkills = [
    {
      icon: Code2,
      title: "Python",
      description: "Proficient in Python for AI/ML development and automation",
      level: 85,
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Experience with ML algorithms and model development",
      level: 80,
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Creating insightful visualizations and dashboards",
      level: 75,
    },
  ];

  const learningSkills = [
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Web Development (React, TypeScript)",
    "Cloud Services (AWS, GCP)",
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              My <span className="text-primary">Skills</span>
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technical expertise and tools I work with
            </p>
          </div>

          {/* Primary Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {primarySkills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 shadow-card hover:shadow-elegant transition-smooth border-none bg-card group cursor-pointer"
              >
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl gradient-primary w-fit group-hover:scale-110 transition-spring">
                    <skill.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-semibold">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="font-medium text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-primary transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Learning in Progress */}
          <Card className="p-6 md:p-8 shadow-card border-none bg-card">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-secondary">
                <Loader className="w-6 h-6 text-secondary-foreground animate-spin" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-semibold mb-2">
                    Learning in Progress
                  </h3>
                  <p className="text-muted-foreground">
                    Continuously expanding my skill set with new technologies
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {learningSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
