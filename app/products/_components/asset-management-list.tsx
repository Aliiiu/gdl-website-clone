"use client";

import ProductListWrapper from "@/components/product-list-wrapper";
import type { Products } from "@/types/product";

const AssetManagmentProductSection = ({ product }: { product: Products }) => {
  return (
    <section className="container px-4 xl:px-28 mx-auto pt-16 md:pt-24 xl:pt-36">
      <ProductListWrapper
        title={"GDL Asset Management Products"}
        description={
          <>
            We have various products which have been specifically designed for
            you. These products are{" "}
            <strong className="font-semibold">
              regulated by Securities & Exchange Commission (SEC)
            </strong>
          </>
        }
        inPageDetails={true}
        className="md:grid-cols-2 gap-6 lg:grid-cols-3 max-w-[1200px] mx-auto"
        productData={product.filter(
          item =>
            item?.product_name === "GDL Canary Fund" ||
            item?.product_name === "GDL Money Market Fund" ||
            item?.product_name === "GDL Income Fund"
        )}
      />
    </section>
  );
};

export default AssetManagmentProductSection;
