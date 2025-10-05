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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Reviewers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from product reviewers across the country
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/40" />
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
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
