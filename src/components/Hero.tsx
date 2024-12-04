import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/50 to-white pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Launch Your MVP Faster with
            <span className="text-primary"> AI-Powered Development</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            We help founders cut MVP development costs in half while accelerating time-to-market using AI-enhanced product teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-lg px-8 py-6">
              Calculate Your Savings
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6">
              Learn Our Process
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};