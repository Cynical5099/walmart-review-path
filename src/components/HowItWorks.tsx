import { UserPlus, Package, Star } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      number: "1",
      title: "Apply to join",
      description: "Complete a simple application to become a product reviewer"
    },
    {
      icon: Package,
      number: "2",
      title: "Receive product assignments",
      description: "Get selected to review products that match your interests"
    },
    {
      icon: Star,
      number: "3",
      title: "Submit your reviews and earn rewards",
      description: "Share your honest feedback and receive compensation"
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started as a product reviewer is simple and straightforward
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="relative flex flex-col items-center text-center p-8 bg-background rounded-lg shadow-sm"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mt-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
