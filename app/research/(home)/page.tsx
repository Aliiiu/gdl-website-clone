import CustomHeader from "@/components/custom-page-hero";
import { generatePageMetadata } from "@/utils/metadata";
import ResearchHeader from "./_components/research-header";
import Faq from "@/components/faq";
import ResearchFeatures from "./_components/features";
import ResearchBanner from "./_components/banner";

export const generateMetadata = () =>
  generatePageMetadata({ title: "Research" });

export default function Page() {
  return (
    <main>
      <CustomHeader content={<ResearchHeader />} />
      <ResearchFeatures />
      <ResearchBanner />
      <Faq />
    </main>
  );
}
