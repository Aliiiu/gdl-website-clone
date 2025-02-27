import Faq from "@/components/faq";
import BannerSection from "./_components/banner";
import Blog from "./_components/blog";
import GetStarted from "./_components/get-started";
import Hero from "./_components/hero";
import HousemoniBanner from "./_components/housemoni-banner";
import Products from "./_components/products";
import TestimonyLayout from "./_components/testimonials";
import { getTestimonialData } from "./_actions";
import CanaryBanner from "./_components/canary-banner";

export default async function Page() {
  const testimonialData = await getTestimonialData();
  return (
    <div>
      <Hero />
      <HousemoniBanner />
      <Products />
      <BannerSection />
      <GetStarted />
      <TestimonyLayout testimonial={testimonialData} />
      <CanaryBanner />
      <Blog />
      <Faq />
    </div>
  );
}
