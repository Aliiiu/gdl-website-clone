import React from "react";
import Faq from "../../components/PageSections/Faq";
import CustomHeader from "../../components/Widgets/CustomHeader/Header";
import Image from "next/image";
import features from "../../constant/features";
import ResearchHeader from "../../components/PageSections/ResearchHeader";
import ResearchFeatures from "../../components/PageSections/ResearchFeatures";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const Research = () => {
  return (
    <div>
      <CustomHeader content={<ResearchHeader />} />

      <section className="lg:w-4/6 mx-auto w-full">
        <ResearchFeatures />
      </section>
      <section id="research-papers" className="bg-[#F8F8F8] w-full">
        <div className="lg:w-4/6 flex justify-center py-20 mx-auto">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-4xl">Research</h2>
            <p className="text-base text-center mt-2 max-w-lg mb-3">
              Our research team gives powerful insights into all the important
              happenings in the world of business.
            </p>
            <Link href={"/research/papers"}>
              <button className="capitalize px-4 bg-white text-sm border rounded-lg py-3 flex items-center gap-2">
                View More <BsArrowRight className="text-[1F1A17]" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="faq"
        className="lg:px-6 lg:w-4/6 mx-auto py-16 md:py-36 w-full"
      >
        <Faq />
      </section>
    </div>
  );
};

export default Research;
