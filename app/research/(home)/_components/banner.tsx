import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const ResearchBanner = () => {
	return (
		<section id="research-papers" className="bg-[#F8F8F8] w-full">
			<div className="max-w-[1200px] md:px-[1.5rem] px-[1.25rem] flex justify-center py-20 mx-auto">
				<div className="flex flex-col items-center">
					<h2 className="font-bold text-4xl">Research</h2>
					<p className="text-base text-center mt-2 max-w-lg mb-3">
						Our research team gives powerful insights into all the important
						happenings in the world of business.
					</p>
					<Link href={"research/papers"}>
						<button
							type="button"
							className="capitalize px-4 bg-white text-sm border rounded-lg py-3 flex items-center gap-2"
						>
							View More <BsArrowRight className="text-[1F1A17]" />
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ResearchBanner;
