import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Texas",
      quote: "I've enjoyed testing new products and giving my honest feedback. The process is smooth and straightforward."
    },
    {
      name: "Michael R.",
      location: "California",
      quote: "Being a product reviewer has been a great way to try different items and share what I think. It's been a positive experience overall."
    },
    {
      name: "Jennifer L.",
      location: "Florida",
      quote: "I appreciate the opportunity to provide feedback on products. The application process was easy and I started receiving assignments quickly."
    },
    {
      name: "David K.",
      location: "Ohio",
      quote: "Reviewing products has been an interesting experience. I like that my opinions help companies improve their offerings."
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-4">
            What Our Reviewers Say
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Real experiences from product reviewers across the country
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="pt-5 sm:pt-6 px-4 sm:px-6">
                <div className="mb-3 sm:mb-4">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/40" />
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-3 sm:pt-4">
                  <p className="text-sm sm:text-base font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
