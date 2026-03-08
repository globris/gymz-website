import { Flame, Zap, Heart, Dumbbell, PersonStanding, Timer } from "lucide-react";

const classes = [
  { icon: Flame, name: "HIIT Training", desc: "High-intensity intervals to torch calories and build endurance.", time: "45 min" },
  { icon: Dumbbell, name: "Strength & Power", desc: "Build muscle and raw strength with progressive overload.", time: "60 min" },
  { icon: Heart, name: "Yoga & Mindfulness", desc: "Restore balance with guided yoga and breathing exercises.", time: "50 min" },
  { icon: Zap, name: "CrossFit", desc: "Functional fitness combining cardio, lifting, and gymnastics.", time: "55 min" },
  { icon: PersonStanding, name: "Boxing Fit", desc: "Cardio-intensive boxing drills for full-body conditioning.", time: "45 min" },
  { icon: Timer, name: "Spin Cycle", desc: "Heart-pumping indoor cycling set to energizing music.", time: "40 min" },
];

const ClassesSection = () => (
  <section id="classes" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-3">
          Our Programs
        </p>
        <h2 className="font-display text-5xl md:text-6xl text-foreground">
          CLASSES THAT <span className="text-gradient">IGNITE</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((c) => (
          <div
            key={c.name}
            className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <c.icon className="text-primary" size={22} />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-2">{c.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{c.desc}</p>
            <span className="text-xs uppercase tracking-wider text-primary font-semibold">
              {c.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClassesSection;
