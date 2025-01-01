import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { getBlogHeroContent } from "../actions";

const BlogTopContent = async () => {
  const { title: name, description } = await getBlogHeroContent();
  return (
    <div className="px-[1.5rem] max-w-[1200px] mx-auto">
      <div className="max-w-[500px]">
        <h1 className="md:leading-[1.1] leading-[1] mb-[0.75rem] font-[700] text-[3rem]">
          {name}
        </h1>
        <h3 className="font-medium mb-5 text-[#555] text-[1.125rem] leading-[1.75rem] text-opacity-90">
          {description}
        </h3>
        <div className="relative rounded-[0.5rem] bg-opacity-100 bg-[rgba(255,255,255,var(--tw-bg-opacity))] h-[50px] shadow">
          <input
            className="h-full w-full rounded-[0.5rem] px-[1rem] outline-none"
            placeholder={`Search ${name}`}
          />
          <span className="absolute top-0 right-0 bottom-0 mr-4 flex items-center justify-center text-[1.25rem] leading-[1.75rem] text-[rgba(31,26,23,var(--tw-text-opacity))] text-opacity-[0.5]">
            <IoSearchOutline />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogTopContent;
