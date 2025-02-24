"use client";

import ProductListWrapper from "@/components/product-list-wrapper";
import type { Products } from "@/types/product";

const StockBrokerProductSection = ({ product }: { product: Products }) => {
  return (
    <section className="container px-4 xl:px-28 mx-auto pt-16 md:pt-24 xl:pt-36">
      <ProductListWrapper
        title={"GDL Stockbroking Products"}
        description={
          <>
            We have various products which have been specifically designed for
            you. These products are
            <strong className="font-semibold">
              {" "}
              regulated by Securities & Exchange Commission (SEC)
            </strong>
          </>
        }
        inPageDetails={true}
        className="max-w-[400px] mx-auto"
        productData={product.filter(
          item => item?.product_name === "GDL Stockbroking"
        )}
      />
    </section>
  );
};

export default StockBrokerProductSection;
