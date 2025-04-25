
import { Shield, CheckCircle, Award } from "lucide-react";
export const AboutSection = () => {
  return <div id="about" className="py-16 bg-gradient-to-b from-cyber-darker to-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-cyber-cyan font-semibold tracking-wide uppercase">ABOUT RED SYNDICATE</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
            Your Trusted Partner in Cybersecurity Excellence
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            We help organizations identify and address security vulnerabilities before they can be exploited.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose SentriSec?</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyber-blue/10 text-cyber-cyan">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Expert Security Team</h4>
                  <p className="mt-2 text-gray-300">
                    Our team consists of certified security professionals with decades of combined experience in penetration testing and vulnerability assessment.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyber-blue/10 text-cyber-cyan">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Comprehensive Methodology</h4>
                  <p className="mt-2 text-gray-300">
                    We employ a thorough, methodical approach to security testing that identifies vulnerabilities other firms might miss.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyber-blue/10 text-cyber-cyan">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Industry Recognized Certifications</h4>
                  <p className="mt-2 text-gray-300">Red Syndicate consultants have really good certifications that demonstrate our expertise in cutting-edge cybersecurity practices.</p>
                </div>
              </div>
            </div>
          
          <div className="order-1 md:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-full bg-cyber-dark cyber-grid-bg flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="mb-6">
                      <Shield className="h-16 w-16 text-cyber-cyan mx-auto animate-pulse-glow" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Mission Statement</h3>
                    <p className="text-gray-300">
                      "Our mission is to secure the digital future by providing world-class penetration testing and cybersecurity services that protect organizations from evolving threats."
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 border border-cyber-blue/30 rounded-lg pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AboutSection;
