import type { Product, ProductRedirectionParams } from "../types/product";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "./ui/button";

interface ProductListsProps {
  productData: Product[];
  handleRedirection?: (params: ProductRedirectionParams) => () => void;
  title: string;
  description: string | ReactNode;
  className?: string;
  showExploreMoreBtn?: boolean;
}

const ProductLists = ({
  productData,
  title,
  description,
  handleRedirection,
  className,
  showExploreMoreBtn,
}: ProductListsProps) => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-[.75rem]">
        {title}
      </h1>
      <p className="text-lg w-full md:w-1/2 lg:w-3/5 leading-[1.75rem] text-center text-opacity-[0.9] text-[rgba(31,26,23,var(--tw-text-opacity))] dark:text-white mx-auto">
        {description}
      </p>
      <div className={`mt-5 sm:mt-10 lg:mt-16 grid ${className}`}>
        {productData.map(item => {
          const arr = item?.product_image_url;
          return (
            <div
              key={item.product_name}
              className="shadow-md rounded-lg h-96 overflow-hidden flex flex-col relative justify-end"
            >
              {item.img ? (
                <Image
                  src={item.img}
                  alt={item.product_name}
                  fill
                  sizes="100%"
                  className="object-cover object-center"
                />
              ) : (
                <Image
                  src={item?.product_image_url ?? ""}
                  alt={item.product_name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"center"}
                />
              )}
              <div
                style={{
                  background:
                    "linear-gradient(180deg,transparent,rgba(153,35,51,.25),rgba(153,35,51,.85))",
                }}
                className="flex p-6 h-full justify-end z-10 text-white flex-col items-start"
              >
                <h2 className="text-xl font-bold lg:text-2xl">
                  {item.product_name}
                </h2>
                <p className="text-lg break-words text-white">
                  {item.product_snippet}
                </p>
                {handleRedirection ? (
                  <Button
                    variant={"secondary"}
                    className="mt-4 uppercase font-light rounded-lg py-3 px-6 text-sm bg-white text-black"
                    onClick={handleRedirection({
                      header: item?.product_name,
                      content: item?.product_description ?? "",
                      desc: item?.product_snippet,
                      icon: item?.product_icon_url ?? "",
                      img: item?.product_image_url ?? "",
                    })}
                  >
                    Learn More
                  </Button>
                ) : (
                  <Link
                    href={"/products"}
                    className="mt-4 uppercase font-light rounded-lg py-3 px-6 text-sm bg-white text-black"
                  >
                    Learn More
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {showExploreMoreBtn && (
        <div className="flex mt-10 md:mt-20 justify-center items-center">
          <Link
            href={"/products"}
            className="bg-[#9A2333] text-sm font-light py-[1rem] rounded-[0.5rem] px-[1.5rem] uppercase text-white"
          >
            Explore More
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductLists;
