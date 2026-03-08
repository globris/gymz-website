import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Modern gym interior"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/70" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center py-32">
      <p className="text-primary font-semibold uppercase tracking-[0.3em] text-sm mb-4 animate-fade-in-up">
        Premium Fitness Experience
      </p>
      <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-9xl leading-none tracking-tight text-foreground mb-6 animate-fade-in-up [animation-delay:0.15s] opacity-0">
        FORGE YOUR<br />
        <span className="text-gradient">STRONGEST</span> SELF
      </h1>
      <p className="max-w-xl mx-auto text-muted-foreground text-lg mb-10 animate-fade-in-up [animation-delay:0.3s] opacity-0">
        State-of-the-art equipment, expert trainers, and a community that pushes
        you beyond limits. Your transformation starts here.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.45s] opacity-0">
        <Button size="lg" className="glow-shadow text-lg px-8" asChild>
          <a href="#pricing">
            Start Free Trial <ArrowRight className="ml-2" size={18} />
          </a>
        </Button>
        <Button size="lg" variant="outline" className="text-lg px-8" asChild>
          <a href="#classes">Explore Classes</a>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
