import CustomHeader from "@/components/custom-page-hero";
import Faq from "@/components/faq";
import { generatePageMetadata } from "@/utils/metadata";
import TestimonialList from "./components/testimonial-list";

export const generateMetadata = () =>
  generatePageMetadata({ title: "Testimonials" });

export default function Page() {
  return (
    <main>
      <CustomHeader />
      <TestimonialList />
      <Faq />
    </main>
  );
}
