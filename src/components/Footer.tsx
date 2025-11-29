import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              XYZ College Project Company is dedicated to fostering innovation and practical learning 
              through cutting-edge technology projects. We bridge the gap between academic knowledge 
              and industry requirements.
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/project-development" className="opacity-90 hover:opacity-100 transition-opacity">Project Development</Link></li>
              <li><Link to="/services/mentorship" className="opacity-90 hover:opacity-100 transition-opacity">Expert Mentorship</Link></li>
              <li><Link to="/services/training" className="opacity-90 hover:opacity-100 transition-opacity">Technical Training</Link></li>
              <li><Link to="/services/research" className="opacity-90 hover:opacity-100 transition-opacity">Research Support</Link></li>
              <li><Link to="/services/consultation" className="opacity-90 hover:opacity-100 transition-opacity">Project Consultation</Link></li>
            </ul>
          </div>

          {/* Project Types */}
          <div>
            <h3 className="text-xl font-bold mb-4">Project Types</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/projects/machine-learning" className="opacity-90 hover:opacity-100 transition-opacity">Machine Learning</Link></li>
              <li><Link to="/projects/web-application" className="opacity-90 hover:opacity-100 transition-opacity">Web Applications</Link></li>
              <li><Link to="/projects/iot" className="opacity-90 hover:opacity-100 transition-opacity">IoT Systems</Link></li>
              <li><Link to="/projects/data-science" className="opacity-90 hover:opacity-100 transition-opacity">Data Science</Link></li>
              <li><Link to="/projects/mobile-app" className="opacity-90 hover:opacity-100 transition-opacity">Mobile Apps</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact & Enquiry</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="opacity-90">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="opacity-90">projects@xyzcollege.edu</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1" />
                <div className="opacity-90">
                  <p>Department of Computer Science</p>
                  <p>XYZ College, Tech City</p>
                  <p>State - 123456</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-90">
              © 2024 XYZ College Project Company. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <Link to="/terms" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Terms of Service</Link>
              <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;