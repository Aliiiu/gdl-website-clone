import Image from "next/image";
import React from "react";
import { getCareerPageContent } from "../actions";

const WhatWeOffer = async () => {
  const pageContent = await getCareerPageContent();
  return (
    <section>
      <div className="container px-4 xl:px-28 mx-auto ">
        {pageContent.map(content => (
          <div key={content.id} className="flex flex-wrap">
            <div className="w-full md:w-1/2 py-6 md:py-24 mb-4 md:mb-0 text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                {content?.title || "Excellence & Professionalism."}
              </h1>
              <p className="visible opacity-100 mb-[1.5rem] leading-[36px] text-[1.125rem] text-opacity-90 text-[rgba(31,26,23,var(--tw-text-opacity))]">
                {content?.description ||
                  `As a company with an unwavering commitment to excellence and
                    the highest level of professionalism, we offer great career
                    opportunities for enterprising and high performing
                    individuals.`}
              </p>
            </div>
            <div className="relative w-full md:w-1/2 flex justify-center items-center happy-img">
              <div className="md:absolute md:-mb-20 bottom-0 w-full max-w-80 h-full shadow-2xl flex rounded-lg">
                <Image
                  src={content.image_url}
                  className="right-0 left-0  mx-auto rounded-lg"
                  alt=""
                  fill
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white py-12 md:py-24">
        <div className="container px-4 xl:px-28 mx-auto flex items-center">
          <div className="happy-img relative w-full md:w-5/12">
            {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
            <video
              className="mx-auto rounded-lg shadow-2xl lg:h-[580px]"
              src={require("../assets/work-environment.mp4")}
              loop={true}
              autoPlay={true}
            />
          </div>
          <div className="w-full md:w-7/12 py-12 md:py-24 text-left md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              A Creative Work Environment.
            </h1>
            <p className="leading-[36px] text-[1.125rem] text-[rgba(31,26,23,var(--tw-text-opacity))] text-opacity-90">
              We have a creative work environment ensconced in a culture and
              value system of teamwork, audacity, integrity, result orientation
              and a strong social conscience. Together as a team of
              professionals we utilize a combination of meticulous, innovative
              and agile management processes to engender the sustainable growth
              and development of our diverse asset portfolios. This makes
              working with us a career enriching experience with immense
              prospects for career advancement coupled with very competitive
              employment benefits on offer in Nigeria’s financial services
              landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
