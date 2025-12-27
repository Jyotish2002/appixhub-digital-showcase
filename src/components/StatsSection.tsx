import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 3, label: "Web Apps" },
  { value: 5, label: "Mobile Apps" },
  { value: 15, label: "Websites" },
  { value: 6, label: "E-Commerce" },
  { value: 5, label: "Portals" },
  { value: 4, label: "Brand Shoots" },
  { value: 3, label: "Marketing" },
];

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 gradient-dark relative overflow-hidden"
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-primary-foreground">
            Our Recent Projects!
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-300 group-hover:scale-105">
                <span className="text-3xl md:text-4xl font-outfit font-bold text-accent">
                  {counts[index]}
                </span>
              </div>
              <span className="text-sm text-primary-foreground/70 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
