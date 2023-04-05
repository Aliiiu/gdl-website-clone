import { useState, useEffect, useLayoutEffect } from "react";
import Faq from "../components/PageSections/Faq";
import GetStarted from "../components/PageSections/GetStarted";
import Products from "../components/PageSections/Products";
import { AppButton } from "../components/Widgets/Button/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import BgImage from "../assets/images/bg.png";
import Image from "next/image";
import BlogLayout from "../components/Layout/BlogLayout";
import TestimonyLayout from "../components/Layout/TestimonyLayout";
import methodType from "../constant/methodType";
import { useRequest } from "../hooks/useRequest";
import CloudinaryImage from "../components/Widgets/CloudinaryImage";

const HomePage = ({
  hero,
  stat,
  products,
  testimonial,
  media,
  blog,
  getStarted,
}) => {
  const [counter, setCounter] = useState(0);
  const [count, setCount] = useState(0);

  const startCounter = () => {
    setInterval(() => {
      if (counter <= stat.customers) setCounter(counter++);
      if (count <= stat.businesses) setCount(count++);
    }, 0.1);
  };
  const stopCounter = () => {
    if (counter >= stat.customers) {
      clearInterval(counter);
    }
    if (count >= stat.businesses) clearInterval(count);
  };

  const { makeRequest, data } = useRequest({
    url: "/pages/home/hero",
    method: methodType.GET,
  });
  const { makeRequest: fetchStatistics, data: statData } = useRequest({
    url: "/pages/home/statistics",
    method: methodType.GET,
  });
  const { makeRequest: fetchProducts, data: productData } = useRequest({
    url: "/pages/home/products",
    method: methodType.GET,
  });

  const { makeRequest: fetchTestimony, data: testimonyData } = useRequest({
    url: "/pages/home/testimonials",
    method: methodType.GET,
  });

  const { makeRequest: fetchMedia, data: mediaData } = useRequest({
    url: "/pages/home/media",
    method: methodType.GET,
  });

  const { makeRequest: fetchBlog, data: blogData } = useRequest({
    url: "/pages/home/blog",
    method: methodType.GET,
  });

  const { makeRequest: fetchGetstarted, data: getStartedData } = useRequest({
    url: "/pages/home/get/started",
    method: methodType.GET,
  });

  useEffect(() => {
    window.addEventListener("load", startCounter());

    return () => window.removeEventListener("load", stopCounter());
  }, []);

  // console.log("Working");
  useEffect(() => {
    makeRequest();
    fetchTestimony();
    fetchBlog();
    fetchStatistics();
    fetchProducts();
    fetchMedia();
    fetchGetstarted();
  }, []);

  // useEffect(() => {
  //   console.log(blog);
  // }, [blog]);
  let arr = hero?.image_url?.split("/");
  let bgUrl = arr[arr.length - 1];
  return (
    <div className="">
      <section
        id="media"
        className="flex flex-col items-start justify-center relative container px-4 xl:px-28 mx-auto md:min-h-[500px] min-h-[460px]"
      >
        <div className="absolute top-0 right-0 mt-[-8.8rem] mr-[-5rem]">
          <div className="hidden 2xl:flex items-center justify-center rounded-full dark:border-gray-800 border-red-50 w-[220px] h-[220px] border-[32px]"></div>
        </div>
        <div className="absolute top-0 left-0 bottom-0 flex justify-center items-center -ml-52">
          <div className="flex items-center justify-center rounded-[9999px] dark:border-gray-800 border-[#FFF1F4] w-[500px] h-[500px] border-[32px]">
            <div className="flex items-center justify-center rounded-[9999px] dark:border-gray-900 border-[#FFF5F7] border-[32px] w-[445px] h-[445px]" />
          </div>
        </div>
        <div className="relative w-full md:w-9/12 lg:w-3/5">
          <h1 className="text-4xl md:text-5xl text-center md:text-left font-bold">
            {hero.title || "Build Wealth Comfortably"}
          </h1>
          <p className="visible dark:text-[#F9FAFB] opacity-[1] md:leading-[32px] leading-[24px] mx-0 md:w-[80%] w-full md:text-left text-center md:text-[1.25rem]  mt-[.25rem] font-light animate-glide-up">
            {hero.description ||
              `Your financial goals are our priority. We are committed to building
            your wealth with different investment options, all tailored to suit
            YOU.`}
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center mt-6">
            <AppButton
              name={`${hero.call_to_action_title} →`}
              textSize="text-base"
              className="py-[1rem] px-[1.5rem] text-white md:mr-6 mb-4 md:mb-0 bg-[#992333]"
              // icon={<AiOutlineArrowRight className="font-thin text-sm" />}
            />
            <Link href={hero.call_to_action_link}>
              <a className="font-light z-10">Learn More</a>
            </Link>
          </div>
        </div>
        <div className="max-w-[100%] hidden h-auto w-[520px] mr-[4rem] md:block absolute right-0 bottom-0 mb-[-8rem] animate-fade-in">
          <Image
            src={BgImage}
            // layout="fill"
            alt=""
            // width="520px"
            // height={"100%"}
          />
        </div>
      </section>
      <section className="relative">
        <div className="flex flex-wrap text-white bg-[#992333] mt-[60px]">
          <div className="text-2xl flex justify-center items-center p-8 text-center w-full md:w-1/2">
            <span className="capitalize font-light">
              {stat.caption || `We Are trusted by`}
            </span>
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center bg-[#942231] justify-center min-h-[9em]">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-white">
                <span>{counter}</span>
                <span>+</span>
              </h2>
              <h4 className="-mt-1 text-[#FF7389]">Customers</h4>
              <Link href="">
                <a className="text-sm mt-3 flex items-center gap-x-1 text-opacity-[1] text-[rgba(255,214,220,var(--tw-text-opacity))]">
                  See Testimonials <AiOutlineArrowRight />
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center justify-center min-h-[9em]">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-white">
                <span>{count}</span>
                <span>+</span>
              </h2>
              <span className="-mt-1 text-[#FF7389]">Business</span>
              <Link href="/">
                <a className="text-sm mt-3 flex items-center gap-x-1 text-opacity-[1] text-[rgba(255,214,220,var(--tw-text-opacity))]">
                  See Testimonials <AiOutlineArrowRight />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="our-product" className="py-16 md:py-36">
        <Products product={products} />
      </section>
      <section
        id="get-started"
        className="lg:w-4/6 mx-auto pt-20 -mb-20 w-full"
      >
        <GetStarted />
      </section>
      <TestimonyLayout testimonial={testimonial} />
      <BlogLayout />
      <section
        id="faq"
        className="container px-4 xl:px-28 mx-auto py-16 md:py-36 w-full"
      >
        <Faq />
      </section>
    </div>
  );
};

export default HomePage;
