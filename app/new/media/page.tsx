import CustomHeader from "@/app/components/custom-page-hero";
import { getMediaGeneralData } from "./action";
import { IoFilmOutline } from "react-icons/io5";
import Faq from "@/app/components/faq";
import MediaContent from "./components/media-content";
import { generatePageMetadata } from "@/app/utils/metadata";

export const generateMetadata = () => generatePageMetadata({ title: "Media" });

export default async function Page() {
	const heroContent = await getMediaGeneralData();
	return (
		<main>
			<CustomHeader
				name={heroContent?.title ?? "Testimonial"}
				sub={
					heroContent?.description ||
					"A Catalog of our contributions to the Media space!"
				}
				icon={<IoFilmOutline />}
			/>
			<MediaContent />
			<Faq />
		</main>
	);
}
