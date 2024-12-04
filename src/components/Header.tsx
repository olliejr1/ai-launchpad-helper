import { Button } from "@/components/ui/button";
import { Brain, Rocket } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-primary" />
          <span className="font-bold text-xl">LaunchAI</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
          <a href="#process" className="text-sm hover:text-primary transition-colors">Process</a>
          <a href="#calculator" className="text-sm hover:text-primary transition-colors">Calculator</a>
        </nav>
        <Button className="bg-accent hover:bg-accent/90">
          Contact Us
          <Rocket className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </header>
  );
};