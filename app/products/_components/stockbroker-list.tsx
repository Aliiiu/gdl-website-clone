"use client";

import ProductLists from "@/app/components/product-list";
import type { Product, ProductRedirectionParams } from "@/types/product";
import React, { useState } from "react";

const StockBrokerProductSection = ({ product }: { product: Product[] }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ProductRedirectionParams>();

  const handleRedirection = (item: ProductRedirectionParams) => () => {
    setContent(item);
    setOpen(true);
  };

  return (
    <section className="container px-4 xl:px-28 mx-auto pt-16 md:pt-24 xl:pt-36">
      <ProductLists
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
        handleRedirection={handleRedirection}
        className="max-w-[400px] mx-auto"
        productData={product.filter(
          item => item?.product_name === "GDL Stockbroking"
        )}
      />
    </section>
  );
};

export default StockBrokerProductSection;
