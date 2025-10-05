import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const handleApplyClick = () => {
    window.open('https://uplevelrewarded.com/aff_c?offer_id=972&aff_id=21664&source=TicTac', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our community of product reviewers today and start sharing your valuable feedback
          </p>
          <Button 
            variant="cta" 
            size="lg" 
            onClick={handleApplyClick}
            className="text-lg px-8 py-6"
          >
            Apply Now — Start Reviewing
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
