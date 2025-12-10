import { Heart, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "KeepClose saved my marriage. I was so caught up in work that I kept forgetting important dates. Now I never miss a moment to show my wife I love her.",
    author: "Michael T.",
    role: "Husband of 12 years",
    avatar: "M",
  },
  {
    quote: "As a busy mom of three, I struggled to maintain connections with my parents and siblings. KeepClose helps me stay close even when life gets crazy.",
    author: "Sarah K.",
    role: "Working Mother",
    avatar: "S",
  },
  {
    quote: "The gift suggestions are incredible! Every recommendation feels so personal. My girlfriend thinks I've become the most thoughtful person ever.",
    author: "James L.",
    role: "Long-distance Partner",
    avatar: "J",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Love Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Real People,{" "}
            <span className="text-gradient">Real Connections</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how KeepClose is helping thousands nurture their most important relationships.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative group"
            >
              <div className="h-full p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-6" />

                {/* Quote Text */}
                <p className="text-foreground text-lg leading-relaxed mb-8 font-body">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-love flex items-center justify-center text-primary-foreground font-display font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Decorative Heart */}
                <Heart className="absolute bottom-4 right-4 w-6 h-6 text-primary/10 fill-primary/10 group-hover:text-primary/20 group-hover:fill-primary/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
