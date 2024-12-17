import Faq from "@/app/components/faq";
import AboutGDLGroup from "./_components/about-gdl-group";
import Board from "./_components/board";
import CoreValues from "./_components/core-values";
import Hero from "./_components/Hero";
import Management from "./_components/management";
import MissionVision from "./_components/mission-vision";
import WhatWeAre from "./_components/what-we-are";
import WhatWeDo from "./_components/what-we-do";

export default function Page() {
	return (
		<div>
			<Hero />
			<MissionVision />
			<AboutGDLGroup />
			<WhatWeDo />
			<WhatWeAre />
			<CoreValues />
			<Management />
			<Board />
			<Faq />
		</div>
	);
}
