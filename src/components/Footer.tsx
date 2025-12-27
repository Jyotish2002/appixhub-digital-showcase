import { Instagram, Linkedin, Facebook } from "lucide-react";

const servicesLinks = [
  "Digital Marketing",
  "Web Development",
  "Mobile Apps",
  "AI/ML Solutions",
  "UI/UX Design",
  "Dropshipping Setup",
  "E-Commerce Solutions",
  "Brand Photography",
];

const companyLinks = [
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Services", href: "#services" },
  { name: "Technologies", href: "#technologies" },
  { name: "Terms of Service", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Refund Policy", href: "#" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-glow">
                <span className="text-accent-foreground font-outfit font-bold text-lg">A</span>
              </div>
              <span className="font-outfit font-bold text-xl text-primary-foreground">
                AppixHub
              </span>
            </a>
            <p className="text-primary-foreground/60 mb-6 leading-relaxed">
              Transforming ideas into impactful digital solutions. Your trusted partner for apps, websites, and marketing.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary-foreground/70 group-hover:text-accent-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-outfit font-bold text-primary-foreground text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-outfit font-bold text-primary-foreground text-lg mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-outfit font-bold text-primary-foreground text-lg mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="text-primary-foreground/60 text-sm">
                Noida Sector 50 B Block,<br />
                Sector 50, Noida,<br />
                Uttar Pradesh 201301
              </li>
              <li>
                <a
                  href="tel:+917015961124"
                  className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  +91 7015961124
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@appixhub.in"
                  className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  info@appixhub.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-primary-foreground/50 text-sm">
            © 2025 AppixHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
