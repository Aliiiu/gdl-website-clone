import Faq from "@/components/faq";
import { generatePageMetadata } from "@/utils/metadata";
import PrivacyPolicy from "./components/privacy-policy";

export const generateMetadata = () => {
  return generatePageMetadata({ title: "Privacy Policy" });
};

export default function Page() {
  return (
    <main>
      <PrivacyPolicy />
      <Faq />
    </main>
  );
}
