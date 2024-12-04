import { Benefits } from "@/components/Benefits";
import { Calculator } from "@/components/Calculator";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProcessSection } from "@/components/ProcessSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProcessSection />
      <section className="py-20 px-4 bg-secondary/30">
        <Calculator />
      </section>
      <Benefits />
    </div>
  );
};

export default Index;