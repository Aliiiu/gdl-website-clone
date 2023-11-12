import { useRouter } from "next/router";
import React from "react";
import { AboutPageWrapper } from "../../styles/about.style";
import Head from "next/head";
import Management from "../../components/PageSections/Management";
import Boards from "../../components/PageSections/Boards";
import { SectionWrapper } from "../../components/PageSections/product.style";
import Image from "next/image";
import { AppButton } from "../../components/Widgets/Button/Button";
import { stockbrokersBOD, stockbrokersManagement } from "./data";
import { stockbrokers } from "../../constant/product";

const Stockbrokers = () => {
  const router = useRouter();
  return (
    <AboutPageWrapper>
      <Head>
        <title> Stockbrokers </title>
      </Head>
      <div className="flex-1 flex flex-col mt-20 px-4 justify-center">
        <div id="corporate-information">
          <h5 className="mb-1 text-second text-center text-xs">Stockbroking</h5>
          <h1 className="title leading-tight text-center max-w-[700px] mx-auto mb-4">
            GDL STOCKBROKER
          </h1>
          <p className="mb-3 leading-loose text-center max-w-[1200px] mx-auto">
            <strong>GDL STOCKBROKERS LIMITED</strong> (“GDL Stockbrokers”) was
            incorporated on 27 May 2016, a subsidiary of Growth & Development
            Asset Management Limited (‘GDL Asset) with At GDL Stockbrokers, we
            are “investor-centric” in that the interest of the investor is
            central to the overall objective of the organization. we constantly
            aim to demonstrate the highest level of integrity and ensure it
            reflects in all our dealings and services to our clients. We aim to
            providing the best execution service to our clients ranging from
            best price trade execution and advisory services. Providing them
            with well-researched information to make a sound investment
            decision. Our processes are structured to ensure timely and quality
            service delivery to all our clients. As a client of GDL
            Stockbrokers, you will receive the daily price list after each day
            trade, gainers and losers list, corporate action information for the
            listed companies, and real-time trading platform for our clients.
          </p>
        </div>
      </div>
      <section
        id="management-team"
        className="lg:px-6 md:w-5/6 lg:w-4/6 mx-auto py-16 2xl:py-36 w-full"
      >
        <Management data={stockbrokersManagement} />
      </section>
      <section
        id="board-of-directors"
        className="lg:px-6 md:w-5/6 lg:w-4/6 mx-auto py-16 2xl:py-36 w-full"
      >
        <Boards data={stockbrokersBOD} />
      </section>

      <section id="products" className="py-16 2xl:py-36">
        <SectionWrapper className="container px-4 xl:px-28 mx-auto">
          <div className="text-center md:text-center">
            <h1 className="title mb-[.75rem]">Products</h1>
            <p className="hint w-full md:w-4/5 xl:w-2/5 leading-[1.75rem] text-opacity-[0.9] text-[rgba(31,26,23,var(--tw-text-opacity))] dark:text-white mx-auto">
              We have various products which have been specifically designed for
              you. There is something for everyone at GDL.
            </p>
          </div>
          <div className="mt-10 md:mt-24 grid md:grid-cols-2 max-w-[800px] mx-auto gap-6">
            {stockbrokers.map(item => {
              return (
                <div
                  key={item.title}
                  className="card flex flex-col relative justify-end"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={"center"}
                  />
                  <div
                    style={{
                      background:
                        "linear-gradient(180deg,transparent,rgba(153,35,51,.25),rgba(153,35,51,.85))",
                    }}
                    className="flex p-6 h-full justify-end z-10 text-white flex-col items-start"
                  >
                    <h2 className="text-xl font-bold lg:text-2xl">
                      {item.title}
                    </h2>
                    <p className="text-lg break-words text-white">
                      {item.hint}

                      {/* {item.product_image_url} */}
                    </p>
                    <AppButton
                      name="Learn more"
                      onPress={() => router.push("/products")}
                      className="mt-4 uppercase card-btn bg-white text-black"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex mt-10 md:mt-20 justify-center items-center">
            <AppButton
              name="Explore More"
              onPress={() => router.push("/products")}
              className="bg-[#9A2333] py-[1rem] rounded-[0.5rem] px-[1.5rem] text-[1.5rem] text-white"
            />
          </div>
        </SectionWrapper>
      </section>
    </AboutPageWrapper>
  );
};

export default Stockbrokers;
