import { Instagram } from "lucide-react";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import trainer4 from "@/assets/trainer-4.jpg";

const trainers = [
  { name: "Jake Morrison", specialty: "Strength & Conditioning", image: trainer1, experience: "8+ years" },
  { name: "Maya Santos", specialty: "HIIT & Functional Training", image: trainer2, experience: "6+ years" },
  { name: "Ryan Cooper", specialty: "Bodybuilding & Nutrition", image: trainer3, experience: "10+ years" },
  { name: "Emma Taylor", specialty: "Yoga & Flexibility", image: trainer4, experience: "5+ years" },
];

const TrainersSection = () => (
  <section id="trainers" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10 md:mb-16">
        <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-3">
          Our Team
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
          EXPERT TRAINERS
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Our certified professionals are here to guide you every step of the way.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {trainers.map((t) => (
          <div
            key={t.name}
            className="group rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-colors bg-card"
          >
            <div className="overflow-hidden relative">
              <img
                src={t.image}
                alt={t.name}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                <a
                  href="#"
                  className="bg-primary/90 p-2 rounded-full text-primary-foreground hover:bg-primary transition-colors"
                  aria-label={`${t.name} Instagram`}
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
            <div className="p-5 text-center">
              <p className="font-display text-xl text-foreground">{t.name}</p>
              <p className="text-primary text-sm font-semibold mt-1">{t.specialty}</p>
              <p className="text-muted-foreground text-xs mt-1">{t.experience} experience</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrainersSection;
