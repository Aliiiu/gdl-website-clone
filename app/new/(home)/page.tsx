import BannerSection from "./components/banner";
import Blog from "./components/blog";
import Faq from "./components/faq";
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
