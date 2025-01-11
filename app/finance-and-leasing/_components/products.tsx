import ProductLists from "@/components/product-list";
import React from "react";

const Products = () => {
  return (
    <section className="py-16 md:py-24 xl:py-36 container px-4 xl:px-28 mx-auto">
      <ProductLists
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
    product_name: "Financial Advisory",
    product_snippet: "Get Good Advice, Invest Better.",
    img: "/Images/african-bis.webp",
  },
  {
    product_name: "GDL Long Term Note",
    product_snippet: "Play the long game",
    img: "/Images/flat.webp",
  },
  {
    product_name: "GDL Dollar Note",
    product_snippet: " Earn Top Dollar",
    img: "/Images/dollar.jpg",
  },
  {
    product_name: "GDL Value Note",
    product_snippet: "Get Better Value",
    img: "/Images/high-yield-note.jpeg",
  },
];
