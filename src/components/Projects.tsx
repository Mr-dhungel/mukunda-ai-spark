import { Rocket, Code2, Database, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const Projects = () => {
  const projectCategories = [
    {
      icon: Code2,
      title: "AI/ML Projects",
      description: "Machine learning models and AI applications",
      status: "Coming Soon",
    },
    {
      icon: Rocket,
      title: "Web Development",
      description: "Full-stack web applications and tools",
      status: "Coming Soon",
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Data visualization and insights projects",
      status: "Coming Soon",
    },
  ];

  return (
    <section id="projects" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      <div className="absolute top-20 left-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-md border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">My Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              My <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Exciting projects currently in development. Stay tuned for updates!
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {projectCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 shadow-elegant hover:shadow-glow transition-smooth border-2 border-dashed border-primary/30 bg-card/70 backdrop-blur-md group cursor-pointer relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-smooth"></div>
                
                <div className="relative space-y-6">
                  <div className="p-4 rounded-2xl bg-secondary w-fit group-hover:scale-110 transition-spring">
                    <category.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-semibold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>

                  <div className="pt-4">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      {category.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Message */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Card className="inline-block p-6 shadow-elegant border-none bg-secondary/70 backdrop-blur-md">
              <p className="text-foreground/80">
                <span className="font-semibold text-primary">Working on exciting projects!</span> Check back soon to see my latest work in AI/ML, web development, and data analysis.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
