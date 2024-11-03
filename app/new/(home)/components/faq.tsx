import React from "react";
import { AppButton } from "../../../../components/Widgets/Button/Button";

const Faq = () => {
	return (
		<section
			id="faq"
			className="container px-4 xl:px-28 mx-auto py-16 md:py-36 w-full"
		>
			<div className="grid gap-[60px] md:grid-cols-2 ">
				<div className="py-12 flex-1">
					<h4 className=" mb-2 text-lg uppercase font-bold">have questions?</h4>
					<h2 className="title mb-3 leading-none font-bold">
						Get Answers Here.
					</h2>
					<p className="text-primary text-lg mb-4 text-opacity-80">
						Answers to the questions we believe you might have in mind.
					</p>
					<AppButton
						loading={false} // Update Later
						name="Check FAQs"
						onPress={() => {}} // Update Later
						href="/faq"
						className="text-white bg-black px-5 py-4"
					/>
				</div>
				<div className="rounded-lg faq-card h-[370px] overflow-hidden flex-1" />
			</div>
		</section>
	);
};

export default Faq;
