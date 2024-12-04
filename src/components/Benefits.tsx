import { Brain, Rocket, DollarSign, Code } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "AI-Enhanced Development",
    description: "Leverage cutting-edge AI tools to accelerate development and reduce costs"
  },
  {
    icon: Rocket,
    title: "Rapid MVP Launch",
    description: "Get your product to market in half the time of traditional development"
  },
  {
    icon: DollarSign,
    title: "50% Cost Reduction",
    description: "Save on development costs without compromising on quality"
  },
  {
    icon: Code,
    title: "Expert Product Team",
    description: "Work with experienced developers who understand startup needs"
  }
];

export const Benefits = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose LaunchAI?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-gray-100 hover:border-primary/20 transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};