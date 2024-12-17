import Faq from "@/app/components/faq";
import { generatePageMetadata } from "@/app/utils/metadata";
import FinanceAndLeasingProductSection from "./_components/finance-and-leasing-product-list";
import { getGDLProductData } from "./actions";

export const generateMetadata = () => {
	return generatePageMetadata({ title: "Products" });
};

export default async function Page() {
	const product = await getGDLProductData();
	return (
		<div>
			<FinanceAndLeasingProductSection product={product} />
			<Faq />
		</div>
	);
}
