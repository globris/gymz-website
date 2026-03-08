import { useState, useEffect } from "react";
import { Menu, X, Dumbbell, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Classes", href: "#classes" },
  { label: "Trainers", href: "#trainers" },
  { label: "BMI", href: "#bmi" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => !document.documentElement.classList.contains("light"));

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="flex items-center gap-2">
          <Dumbbell className="text-primary" size={28} />
          <span className="font-display text-2xl tracking-wider text-foreground">
            IRON<span className="text-gradient">FORGE</span>
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button size="sm" asChild>
            <a href="#pricing">Join Now</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-b border-border px-4 pb-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button className="mt-4 w-full" size="sm" asChild>
            <a href="#pricing">Join Now</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
