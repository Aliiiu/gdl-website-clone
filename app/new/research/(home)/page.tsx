import CustomHeader from "@/app/components/custom-page-hero";
import { generatePageMetadata } from "@/app/utils/metadata";
import ResearchHeader from "./_components/research-header";

export const generateMetadata = () =>
	generatePageMetadata({ title: "Research" });

export default function Page() {
	return <CustomHeader content={<ResearchHeader />} />;
}
