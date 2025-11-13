import About from "@/components/ui/home/About";
import Hero from "@/components/ui/home/Hero";
import Medicine from "@/components/ui/home/medicine";
import TestimonialSection from "@/components/ui/home/testimonial";
import Why from "@/components/ui/home/why";
import FoundersNote from "@/components/ui/home/FoundersNote";
import ProductCategories from "@/components/ui/home/ProductCategories";
import Stats from "@/components/ui/home/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Medicine />
      <Why />
      <TestimonialSection />
      <FoundersNote />
      <Stats />
    </>
  );
}
