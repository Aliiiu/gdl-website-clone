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

export const RightProduct = () => (
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
        <Link href="">
          <a className="text-opacity-[1] text-[rgba(153,35,51,var(--tw-text-opacity))] font-medium">
            See Use Cases →
          </a>
        </Link>
      </div>
    </RightProductSection>
  </div>
);

const Products = ({ nobutton, product }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const router = useRouter();
  const [appparams, setAppParams] = useState("");

  const handleRedirection = item => () => {
    setContent(item);
    setOpen(true);
  };

  console.log(product);
  return (
    <SectionWrapper className="container px-4 xl:px-28 mx-auto">
      <div className="text-center md:text-center">
        <h1 className="title mb-[.75rem]">Our Products</h1>
        <p className="hint w-full md:w-1/2 lg:w-3/5 leading-[1.75rem] text-opacity-[0.9] text-[rgba(31,26,23,var(--tw-text-opacity))] dark:text-white mx-auto">
          We have various products which have been specifically designed for
          you. There is something for everyone at GDL.
        </p>
      </div>
      <ProductList
        title={"GDL Finance and Leasing"}
        handleRedirection={handleRedirection}
        productData={product.filter(
          item =>
            item?.product_name !== "GDL Canary Fund" &&
            item?.product_name !== "GDL Money Market Fund" &&
            item?.product_name !== "GDL Stockbroking" &&
            item?.product_name !== "High Yield Note"
        )}
      />
      <div className="mt-10 md:mt-14">
        <h1 className="text-3xl font-semibold mb-[.75rem]">GDL Stockbroking</h1>
        <div className="mt-5 grid max-w-[400px]">
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
      </div>
      <ProductList
        title={"GDL Asset Management"}
        handleRedirection={handleRedirection}
        productData={product.filter(
          item =>
            item?.product_name === "GDL Canary Fund" ||
            item?.product_name === "GDL Money Market Fund"
        )}
      />
      {!nobutton && (
        <div className="flex mt-10 md:mt-20 justify-center items-center">
          <AppButton
            name="Explore More"
            onPress={() => router.push("/products")}
            className="bg-[#9A2333] py-[1rem] rounded-[0.5rem] px-[1.5rem] text-[1.5rem] text-white"
          />
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
