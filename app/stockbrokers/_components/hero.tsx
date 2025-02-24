import React from "react";

const Hero = () => {
	return (
		<div className="flex-1 flex flex-col mt-10 md:mt-20 px-4 justify-center">
			<div id="corporate-information">
				<h5 className="mb-1 text-second text-center text-xs">Stockbroking</h5>
				<h1 className="title leading-tight text-center max-w-[700px] mx-auto mb-4">
					GDL STOCKBROKERS
				</h1>
				<p className="mb-3 leading-loose text-center max-w-[1200px] mx-auto">
					<strong>GDL STOCKBROKERS LIMITED</strong> (“GDL Stockbrokers”) was
					incorporated on 27 May 2016, a subsidiary of Growth & Development
					Management Limited. GDL Stockbrokers emphasizes that the interest of
					the investor is central to the overall objective of the organization.
					we constantly aim to demonstrate the highest level of integrity and
					ensure it reflects in all our dealings and services to our clients. We
					aim to providing the best execution service to our clients ranging
					from best price trade execution and advisory services. Providing them
					with well-researched information to make a sound investment decision.
					Our processes are structured to ensure timely and quality service
					delivery to all our clients. As a client of GDL Stockbrokers, you will
					receive the daily price list after each day trade, gainers and losers
					list, corporate action information for the listed companies, and
					real-time trading platform for our clients.
				</p>
			</div>
		</div>
	);
};

export default Hero;
