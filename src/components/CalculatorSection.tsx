
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDownRight } from "lucide-react";
import BreachCostCalculator from "./BreachCostCalculator";
import PriceEstimator from "./PriceEstimator";

export const CalculatorSection = () => {
  const [breachCost, setBreachCost] = useState<number>(0);
  const [penTestCost, setPenTestCost] = useState<number>(0);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div id="tools" className="py-16 bg-gradient-to-b from-cyber-dark to-cyber-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-cyber-cyan font-semibold tracking-wide uppercase">Assessment Tools</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
            Estimate Risks and Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Use our calculators to understand your security risks and the cost-effective solutions we provide.
          </p>
        </div>

        {(breachCost > 0 && penTestCost > 0) && (
          <div className="mb-12 p-6 rounded-lg bg-cyber-blue/10 border border-cyber-blue/30 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-1">Estimated Data Breach Cost</p>
                  <p className="text-3xl font-bold text-red-500">{formatCurrency(breachCost)}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-1">Penetration Testing Investment</p>
                  <p className="text-3xl font-bold text-cyber-cyan">{formatCurrency(penTestCost)}</p>
                </div>
              </div>
              {breachCost > penTestCost && (
                <div className="flex items-center gap-2 text-xl font-semibold">
                  <ArrowDownRight className="text-green-500 h-6 w-6" />
                  <span className="text-green-500">Save up to {formatCurrency(breachCost - penTestCost)}</span>
                  <span className="text-gray-400">by preventing a potential breach</span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate-fade-in">
            <BreachCostCalculator onCostChange={setBreachCost} />
          </div>
          <div className="animate-fade-in">
            <PriceEstimator onPriceChange={setPenTestCost} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSection;
