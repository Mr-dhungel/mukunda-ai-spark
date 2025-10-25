import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
              Hello! I'm{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Mukunda Dhungel
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-2xl mx-auto lg:mx-0">
              AI/ML Enthusiast | Problem Solver | Creative Thinker
            </p>

            <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto lg:mx-0">
              Passionate about exploring how technology can make life smarter and simpler. 
              I love diving into AI, web development, and data analysis to bring innovative ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#about")}
                className="gradient-primary hover:opacity-90 transition-smooth shadow-elegant group"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow border-4 border-primary/20">
                <img
                  src={profileImage}
                  alt="Mukunda Dhungel"
                  className="w-full h-full object-cover hover:scale-110 transition-spring"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
