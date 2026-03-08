import { Dumbbell, MapPin, Phone, Mail, Clock, ArrowUp, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Classes", href: "#classes" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const workoutLinks = [
  "Strength Training",
  "HIIT Cardio",
  "Yoga & Flexibility",
  "CrossFit",
  "Boxing",
  "Zumba",
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-secondary border-t border-border overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <a href="#home" className="flex items-center gap-2">
              <Dumbbell className="text-primary" size={28} />
              <span className="font-display text-2xl tracking-wider text-foreground">
                IRON<span className="text-gradient">FORGE</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transform your body, elevate your mind. Join the ultimate fitness experience at IronForge Gym.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "YouTube" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-foreground mb-5">QUICK LINKS</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Workouts */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-foreground mb-5">WORKOUTS</h4>
            <ul className="space-y-3">
              {workoutLinks.map((name) => (
                <li key={name}>
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-default">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-foreground mb-5">REACH US</h4>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: "123 Fitness Avenue, Mumbai, India" },
                { icon: Phone, text: "+91 98765 43210" },
                { icon: Mail, text: "info@ironforge.gym" },
                { icon: Clock, text: "Mon–Sat: 5AM – 10PM" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={16} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} IronForge Gym. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "FAQ"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-primary/30"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
