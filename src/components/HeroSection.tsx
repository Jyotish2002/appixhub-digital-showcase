import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center gradient-hero overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-blue-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "-1.5s" }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }} />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-5 py-2 mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Digital Excellence Since 2020
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-outfit font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Your Vision.{" "}
            <span className="text-accent">Our Craft.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Complete Digital Solutions — Apps, Websites & Marketing at One Place
          </p>

          {/* Description */}
          <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            AppixHub transforms your ideas into impactful mobile apps, sleek websites, and growth-oriented marketing strategies — helping your brand lead with innovation and style.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
              <Calendar className="w-5 h-5" />
              Make Appointment
            </Button>
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "40+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-outfit font-bold text-accent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
