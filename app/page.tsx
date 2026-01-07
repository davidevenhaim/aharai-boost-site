import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import WhyUsSection from "@/components/landing/WhyUsSection";
import ProgramTimeline from "@/components/landing/ProgramTimeline";
import HighlightsSection from "@/components/landing/HighlightsSection";
import SafetySection from "@/components/landing/SafetySection";
import AboutSection from "@/components/landing/AboutSection";
import CTASection from "@/components/landing/CTASection";
import AnimatedDivBreathing from "@/components/ui/animated-div-breathing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aharai",
  description: "Aharai"
};

export default function Home() {
  return (
    <main className='min-h-screen bg-black text-white selection:bg-[#fcd839] selection:text-black'>
      <Navbar />
      <HeroSection />

      <WhyUsSection />

      <ProgramTimeline />

      <AnimatedDivBreathing>
        <HighlightsSection />
      </AnimatedDivBreathing>

      <SafetySection />

      <AboutSection />

      <CTASection />
    </main>
  );
}
