import Image from "next/image";
import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import Link from "next/link";
import { AppButton } from "../Widgets/Button/Button";
import { RightProductSection } from "./pagesec.style";
import { useRouter } from "next/router";
import { SectionWrapper } from "./product.style";
import AppModal from "../Widgets/Modal/Modal";
import { ModalContent } from "./ProductContent";
import CloudinaryImage from "../Widgets/CloudinaryImage";
import ProductList from "../Widgets/List/ProductList";

export const RightProduct = ({ content }) => (
  <div className="px-[1.25rem] md:px-[1.5rem] mx-auto max-w-[1200px]">
    <RightProductSection>
      <div className="p-6 text-center">
        <h2>Which Product is right for me?</h2>
        <p className="sectionhint">
          Let&apos;s help you choose a product that will work specifically for
          you.
        </p>
      </div>
      <div className="mt-8">
        <Link
          href={content.call_to_action_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-opacity-[1] text-[rgba(153,35,51,var(--tw-text-opacity))] font-medium"
        >
          Get Started →
        </Link>
      </div>
    </RightProductSection>
  </div>
);

const Products = ({ nobutton, product }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const router = useRouter();

  const handleRedirection = item => () => {
    setContent(item);
    setOpen(true);
  };
  return (
    <SectionWrapper className="container px-4 xl:px-28 mx-auto">
      {router.pathname === "/" ? (
        <>
          <div className="text-center md:text-center">
            <h1 className="title mb-[.75rem]">Our Products</h1>
            <p className="hint w-full md:w-1/2 lg:w-2/5 leading-[1.75rem] text-opacity-[0.9] text-[rgba(31,26,23,var(--tw-text-opacity))] dark:text-white mx-auto">
              We have various products which have been specifically designed for
              you. There is something for everyone at GDL.
            </p>
          </div>
          <div className="mt-10 md:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {product.map(item => {
              const arr = item?.product_image_url?.split("/");
              return (
                <div
                  key={item.product_name}
                  className="card flex flex-col relative justify-end"
                >
                  <CloudinaryImage
                    src={arr?.[arr?.length - 1]}
                    alt={item.product_name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={"center"}
                  />
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
                      {/* {item.product_image_url} */}
                    </p>
                    <AppButton
                      name="Learn more"
                      onPress={handleRedirection({
                        header: item?.product_name,
                        content: item?.product_description,
                        desc: item?.product_snippet,
                        icon: item?.product_icon_url,
                        img: item?.product_image_url,
                      })}
                      className="mt-4 uppercase card-btn bg-white text-black"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <ProductList
            title={"GDL Finance & Leasing Products"}
            description={
              <>
                We have various products which have been specifically designed
                for you. These products are{" "}
                <strong className="font-semibold">
                  regulated by the Central Bank of Nigeria (CBN)
                </strong>
              </>
            }
            handleRedirection={handleRedirection}
            productData={product.filter(
              item =>
                item?.product_name !== "GDL Canary Fund" &&
                item?.product_name !== "GDL Money Market Fund" &&
                item?.product_name !== "GDL Stockbroking" &&
                item?.product_name !== "Value Note" &&
                item?.product_name !== "Finance" &&
                item?.product_name !== "GDL Income Fund"
            )}
          />
          <ProductList
            title={"GDL Asset Management Products"}
            description={
              <>
                We have various products which have been specifically designed
                for you. These products are{" "}
                <strong className="font-semibold">
                  regulated by Securities & Exchange Commission (SEC)
                </strong>
              </>
            }
            handleRedirection={handleRedirection}
            productData={product.filter(
              item =>
                item?.product_name === "GDL Canary Fund" ||
                item?.product_name === "GDL Money Market Fund" ||
                item?.product_name === "GDL Income Fund"
            )}
          />
          <div className="pt-16 md:pt-24 xl:pt-36">
            <h1 className="title text-center mb-[.75rem]">
              GDL Stockbroking Products
            </h1>
            <p className="hint w-full md:w-1/2 lg:w-3/5 leading-[1.75rem] text-center text-opacity-[0.9] text-[rgba(31,26,23,var(--tw-text-opacity))] dark:text-white mx-auto">
              We have various products which have been specifically designed for
              you. These products are
              <strong className="font-semibold">
                {" "}
                regulated by Securities & Exchange Commission (SEC)
              </strong>
            </p>
            <div className="mt-5 sm:mt-10 lg:mt-16 grid max-w-[400px] mx-auto">
              {product
                .filter(item => item?.product_name === "GDL Stockbroking")
                .map(item => {
                  const arr = item?.product_image_url?.split("/");
                  return (
                    <div
                      key={item.product_name}
                      className="card flex flex-col relative justify-end"
                    >
                      <CloudinaryImage
                        src={arr?.[arr?.length - 1]}
                        alt={item.product_name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition={"center"}
                      />
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
                        <AppButton
                          name="Learn more"
                          onPress={handleRedirection({
                            header: item?.product_name,
                            content: item?.product_description,
                            desc: item?.product_snippet,
                            icon: item?.product_icon_url,
                            img: item?.product_image_url,
                          })}
                          className="mt-4 uppercase card-btn bg-white text-black"
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      )}

      {!nobutton && (
        <div className="flex mt-10 md:mt-20 justify-center items-center">
          <span className="bg-[#9A2333] px-4 py-3 md:py-[1rem] rounded-[0.5rem] md:px-[1.5rem] uppercase text-white">
            <Link href={"/products"}>Explore More</Link>
          </span>
        </div>
      )}
      <AppModal
        open={open}
        onClose={() => setOpen(false)}
        content={<ModalContent content={content} />}
      />
    </SectionWrapper>
  );
};

export default Products;
