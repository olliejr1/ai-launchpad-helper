import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";

export const Calculator = () => {
  const { toast } = useToast();
  const [teamSize, setTeamSize] = useState(5);
  const [monthlyBudget, setMonthlyBudget] = useState(10000);
  const [duration, setDuration] = useState(6);

  const calculateSavings = () => {
    const traditionalCost = teamSize * monthlyBudget * duration;
    const ourCost = traditionalCost * 0.5; // 50% cost reduction
    const savings = traditionalCost - ourCost;

    toast({
      title: "Estimated Savings",
      description: `You could save £${savings.toLocaleString()} over ${duration} months!`,
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg border animate-fade-up">
      <h2 className="text-2xl font-bold mb-6 text-primary">Cost Savings Calculator</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Current/Expected Team Size</Label>
          <div className="flex items-center gap-4">
            <Slider
              value={[teamSize]}
              onValueChange={(value) => setTeamSize(value[0])}
              max={20}
              min={1}
              step={1}
              className="flex-1"
            />
            <span className="w-12 text-right">{teamSize}</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Monthly Budget per Person (£)</Label>
          <Input
            type="number"
            value={monthlyBudget}
            onChange={(e) => setMonthlyBudget(Number(e.target.value))}
            min={5000}
            step={1000}
          />
        </div>

        <div className="space-y-2">
          <Label>Project Duration (months)</Label>
          <div className="flex items-center gap-4">
            <Slider
              value={[duration]}
              onValueChange={(value) => setDuration(value[0])}
              max={24}
              min={1}
              step={1}
              className="flex-1"
            />
            <span className="w-12 text-right">{duration}</span>
          </div>
        </div>

        <Button 
          onClick={calculateSavings}
          className="w-full"
          size="lg"
        >
          Calculate Potential Savings
        </Button>
      </div>
    </div>
  );
};