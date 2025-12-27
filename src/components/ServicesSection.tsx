import { Globe, Smartphone, Layout, Camera, ShoppingCart, Share2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "We create sleek, responsive, and high-performing websites tailored to your business goals.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "We design smooth, powerful mobile apps for Android & iOS that users love.",
  },
  {
    icon: Layout,
    title: "Custom Portal Development",
    description: "Secure and scalable portals & dashboards for enterprise-grade solutions.",
  },
  {
    icon: Camera,
    title: "Brand Shoot",
    description: "Professional photography & videography for brands that stand out.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description: "Fast, secure online stores that convert visitors into loyal customers.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Targeted ads, engagement strategies, and conversions that drive growth.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-foreground mb-6">
            Service List — Best Services{" "}
            <span className="text-accent">We Can Offer</span> For You!
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive digital solutions to transform your business and accelerate growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-outfit font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Consultation CTA */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-blue-light/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-outfit font-bold text-primary-foreground mb-4">
              GET A FREE CONSULTATION
            </h3>
            <a
              href="tel:+917015961124"
              className="inline-flex items-center gap-3 text-3xl md:text-4xl font-outfit font-bold text-accent hover:text-brand-blue-light transition-colors mb-4"
            >
              <Phone className="w-8 h-8" />
              +91 7015961124
            </a>
            <p className="text-primary-foreground/70 text-lg max-w-md mx-auto">
              Share your vision — strategy call is completely free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
