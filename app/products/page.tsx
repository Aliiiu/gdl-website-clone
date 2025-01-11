import Faq from "@/components/faq";
import { generatePageMetadata } from "@/utils/metadata";
import FinanceAndLeasingProductSection from "./_components/finance-and-leasing-product-list";
import { getGDLProductData } from "./actions";
import AssetManagmentProductSection from "./_components/asset-management-list";
import StockBrokerProductSection from "./_components/stockbroker-list";
import { RightProduct } from "./_components/right-product";

export const generateMetadata = () => {
  return generatePageMetadata({ title: "Products" });
};

export default async function Page() {
  const product = await getGDLProductData();
  return (
    <main className="mt-10 md:mt-20">
      <FinanceAndLeasingProductSection product={product} />
      <AssetManagmentProductSection product={product} />
      <StockBrokerProductSection product={product} />
      <RightProduct />
      <Faq />
    </main>
  );
}
