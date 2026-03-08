import { Dumbbell } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-2">
          <Dumbbell className="text-primary" size={24} />
          <span className="font-display text-xl tracking-wider text-foreground">
            IRON<span className="text-gradient">FORGE</span>
          </span>
        </a>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} IronForge Gym. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "FAQ"].map((link) => (
            <a key={link} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
