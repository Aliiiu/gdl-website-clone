import React from "react";
import Image from "next/image";
import features from "../../constant/features";

const ResearchFeatures = () => {
  return (
    <div className="pt-[50px] md:py-[50px] lg:py-0">
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className={`flex flex-col py-4 md:py-[60px] lg:py-[120px]  ${
            feature.key % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className={`md:flex flex-1 hidden justify-center`}>
            <Image
              src={feature.img}
              alt=""
              width={280}
              height={497}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 flex flex-col justify-end pb-[50px]">
            <div className="">
              <h2 className="text-5xl mb-3 font-bold text-[#992333]">
                {feature.id}
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold ">
                {feature.title}
              </h2>
              <p className="mt-5">{feature.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResearchFeatures;
