import Faq from "@/app/components/faq";
import { generatePageMetadata } from "@/app/utils/metadata";
import TermsContent from "./components/terms-content";

export const generateMetadata = () => {
  return generatePageMetadata({ title: "Terms of Use" });
};

export default function Page({
  searchParams,
}: {
  searchParams: { hideLayout?: boolean };
}) {
  const { hideLayout } = searchParams;
  return (
    <main>
      <TermsContent />
      {!hideLayout && <Faq />}
    </main>
  );
}
