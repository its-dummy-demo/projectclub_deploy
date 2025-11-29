import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import backgroundImage from "@/assets/college-background.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Logo and Description */}
          <div className="text-white">
            <div className="flex items-center mb-6">
              <img 
                src={logo} 
                alt="XYZ College Logo" 
                className="h-20 w-20 object-contain mr-4"
              />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">XYZ College</h1>
                <p className="text-xl text-gray-200">Project Company</p>
              </div>
            </div>
            
            <p className="text-lg mb-8 leading-relaxed max-w-md">
              Empowering students with cutting-edge technology projects. From Data Science to IoT, 
              Machine Learning to Mobile Apps - we turn innovative ideas into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => navigate("/projects")}
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8"
              >
                Explore Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate("/contact")}
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right side - Additional content space */}
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
              <ul className="space-y-2">
                <li>• Data Science & Analytics</li>
                <li>• Internet of Things (IoT)</li>
                <li>• Machine Learning & AI</li>
                <li>• Web Applications</li>
                <li>• Mobile App Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;