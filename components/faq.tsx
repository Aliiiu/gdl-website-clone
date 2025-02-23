"use client";

import Link from "next/link";
import React from "react";

const Faq = () => {
  return (
    <section id="faq" className=" bg-white py-16 md:py-36 w-full">
      <div className="container px-4 xl:px-28 mx-auto grid gap-[60px] md:grid-cols-2 ">
        <div className="py-12 flex-1">
          <h4 className=" mb-2 text-lg uppercase font-bold">have questions?</h4>
          <h2 className="text-4xl mb-3 leading-none font-bold">
            Get Answers Here.
          </h2>
          <p className="text-primary md:text-lg mb-4 text-opacity-80">
            Answers to the questions we believe you might have in mind.
          </p>

          <Link
            href={"/faq"}
            className="bg-black w-fit rounded-lg block px-5 py-4 text-white"
          >
            Check FAQs
          </Link>
        </div>
        <div className="rounded-lg bg-blog-image h-[370px] overflow-hidden flex-1" />
      </div>
    </section>
  );
};

export default Faq;
