import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Trophy, Lightbulb } from "lucide-react";
import whyChooseUsImage from "@/assets/why-choose-us.jpg";

const WhyChooseUs = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Over 500+ successful projects delivered by our students",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Industry professionals guide every project from concept to completion",
    },
    {
      icon: Trophy,
      title: "Award-Winning Projects",
      description: "Our projects consistently win state and national level competitions",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Cutting-edge technology solutions for real-world problems",
    },
  ];

  return (
    <section className="py-16 bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes XYZ College the premier destination for innovative project development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <img 
              src={whyChooseUsImage} 
              alt="Why Choose Us" 
              className="rounded-lg shadow-card w-full h-auto"
            />
          </div>

          {/* Right side - Features */}
          <div className="order-1 lg:order-2">
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                size="lg" 
                className="bg-primary-gradient hover:opacity-90 transition-opacity px-8"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;