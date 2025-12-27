import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rohan Mehta",
    role: "E-Commerce Business Owner",
    content: "AppixHub built my store and ran ads — got sales from day one! Incredible service and results.",
    rating: 5,
  },
  {
    name: "Vikash Kaushal",
    role: "Dropshipping Entrepreneur",
    content: "Best agency for dropshipping — great results. They understand the market and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Puja Sharma",
    role: "Startup Founder",
    content: "Beautiful site and real sales — loved it! The team was professional and responsive throughout.",
    rating: 4.5,
  },
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating)
              ? "text-brand-gold fill-brand-gold"
              : i < rating
              ? "text-brand-gold fill-brand-gold/50"
              : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
};

export const ReviewsSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Client Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-foreground">
            Review's Of <span className="text-accent">Clients</span>
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 border border-border/50 relative group hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-accent/20 group-hover:text-accent/40 transition-colors" />
              </div>

              {/* Rating */}
              <RatingStars rating={review.rating} />

              {/* Content */}
              <p className="text-foreground text-lg mt-4 mb-6 leading-relaxed">
                "{review.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
