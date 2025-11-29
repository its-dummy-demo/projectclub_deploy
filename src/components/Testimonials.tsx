import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      department: "Computer Science",
      project: "IoT Smart Home System",
      rating: 5,
      text: "Working on the IoT project at XYZ College was an incredible experience. The mentorship was outstanding and the resources provided helped me create a project that won the state-level competition.",
    },
    {
      name: "Rajesh Kumar",
      department: "Data Science",
      project: "ML-based Stock Prediction",
      rating: 5,
      text: "The machine learning project I developed here not only enhanced my technical skills but also helped me secure a job at a top tech company. The practical approach to learning is exceptional.",
    },
    {
      name: "Anita Patel",
      department: "Web Development",
      project: "E-commerce Platform",
      rating: 5,
      text: "The web application project was challenging yet rewarding. The faculty support and peer collaboration made it possible to build something truly innovative and industry-ready.",
    },
    {
      name: "Vikram Singh",
      department: "Mobile Development",
      project: "Health Monitoring App",
      rating: 5,
      text: "Developing a mobile app here gave me hands-on experience with cutting-edge technologies. The project management approach and technical guidance were world-class.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Reviews & Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our successful students who transformed their ideas into impactful projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Quote className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.department}</p>
                      <p className="text-sm text-primary font-medium">Project: {testimonial.project}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Success Stories</h3>
            <p className="text-muted-foreground mb-6">
              Ready to start your own innovative project? Join hundreds of students who have transformed their ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;