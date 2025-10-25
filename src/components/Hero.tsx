import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Brain, TrendingUp, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "3+", label: "Core Skills" },
    { value: "∞", label: "Ideas to Build" },
  ];

  const floatingBadges = [
    { icon: Code2, label: "Python", position: "top-10 left-0", delay: "0s" },
    { icon: Brain, label: "AI/ML", position: "top-32 right-0", delay: "0.3s" },
    { icon: TrendingUp, label: "Data", position: "bottom-20 left-10", delay: "0.6s" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-subtle">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Welcome Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-md border border-primary/20 shadow-card animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-secondary-foreground">
                Welcome to my portfolio
              </span>
            </div>

            {/* Main Heading */}
            <div 
              className="space-y-2 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
                Hello! I'm{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-gradient">
                    Mukunda Dhungel
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 gradient-primary rounded-full"></span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-2xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              AI/ML Enthusiast | Problem Solver | Creative Thinker
            </p>

            {/* Description */}
            <p 
              className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Passionate about exploring how technology can make life smarter and simpler. 
              I love diving into AI, web development, and data analysis to bring innovative ideas to life.
            </p>

            {/* Stats */}
            <div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="px-6 py-3 bg-card/80 backdrop-blur-md border-primary/20 shadow-card hover:shadow-elegant transition-smooth cursor-default"
                >
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#about")}
                className="gradient-primary hover:opacity-90 transition-smooth shadow-elegant hover:shadow-glow group"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth backdrop-blur-sm"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Profile Image with Floating Badges */}
          <div 
            className="flex-1 flex justify-center lg:justify-end animate-scale-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
              {/* Floating Skill Badges */}
              {floatingBadges.map((badge, index) => (
                <Card
                  key={index}
                  className={`absolute ${badge.position} hidden lg:flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-md border-primary/20 shadow-card hover:shadow-elegant transition-smooth cursor-pointer group animate-float z-10`}
                  style={{ animationDelay: badge.delay }}
                >
                  <div className="p-2 rounded-lg gradient-primary group-hover:scale-110 transition-smooth">
                    <badge.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium">{badge.label}</span>
                </Card>
              ))}

              {/* Main Image Container */}
              <div className="relative w-full h-full">
                {/* Glow Effect */}
                <div className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-30 animate-pulse"></div>
                
                {/* Rotating Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: "20s" }}></div>
                
                {/* Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-glow border-4 border-primary/20 bg-gradient-to-br from-primary/10 to-primary-glow/10 backdrop-blur-sm">
                  <img
                    src={profileImage}
                    alt="Mukunda Dhungel"
                    className="w-full h-full object-cover hover:scale-110 transition-spring"
                  />
                </div>

                {/* Decorative Dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full gradient-primary animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full gradient-primary animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow cursor-pointer"
        onClick={() => scrollToSection("#about")}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
          <span className="text-xs font-medium">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
