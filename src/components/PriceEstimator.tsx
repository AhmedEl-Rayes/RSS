import { useState, useEffect } from "react";
import { DollarSign, Download, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";

interface PriceEstimatorProps {
  onPriceChange: (price: number) => void;
}

export const PriceEstimator = ({ onPriceChange }: PriceEstimatorProps) => {
  const [internalAssessment, setInternalAssessment] = useState(false);
  const [externalAssessment, setExternalAssessment] = useState(true);
  const [appSecTesting, setAppSecTesting] = useState(false);
  const [socialEngineering, setSocialEngineering] = useState(false);
  
  const [internalHostCount, setInternalHostCount] = useState(500);
  const [externalHostCount, setExternalHostCount] = useState(10);
  const [appCount, setAppCount] = useState(1);
  const [userCount, setUserCount] = useState(100);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = () => {
    let basePrice = 0;
    let variablePrice = 0;
    
    // External Assessment
    if (externalAssessment) {
      basePrice += 3000; // Base setup and scanning infrastructure
      
      // Variable pricing based on host count
      if (externalHostCount <= 10) {
        variablePrice += externalHostCount * 300;
      } else if (externalHostCount <= 50) {
        variablePrice += 3000 + (externalHostCount - 10) * 200;
      } else {
        variablePrice += 11000 + (externalHostCount - 50) * 150;
      }
    }
    
    // Internal Assessment
    if (internalAssessment) {
      basePrice += 5000; // Base setup, onsite work, and infrastructure
      
      // Variable pricing based on host count - adjusted for more realistic pricing
      if (internalHostCount <= 500) {
        variablePrice += internalHostCount * 5;
      } else if (internalHostCount <= 2000) {
        variablePrice += 2500 + (internalHostCount - 500) * 3;
      } else {
        variablePrice += 7000 + (internalHostCount - 2000) * 2;
      }
    }
    
    // Application Security Testing
    if (appSecTesting) {
      basePrice += 8000; // Base application assessment setup
      variablePrice += (appCount - 1) * 6000; // Additional apps at 6k each
    }
    
    // Social Engineering
    if (socialEngineering) {
      basePrice += 3000; // Base campaign setup
      variablePrice += Math.min(userCount * 25, 12000); // Cap at 12k
    }
    
    let totalBeforeDiscount = basePrice + variablePrice;
    
    // Volume discount based on total services selected
    const servicesCount = [externalAssessment, internalAssessment, appSecTesting, socialEngineering].filter(Boolean).length;
    if (servicesCount > 1) {
      const discountRate = Math.min(0.05 * (servicesCount - 1), 0.15);
      totalBeforeDiscount = totalBeforeDiscount * (1 - discountRate);
    }
    
    return Math.round(totalBeforeDiscount);
  };

  useEffect(() => {
    const newPrice = calculatePrice();
    setTotalPrice(newPrice);
    onPriceChange(newPrice);
  }, [externalAssessment, internalAssessment, appSecTesting, socialEngineering, externalHostCount, internalHostCount, userCount, appCount]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };
  
  return (
    <Card className="bg-cyber-dark border-cyber-blue/30 shadow-lg shadow-cyber-blue/5">
      <CardHeader className="border-b border-cyber-blue/20 bg-gradient-to-r from-cyber-dark to-cyber-blue/5">
        <CardTitle className="flex items-center gap-2 text-white">
          <Shield className="h-5 w-5 text-cyber-cyan" />
          Security Assessment Calculator
        </CardTitle>
        <CardDescription className="text-gray-300">
          Get an instant estimate for your security assessment needs
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6 pb-2 space-y-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-gray-200">External Assessment</Label>
              <p className="text-xs text-gray-400">Identifies vulnerabilities visible from outside your network</p>
            </div>
            <Switch 
              checked={externalAssessment}
              onCheckedChange={setExternalAssessment}
              className="data-[state=checked]:bg-cyber-blue"
            />
          </div>
          
          {externalAssessment && (
            <div className="pl-4 border-l-2 border-cyber-blue/20 space-y-2">
              <Label className="text-sm text-gray-300">External Hosts: {externalHostCount}</Label>
              <Slider
                value={[externalHostCount]}
                min={1}
                max={500}
                step={5}
                onValueChange={(val) => setExternalHostCount(val[0])}
                className="w-full"
              />
              <p className="text-xs text-gray-400">Includes servers, network devices, and cloud resources</p>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-gray-200">Internal Assessment</Label>
              <p className="text-xs text-gray-400">Comprehensive evaluation of internal network security</p>
            </div>
            <Switch 
              checked={internalAssessment}
              onCheckedChange={setInternalAssessment}
              className="data-[state=checked]:bg-cyber-blue"
            />
          </div>
          
          {internalAssessment && (
            <div className="pl-4 border-l-2 border-cyber-blue/20 space-y-2">
              <Label className="text-sm text-gray-300">Internal Hosts: {internalHostCount}</Label>
              <Slider
                value={[internalHostCount]}
                min={100}
                max={5000}
                step={100}
                onValueChange={(val) => setInternalHostCount(val[0])}
                className="w-full"
              />
              <p className="text-xs text-gray-400">Includes workstations, servers, and network devices</p>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-gray-200">Web Application Testing</Label>
              <p className="text-xs text-gray-400">In-depth security assessment of your web applications and APIs</p>
            </div>
            <Switch 
              checked={appSecTesting}
              onCheckedChange={setAppSecTesting}
              className="data-[state=checked]:bg-cyber-blue"
            />
          </div>
          
          {appSecTesting && (
            <div className="pl-4 border-l-2 border-cyber-blue/20 space-y-2">
              <Label className="text-sm text-gray-300">Number of Applications: {appCount}</Label>
              <Slider
                value={[appCount]}
                min={1}
                max={10}
                step={1}
                onValueChange={(val) => setAppCount(val[0])}
                className="w-full"
              />
              <p className="text-xs text-gray-400">Number of web applications or APIs to be tested</p>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-gray-200">Social Engineering</Label>
              <p className="text-xs text-gray-400">Phishing simulations and security awareness testing</p>
            </div>
            <Switch 
              checked={socialEngineering}
              onCheckedChange={setSocialEngineering}
              className="data-[state=checked]:bg-cyber-blue"
            />
          </div>
          
          {socialEngineering && (
            <div className="pl-4 border-l-2 border-cyber-blue/20 space-y-2">
              <Label className="text-sm text-gray-300">Number of Employees: {userCount}</Label>
              <Slider
                value={[userCount]}
                min={25}
                max={1000}
                step={25}
                onValueChange={(val) => setUserCount(val[0])}
                className="w-full"
              />
              <p className="text-xs text-gray-400">Target audience for phishing campaign</p>
            </div>
          )}
        </div>
        
        <div className="rounded-md bg-cyber-blue/10 p-4 border border-cyber-blue/20">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-300">Estimated Investment</p>
              <h3 className="text-2xl font-bold text-cyber-cyan mt-1">
                {formatCurrency(totalPrice)}
              </h3>
            </div>
            <DollarSign className="h-10 w-10 text-cyber-cyan opacity-70" />
          </div>
          
          {([externalAssessment, internalAssessment, appSecTesting, socialEngineering].filter(Boolean).length > 1) && (
            <p className="text-xs text-cyber-cyan mt-2">
              Multi-service discount applied
            </p>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-end border-t border-cyber-blue/20 py-3 bg-cyber-darker/50">
        <Button 
          onClick={() => toast.success("Quote has been generated. Our team will contact you with detailed pricing.")}
          variant="default"
          size="sm"
          className="bg-cyber-blue hover:bg-cyber-cyan text-white"
        >
          <Download className="mr-2 h-4 w-4" />
          Generate Quote
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PriceEstimator;
