import Faq from "@/app/components/faq";
import BannerSection from "./components/banner";
import Blog from "./components/blog";
import GetStarted from "./components/get-started";
import Hero from "./components/hero";
import HousemoniBanner from "./components/housemoni-banner";
import Products from "./components/products";
import TestimonyLayout from "./components/testimonials";
import { getTestimonialData } from "./actions";

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
      <Blog />
      <Faq />
    </div>
  );
}
