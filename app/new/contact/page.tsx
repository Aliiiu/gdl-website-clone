import CustomHeader from "@/app/components/custom-page-hero";
import Faq from "@/app/components/faq";
import ContactInfo from "./component/contact-info";
import { generatePageMetadata } from "@/app/utils/metadata";

export const generateMetadata = () => {
  return generatePageMetadata({ title: "Career" });
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
