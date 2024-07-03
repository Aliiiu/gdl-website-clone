import Image from "next/image";
import React from "react";
import { AppButton } from "../Widgets/Button/Button";
import { SectionWrapper } from "./product.style";
import { useRouter } from "next/router";

const Faq = () => {
  const router = useRouter();
  return (
    <SectionWrapper className="grid gap-[60px] md:grid-cols-2 ">
      <div className="py-12 flex-1">
        <h4 className=" mb-2 text-lg uppercase font-bold">have questions?</h4>
        <h2 className="title mb-3 leading-none font-bold">Get Answers Here.</h2>
        <p className="text-primary text-lg mb-4 text-opacity-80">
          Answers to the questions we believe you might have in mind.
        </p>
        <AppButton
          name="Check FAQs"
          href="/faq"
          className="text-white bg-black px-5 py-4"
        />
      </div>
      <div className="rounded-lg faq-card h-[370px] overflow-hidden flex-1"></div>
    </SectionWrapper>
  );
};

export default Faq;
