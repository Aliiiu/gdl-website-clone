import CustomHeader from "@/components/custom-page-hero";
import React from "react";
import Link from "next/link";
import { getCareerHeroData } from "../actions";

const Hero = async () => {
  const heroData = await getCareerHeroData();
  return (
    <section>
      <CustomHeader
        bg="#FEECEF"
        content={<CareerTopContent content={heroData} />}
      />
    </section>
  );
};

export default Hero;

const CareerTopContent = ({
  content,
}: {
  content: { title: string; description: string };
}) => (
  <>
    <h1 className="font-bold text-4xl md:text-5xl">{content?.title}</h1>
    <p className="text-lg text-[rgba(31,26,23,var(--tw-text-opacity))] text-opacity-[0.9]">
      {content?.description}
    </p>
    <div className="mt-10">
      <Link href={"#research-papers"}>
        <button
          type="button"
          className="capitalize font-light bg-brand rounded-lg px-4 py-2 text-white"
        >
          Apply Now
        </button>
      </Link>
    </div>
  </>
);
