import Image from "next/image";

export default function GetStarted() {
	return (
		<section id="get-started" className="lg:w-4/6 mx-auto pt-20 -mb-20 w-full">
			<div className="flex justify-center">
				<div className="flex flex-col md:flex-row max-w-4xl mx-auto overflow-hidden rounded-lg bg-get-started-image bg-no-repeat bg-cover bg-center">
					<div className=" md:w-[50%] p-6 xl:p-12 getstarted-bg">
						<div className="flex flex-col p-12 xl:p-12 text-white h-full justify-center z-40 ">
							<h2 className="text-4xl lg:w-16 font-bold leading-tight">
								Get Started
							</h2>
							<h4 className="uppercase font-bold">in three easy steps</h4>
							<p className="text-base text-white mt-9 max-w-[300px]">
								Begin your journey to financial freedom. Make your money work
								for you.
							</p>
						</div>
					</div>
					<div className="p-12 flex md:w-[50%] flex-col bg-white ">
						{getstarted.map((item) => (
							<div
								key={item.title}
								className="flex items-center py-5 md:py-10 gap-4"
							>
								<div className="w-16 h-16 bg-[#A2A6A8] bg-opacity-10 p-3 flex justify-center items-center rounded-[50%] ">
									<div className="relative w-12 h-12 flex-shrink-0 ">
										<Image
											src={item.avatar}
											alt={item.title}
											fill
											sizes="48px"
										/>
									</div>
								</div>
								<div className="flex flex-col gap-1">
									<h2 className="font-bold text-2xl">{item.title}</h2>
									<p className="text-primary text-opacity-80">{item.content}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

const getstarted = [
	{
		avatar: "/Images/createAccount.png",
		title: "Create an Account",
		content: "Sign up for your account with your personal details",
	},
	{
		avatar: "/Images/invest.png",
		title: "Invest",
		content:
			"Set up your first investment plan via bank transfer (USSD and Internet Banking)",
	},
	{
		avatar: "/Images/profit.png",
		title: "Make Profit",
		content: "Get your money working for you and earn great returns",
	},
];
