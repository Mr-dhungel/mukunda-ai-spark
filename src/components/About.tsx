import { GraduationCap, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Bio */}
          <Card className="p-6 md:p-8 shadow-card hover:shadow-elegant transition-smooth border-none bg-card">
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
              I'm <span className="font-semibold text-primary">Mukunda Dhungel</span>, a passionate AI/ML enthusiast with a creative spark for problem-solving and innovation. I love exploring how technology can make life smarter and simpler. Alongside AI, I enjoy diving into web development and data analysis, constantly learning and experimenting with new ideas to bring them to life.
            </p>
          </Card>

          {/* Education & Experience Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Education */}
            <Card className="p-6 md:p-8 shadow-card hover:shadow-elegant transition-smooth border-none bg-card group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl gradient-primary group-hover:scale-110 transition-spring">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl md:text-2xl font-display font-semibold">Education</h3>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">Technical School Leaving Certificate</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">Bachelor in Computer Engineering</p>
                      <p className="text-sm text-muted-foreground">Purwanchal School of Engineering</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Work Experience */}
            <Card className="p-6 md:p-8 shadow-card hover:shadow-elegant transition-smooth border-none bg-card group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl gradient-primary group-hover:scale-110 transition-spring">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl md:text-2xl font-display font-semibold">Experience</h3>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <p className="font-medium text-foreground">HobbyKitz</p>
                      <p className="text-sm text-muted-foreground">Over a year in eCommerce</p>
                      <ul className="text-sm text-foreground/80 space-y-1 list-disc list-inside">
                        <li>Product Listing</li>
                        <li>Blog Writing</li>
                        <li>Data Analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
