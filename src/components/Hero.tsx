import { ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Hero = () => {
  const scrollToPricingTool = () => {
    const toolsSection = document.getElementById('tools');
    toolsSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="relative overflow-hidden pb-16 pt-10 sm:pb-24 bg-[#1a0a0a]">
      <div className="absolute inset-0 z-0 opacity-30" style={{
      background: `linear-gradient(135deg, rgba(234, 56, 76, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)`
    }}></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-3xl lg:col-span-7 lg:text-left">
            <h1>
              <span className="block text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl lg:text-5xl xl:text-7xl">
                RED SYNDICATE
              </span>
              <span className="block text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl mt-2 text-[#ea384c] drop-shadow-[0_0_10px_rgba(234,56,76,0.5)]">SECURITY SERVICES</span>
            </h1>
            <p className="mt-6 text-base text-gray-300 sm:text-lg md:text-xl">
              Specialized penetration testing and advanced threat detection. 
              Our elite team exposes critical vulnerabilities before they can be exploited.
            </p>
            <div className="mt-8 flex gap-4 sm:justify-center lg:justify-start">
              <Button onClick={scrollToPricingTool} variant="default" className="bg-[#ea384c] hover:bg-[#ea384c]/80 text-white">
                <Calculator className="mr-2 h-4 w-4" />
                Try Our Free Pricing Tool
              </Button>
              <Button variant="outline" className="border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c]/10">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-5 lg:mx-0 lg:mt-0 lg:flex lg:items-center justify-center">
            <div className="relative mx-auto overflow-hidden rounded-lg shadow-xl border border-[#ea384c]/30">
              <img src="/lovable-uploads/7520a153-a8ae-4f39-b884-1de5a9688cc5.png" alt="Red Syndicate cybersecurity services" className="w-full h-auto rounded-lg opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0a]/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;