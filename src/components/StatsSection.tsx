import portfolioWebapp from "@/assets/portfolio-webapp.jpg";
import portfolioMobileapp from "@/assets/portfolio-mobileapp.jpg";
import portfolioWebsite from "@/assets/portfolio-website.jpg";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioPortal from "@/assets/portfolio-portal.jpg";
import portfolioBrandshoot from "@/assets/portfolio-brandshoot.jpg";
import portfolioMarketing from "@/assets/portfolio-marketing.jpg";

const portfolioItems = [
  { 
    image: portfolioWebapp, 
    title: "Web Apps", 
    count: 3,
    description: "Custom SaaS & Dashboard Solutions"
  },
  { 
    image: portfolioMobileapp, 
    title: "Mobile Apps", 
    count: 5,
    description: "iOS & Android Applications"
  },
  { 
    image: portfolioWebsite, 
    title: "Websites", 
    count: 15,
    description: "Corporate & Business Websites"
  },
  { 
    image: portfolioEcommerce, 
    title: "E-Commerce", 
    count: 6,
    description: "Online Stores & Marketplaces"
  },
  { 
    image: portfolioPortal, 
    title: "Portals", 
    count: 5,
    description: "Admin & Client Portals"
  },
  { 
    image: portfolioBrandshoot, 
    title: "Brand Shoots", 
    count: 4,
    description: "Professional Photography"
  },
  { 
    image: portfolioMarketing, 
    title: "Marketing", 
    count: 3,
    description: "Digital Marketing Campaigns"
  },
];

export const StatsSection = () => {
  return (
    <section
      id="portfolio"
      className="py-24 gradient-dark relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            ✨ Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-primary-foreground mb-4">
            Our Recent Projects!
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            Explore our diverse portfolio of successful projects across various domains
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-outfit font-bold text-primary-foreground">
                    {item.title}
                  </h3>
                  <span className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-accent-foreground font-bold shadow-glow">
                    {item.count}
                  </span>
                </div>
                <p className="text-primary-foreground/60 text-sm">
                  {item.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-1 bg-accent/20 blur-xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Total Projects Counter */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl px-8 py-4">
            <span className="text-4xl font-outfit font-bold text-accent">41+</span>
            <span className="text-primary-foreground/70">Total Projects Delivered</span>
          </div>
        </div>
      </div>
    </section>
  );
};
