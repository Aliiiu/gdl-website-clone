import React from "react";
import { coreValues } from "../constants";

const CoreValues = () => {
	return (
		<section
			id="core-values"
			className="container lg:px-6 md:w-5/6 lg:w-4/6 mx-auto pt-16 md:pt-24 xl:pt-36 w-full"
		>
			<div>
				<h2 className="title mb-4 text-center">Our Core Values</h2>
				<p className="text-center mx-auto max-w-lg">
					Amongst other things we stand for, these are values we find at the
					core of our being.
				</p>
				<div className="grid mt-[100px] grid-cols-2 md:grid-cols-3 gap-y-[100px]">
					{coreValues.map((item) => (
						<div key={item.id} className="">
							{item.icon}
							<h5 className="text-[#9A2333] font-medium mt-3 cursor-pointer text-center">
								{item.name}
							</h5>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CoreValues;
