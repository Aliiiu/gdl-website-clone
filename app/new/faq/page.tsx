import CustomHeader from "@/app/components/custom-page-hero";
import { generatePageMetadata } from "@/app/utils/metadata";
import TopContent from "./components/hero";
import faqImage from "@/assets/Images/faq.jpeg";
import FaqList from "./components/faq-list";

export const generateMetadata = () => {
  return generatePageMetadata({ title: "Faq" });
};

export default function Page() {
  return (
    <main>
      <CustomHeader hasBackImg imgUrl={faqImage} content={<TopContent />} />
      <FaqList />
    </main>
  );
}
