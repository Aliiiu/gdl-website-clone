import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

const BannerSection = ({ stat, counter, count }) => {
  return (
    <section className="relative bg-gradient-to-r from-custom-brand-dark to-custom-brand-light">
      <div className="flex flex-wrap container text-white mt-[60px]">
        <div className="text-2xl flex justify-center items-center p-8 text-center w-full md:w-1/2">
          <span className="capitalize font-light">
            {stat.caption || "We Are trusted by"}
          </span>
        </div>
        <div className="w-full md:w-1/4 flex flex-col items-center justify-center min-h-[9em]">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-white">
              <span>{counter}</span>
              <span>+</span>
            </h2>
            <h4 className="-mt-1 text-[#FF7389]">Customers</h4>
            <ScrollLink to="testimonial" smooth={true}>
              <h5 className="text-sm cursor-pointer hover:underline mt-3 flex items-center gap-x-1 text-opacity-[1] text-[rgba(255,214,220,var(--tw-text-opacity))]">
                See Testimonials <AiOutlineArrowRight />
              </h5>
            </ScrollLink>
          </div>
        </div>
        <div className="w-full md:w-1/4 flex flex-col items-center justify-center min-h-[9em]">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-white">
              <span>{count}</span>
              <span>+</span>
            </h2>
            <span className="-mt-1 text-[#FF7389]">Business</span>
            <ScrollLink to="testimonial" smooth={true}>
              <h5 className="text-sm cursor-pointer hover:underline mt-3 flex items-center gap-x-1 text-opacity-[1] text-[rgba(255,214,220,var(--tw-text-opacity))]">
                See Testimonials <AiOutlineArrowRight />
              </h5>
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
