
import { Shield } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-darker text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-cyber-cyan" />
              <span className="font-bold text-xl text-white cyber-glow">SENTRISEC</span>
            </div>
            <p className="mt-4 text-sm">
              Professional penetration testing and cybersecurity services to protect your organization.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#services" className="text-sm text-gray-300 hover:text-cyber-cyan">Penetration Testing</a></li>
              <li><a href="#services" className="text-sm text-gray-300 hover:text-cyber-cyan">Security Audits</a></li>
              <li><a href="#services" className="text-sm text-gray-300 hover:text-cyber-cyan">Application Security</a></li>
              <li><a href="#services" className="text-sm text-gray-300 hover:text-cyber-cyan">Social Engineering</a></li>
              <li><a href="#services" className="text-sm text-gray-300 hover:text-cyber-cyan">Security Training</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#about" className="text-sm text-gray-300 hover:text-cyber-cyan">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-cyber-cyan">Team</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-cyber-cyan">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-cyber-cyan">Blog</a></li>
              <li><a href="#contact" className="text-sm text-gray-300 hover:text-cyber-cyan">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-gray-300 hover:text-cyber-cyan">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-cyber-cyan">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-cyber-cyan">Cookie Policy</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-cyber-cyan">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-cyber-blue/20">
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} SentriSec Cybersecurity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
