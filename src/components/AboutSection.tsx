import classesImg from "@/assets/classes.jpg";
import { Target, Users, Clock, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "5,000+", label: "Active Members" },
  { icon: Award, value: "15+", label: "Expert Trainers" },
  { icon: Clock, value: "24/7", label: "Open Hours" },
  { icon: Target, value: "50+", label: "Weekly Classes" },
];

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={classesImg}
            alt="Fitness class in action"
            className="rounded-lg w-full object-cover aspect-square"
          />
          <div className="absolute -bottom-6 -right-6 bg-primary rounded-lg p-6 hidden md:block">
            <p className="font-display text-4xl text-primary-foreground">10+</p>
            <p className="text-primary-foreground/80 text-sm">Years of Excellence</p>
          </div>
        </div>

        <div>
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Why Choose Us
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
            MORE THAN JUST A GYM
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            At IronForge, we believe fitness is a lifestyle. Our world-class
            facility combines cutting-edge equipment with passionate coaches to
            deliver results that last. Whether you're a beginner or elite
            athlete, we have everything you need.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <s.icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-display text-2xl text-foreground">{s.value}</p>
                  <p className="text-muted-foreground text-sm">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
