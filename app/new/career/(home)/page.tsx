import { generatePageMetadata } from "@/app/utils/metadata";
import Hero from "./components/hero";
import CareerBanner from "./components/banner";

export const generateMetadata = () => {
  return generatePageMetadata({ title: "Career" });
};

export default function Page() {
  return (
    <main>
      <Hero />
      <CareerBanner />
    </main>
  );
}
