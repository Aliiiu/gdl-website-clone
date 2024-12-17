"use client";

import ProductLists from "@/app/components/product-list";
import type { Product, ProductRedirectionParams } from "@/app/types/product";
import React, { useState } from "react";

const FinanceAndLeasingProductSection = ({
	product,
}: { product: Product[] }) => {
	const [open, setOpen] = useState(false);
	const [content, setContent] = useState<ProductRedirectionParams>();

	const handleRedirection = (item: ProductRedirectionParams) => () => {
		setContent(item);
		setOpen(true);
	};

	return (
		<section className="container px-4 xl:px-28 mx-auto ">
			<ProductLists
				title={"GDL Finance & Leasing Products"}
				description={
					<>
						We have various products which have been specifically designed for
						you. These products are{" "}
						<strong className="font-semibold">
							regulated by the Central Bank of Nigeria (CBN)
						</strong>
					</>
				}
				handleRedirection={handleRedirection}
				className="lg:grid-cols-3 max-w-[1200px] mx-auto"
				productData={product.filter(
					(item) =>
						item?.product_name !== "GDL Canary Fund" &&
						item?.product_name !== "GDL Money Market Fund" &&
						item?.product_name !== "GDL Stockbroking" &&
						item?.product_name !== "Value Note" &&
						item?.product_name !== "Finance" &&
						item?.product_name !== "GDL Income Fund",
				)}
			/>
		</section>
	);
};

export default FinanceAndLeasingProductSection;
