import { AppButton } from "@/components/Widgets/Button/Button";
import CloudinaryImage from "@/components/Widgets/CloudinaryImage";
import type { Product, ProductRedirectionParams } from "../types/product";

interface ProductListsProps {
	productData: Product[];
	handleRedirection: (params: ProductRedirectionParams) => () => void;
	title: string;
	description: string | JSX.Element;
	className?: string;
}

const ProductLists = ({
	productData,
	title,
	description,
	handleRedirection,
	className,
}: ProductListsProps) => {
	return (
		<div>
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-[.75rem]">
				{title}
			</h1>
			<p className="text-lg w-full md:w-1/2 lg:w-3/5 leading-[1.75rem] text-center text-opacity-[0.9] text-[rgba(31,26,23,var(--tw-text-opacity))] dark:text-white mx-auto">
				{description}
			</p>
			<div className={`mt-5 sm:mt-10 lg:mt-16 grid ${className}`}>
				{productData.map((item) => {
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
								</p>
								<AppButton
									loading={false}
									name="Learn more"
									onPress={handleRedirection({
										header: item?.product_name,
										content: item?.product_description,
										desc: item?.product_snippet,
										icon: item?.product_icon_url,
										img: item?.product_image_url,
									})}
									className="mt-4 uppercase card-btn bg-white text-black"
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductLists;
