
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BreachCostCalculator from "./BreachCostCalculator";
import PriceEstimator from "./PriceEstimator";

export const CalculatorSection = () => {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate-fade-in">
            <BreachCostCalculator />
          </div>
          <div className="animate-fade-in">
            <PriceEstimator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSection;
