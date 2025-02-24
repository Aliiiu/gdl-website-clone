import Faq from "@/components/faq";
import { generatePageMetadata } from "@/utils/metadata";
import TermsContent from "./components/terms-content";

export const generateMetadata = () => {
  return generatePageMetadata({ title: "Terms of Use" });
};

export default async function Page(
  props: {
    searchParams: Promise<{ hideLayout?: boolean }>;
  }
) {
  const searchParams = await props.searchParams;
  const { hideLayout } = searchParams;
  return (
    <main>
      <TermsContent />
      {!hideLayout && <Faq />}
    </main>
  );
}
