import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Check } from "lucide-react";

const benefits = [
  "Free forever for basic features",
  "No credit card required",
  "Setup in 2 minutes",
];

const CTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <div className="relative rounded-[2.5rem] overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 gradient-love opacity-95" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyek0zNiAyNnYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
            
            {/* Floating Hearts */}
            <div className="absolute top-10 left-10 animate-float opacity-20">
              <Heart className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
            </div>
            <div className="absolute bottom-10 right-10 animate-float opacity-20" style={{ animationDelay: "2s" }}>
              <Heart className="w-12 h-12 text-primary-foreground fill-primary-foreground" />
            </div>
            <div className="absolute top-1/2 right-1/4 animate-float opacity-10" style={{ animationDelay: "4s" }}>
              <Heart className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
            </div>

            {/* Content */}
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Strengthen Your Relationships?
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
                Join thousands of couples and families who are nurturing their connections with KeepClose. Start your free journey today.
              </p>

              {/* CTA Button */}
              <Button
                variant="glass"
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group mb-8"
              >
                Get Started — It's Free
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              {/* Benefits */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-primary-foreground/90">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
