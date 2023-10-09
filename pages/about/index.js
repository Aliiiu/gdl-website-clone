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
      <section className="overflow-hidden md:py-24">
        <CoreValues vision={visionContent} mission={missionContent} />
      </section>
      <section
        id="corporate-information"
        className="container px-4 xl:px-28 mx-auto py-16 w-full"
      >
        <WhatWeDo />
      </section>
      <section className="container px-4 xl:px-28 mx-auto py-16 md:py-36 w-full">
        <WhatWeAre />
      </section>
      <section
        id="core-values"
        className="lg:px-6 md:w-5/6 lg:w-4/6 mx-auto py-16 md:py-36 w-full"
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
        className="lg:px-6 md:w-5/6 lg:w-4/6 mx-auto py-16 md:py-36 w-full"
      >
        <Management data={managementContent} />
      </section>
      <section
        id="board-of-directors"
        className="lg:px-6 md:w-5/6 lg:w-4/6 mx-auto py-16 md:py-36 w-full"
      >
        <Boards data={bodContent} />
      </section>
      <section
        id="faq"
        className="container px-4 xl:px-28 mx-auto py-16 md:py-36 w-full"
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
