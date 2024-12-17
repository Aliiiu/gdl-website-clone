import React from "react";
import Management from "../../components/PageSections/Management";
import Boards from "../../components/PageSections/Boards";
import Head from "next/head";
import { SectionWrapper } from "../../components/PageSections/product.style";
import { AppButton } from "../../components/Widgets/Button/Button";
import { financeAndLeasing } from "../../constant/product";
import { useRouter } from "next/router";
import { AboutPageWrapper } from "../../styles/about.style";
import Image from "next/image";
import { financeBOD, management } from "../../constant/finance-leasing-data";

const FinanceAndLeasing = () => {
  const router = useRouter();
  return (
    <AboutPageWrapper>
      <Head>
        <title> Finance and Leasing </title>
      </Head>
      <div
        id="corporate-information"
        className="flex-1 flex flex-col pt-10 md:mt-20 px-4 justify-center"
      >
        <div>
          <h5 className="mb-1 text-second text-center text-xs">
            Finance and Leasing
          </h5>
          <h1 className="title leading-tight text-center max-w-[700px] mx-auto mb-4">
            GDL FINANCE AND LEASING COMPANY LIMITED
          </h1>
          <p className="mb-3 leading-loose text-center max-w-[900px] mx-auto">
            The Finance & Leasing arm of Growth and Development Limited (GDL) is
            comprised of a team of seasoned financial professionals, who
            understand that your financial needs are unique and provide unique
            financial solutions. For the individual looking to grow wealth, we
            offer quality financial instruments and offer personal and corporate
            lending options to those looking to delve into new ventures or
            opportunities.
          </p>
        </div>
      </div>
      <section
        id="management-team"
        className="container lg:px-6 md:w-5/6 lg:w-4/6 mx-auto pt-16 md:pt-24 xl:pt-36 w-full"
      >
        <Management data={management} notClickable={true} />
      </section>
      <section
        id="board-of-directors"
        className="container lg:px-6 md:w-5/6 lg:w-4/6 mx-auto pt-16 md:pt-24 xl:pt-36 w-full"
      >
        <Boards data={financeBOD} notClickable={true} />
      </section>

      <section className="py-16 md:py-24 xl:py-36">
        <SectionWrapper className="container px-4 xl:px-28 mx-auto">
          <div id="products" className="text-center md:text-center">
            <h1 className="title mb-[.75rem]">Products</h1>
            <p className="hint w-full md:w-4/5 xl:w-3/5 leading-[1.75rem] text-opacity-[0.9] text-[rgba(31,26,23,var(--tw-text-opacity))] dark:text-white mx-auto">
              We have various products which have been specifically designed for
              you. These product are{" "}
              <strong className="font-semibold">
                regulated by Central Bank of Nigeria (CBN)
              </strong>
            </p>
          </div>
          <div className="mt-10 md:mt-24 grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            {financeAndLeasing.map(item => {
              return (
                <div
                  key={item.title}
                  className="card flex flex-col relative justify-end"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="100%"
                    className="object-cover object-center"
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

export default FinanceAndLeasing;
