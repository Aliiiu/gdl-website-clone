import Image from "next/image";
import React from "react";

const Products = () => {
	return (
		<section id="products" className="py-16 md:py-24 xl:py-36">
			<div className="container px-4 xl:px-28 mx-auto">
				<div className="text-center md:text-center">
					<h1 className="text-4xl sm:text-5xl font-bold mb-[.75rem]">
						Products
					</h1>
					<p className="text-lg w-full md:w-4/5 xl:w-3/5 leading-[1.75rem] text-opacity-[0.9] text-[rgba(31,26,23,var(--tw-text-opacity))] dark:text-white mx-auto">
						We have various products which have been specifically designed for
						you. This product is
						<strong className="font-semibold">
							{" "}
							regulated by Securities & Exchange Commission (SEC)
						</strong>
					</p>
				</div>
				<div className="mt-10 md:mt-24 grid max-w-[400px] mx-auto gap-6">
					{stockbrokers.map((item) => {
						return (
							<div
								key={item.title}
								className="shadow-md rounded-lg h-96 overflow-hidden flex flex-col relative justify-end"
							>
								<Image
									src={item.img}
									alt={item.title}
									fill
									sizes="100%"
									className="object-cover object-center"
								/>
								<div
									style={{
										background:
											"linear-gradient(180deg,transparent,rgba(153,35,51,.25),rgba(153,35,51,.85))",
									}}
									className="flex p-6 h-full justify-end z-10 text-white flex-col items-start"
								>
									<h2 className="text-xl font-bold lg:text-2xl">
										{item.title}
									</h2>
									<p className="text-lg break-words text-white">
										{item.hint}

										{/* {item.product_image_url} */}
									</p>
									{/* <AppButton
											name="Learn more"
											onPress={() => router.push("/products")}
											className="mt-4 uppercase card-btn bg-white text-black"
										/> */}
								</div>
							</div>
						);
					})}
				</div>

				<div className="flex mt-10 md:mt-20 justify-center items-center">
					{/* <AppButton
							name="Explore More"
							onPress={() => router.push("/products")}
							className="bg-[#9A2333] py-[1rem] rounded-[0.5rem] px-[1.5rem] text-[1.5rem] text-white"
						/> */}
				</div>
			</div>
		</section>
	);
};

export default Products;

export const stockbrokers = [
	{
		title: "Stockbroking",
		hint: "Stack your cash from stocks",
		img: "/Images/timely-market-intelligence.jpeg",
	},
];
