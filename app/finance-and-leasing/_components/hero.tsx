import React from "react";

const Hero = () => {
	return (
		<div
			id="corporate-information"
			className="flex-1 flex flex-col pt-10 md:mt-20 px-4 justify-center"
		>
			<div>
				<h5 className="mb-1 text-second text-center text-xs">
					Finance and Leasing
				</h5>
				<h1 className="title leading-tight text-center max-w-[700px] mx-auto mb-4">
					GDL FINANCE AND LEASING COMPANY LIMITED
				</h1>
				<p className="mb-3 leading-loose text-center max-w-[900px] mx-auto">
					The Finance & Leasing arm of Growth and Development Limited (GDL) is
					comprised of a team of seasoned financial professionals, who
					understand that your financial needs are unique and provide unique
					financial solutions. For the individual looking to grow wealth, we
					offer quality financial instruments and offer personal and corporate
					lending options to those looking to delve into new ventures or
					opportunities.
				</p>
			</div>
		</div>
	);
};

export default Hero;
