import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3">
    <a
      href="https://wa.me/15551234567"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-[hsl(0,0%,100%)] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
    <a
      href="tel:+15551234567"
      className="bg-primary hover:bg-primary/90 text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow transition-transform hover:scale-110"
      aria-label="Call us"
    >
      <Phone size={24} />
    </a>
  </div>
);

export default FloatingButtons;
