import { useState, useEffect } from "react";
import Faq from "../components/PageSections/Faq";
import GetStarted from "../components/PageSections/GetStarted";
import Products from "../components/PageSections/Products";
import BlogLayout from "../components/Layout/BlogLayout";
import TestimonyLayout from "../components/Layout/TestimonyLayout";
import HeroSection from "../components/PageSections/HeroSection";
import BannerSection from "../components/PageSections/BannerSection";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const HomePage = ({ hero, stat, products, testimonial, blogPost }) => {
  let [counter, setCounter] = useState(0);
  let [count, setCount] = useState(0);

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

  useEffect(() => {
    window.addEventListener("load", startCounter());

    return () => window.removeEventListener("load", stopCounter());
  }, []);

  return (
    <div className="">
      <HeroSection hero={hero} />
      <section className="relative py-5 bg-gradient-to-r from-custom-brand-dark to-custom-brand-light mt-[60px]">
        <div className="flex justify-between items-center container px-4 xl:px-28 mx-auto text-white">
          <div className="flex flex-grow flex-col items-start">
            <div className="flex gap-4 md:gap-10 items-center justify-between w-full lg:w-fit">
              <Image
                src={"/svgs/whiteLogo.svg"}
                width={250}
                height={100}
                alt="logo"
              />
              <div className="flex flex-col items-left">
                <h3 className="md:text-xl font-bold">
                  Own a home with GDL HouseMoni
                </h3>
                <p className="text-white max-w-[340px] text-sm md:text-base mb-2 md:my-2">
                  Turn from tenant to homeowner in 3½ years with constant,
                  affordable monthly payments.
                </p>
                <Link
                  href={"https://housemoni.ng/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="bg-white w-fit text-xs md:text-base rounded-lg px-3 py-1 md:px-5 md:py-2.5 text-[#992333] font-thin flex items-center gap-x-1 cursor-pointer">
                    Start your home ownership journey <AiOutlineArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-end flex-grow">
            <Image
              src={"/svgs/GDL-house.svg"}
              alt="GDL House"
              width={160}
              height={160}
            />
          </div>
        </div>
      </section>
      <section id="our-product" className="py-16 md:py-36">
        <Products product={products} />
      </section>
      <BannerSection stat={stat} counter={counter} count={count} />
      <section
        id="get-started"
        className="lg:w-4/6 mx-auto pt-20 -mb-20 w-full"
      >
        <GetStarted />
      </section>
      <TestimonyLayout testimonial={testimonial} />
      <BlogLayout blogPost={blogPost} />
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
