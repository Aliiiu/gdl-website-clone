import Faq from "@/app/components/faq";
import { generatePageMetadata } from "@/app/utils/metadata";
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
