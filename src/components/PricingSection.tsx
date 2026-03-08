import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const plans = [
  {
    name: "Starter",
    price: "1,499",
    features: ["Gym floor access", "Locker room access", "Free WiFi", "1 Guest pass / month"],
    popular: false,
  },
  {
    name: "Pro",
    price: "2,999",
    features: ["All Starter features", "Unlimited group classes", "Personal training (2x/mo)", "Nutrition guidance", "Sauna & steam room"],
    popular: true,
  },
  {
    name: "Elite",
    price: "4,999",
    features: ["All Pro features", "Unlimited PT sessions", "Recovery suite access", "Priority booking", "Exclusive events"],
    popular: false,
  },
];

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);

  return (
    <section id="pricing" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Membership Plans
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            INVEST IN <span className="text-gradient">YOURSELF</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-lg p-6 sm:p-8 border ${
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
                <span className="font-display text-5xl text-foreground">₹{plan.price}</span>
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
                onClick={() => setSelectedPlan(plan)}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPlan} onOpenChange={(open) => !open && setSelectedPlan(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center font-display text-2xl">
              {selectedPlan?.name} Plan — ₹{selectedPlan?.price}/mo
            </DialogTitle>
            <DialogDescription className="text-center">
              Scan the QR code below to pay via UPI
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="w-64 h-64 bg-muted rounded-lg border border-border flex items-center justify-center">
              <p className="text-muted-foreground text-sm text-center px-4">
                UPI QR Code placeholder — replace with your QR image
              </p>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              After payment, share the screenshot on WhatsApp for confirmation.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PricingSection;
