import ProductListWrapper from "@/components/product-list-wrapper";
import React from "react";

const Products = () => {
  return (
    <section className="py-16 md:py-24 xl:py-36 container px-4 xl:px-28 mx-auto">
      <ProductListWrapper
        title={"Products"}
        description={
          <>
            We have various products which have been specifically designed for
            you. These products are{" "}
            <strong className="font-semibold">
              regulated by Central Bank of Nigeria (CBN)
            </strong>
          </>
        }
        className="md:grid-cols-2 gap-6 max-w-[800px] mx-auto"
        productData={financeAndLeasing}
        showExploreMoreBtn
      />
    </section>
  );
};

export default Products;

const financeAndLeasing = [
  {
    id: 3,
    product_name: "GDL Housemoni",
    product_snippet: "Secure your own home in 3.5 years",
    product_image_url: "/Images/h-community.webp",
  },
  {
    id: 1,
    product_name: "Financial Advisory",
    product_snippet: "Get Good Advice, Invest Better.",
    product_image_url: "/Images/african-bis.webp",
  },
  {
    id: 2,
    product_name: "GDL Long Term Note",
    product_snippet: "Play the long game",
    product_image_url: "/Images/flat.webp",
  },
  {
    id: 4,
    product_name: "GDL Value Note",
    product_snippet: "Get Better Value",
    product_image_url: "/Images/high-yield-note.jpeg",
  },
];
