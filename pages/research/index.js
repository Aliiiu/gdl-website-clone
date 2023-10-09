import React, { useEffect } from "react";
import Faq from "../../components/PageSections/Faq";
import CustomHeader from "../../components/Widgets/CustomHeader/Header";
import Image from "next/image";
import features from "../../constant/features";
import ResearchHeader from "../../components/PageSections/ResearchHeader";
import ResearchFeatures from "../../components/PageSections/ResearchFeatures";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { makeRequest } from "../../apiCalls/requestHandler";
import Head from "next/head";
import { useRequest } from "../../hooks/useRequest";
import MethodType from "../../constant/methodType";

const Research = ({ researchContent, genContent }) => {
  const { makeRequest, data } = useRequest({
    url: "/pages/resources/rp/research/papers/section",
    method: MethodType.GET,
  });
  const { makeRequest: fetchGeneral, data: generalData } = useRequest({
    url: "/pages/resources/rp/general",
    method: MethodType.GET,
  });

  // useEffect(() => {
  //   fetchGeneral();
  //   makeRequest();
  // }, []);

  return (
    <div>
      <Head>
        <title>Research | GDL</title>
      </Head>
      <CustomHeader content={<ResearchHeader />} />

      <section className="container px-4 xl:px-28 mx-auto w-full">
        <ResearchFeatures />
      </section>
      <section id="research-papers" className="bg-[#F8F8F8] w-full">
        <div className="max-w-[1200px] md:px-[1.5rem] px-[1.25rem] flex justify-center py-20 mx-auto">
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
        className="container px-4 xl:px-28 mx-auto py-16 md:py-36 w-full"
      >
        <Faq />
      </section>
    </div>
  );
};

export default Research;

export async function getStaticProps() {
  const researchData = await makeRequest(
    "/pages/resources/rp/research/papers/section",
    null,
    null
  );
  const genData = await makeRequest("/pages/resources/rp/general", null, null);

  return {
    props: {
      researchContent: researchData?.data?.data,
      genContent: genData?.data?.data,
    },
  };
}
