"use client";

import ProductLists from "@/app/components/product-list";
import type { Product, ProductRedirectionParams } from "@/types/product";
import React, { useState } from "react";

const AssetManagmentProductSection = ({ product }: { product: Product[] }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ProductRedirectionParams>();

  const handleRedirection = (item: ProductRedirectionParams) => () => {
    setContent(item);
    setOpen(true);
  };

  return (
    <section className="container px-4 xl:px-28 mx-auto pt-16 md:pt-24 xl:pt-36">
      <ProductLists
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
        handleRedirection={handleRedirection}
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
