import About from "@/components/About";
import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <About></About>
      <FeaturesSection></FeaturesSection>
      <TestimonialsSection></TestimonialsSection>
    </div>
  );
}
