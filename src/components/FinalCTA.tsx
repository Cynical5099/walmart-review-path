import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const handleApplyClick = () => {
    window.open('https://uplevelrewarded.com/aff_c?offer_id=972&aff_id=21664&source=TicTac', '_blank');
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-4">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Join our community of product reviewers today and start sharing your valuable feedback
          </p>
          <div className="pt-2 px-4 sm:px-0">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleApplyClick}
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto min-h-[52px] sm:min-h-[56px]"
            >
              Apply Now — Start Reviewing
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
