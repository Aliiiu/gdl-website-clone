import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import {
  IoAnalyticsOutline,
  IoPieChart,
  IoTrendingUpOutline,
} from "react-icons/io5";
import { Link } from "react-scroll";

const ResearchHeader = () => {
  return (
    <section className="container px-4 xl:px-8 mx-auto py-24 md:py-36 w-full">
      <div className="flex flex-col gap-[80px] md:gap-0 md:flex-row">
        <div className="flex-1">
          <h2 className="font-bold text-5xl">Research</h2>
          <h4 className="flex font-semibold text-lg items-center">
            <div className="w-4 h-[2px] bg-[#33302C] inline-block mr-2" />
            Stay Informed, Beat the Odds.
          </h4>
          <p className="text-xl mt-8 max-w-md mb-3">
            Our research team gives powerful insights into all the important
            happenings in the world of business.
          </p>
          <Link
            to={"research-papers"}
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <button
              type="button"
              className="capitalize flex text-blue-400 items-center gap-2"
            >
              See research papers <BsArrowRight className="text-blue-400" />
            </button>
          </Link>
        </div>
        <div className="relative flex-1">
          <div className="flex gap-2 absolute z-20 right-8 shadow-lg border -top-6 items-center rounded-lg py-2 px-3 bg-white text-[#1f1a1780]">
            <IoAnalyticsOutline className="text-[#1f1a1780]" /> Stock
          </div>
          <div className="flex gap-2 absolute z-20 items-center shadow-lg border -left-10 bottom-16 rounded-lg py-2 px-3 bg-white text-[#1f1a1780]">
            <IoPieChart className="text-[#1f1a1780]" /> Analytics
          </div>
          <div className="flex gap-2 absolute z-20 items-center -bottom-5 right-16 shadow-lg border rounded-lg py-2 px-3 bg-white text-[#1f1a1780]">
            <IoTrendingUpOutline className="text-[#1f1a1780]" /> Market Trends
          </div>
          <Image
            src="/Images/team.png"
            alt=""
            width={700}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ResearchHeader;
