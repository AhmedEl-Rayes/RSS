
import { Shield, CheckCircle, FileText } from "lucide-react";

export const ComplianceSection = () => {
  const complianceFrameworks = [
    {
      name: "NIST Cybersecurity Framework",
      description:
        "Comprehensive guidance for organizations to manage and reduce cybersecurity risk.",
      icon: Shield,
    },
    {
      name: "Protected Critical Infrastructure Information (PCII)",
      description:
        "Enables private sector entities to share sensitive information with the government for security purposes.",
      icon: FileText,
    },
    {
      name: "ISO 27001",
      description:
        "International standard for information security management systems (ISMS).",
      icon: CheckCircle,
    },
    {
      name: "PCI DSS",
      description:
        "Security standard for organizations that handle credit cards from major card schemes.",
      icon: Shield,
    },
    {
      name: "HIPAA",
      description:
        "U.S. legislation that provides data privacy and security provisions for safeguarding medical information.",
      icon: FileText,
    },
    {
      name: "SOC 2",
      description:
        "Auditing procedure that ensures service providers securely manage data to protect client privacy.",
      icon: CheckCircle,
    },
  ];

  return (
    <div id="compliance" className="py-16 bg-gradient-to-b from-cyber-darker to-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-cyber-cyan font-semibold tracking-wide uppercase">Compliance</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
            We Help You Stay Compliant
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Our penetration testing services ensure your organization meets regulatory requirements.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {complianceFrameworks.map((framework) => (
              <div key={framework.name} className="flex items-start gap-4 rounded-lg bg-cyber-dark/50 p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-all duration-300">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-cyber-blue/10 text-cyber-cyan">
                    <framework.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">{framework.name}</h3>
                  <p className="mt-2 text-base text-gray-300">{framework.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceSection;
