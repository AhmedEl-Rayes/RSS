import { useState, useEffect } from "react";
import { DollarSign, Download, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
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
  const [externalHostCount, setExternalHostCount] = useState(100);
  const [userCount, setUserCount] = useState(100);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    
    if (externalAssessment) {
      price += 5000 + (externalHostCount * 150);
    }
    
    if (internalAssessment) {
      price += 7500 + (internalHostCount * 100);
    }
    
    if (appSecTesting) {
      price += 12000;
    }
    
    if (socialEngineering) {
      price += 4000 + (userCount * 25);
    }
    
    let servicesCount = [externalAssessment, internalAssessment, appSecTesting, socialEngineering].filter(Boolean).length;
    
    if (servicesCount > 1) {
      const discountRate = Math.min(0.05 * (servicesCount - 1), 0.15);
      price = price * (1 - discountRate);
    }
    
    setTotalPrice(Math.round(price));
    onPriceChange(Math.round(price));
  }, [externalAssessment, internalAssessment, appSecTesting, socialEngineering, externalHostCount, internalHostCount, userCount, onPriceChange]);

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
          Penetration Testing Price Estimator
        </CardTitle>
        <CardDescription className="text-gray-300">
          Customize your security assessment to fit your organization's needs.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6 pb-2">
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
            <div className="pl-2 border-l-2 border-cyber-blue/20 ml-2">
              <Label className="text-sm text-gray-300 mb-2 block">External Host Count: {externalHostCount}</Label>
              <Slider
                value={[externalHostCount]}
                min={1}
                max={10000}
                step={50}
                className="w-full"
                onValueChange={(val) => setExternalHostCount(val[0])}
              />
              <p className="text-xs text-gray-400 mt-1">Base price + per host fee</p>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-gray-200">Internal Assessment</Label>
              <p className="text-xs text-gray-400">Identifies vulnerabilities within your internal network</p>
            </div>
            <Switch 
              checked={internalAssessment}
              onCheckedChange={setInternalAssessment}
              className="data-[state=checked]:bg-cyber-blue"
            />
          </div>
          
          {internalAssessment && (
            <div className="pl-2 border-l-2 border-cyber-blue/20 ml-2">
              <Label className="text-sm text-gray-300 mb-2 block">Internal Host Count: {internalHostCount}</Label>
              <Slider
                value={[internalHostCount]}
                min={10}
                max={10000}
                step={100}
                className="w-full"
                onValueChange={(val) => setInternalHostCount(val[0])}
              />
              <p className="text-xs text-gray-400 mt-1">Base price + per host fee</p>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-gray-200">Application Security Testing</Label>
              <p className="text-xs text-gray-400">Identifies vulnerabilities in your web and mobile applications</p>
            </div>
            <Switch 
              checked={appSecTesting}
              onCheckedChange={setAppSecTesting}
              className="data-[state=checked]:bg-cyber-blue"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-gray-200">Social Engineering</Label>
              <p className="text-xs text-gray-400">Tests your employees' security awareness with simulated attacks</p>
            </div>
            <Switch 
              checked={socialEngineering}
              onCheckedChange={setSocialEngineering}
              className="data-[state=checked]:bg-cyber-blue"
            />
          </div>
          
          {socialEngineering && (
            <div className="pl-2 border-l-2 border-cyber-blue/20 ml-2">
              <Label className="text-sm text-gray-300 mb-2 block">Employee Count: {userCount}</Label>
              <Slider
                value={[userCount]}
                min={10}
                max={1000}
                step={10}
                className="w-full"
                onValueChange={(val) => setUserCount(val[0])}
              />
              <p className="text-xs text-gray-400 mt-1">Base price + per employee fee</p>
            </div>
          )}
        </div>
        
        <div className="mt-8">
          <div className="rounded-md bg-cyber-blue/10 p-4 border border-cyber-blue/20">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-300">Estimated Assessment Cost</p>
                <h3 className="text-2xl font-bold text-cyber-cyan cyber-glow mt-1">
                  {formatCurrency(totalPrice)}
                </h3>
              </div>
              <DollarSign className="h-10 w-10 text-cyber-cyan opacity-70" />
            </div>
            
            {([externalAssessment, internalAssessment, appSecTesting, socialEngineering].filter(Boolean).length > 1) && (
              <p className="text-xs text-cyber-cyan mt-2">
                Multi-service discount applied!
              </p>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-end border-t border-cyber-blue/20 py-3 bg-cyber-darker/50">
        <Button 
          onClick={() => toast.success("Quote has been generated and can be sent to your email.")}
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
