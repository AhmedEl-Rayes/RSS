
import { Shield, Users, Code, Clock } from "lucide-react";

export const FeatureSection = () => {
  const features = [
    {
      name: "Advanced Technology",
      description:
        "AI-powered detection identifies threats fast, keeping you ahead of risks.",
      icon: Code,
    },
    {
      name: "Certified Experts",
      description:
        "Our team of certified experts brings deep industry experience and precision.",
      icon: Users,
    },
    {
      name: "24/7 Monitoring",
      description:
        "Around-the-clock surveillance ensures constant protection.",
      icon: Clock,
    },
    {
      name: "Compliance Focused",
      description:
        "Meet regulatory requirements with our compliance-focused security solutions.",
      icon: Shield,
    },
  ];

  return (
    <div id="services" className="py-16 bg-gradient-to-b from-cyber-dark to-cyber-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-cyber-cyan font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
            Comprehensive Security Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Our services are designed to identify vulnerabilities, mitigate risks, and secure your digital assets.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="rounded-lg bg-cyber-dark/50 p-6 border border-cyber-blue/20 backdrop-blur-sm hover:border-cyber-blue/40 transition-all duration-300">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-cyber-blue/10 rounded-md">
                    <feature.icon className="h-6 w-6 text-cyber-cyan" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
