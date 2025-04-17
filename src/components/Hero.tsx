
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden pb-16 pt-10 sm:pb-24">
      <div className="cyber-grid-bg absolute inset-0 z-0 animate-cyber-grid opacity-30"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-3xl lg:col-span-7 lg:text-left">
            <h1>
              <span className="block text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl lg:text-5xl xl:text-6xl">
                ADVANCED SECURITY
              </span>
              <span className="block text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl mt-2 text-cyber-cyan cyber-glow">
                THROUGH PENETRATION TESTING
              </span>
            </h1>
            <p className="mt-6 text-base text-gray-300 sm:text-lg md:text-xl">
              SentriSec provides comprehensive penetration testing services to identify critical vulnerabilities before attackers do.
              Our advanced detection capabilities ensure thorough security assessments.
            </p>
            <div className="mt-8 flex gap-4 sm:justify-center lg:justify-start">
              <Button className="bg-cyber-blue hover:bg-cyber-cyan text-white shadow-lg shadow-cyber-blue/20">
                Get a Demo
              </Button>
              <Button variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-5 lg:mx-0 lg:mt-0 lg:flex lg:items-center justify-center">
            <div className="relative mx-auto overflow-hidden rounded-lg shadow-xl">
              <img
                src="/lovable-uploads/7520a153-a8ae-4f39-b884-1de5a9688cc5.png"
                alt="SentriSec cybersecurity services"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
