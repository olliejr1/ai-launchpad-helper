import { Navigation, StepForward, List, Workflow } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const ProcessSection = () => {
  const steps = [
    {
      title: "Initial Consultation",
      description: "We discuss your project requirements and goals to understand your vision perfectly.",
      icon: <Navigation className="w-10 h-10 text-primary" />,
    },
    {
      title: "Planning & Design",
      description: "Our team creates a detailed roadmap and design specifications for your project.",
      icon: <List className="w-10 h-10 text-primary" />,
    },
    {
      title: "Development",
      description: "We build your solution using cutting-edge technology and best practices.",
      icon: <Workflow className="w-10 h-10 text-primary" />,
    },
    {
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing support to ensure success.",
      icon: <StepForward className="w-10 h-10 text-primary" />,
    },
  ];

  return (
    <section id="process" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures efficient delivery of high-quality solutions tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="mb-4">{step.icon}</div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};