import { Button } from "@/components/ui/button";
import { Box, Rocket } from "lucide-react";
import { ContactModal } from "./ContactModal";

export const Header = () => {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Box className="w-6 h-6 text-primary" />
          <span className="font-bold text-xl">ProductBox</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
          <a href="#process" className="text-sm hover:text-primary transition-colors">Process</a>
          <a href="#calculator" className="text-sm hover:text-primary transition-colors">Calculator</a>
        </nav>
        <ContactModal>
          <Button className="bg-accent hover:bg-accent/90">
            Contact Us
            <Rocket className="ml-2 w-4 h-4" />
          </Button>
        </ContactModal>
      </div>
    </header>
  );
};