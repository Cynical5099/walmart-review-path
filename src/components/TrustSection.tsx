import { CheckCircle, Building2, MessageSquare, Award } from "lucide-react";

const TrustSection = () => {
  const trustPoints = [
    {
      icon: Building2,
      title: "Work with well-known brands",
      description: "Partner with recognized companies"
    },
    {
      icon: MessageSquare,
      title: "Share your feedback",
      description: "Your opinion matters and helps improve products"
    },
    {
      icon: Award,
      title: "Earn rewards for your opinions",
      description: "Get compensated for your honest reviews"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Become a Product Reviewer?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-muted-foreground">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
