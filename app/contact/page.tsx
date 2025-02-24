import CustomHeader from "@/components/custom-page-hero";
import Faq from "@/components/faq";
import ContactInfo from "./component/contact-info";
import { generatePageMetadata } from "@/utils/metadata";

export const generateMetadata = () => {
  return generatePageMetadata({ title: "Contact Us" });
};

export default function Page() {
  return (
    <main>
      <CustomHeader
        name="Contact Us"
        bg="#FFFFFF"
        noIcon
        sub="Any questions or remarks? Just write us a message."
      />
      <ContactInfo />
      <Faq />
    </main>
  );
}
