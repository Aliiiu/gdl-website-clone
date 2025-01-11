import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { getBlogData } from "../actions";
import type { Blogs } from "../types";
import { formatDate } from "@/utils/helper";

export default async function Blog() {
  const blogPost = await getBlogData();
  return (
    <section className="pt-12 md:pt-24" id="blog">
      <div className="px-[1.5rem] mx-auto max-w-[1200px]">
        <div className="text-center">
          <h1 className="md:leading-[1.1] leading-[2.5rem] md:text-[3rem] text-[2.25rem] mb-[.75rem] font-[700] visible opacity-[1]">
            Blog
          </h1>
          <p className="w-full md:w-1/2 lg:w-2/5 mx-auto md:text-[1.125rem] md:leading-[1.75rem] leading-[24px] dark:text-white">
            Everything you need to know about Finance and Investing in Nigeria.
          </p>
        </div>
        <section className="mt-16 md:px-[1.5rem] mx-auto max-w-[56rem]">
          <BlogList {...blogPost[0]} />
        </section>
        <div className="mt-16 mb-5 md:mb-10 text-center">
          <Link
            href="/blog"
            className="font-medium text-[#992333] dark:text-white"
          >
            Read On →
          </Link>
        </div>
      </div>
    </section>
  );
}

const BlogList = ({
  category,
  title,
  read_time,
  featured_image_url,
  excerpt,
  createdAt,
}: Blogs) => {
  const url = encodeURIComponent(title?.replace(/ /g, "-").toLowerCase());

  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap rounded-lg bg-gdlGrey dark:bg-gray-900 hover:shadow-md mt-6 mb-12 shadow-none transition-all duration-[.3s]">
        <section className="w-full md:w-2/5">
          <div className="flex w-full h-full rounded-tr-[0] rounded-bl-[.5rem] relative overflow-hidden rounded-tl-[.5rem]">
            <Image
              unoptimized
              src={featured_image_url}
              alt="img"
              fill
              sizes="100%"
              className=" object-cover"
            />
          </div>
        </section>
        <div className="p-4 md:py-8 lg:py-4 2xl:py-10 flex flex-col justify-between gap-4 w-full md:w-3/5">
          <div className="md:mx-2 ">
            <div className="flex justify-between text-black dark:text-white items-center mb-4">
              <span className="font-medium uppercase font-ibm-font">
                {category?.category_name}
              </span>
              <span className="opacity-50 font-normal uppercase">
                {formatDate(createdAt) || ""}
              </span>
            </div>
            <Link
              href={`/blog/${url}`}
              className="text-2xl md:text-3xl inline-block line-clamp-1 font-bold text-[#992333]"
            >
              {title}
            </Link>
            <article className="md:text-[1.125rem] 2xl:mt-4 text-[16px] line-clamp-4 md:leading-[1.75rem] dark:text-white leading-[24px] subject w-full font-[300]">
              {excerpt}
            </article>
          </div>
          <div className="flex justify-between items-center text-black dark:text-white text-xs text-opacity-70 mx-2">
            <span className="flex uppercase items-center justify-start">
              <IoBookOutline className="mr-2" /> {read_time || "4 min"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
