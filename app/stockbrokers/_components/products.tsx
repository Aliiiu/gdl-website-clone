import ProductListWrapper from "@/components/product-list-wrapper";
import React from "react";

const Products = () => {
  return (
    <section
      id="products"
      className="container px-4 xl:px-28 mx-auto py-16 md:py-24 xl:py-36"
    >
      <ProductListWrapper
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
        className="max-w-[400px] mx-auto"
        productData={stockbrokers}
        showExploreMoreBtn
      />
    </section>
  );
};

export default Products;

export const stockbrokers = [
  {
    id: 1,
    product_name: "Stockbroking",
    product_snippet: "Stack your cash from stocks",
    product_image_url: "/Images/timely-market-intelligence.jpeg",
  },
];
