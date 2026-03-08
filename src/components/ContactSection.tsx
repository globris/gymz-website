import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10 md:mb-16">
        <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-3">
          Get In Touch
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
          CONTACT <span className="text-gradient">US</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 max-w-5xl mx-auto">
        <div className="space-y-6 sm:space-y-8">
          {[
            { icon: MapPin, title: "Location", text: "123 Fitness Ave, Downtown City" },
            { icon: Phone, title: "Phone", text: "+1 (555) 123-4567" },
            { icon: Mail, title: "Email", text: "info@gym.com" },
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

      {/* Google Map */}
      <div className="mt-12 rounded-xl overflow-hidden border border-border">
        <iframe
          title="IronFocation"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=""
        />
      </div>
    </div>
  </section>
);

export default ContactSection;
