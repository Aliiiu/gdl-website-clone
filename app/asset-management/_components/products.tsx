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
    id: 1,
    product_name: "GDL Canary Fund",
    product_snippet: "Let your money speak for you.",
    product_image_url: "/Images/cardOneImg.png",
  },
  {
    id: 2,
    product_name: "GDL Money Market Fund",
    product_snippet: "Your Savings Redefined",
    product_image_url: "/Images/money-market-fund.jpeg",
  },
  {
    id: 3,
    product_name: "GDL Income Fund",
    product_snippet: "Consistent and safe income",
    product_image_url: "/Images/income-fund.png",
  },
];
