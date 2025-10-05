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
    <section className="py-12 sm:py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Getting started as a product reviewer is simple and straightforward
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="relative flex flex-col items-center text-center p-6 sm:p-8 bg-background rounded-lg shadow-sm"
              >
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg sm:text-xl font-bold">
                  {step.number}
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 mt-5 sm:mt-6">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
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
