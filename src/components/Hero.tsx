import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-reviewer.jpg";

const Hero = () => {
  const handleApplyClick = () => {
    window.open('https://uplevelrewarded.com/aff_c?offer_id=972&aff_id=21664&source=TicTac', '_blank');
  };

  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Become a Walmart Product Reviewer
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Get paid to test and review Walmart products. No experience required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleApplyClick}
                className="text-lg px-8 py-6"
              >
                Apply Now
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src={heroImage} 
              alt="Professional product reviewer working at desk" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
