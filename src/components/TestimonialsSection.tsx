import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Marcus Johnson", role: "Member for 2 years", rating: 5, text: "Gym completely transformed my life. The trainers are incredible and the community keeps me motivated every single day. Lost 30kg in 8 months!" },
  { name: "Sarah Williams", role: "Member for 1 year", rating: 5, text: "Best gym I've ever been to. The equipment is top-notch and the classes are always challenging. I've never felt stronger or more confident." },
  { name: "David Chen", role: "Member for 3 years", rating: 5, text: "The personal training here is world-class. My trainer designed a program that worked around my injuries and got me back to peak performance." },
  { name: "Emily Rodriguez", role: "Member for 6 months", rating: 4, text: "As a beginner, I was nervous walking in. But the staff made me feel welcome from day one. The group classes are my favorite part!" },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-primary text-primary" : "text-muted-foreground/30"}
      />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10 md:mb-16">
        <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-3">
          Testimonials
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
          WHAT OUR MEMBERS SAY
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-card border border-border rounded-lg p-6 sm:p-8 relative group hover:border-primary/40 transition-colors"
          >
            <Quote className="text-primary/15 absolute top-6 right-6" size={40} />
            <StarRating rating={t.rating} />
            <p className="text-muted-foreground leading-relaxed mt-4 mb-6">
              "{t.text}"
            </p>
            <div>
              <p className="text-foreground font-semibold">{t.name}</p>
              <p className="text-muted-foreground text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
