import { useState, useEffect } from "react";
import { Calculator, DollarSign, LineChart, AlertTriangle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { CompanySizeType, IndustryType, breachExamples } from "./BreachDataType";

interface BreachCostCalculatorProps {
  onCostChange: (cost: number) => void;
}

export const BreachCostCalculator = ({ onCostChange }: BreachCostCalculatorProps) => {
  const [industry, setIndustry] = useState<IndustryType>("Technology");
  const [companySize, setCompanySize] = useState<CompanySizeType>("Medium");
  const [annualRevenue, setAnnualRevenue] = useState<number>(10000000);
  const [breachCost, setBreachCost] = useState<number>(0);
  const [similarBreaches, setSimilarBreaches] = useState<Array<any>>([]);

  const industryMultipliers = {
    Healthcare: 1.5,
    Finance: 1.3,
    Technology: 1.1,
    Retail: 1.0,
    Manufacturing: 0.9,
    Government: 1.2,
    Education: 0.85,
    Energy: 1.25
  };

  const companyMultipliers = {
    Small: 0.7,
    Medium: 1.0,
    Large: 1.3,
    Enterprise: 1.6
  };

  useEffect(() => {
    const calculateBreachCost = () => {
      const baseCost = Math.min(annualRevenue * 0.045, 50000000);
      const industryMultiplier = industryMultipliers[industry] || 1.0;
      const sizeMultiplier = companyMultipliers[companySize] || 1.0;
      
      const calculatedCost = baseCost * industryMultiplier * sizeMultiplier;
      
      setBreachCost(calculatedCost);
      
      const similar = breachExamples
        .filter(breach => breach.industry === industry || breach.size === companySize)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
        
      setSimilarBreaches(similar);
      
      onCostChange(calculatedCost);
    };
    
    calculateBreachCost();
  }, [industry, companySize, annualRevenue, onCostChange]);

  const handleRevenueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value.replace(/,/g, ""));
    if (!isNaN(value) && value >= 0) {
      setAnnualRevenue(value);
    }
  };

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
          <Calculator className="h-5 w-5 text-cyber-cyan" />
          Data Breach Cost Calculator
        </CardTitle>
        <CardDescription className="text-gray-300">
          Estimate the financial impact of a potential data breach on your organization.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6 pb-2">
        <div className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="industry" className="text-gray-200">Industry</Label>
            <Select 
              value={industry} 
              onValueChange={(value) => setIndustry(value as IndustryType)}
            >
              <SelectTrigger className="bg-cyber-darker border-cyber-blue/30 text-gray-200">
                <SelectValue placeholder="Select Industry" />
              </SelectTrigger>
              <SelectContent className="bg-cyber-darker border-cyber-blue/30">
                <SelectItem value="Healthcare">Healthcare</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
                <SelectItem value="Retail">Retail</SelectItem>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                <SelectItem value="Government">Government</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Energy">Energy</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="companySize" className="text-gray-200">Company Size</Label>
            <Select 
              value={companySize} 
              onValueChange={(value) => setCompanySize(value as CompanySizeType)}
            >
              <SelectTrigger className="bg-cyber-darker border-cyber-blue/30 text-gray-200">
                <SelectValue placeholder="Select Size" />
              </SelectTrigger>
              <SelectContent className="bg-cyber-darker border-cyber-blue/30">
                <SelectItem value="Small">Small (Under 100 employees)</SelectItem>
                <SelectItem value="Medium">Medium (100-1000 employees)</SelectItem>
                <SelectItem value="Large">Large (1000-10000 employees)</SelectItem>
                <SelectItem value="Enterprise">Enterprise (10000+ employees)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="annualRevenue" className="text-gray-200">Annual Revenue (USD)</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="annualRevenue"
                type="text"
                value={annualRevenue.toLocaleString()}
                onChange={handleRevenueChange}
                className="pl-9 bg-cyber-darker border-cyber-blue/30 text-gray-200"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <div className="rounded-md bg-cyber-blue/10 p-4 border border-cyber-blue/20">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-300">Estimated Data Breach Cost</p>
                <h3 className="text-2xl font-bold text-cyber-cyan cyber-glow mt-1">
                  {formatCurrency(breachCost)}
                </h3>
              </div>
              <LineChart className="h-10 w-10 text-cyber-cyan opacity-70" />
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            Breaches that Match Your Company's Profile
          </h3>
          
          <div className="space-y-3">
            {similarBreaches.map((breach) => (
              <div key={breach.company} className="rounded-md bg-cyber-darker p-3 border border-cyber-blue/20 text-sm">
                <div className="flex justify-between">
                  <h4 className="font-medium text-white">{breach.company} ({breach.year})</h4>
                  <span className="text-cyber-cyan">{formatCurrency(breach.cost * 1000000)}</span>
                </div>
                <p className="text-gray-400 text-xs mt-1">{breach.impact}</p>
                <a 
                  href={breach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs flex items-center gap-1 text-cyber-blue hover:text-cyber-cyan mt-2"
                >
                  Learn more <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-end border-t border-cyber-blue/20 py-3 bg-cyber-darker/50">
        <Button 
          onClick={() => toast.info("Assessment report can be sent to your email.")}
          variant="outline"
          size="sm"
          className="text-cyber-cyan border-cyber-blue/30 hover:bg-cyber-blue/10"
        >
          Generate Full Risk Report
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BreachCostCalculator;
