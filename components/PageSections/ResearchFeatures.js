import React from "react";
import Image from "next/image";
import features from "../../constant/features";

const ResearchFeatures = () => {
  return (
    <div>
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className={`flex py-[120px]  ${
            feature.key % 2 === 0 ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className={`flex flex-1 justify-center`}>
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
              <h2 className="text-5xl font-bold ">{feature.title}</h2>
              <p className="mt-5">{feature.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResearchFeatures;
