import { UserPlus, Wand2, Sparkles, Heart } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Add Your People",
    description: "Tell us about your partner, family, and friends. Add birthdays, anniversaries, and what makes them special.",
  },
  {
    icon: Wand2,
    step: "02",
    title: "We Handle the Planning",
    description: "Our AI learns your relationships and suggests the perfect moments, gifts, and messages—personalized just for you.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Show Up Effortlessly",
    description: "Get timely reminders and one-click actions. Send gifts, plan dates, or share a heartfelt message in seconds.",
  },
  {
    icon: Heart,
    step: "04",
    title: "Watch Love Grow",
    description: "Build stronger connections with less stress. See your relationships flourish as you consistently show up.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Simple Steps to{" "}
            <span className="text-gradient">Stronger Bonds</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started takes just 2 minutes. Here's how KeepClose helps you nurture your relationships.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative group"
              >
                {/* Connection Line (for desktop) */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 border-t-2 border-dashed border-primary/20" />
                )}

                <div className="flex gap-5">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl gradient-love flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-500">
                        <step.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
