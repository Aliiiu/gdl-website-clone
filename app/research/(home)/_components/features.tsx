import React from "react";
import Image from "next/image";

const ResearchFeatures = () => {
	return (
		<section className="container px-4 xl:px-28 mx-auto w-full pt-[50px] md:py-[50px] lg:py-0">
			{features.map((feature) => (
				<div
					key={feature.id}
					className={`flex flex-col py-4 md:py-[60px] lg:py-[120px]  ${
						feature.key % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
					}`}
				>
					<div className={"md:flex flex-1 hidden justify-center"}>
						<Image
							src={feature.img}
							alt={feature.title}
							width={300}
							height={497}
							className="rounded-lg"
						/>
					</div>
					<div className="flex-1 flex flex-col justify-end pb-[50px]">
						<div className="">
							<h2 className="text-5xl mb-3 font-bold text-[#992333]">
								{feature.id}
							</h2>
							<h2 className="text-4xl md:text-5xl font-bold ">
								{feature.title}
							</h2>
							<p className="mt-5">{feature.content}</p>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default ResearchFeatures;

const features = [
	{
		id: "01",
		key: 1,
		title: "We Keep An Eye on the Stock Market.",
		content:
			"We focus on generating fundamentally-driven research and analysis of companies, sectors and economies. Following companies quoted on the Nigerian Stock Exchange daily, with a spotlight on key companies which we have invested in.",
		img: "/Images/stock-analysis.jpeg",
	},
	{
		id: "02",
		key: 2,
		title: "We Keep Up with Stock Market Trends.",
		content:
			"We love keeping our clients informed on the trends in the stock market and providing up to date market intelligence on quoted companies.",
		img: "/Images/market-trends.jpeg",
	},
	{
		id: "03",
		key: 3,
		title: "We Provide Opinions on Strategies.",
		content:
			"We also provide well-researched opinions on strategy, asset allocation, global/domestic trends and quantitative analysis.",
		img: "/Images/strategy.jpeg",
	},
	{
		id: "04",
		key: 4,
		title: "We Keep up with Business & Market Intelligence.",
		content:
			"As your trusted investment partner, we must provide you with objective and timely business and market intelligence from verified sources.",
		img: "/Images/timely-market-intelligence.jpeg",
	},
];
