
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import ComplianceSection from "@/components/ComplianceSection";
import CalculatorSection from "@/components/CalculatorSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark">
      <Navbar />
      <Hero />
      <FeatureSection />
      <AboutSection />
      <ComplianceSection />
      <CalculatorSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
