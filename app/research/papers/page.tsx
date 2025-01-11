import CustomHeader from "@/components/custom-page-hero";
import { generatePageMetadata } from "@/utils/metadata";
import { PaperHero } from "./_components/paper-hero";
import Faq from "@/components/faq";

export const generateMetadata = () =>
  generatePageMetadata({ title: "Research" });

export default function Page() {
  const desc =
    "Our research team organizes all they have learnt from the market into documents you can download at any time!";

  return (
    <main>
      <CustomHeader
        hasBackImg
        content={<PaperHero name="Research Papers" description={desc} />}
      />
      <Faq />
    </main>
  );
}
