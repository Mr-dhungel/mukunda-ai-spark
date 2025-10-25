import { Sparkles, TrendingUp, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const futureServices = [
    {
      icon: Sparkles,
      title: "AI/ML Solutions",
      description: "Custom machine learning models and AI-powered applications tailored to your needs",
    },
    {
      icon: TrendingUp,
      title: "Data Analysis & Insights",
      description: "Transform your data into actionable insights with advanced analytics",
    },
    {
      icon: Zap,
      title: "Automation & Optimization",
      description: "Streamline your processes with intelligent automation solutions",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              Future <span className="text-primary">Services</span>
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building expertise to offer professional AI/ML services. Coming soon!
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {futureServices.map((service, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 shadow-card hover:shadow-elegant transition-smooth border-none bg-card group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-bl-lg">
                  Coming Soon
                </div>
                
                <div className="space-y-6 mt-4">
                  <div className="p-4 rounded-2xl gradient-primary w-fit group-hover:scale-110 transition-spring">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-semibold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Message */}
          <div className="text-center">
            <Card className="inline-block p-8 shadow-elegant border-none gradient-primary text-primary-foreground">
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-bold">Interested in collaboration?</h3>
                <p className="text-primary-foreground/90 max-w-lg">
                  I'm constantly learning and expanding my capabilities. Feel free to reach out to discuss potential projects or collaborations in AI/ML!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
