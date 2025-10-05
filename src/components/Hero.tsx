import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-reviewer.jpg";

const Hero = () => {
  const handleApplyClick = () => {
    window.open('https://uplevelrewarded.com/aff_c?offer_id=972&aff_id=21664&source=TicTac', '_blank');
  };

  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] flex items-center bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight px-2 sm:px-0">
              Become a Walmart Product Reviewer
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
              Get paid to test and review Walmart products. No experience required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4 px-4 sm:px-0">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleApplyClick}
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto min-h-[52px] sm:min-h-[56px]"
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
