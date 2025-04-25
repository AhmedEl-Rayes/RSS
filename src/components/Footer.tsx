
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-darker text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-[#ea384c]" />
              <span className="font-bold text-xl text-white drop-shadow-[0_0_10px_rgba(234,56,76,0.5)]">RED SYNDICATE</span>
            </div>
            <p className="mt-4 text-sm">
              Professional penetration testing and cybersecurity services to protect your organization.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/services#penetration-testing" className="text-sm text-gray-300 hover:text-cyber-cyan">Penetration Testing</Link></li>
              <li><Link to="/services#security-audits" className="text-sm text-gray-300 hover:text-cyber-cyan">Security Audits</Link></li>
              <li><Link to="/services#application-security" className="text-sm text-gray-300 hover:text-cyber-cyan">Application Security</Link></li>
              <li><Link to="/services#social-engineering" className="text-sm text-gray-300 hover:text-cyber-cyan">Social Engineering</Link></li>
              <li><Link to="/services#security-training" className="text-sm text-gray-300 hover:text-cyber-cyan">Security Training</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-cyber-cyan">About Us</Link></li>
              <li><Link to="/team" className="text-sm text-gray-300 hover:text-cyber-cyan">Team</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-300 hover:text-cyber-cyan">Careers</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-300 hover:text-cyber-cyan">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-cyber-cyan">Contact</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/privacy" className="text-sm text-gray-300 hover:text-cyber-cyan">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-300 hover:text-cyber-cyan">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-sm text-gray-300 hover:text-cyber-cyan">Cookie Policy</Link></li>
              <li><Link to="/security" className="text-sm text-gray-300 hover:text-cyber-cyan">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#ea384c]/20">
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} Red Syndicate Security. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

