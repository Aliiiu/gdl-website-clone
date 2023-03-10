import Head from "next/head";
import React, { useEffect } from "react";
import styled from "styled-components";
import AboutHero from "../../components/PageSections/AboutHero";
import Boards from "../../components/PageSections/Boards";
import CoreValues from "../../components/PageSections/CoreValues";
import Faq from "../../components/PageSections/Faq";
import Management from "../../components/PageSections/Management";
import WhatWeAre from "../../components/PageSections/WhatWeAre";
import WhatWeDo from "../../components/PageSections/WhatWeDo";
import coreValues from "../../constant/coreValues";

const AboutPageWrapper = styled.div`
  .aboutHeroBg {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-size: 120%;
    background-repeat: no-repeat;
    min-height: 450px;
    background-position: 50% 100%;
    padding-top: 3em;

    @media only screen and (min-width: 768px) {
      min-height: 640px;
      justify-content: center;
      padding-top: 0;
    }
    @media only screen and (min-width: 1024px) {
      background-position: 50% 48%;
    }
    .blackContainer {
      border-radius: 0.5rem;
      @media only screen and (min-width: 768px) {
        background-color: rgba(31, 26, 23, 0.2);
      }
    }
  }
  .title {
    font-size: 36px;
    font-weight: 700;
    @media only screen and (min-width: 1024px) {
      font-size: 48px;
    }
  }
  .card-content {
    background-color: rgba(31, 26, 23, 0.2);
  }
`;

const About = ({
  heroContent,
  visionContent,
  missionContent,
  mangContent,
  bodContent,
}) => {
  // useEffect(() => {
  //   console.log(heroContent);
  //   console.log(visionContent);
  //   console.log(missionContent);
  //   console.log(mangContent);
  //   console.log(bodContent);
  // }, []);
  return (
    <AboutPageWrapper>
      <Head>
        <title>About | GDL</title>
      </Head>
      <section
        style={{
          backgroundImage: `url('Images/gdlOffice.png')`,
        }}
        className="aboutHeroBg"
      >
        <AboutHero header={heroContent} />
      </section>
      <section className="overflow-hidden md:py-24">
        <CoreValues vision={visionContent} mission={missionContent} />
      </section>
      <section className="container px-4 xl:px-28 mx-auto py-16 w-full">
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
        <Management data={mangContent} />
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
