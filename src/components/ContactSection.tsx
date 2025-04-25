import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Your message has been sent successfully. We'll be in touch shortly!");
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return <div id="contact" className="py-16 bg-gradient-to-b from-cyber-darker to-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-cyber-cyan font-semibold tracking-wide uppercase">Contact</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
            Get in Touch with Our Security Experts
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Have questions about our services? Reach out to our team for a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="rounded-lg bg-cyber-dark/50 p-6 border border-cyber-blue/20 backdrop-blur-sm hover:border-cyber-blue/40 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-cyber-blue/10 p-3">
                    <Mail className="h-6 w-6 text-cyber-cyan" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">Email</p>
                    <a href="mailto:contact@sentrisec.com" className="text-white hover:text-cyber-cyan">info@redsyndicatesecurity.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-cyber-blue/10 p-3">
                    <Phone className="h-6 w-6 text-cyber-cyan" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">Phone</p>
                    <a href="tel:+18005551234" className="text-white hover:text-cyber-cyan">+1 (903)-776-4137</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-cyber-blue/20">
                <h4 className="text-lg font-medium text-white mb-4">Get a Free Security Consultation</h4>
                <p className="text-gray-300 mb-4">
                  Schedule a call with our security experts to discuss your specific needs and challenges.
                </p>
                <Button onClick={() => toast.info("Consultation scheduling will be available soon.")} className="w-full bg-cyber-blue hover:bg-cyber-cyan text-white">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg bg-cyber-dark/50 p-6 border border-cyber-blue/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-200">Name</Label>
                <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" required className="bg-cyber-darker border-cyber-blue/30 text-gray-200" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">Email</Label>
                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your.email@company.com" required className="bg-cyber-darker border-cyber-blue/30 text-gray-200" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-200">Message</Label>
                <Textarea id="message" value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell us about your security needs and concerns" required className="min-h-[120px] bg-cyber-darker border-cyber-blue/30 text-gray-200" />
              </div>
              
              <Button type="submit" className="w-full bg-cyber-blue hover:bg-cyber-cyan text-white" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>;
};

export default ContactSection;
