import CustomHeader from "@/app/components/custom-page-hero";
import { generatePageMetadata } from "@/app/utils/metadata";
import ResearchHeader from "./_components/research-header";
import Faq from "@/app/components/faq";
import ResearchFeatures from "./_components/features";
import ResearchBanner from "./_components/banner";

export const generateMetadata = () =>
	generatePageMetadata({ title: "Research" });

export default function Page() {
	return (
		<div>
			<CustomHeader content={<ResearchHeader />} />
			<ResearchFeatures />
			<ResearchBanner />
			<Faq />
		</div>
	);
}
