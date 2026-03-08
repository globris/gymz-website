import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ClassesSection from "@/components/ClassesSection";
import TrainersSection from "@/components/TrainersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import BMICalculator from "@/components/BMICalculator";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ClassesSection />
    <TrainersSection />
    <BeforeAfterSection />
    <TestimonialsSection />
    <BMICalculator />
    <PricingSection />
    <ContactSection />
    <Footer />
    <FloatingButtons />
  </>
);

export default Index;
