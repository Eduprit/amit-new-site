import { BuildingProducts } from "@/components/building-products";
import { ContactSection } from "@/components/contact-section";
import { Intro } from "@/components/intro";
import TestimonialCarousel from "@/components/testimonials";
import { ThoughtsOnProducts } from "@/components/thoughts-on-building";

export default async function Home() {
  return (
    <>
      <Intro />
      <div className="m-auto h-12 w-12 rounded-full bg-accent hover:animate-ping" />
      <BuildingProducts />
      <div className="m-auto h-12 w-12 rounded-full bg-accent hover:animate-ping" />
      <ThoughtsOnProducts />
   
      {/* <TestimonialCarousel /> */}
      <div className="m-auto h-12 w-12 rounded-full bg-accent hover:animate-ping" />
      <ContactSection />
    </>
  );
}
