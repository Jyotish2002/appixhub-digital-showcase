import { ShoppingBag, Plane, GraduationCap, Sparkles, Heart, Dumbbell, Truck, Shirt, Gamepad2, Film } from "lucide-react";

const industries = [
  { icon: ShoppingBag, name: "E-Commerce" },
  { icon: Plane, name: "Travel" },
  { icon: GraduationCap, name: "Education" },
  { icon: Sparkles, name: "Astrology" },
  { icon: Heart, name: "Healthcare" },
  { icon: Dumbbell, name: "Fitness" },
  { icon: Truck, name: "Logistics" },
  { icon: Shirt, name: "Fashion" },
  { icon: Gamepad2, name: "Gaming" },
  { icon: Film, name: "Media & Entertainment" },
];

export const IndustriesSection = () => {
  return (
    <section id="technologies" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            ✨ Industries
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-foreground">
            We Serve <span className="text-accent">All Industries!</span>
          </h2>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50 text-center cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <industry.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
