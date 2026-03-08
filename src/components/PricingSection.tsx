import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "29",
    features: ["Gym floor access", "Locker room access", "Free WiFi", "1 Guest pass / month"],
    popular: false,
  },
  {
    name: "Pro",
    price: "59",
    features: ["All Starter features", "Unlimited group classes", "Personal training (2x/mo)", "Nutrition guidance", "Sauna & steam room"],
    popular: true,
  },
  {
    name: "Elite",
    price: "99",
    features: ["All Pro features", "Unlimited PT sessions", "Recovery suite access", "Priority booking", "Exclusive events"],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-16 md:py-16 md:py-16 md:py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <div className0 md:mb-1="text-ce0 md:mb-1nter mb-16">
        <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-3">
          Membership Plans
        </p>
        <h2 className="4xl md:text-5xl lgisplay text-5xl md:text-6xl text-foreground">
          INVEST IN <span className="text-gradient">YOURSELF</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-card rounded-lg p-8 border ${
              plan.popular ? "border-primary glow-shadow" : "border-border"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs uppercase tracking-wider font-semibold px-4 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-3xl text-foreground mb-1">{plan.name}</h3>
            <div className="mb-6">
              <span className="font-display text-5xl text-foreground">${plan.price}</span>
              <span className="text-muted-foreground text-sm">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="text-primary shrink-0" size={16} />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              className="w-full"
              variant={plan.popular ? "default" : "outline"}
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
