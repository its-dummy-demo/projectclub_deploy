import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const projectDomains = [
    { name: "Data Science", path: "/projects/data-science" },
    { name: "IoT", path: "/projects/iot" },
    { name: "Machine Learning", path: "/projects/machine-learning" },
    { name: "Web Application", path: "/projects/web-application" },
    { name: "Mobile App", path: "/projects/mobile-app" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Contact Now Button */}
          <Button 
            variant="outline" 
            onClick={() => navigate("/contact")}
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Contact Now
          </Button>

          {/* Middle - Project Domains */}
          <div className="hidden md:flex items-center space-x-6">
            {projectDomains.map((domain) => (
              <Link
                key={domain.name}
                to={domain.path}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {domain.name}
              </Link>
            ))}
          </div>

          {/* Right side - Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="XYZ College Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="ml-2 font-bold text-xl text-primary">XYZ College</span>
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden pb-4">
          <div className="flex flex-wrap gap-2">
            {projectDomains.map((domain) => (
              <Link
                key={domain.name}
                to={domain.path}
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                {domain.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;