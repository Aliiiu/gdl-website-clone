import React from "react";

const Hero = () => {
	return (
		<div className="flex-1 flex flex-col mt-10 md:pt-20 px-4 justify-center">
			<div id="corporate-information">
				<h5 className="mb-1 text-second text-center text-xs">
					Asset Management
				</h5>
				<h1 className="title leading-tight text-center max-w-[700px] mx-auto mb-4">
					GDL ASSET MANAGEMENT LTD
				</h1>
				<p className="mb-3 leading-loose text-center max-w-[900px] mx-auto">
					Growth and Development Asset Management Limited (GDL) is a non-bank
					financial institution licensed by the Securities & Exchange Commission
					(SEC) .We are in the asset management business to redefine the
					business by expanding beyond wealth management and wealth creation –
					We are dedicated to the maintenance and preservation of the asset base
					and wealth of our clients
				</p>
			</div>
		</div>
	);
};

export default Hero;
