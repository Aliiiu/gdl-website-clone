import React from "react";
import CloudinaryImage from "../CloudinaryImage";
import { AppButton } from "../Button/Button";
import { title } from "process";

const ProductList = ({ title, productData, handleRedirection }) => {
  return (
    <div className="mt-10 md:mt-14">
      <h1 className="text-3xl font-semibold mb-[.75rem]">{title}</h1>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
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
