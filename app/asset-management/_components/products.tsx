import ProductLists from "@/app/components/product-list";
import Image from "next/image";
import React from "react";

const Products = () => {
	return (
		<section
			id="products"
			className="container px-4 xl:px-28 mx-auto py-16 md:py-24 xl:py-36"
		>
			<ProductLists
				title={"Products"}
				description={
					<>
						We have various products which have been specifically designed for
						you. These products are{" "}
						<strong className="font-semibold">
							regulated by Securities & Exchange Commission (SEC)
						</strong>
					</>
				}
				className="md:grid-cols-2 gap-6 lg:grid-cols-3 max-w-[1200px] mx-auto"
				productData={assetMgmt}
				showExploreMoreBtn
			/>
		</section>
	);
};

export default Products;

const assetMgmt = [
	{
		product_name: "GDL Canary Fund",
		product_snippet: "Let your money speak for you.",
		img: "/Images/cardOneImg.png",
	},
	{
		product_name: "GDL Money Market Fund",
		product_snippet: "Your Savings Redefined",
		img: "/Images/money-market-fund.jpeg",
	},
	{
		product_name: "GDL Income Fund",
		product_snippet: "Consistent and safe income",
		img: "/Images/income-fund.png",
	},
];
