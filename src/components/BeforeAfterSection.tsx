import transform1 from "@/assets/transform-1.jpg";
import transform2 from "@/assets/transform-2.jpg";
import transform3 from "@/assets/transform-3.jpg";

const transformations = [
  {
    image: transform1,
    name: "James K.",
    result: "Lost 35kg in 10 months",
    program: "Strength & Conditioning",
  },
  {
    image: transform2,
    name: "Lisa M.",
    result: "Complete body recomposition",
    program: "HIIT & Nutrition Plan",
  },
  {
    image: transform3,
    name: "Alex R.",
    result: "Gained 15kg of muscle",
    program: "Bodybuilding Program",
  },
];

const BeforeAfterSection = () => (
  <section id="transformations" className="py-16 md:py-16 md:py-16 md:py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <div className0 md:mb-1="text-ce0 md:mb-1nter mb-16">
        <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-3">
          Real Results
        </p>
        <h2 className="4xl md:text-5xl lgisplay text-5xl md:text-6xl text-foreground">
          TRANSFORMATIONS
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Our members achieve incredible results with dedication and expert guidance.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {transformations.map((t) => (
          <div
            key={t.name}
            className="group rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-colors bg-card"
          >
            <div className="overflow-hidden">
              <img
                src={t.image}
                alt={`${t.name} transformation`}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <p className="font-display text-2xl text-foreground">{t.name}</p>
              <p className="text-primary font-semibold text-sm mt-1">{t.result}</p>
              <p className="text-muted-foreground text-sm mt-1">{t.program}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
