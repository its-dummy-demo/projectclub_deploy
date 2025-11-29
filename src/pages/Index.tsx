import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
