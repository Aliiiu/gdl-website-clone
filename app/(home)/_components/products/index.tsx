import Link from "next/link";
import { getProductData } from "../../_actions";
import ProductsList from "@/components/product-list";

const Products = async () => {
  const product = await getProductData();
  return (
    <section id="our-product" className="py-16 md:py-36">
      <div className="container px-4 xl:px-28 mx-auto">
        <div className="text-center md:text-center">
          <h1 className="font-bold text-4xl mb-[.75rem]">Our Products</h1>
          <p className="text-lg w-full md:w-1/2 lg:w-2/5 leading-[1.75rem] text-opacity-[0.9] text-[rgba(31,26,23,var(--tw-text-opacity))] dark:text-white mx-auto">
            We have various products which have been specifically designed for
            you. There is something for everyone at GDL.
          </p>
        </div>
        <ProductsList
          product={product.reverse()}
          className="md:grid-cols-2 lg:grid-cols-3 gap-3"
        />
        <div className="flex mt-10 md:mt-20 justify-center items-center">
          <Link
            href={"/products"}
            className="bg-[#9A2333] px-4 py-3 md:py-[1rem] rounded-[0.5rem] md:px-[1.5rem] uppercase text-white"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
