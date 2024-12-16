"use client";

import React, { useState } from "react";
import { AppButton } from "../../../../../components/Widgets/Button/Button";
import CloudinaryImage from "../../../../../components/Widgets/CloudinaryImage";
import AppModal from "../../../../../components/Widgets/Modal/Modal";
import parse from "html-react-parser";
import type { Products } from "../../types";
import { z } from "zod";

const ModalContentSchema = z.object({
	header: z.string(),
	content: z.string(),
	desc: z.string().optional(),
	icon: z.string(),
	img: z.string().url(),
});

type ModalContent = z.infer<typeof ModalContentSchema>;

const ProductsList = ({ product }: { product: Products }) => {
	const [open, setOpen] = useState(false);
	const [content, setContent] = useState<ModalContent>({} as ModalContent);

	const handleRedirection = (item: ModalContent) => () => {
		setContent(item);
		setOpen(true);
	};
	return (
		<div className="mt-10 md:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
			{product.map((item) => {
				const arr = item?.product_image_url?.split("/");
				return (
					<div
						key={item.product_name}
						className="shadow-md rounded-lg h-96 overflow-hidden flex flex-col relative justify-end"
					>
						<CloudinaryImage
							src={arr?.[arr?.length - 1]}
							alt={item.product_name}
							layout="fill"
							objectFit="cover"
							objectPosition={"center"}
						/>
						<div
							style={{
								background:
									"linear-gradient(180deg,transparent,rgba(153,35,51,.25),rgba(153,35,51,.85))",
							}}
							className="flex p-6 h-full justify-end z-10 text-white flex-col items-start"
						>
							<h2 className="text-xl font-bold lg:text-2xl">
								{item.product_name}
							</h2>
							<p className="text-lg break-words text-white">
								{item.product_snippet}
								{/* {item.product_image_url} */}
							</p>
							<AppButton
								name="Learn more"
								onPress={handleRedirection({
									header: item.product_name,
									content: item.product_description,
									desc: item.product_snippet,
									icon: item.product_icon_url,
									img: item.product_image_url,
								})}
								loading={false} // Update Later
								className="mt-4 uppercase card-btn bg-white text-black"
							/>
						</div>
					</div>
				);
			})}
			<AppModal
				open={open}
				onClose={() => setOpen(false)}
				content={<ModalContent content={content} />}
			/>
		</div>
	);
};

export default ProductsList;

const ModalContent = ({ content }: { content: ModalContent }) => {
	return (
		<div className="relative overflow-hidden min-h-[320px] rounded-lg max-w-[90vw] bg-white">
			<section className="max-w-[1200px] max-h-[90vh] overflow-auto pb-0 flex">
				<div
					className="bg-green-300 w-full md:w-4/12 flex justify-center items-start rounded-tl-[.5rem] rounded-bl-[.5rem]"
					style={{
						backgroundImage: `url(${content?.img})`,
						backgroundPosition: "39% 0%",
						backgroundSize: "cover",
						minHeight: "100%",
					}}
				/>
				<div className="w-full md:w-8/12 px-6 md:px-10 py-16">
					<div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center text-center sm:text-left">
						<div className="bg-opacity-[1] bg-[rgba(248,248,248,var(--tw-bg-opacity))] p-4 rounded-lg mb-4 md:mb-0">
							<div className="opacity-20">
								<img
									className="mx-auto"
									src={content?.icon}
									style={{ height: "50px" }}
									alt="icon"
								/>
							</div>
						</div>
						<div className="sm:ml-6">
							<h1 className="text-3xl md:text-4xl font-bold text-opacity-[1] text-[#992333]">
								{content?.header || "Value Note"}
							</h1>
							<h3 className="font-medium text-black border-b-0 border-black pb-0 border-opacity-20">
								{content?.desc}
							</h3>
						</div>
					</div>
					<article className="mt-6 text-left text-sm sm:text-base">
						{parse(content?.content)}
					</article>
					<div className="flex justify-center sm:justify-start mt-16">
						<a
							href="https://clientportal.gdl.com.ng/ords/f?p=2801:300:7060232055540"
							className="py-[.8rem] px-[1.5rem] rounded-lg text-white md:mr-6 mb-4 md:mb-0 bg-[#992333]"
							target="_blank"
							rel="noreferrer"
						>
							{"Invest Now →"}
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};
