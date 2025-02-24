import type { Products } from "../types/product";
import Link from "next/link";
import type { ReactNode } from "react";
import ProductsList from "./product-list";

interface ProductListsProps {
  productData: Products;
  inPageDetails?: boolean;
  title: string;
  description: string | ReactNode;
  className?: string;
  showExploreMoreBtn?: boolean;
}

const ProductListWrapper = ({
  productData,
  title,
  description,
  className,
  showExploreMoreBtn,
  inPageDetails,
}: ProductListsProps) => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-[.75rem]">
        {title}
      </h1>
      <p className="text-lg w-full md:w-1/2 lg:w-3/5 leading-[1.75rem] text-center text-opacity-[0.9] text-[rgba(31,26,23,var(--tw-text-opacity))] dark:text-white mx-auto">
        {description}
      </p>
      <ProductsList
        product={productData}
        inPageDetails={inPageDetails}
        className={className}
      />
      {showExploreMoreBtn && (
        <div className="flex mt-10 md:mt-20 justify-center items-center">
          <Link
            href={"/products"}
            className="bg-[#9A2333] text-sm py-[1rem] rounded-[0.5rem] px-[1.5rem] uppercase text-white"
          >
            Explore More
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductListWrapper;
