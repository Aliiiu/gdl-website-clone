import Image from "next/image";
import React from "react";

const WhatWeAre = () => {
  return (
    <div className="flex gap-[100px] xl:gap-[200px] flex-col">
      <div className="flex flex-col gap-[50px] md:flex-row justify-between">
        <div className="flex-1">
          <div className="max-w-lg mb-8 md:mb-0 mx-auto">
            <h2 className="title max-w-md mb-3 leading-tight">
              One Team. Open & Transparent.
            </h2>
            <p className="max-w-lg leading-loose">
              We walk our talk. We embrace excellence and professionalism in all
              we do and build careers not jobs. We relate with all internal and
              external stakeholders with mutual respect based on open
              communication and engagement.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative w-full h-[250px] lg:w-[450px] lg:h-[326px] mx-auto bg-orange-100 rounded-lg overflow-hidden">
            <Image src={"/Images/team.png"} alt="" layout="fill" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[50px] md:flex-row-reverse justify-between">
        <div className="flex-1">
          <div className="max-w-lg mb-8 md:mb-0 mx-auto">
            <h2 className="title max-w-xl mb-3 leading-tight">
              Creative, Self-driven and Highly Motivated.
            </h2>
            <p className="max-w-lg leading-loose">
              We walk our talk. We embrace excellence and professionalism in all
              we do and build careers not jobs. We relate with all internal and
              external stakeholders with mutual respect based on open
              communication and engagement.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative w-full h-[250px] lg:w-[450px] lg:h-[326px] mx-auto bg-orange-100 rounded-lg overflow-hidden">
            <Image src={"/Images/team.png"} alt="" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeAre;
