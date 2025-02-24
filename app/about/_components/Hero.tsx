import { getAboutHeroData } from "../actions";

export default async function Hero() {
	const heroData = await getAboutHeroData();
	return (
		<section
			style={{
				backgroundImage: `url(${heroData.bg_image_url})`,
			}}
			className="flex flex-col items-center md:justify-center bg-no-repeat h-[450px] md:h-[640px] pt-12 md:pt-0 bg-bottom lg:bg-center bg-[size:120%]"
		>
			<div className="mx-auto p-2 lg:px-12 md:max-w-2xl lg:max-w-3xl rounded-lg md:bg-primary/20">
				<h1 className="font-bold text-black md:text-white text-center text-2xl md:text-3xl lg:text-4xl">
					{heroData.title}
				</h1>
				<p className="text-black mt-2 max-w-[650px] md:text-white text-center">
					{heroData.description}
				</p>
			</div>
		</section>
	);
}
