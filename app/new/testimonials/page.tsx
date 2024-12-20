import CustomHeader from "@/app/components/custom-page-hero";
import Faq from "@/app/components/faq";
import { generatePageMetadata } from "@/app/utils/metadata";
import TestimonialList from "./components/testimonial-list";

export const generateMetadata = () =>
	generatePageMetadata({ title: "Testimonials" });

export default function Page() {
	return (
		<main>
			<CustomHeader />
			<TestimonialList />
			<Faq />
		</main>
	);
}
