import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
  return (
    <div className="flex flex-col-reverse items-center lg:gap-[50px] md:flex-row">
      <div className="flex-1 w-full lg:w-1/2">
        <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[600px]">
          <Image src={"/Images/society-nigeria.png"} alt="" fill sizes="100%" />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div>
          <h5 className="mb-1">A LEADING DIVERSIFIED FINANCIAL INSTITUTION</h5>
          <h1 className="title leading-tight mb-4">
            Creating Wealth & Transforming Society
          </h1>
          <p className="mb-3 leading-loose">
            At GDL we see the socio-economic challenges facing Nigeria as an
            opportunity to provide platforms for creating private sector led
            frameworks that will help to address some of the major concerns of
            the average Nigerian household in a sustainable way, using mainly,
            in-country resources.
          </p>
          <p className="mb-3 leading-loose">
            We are passionate about Nigeria and her potentials. We see our
            business as a vehicle of delivering key social dividends to
            Nigerians while at the same time achieving significant economic
            returns for our stakeholders and investors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
