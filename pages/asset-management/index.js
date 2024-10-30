import React from "react";
import { AppButton } from "../../components/Widgets/Button/Button";
import Image from "next/image";
import { SectionWrapper } from "../../components/PageSections/product.style";
import Boards from "../../components/PageSections/Boards";
import Management from "../../components/PageSections/Management";
import Head from "next/head";
import { AboutPageWrapper } from "../../styles/about.style";
import { useRouter } from "next/router";
import { assetMgmt } from "../../constant/product";
import { assetBOD, assetManagement } from "../../constant/asset-mgmt-data";

const AssetManagement = () => {
  const router = useRouter();
  return (
    <AboutPageWrapper>
      <Head>
        <title> Asset Management </title>
      </Head>
      <div className="flex-1 flex flex-col mt-10 md:pt-20 px-4 justify-center">
        <div id="corporate-information">
          <h5 className="mb-1 text-second text-center text-xs">
            Asset Management
          </h5>
          <h1 className="title leading-tight text-center max-w-[700px] mx-auto mb-4">
            GDL ASSET MANAGEMENT LTD
          </h1>
          <p className="mb-3 leading-loose text-center max-w-[900px] mx-auto">
            Growth and Development Asset Management Limited (GDL) is a non-bank
            financial institution licensed by the Securities & Exchange
            Commission (SEC) .We are in the asset management business to
            redefine the business by expanding beyond wealth management and
            wealth creation – We are dedicated to the maintenance and
            preservation of the asset base and wealth of our clients
          </p>
        </div>
      </div>
      <section
        id="management-team"
        className="container lg:px-6 md:w-5/6 lg:w-4/6 mx-auto pt-16 md:pt-24 xl:pt-36 w-full"
      >
        <Management data={assetManagement} notClickable={true} />
      </section>
      <section
        id="board-of-directors"
        className="container lg:px-6 md:w-5/6 lg:w-4/6 mx-auto pt-16 md:pt-24 xl:pt-36 w-full"
      >
        <Boards data={assetBOD} notClickable={true} />
      </section>

      <section id="products" className="py-16 md:py-24 xl:py-36">
        <SectionWrapper className="container px-4 xl:px-28 mx-auto">
          <div className="text-center md:text-center">
            <h1 className="title mb-[.75rem]">Products</h1>
            <p className="hint w-full md:w-4/5 xl:w-3/5 leading-[1.75rem] text-opacity-[0.9] text-[rgba(31,26,23,var(--tw-text-opacity))] dark:text-white mx-auto">
              We have various products which have been specifically designed for
              you. These products are{" "}
              <strong className="font-semibold">
                regulated by Securities & Exchange Commission (SEC)
              </strong>
            </p>
          </div>
          <div className="mt-10 md:mt-24 grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
            {assetMgmt.map(item => {
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

export default AssetManagement;
