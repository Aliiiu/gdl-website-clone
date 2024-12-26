import { generatePageMetadata } from "@/app/utils/metadata";
import Hero from "./components/hero";
import CareerBanner from "./components/banner";
import Faq from "@/app/components/faq";
import WhatWeOffer from "./components/what-we-offer";

export const generateMetadata = () => {
  return generatePageMetadata({ title: "Career" });
};

export default function Page() {
  return (
    <main className="bg-opacity-20 bg-[rgba(194,207,214,var(--tw-bg-opacity))]">
      <Hero />
      <CareerBanner />
      <WhatWeOffer />
      {/* <Faq /> */}
    </main>
  );
}
