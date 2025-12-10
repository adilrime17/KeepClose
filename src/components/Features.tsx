import { Heart, Calendar, Gift, Bell, MessageCircle, Users } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Reminders",
    description: "Never forget an anniversary, birthday, or special moment. We'll remind you at the perfect time.",
    color: "primary",
  },
  {
    icon: Gift,
    title: "Curated Gift Ideas",
    description: "Get personalized gift suggestions based on your loved one's interests and your shared memories.",
    color: "peach",
  },
  {
    icon: MessageCircle,
    title: "Thoughtful Messages",
    description: "AI-powered message suggestions that feel genuine and personal, not generic.",
    color: "lavender",
  },
  {
    icon: Bell,
    title: "Relationship Insights",
    description: "Understand your relationship patterns and get tips to strengthen your bonds.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Family & Friends",
    description: "Manage all your important relationships in one place—partners, parents, siblings, friends.",
    color: "peach",
  },
  {
    icon: Heart,
    title: "Love Rituals",
    description: "Build lasting habits with weekly date ideas, gratitude prompts, and connection exercises.",
    color: "lavender",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Stay Connected</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, powerful tools that help you show up for the people who matter most—without adding stress to your life.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  feature.color === "primary"
                    ? "bg-primary/10 text-primary"
                    : feature.color === "peach"
                    ? "bg-love-peach/20 text-love-peach"
                    : "bg-love-lavender/30 text-love-lavender"
                }`}
              >
                <feature.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
