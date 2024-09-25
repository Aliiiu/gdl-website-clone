import Head from "next/head";
import React, { useEffect } from "react";
import { makeRequest } from "../../apiCalls/requestHandler";
import AboutHero from "../../components/PageSections/AboutHero";
import Boards from "../../components/PageSections/Boards";
import CoreValues from "../../components/PageSections/CoreValues";
import Faq from "../../components/PageSections/Faq";
import Management from "../../components/PageSections/Management";
import WhatWeAre from "../../components/PageSections/WhatWeAre";
import WhatWeDo from "../../components/PageSections/WhatWeDo";
import coreValues from "../../constant/coreValues";
import MethodType from "../../constant/methodType";
import { useRequest } from "../../hooks/useRequest";
import { AboutPageWrapper } from "../../styles/about.style";

const About = ({
  heroContent,
  visionContent,
  missionContent,
  managementContent,
  bodContent,
}) => {
  return (
    <AboutPageWrapper>
      <Head>
        <title>About | GDL</title>
      </Head>
      <section
        style={{
          backgroundImage: `url(${heroContent.bg_image_url})`,
        }}
        className="aboutHeroBg"
      >
        <AboutHero header={heroContent} />
      </section>
      <section className="overflow-hidden py-16 md:py-24 xl:py-36">
        <CoreValues vision={visionContent} mission={missionContent} />
      </section>
      <section className="container lg:px-6 md:w-5/6 lg:w-4/6 mx-auto w-full">
        <h2 className="title mb-10 text-center">About GDL Group</h2>
        <p className="mb-4">
          Growth and Development Limited (GDL) serves as the holding company for
          the diverse subsidiaries operating across the group. At GDL, we are
          committed to driving sustainable growth and delivering value to our
          clients through innovative financial solutions tailored to meet their
          evolving needs. GDL provides strategic direction, support, and
          governance to its subsidiary businesses, ensuring synergy across the
          group while maintaining a customer-centric approach in all our
          operations. Our subsidiaries leverage GDL&apos;s Board deep industry
          expertise and collaborative structure to navigate complex markets and
          deliver exceptional results in their respective sectors.
        </p>
        <p>
          The GDL Board is comprised of astute professionals with extensive
          experience across various industries, particularly in finance and
          corporate governance. Their wealth of knowledge and professional
          leadership provides invaluable oversight and guidance to the
          subsidiary businesses, ensuring that each entity within the GDL Group
          adheres to the highest standards of operational excellence, risk
          management, and corporate governance. Meet our Board ( input the
          pictures and profile of the previous Board)
        </p>
      </section>
      <section
        id="corporate-information"
        className="container px-4 xl:px-28 mx-auto w-full pt-16 md:pt-24 xl:pt-36"
      >
        <WhatWeDo />
      </section>
      <section className="container px-4 xl:px-28 mx-auto pt-16 md:pt-24 xl:pt-36 w-full">
        <WhatWeAre />
      </section>
      <section
        id="core-values"
        className="container lg:px-6 md:w-5/6 lg:w-4/6 mx-auto pt-16 md:pt-24 xl:pt-36 w-full"
      >
        <div>
          <h2 className="title mb-4 text-center">Our Core Values</h2>
          <p className="text-center mx-auto max-w-lg">
            Amongst other things we stand for, these are values we find at the
            core of our being.
          </p>
          <div className="grid mt-[100px] grid-cols-2 md:grid-cols-3 gap-y-[100px]">
            {coreValues.map(item => (
              <div key={item.id} className="">
                {item.icon}
                <h5 className="text-[#9A2333] font-medium mt-3 cursor-pointer text-center">
                  {item.name}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="management-team"
        className="container lg:px-6 md:w-5/6 lg:w-4/6 mx-auto pt-16 md:pt-24 xl:pt-36 w-full"
      >
        <Management data={managementContent} />
      </section>
      <section
        id="board-of-directors"
        className="container lg:px-6 md:w-5/6 lg:w-4/6 mx-auto pt-16 md:pt-24 xl:pt-36 w-full"
      >
        <Boards data={bodContent} />
      </section>
      <section
        id="faq"
        className="container px-4 xl:px-28 mx-auto py-16 md:py-24 xl:py-36 w-full"
      >
        <Faq />
      </section>
    </AboutPageWrapper>
  );
};

export default About;

export async function getStaticProps() {
  const heroData = await makeRequest("/pages/about/general");
  const visionData = await makeRequest("/pages/about/our/vision");
  const missionData = await makeRequest("/pages/about/our/mission");
  const managementData = await makeRequest("/pages/about/management/team");
  const bodData = await makeRequest("/pages/about/board/of/directors");
  return {
    props: {
      heroContent: heroData.data.data[0],
      visionContent: visionData.data.data[0],
      missionContent: missionData.data.data[0],
      managementContent: managementData.data.data.reverse(),
      bodContent: bodData.data.data.reverse(),
    },
  };
}
