import Faq from "@/app/components/faq";
import BannerSection from "./components/banner";
import Blog from "./components/blog";
import GetStarted from "./components/get-started";
import Hero from "./components/hero";
import HousemoniBanner from "./components/housemoni-banner";
import Products from "./components/products";

export default function Page() {
	return (
		<div>
			<Hero />
			<HousemoniBanner />
			<Products />
			<BannerSection />
			<GetStarted />
			<Blog />
			<Faq />
		</div>
	);
}
