import React from "react";
import { getStatisticsData } from "../actions";
import { StatCounter } from "./stats-counter";

const BannerSection = async () => {
  const stat = await getStatisticsData();
  return (
    <section className="relative bg-gradient-to-r from-custom-brand-dark to-custom-brand-light">
      <div className="flex flex-wrap container text-white mt-[60px]">
        <div className="text-2xl flex justify-center items-center p-8 text-center w-full md:w-1/2">
          <span className="capitalize font-light">
            {stat.caption || "We Are trusted by"}
          </span>
        </div>
        <StatCounter value={stat.customers} label="Customers" />
        <StatCounter value={stat.businesses} label="Business" />
      </div>
    </section>
  );
};

export default BannerSection;
