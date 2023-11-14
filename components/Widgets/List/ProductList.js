import React from "react";
import CloudinaryImage from "../CloudinaryImage";
import { AppButton } from "../Button/Button";

const ProductList = ({
  title,
  productData,
  handleRedirection,
  description,
}) => {
  return (
    <div
      className={`pb-16 md:pb-20 ${
        title === "GDL Asset Management Products" ? "pt-16 md:pt-20" : ""
      }`}
    >
      <h1 className="title text-center mb-[.75rem]">{title}</h1>
      <p className="hint w-full md:w-1/2 lg:w-3/5 leading-[1.75rem] text-center text-opacity-[0.9] text-[rgba(31,26,23,var(--tw-text-opacity))] dark:text-white mx-auto">
        {description}
      </p>
      <div
        className={`mt-5 sm:mt-10 lg:mt-16 grid md:grid-cols-2 max-w-[800px] mx-auto gap-6`}
      >
        {productData.map(item => {
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
  );
};

export default ProductList;
