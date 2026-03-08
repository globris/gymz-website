import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-3">
          Get In Touch
        </p>
        <h2 className="font-display text-5xl md:text-6xl text-foreground">
          CONTACT <span className="text-gradient">US</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-8">
          {[
            { icon: MapPin, title: "Location", text: "123 Fitness Ave, Downtown City" },
            { icon: Phone, title: "Phone", text: "+1 (555) 123-4567" },
            { icon: Mail, title: "Email", text: "info@ironforge.com" },
            { icon: Clock, title: "Hours", text: "Open 24/7, 365 days" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <item.icon className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="Your Name" className="bg-card" />
            <Input placeholder="Your Email" type="email" className="bg-card" />
          </div>
          <Input placeholder="Subject" className="bg-card" />
          <Textarea placeholder="Your Message" rows={5} className="bg-card" />
          <Button className="w-full" size="lg">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
