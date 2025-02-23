"use client";

import ProductListWrapper from "@/components/product-list-wrapper";
import type { Products } from "@/types/product";

const FinanceAndLeasingProductSection = ({
  product,
}: {
  product: Products;
}) => {
  return (
    <section className="container px-4 xl:px-28 mx-auto ">
      <ProductListWrapper
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
        inPageDetails={true}
        className="md:grid-cols-2 gap-6 lg:grid-cols-2 max-w-[800px] mx-auto"
        productData={product
          .filter(
            item =>
              item?.product_name !== "GDL Canary Fund" &&
              item?.product_name !== "GDL Money Market Fund" &&
              item?.product_name !== "GDL Stockbroking" &&
              item?.product_name !== "Value Note" &&
              item?.product_name !== "Finance" &&
              item?.product_name !== "GDL Income Fund" &&
              item?.product_name !== "GDL Dollar Note"
          )
          .reverse()}
      />
    </section>
  );
};

export default FinanceAndLeasingProductSection;
