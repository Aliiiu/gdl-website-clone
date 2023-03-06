import { AppButton } from "../../components/Widgets/Button/Button";
import CustomHeader from "../../components/Widgets/CustomHeader/Header";
import Faq from "../../components/PageSections/Faq";
import {
  IoPlayCircleOutline,
  IoLocationOutline,
  IoWarning,
} from "react-icons/io5";
import Image from "next/image";
import Img from "../../assets/Images/two-employees.jpg";
import Link from "next/link";
import { useEffect } from "react";
import { makeRequest } from "../../apiCalls/requestHandler";

const CareerTopContent = () => (
  <>
    <h1 className="section-header">Career</h1>
    <p className="section-hint text-[rgba(31,26,23,var(--tw-text-opacity))] text-opacity-[0.9]">
      Join The Tribe! Come work with us.
    </p>
    <div className="mt-16">
      <AppButton
        name="Apply Now"
        textSize={"text-[1rem]"}
        className="bg-[#9A2333] text-white px-[1.3rem] py-3"
      />
    </div>
  </>
);

const JobContent = ({ id, data }) => (
  <Link href={`/career/${id}/apply`}>
    <a className="relative rounded-[0.5rem] border-[1px] border-[rgba(162,166,168,var(--tw-border-opacity))] border-opacity-20 bg-opacity-100 bg-[rgba(255,255,255,var(--tw-bg-opacity))] p-[1.5rem] shadow">
      <h1 className="font-bold text-xl">{data?.position || "Job Title"}</h1>
      <div className="mb-1 py-1 px-2 inline-flex rounded text-sm bg-opacity-100 bg-[rgba(255,236,239,var(--tw-bg-opacity))] text-opacity-100 text-[rgba(153,35,51,var(--tw-text-opacity))]">
        {data?.type_of_employment || "Job Type"}
      </div>
      <h3 className="flex justify-start items-center font-normal">
        <IoLocationOutline className="mr-1" />
        <span>{data?.location || "Job Location"}</span>
      </h3>
      <div className="mt-1 text-sm text-opacity-100 text-[rgba(162,166,168,var(--tw-text-opacity))]">
        Closes {new Date().toDateString()}
      </div>
      <div className="mt-4 flex items-center justify-end text-sm capitalize text-opacity-100 text-[rgba(162,166,168,var(--tw-text-opacity))]">
        <span>a year ago</span>
      </div>
    </a>
  </Link>
);

const CareerPage = ({
  jobOpening,
  heroContent,
  genContent,
  pageContent,
  jobContent,
}) => {
  // useEffect(() => {
  //   console.log(jobOpening);
  //   console.log(heroContent);
  //   console.log(genContent);
  //   console.log(pageContent);
  //   console.log(jobContent);
  // }, []);
  return (
    <div>
      <div className="bg-opacity-20 bg-[rgba(194,207,214,var(--tw-bg-opacity))]">
        <CustomHeader bg="#FEECEF" content={<CareerTopContent />} />
        <section className="-mt-12">
          <div className="px-[1.5rem] mx-auto max-w-[1200px] mb-16">
            <div className="max-w-5xl mx-auto rounded-lg bg-white shadow-xl p-3 md:p-10 lg:py-0 flex flex-wrap">
              <div className="w-full lg:w-1/2 md:pr-6 flex justify-center items-center">
                <div>
                  <div className="relative overflow-hidden w-auto">
                    <div className="max-w-[640px] max-h-[360px] mx-auto w-full rounded-[0.5rem] bg-opacity-[1] bg-[rgba(248,248,248,var(--tw-bg-opacity))] shadow relative overflow-hidden">
                      <img src="https://res.cloudinary.com/gdlapp/image/upload/v1626694372/image/GDL%20Group.jpg" />
                      <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-[rgba(31,26,23,var(--tw-bg-opacity))] bg-opacity-[0.2]">
                        <a className="flex cursor-pointer items-center justify-center md:text-[3.75rem] leading-[1] text-opacity-100 text-[rgba(255,255,255,var(--tw-text-opacity))]">
                          <IoPlayCircleOutline />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 py-6 md:py-12 px-2 md:px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-opacity-100 text-[rgba(162,166,168,var(--tw-text-opacity))]">
                  See what working with us feels like!
                </h2>
                <p className="leading-[36px] text-[1.125rem] text-opacity-90 text-[rgba(31,26,23,var(--tw-text-opacity))]">
                  We take pride in the fact that our people are not at the
                  periphery but the core of our existence; thus, we provide them
                  with an enabling environment of open communication, teamwork,
                  career fulfilment and continuous development.
                </p>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="max-w-5xl mx-auto flex flex-wrap">
              <div className="w-full md:w-1/2 py-6 md:py-24 mb-4 md:mb-0 text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-5">
                  Excellence & Professionalism.
                </h1>
                <p className="visible opacity-100 mb-[1.5rem] leading-[36px] text-[1.125rem] text-opacity-90 text-[rgba(31,26,23,var(--tw-text-opacity))]">
                  As a company with an unwavering commitment to excellence and
                  the highest level of professionalism, we offer great career
                  opportunities for enterprising and high performing
                  individuals.
                </p>
              </div>
              <div className="relative w-full md:w-1/2 flex justify-center items-center happy-img">
                <div className="md:absolute md:-mb-20 bottom-0 shadow-2xl flex rounded-lg">
                  <Image
                    src={Img}
                    className="right-0 left-0  mx-auto rounded-lg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-white py-12 md:py-24">
        <div className="px-[1.5rem] mx-auto max-w-[1200px] flex flex-wrap">
          <div className="happy-img relative w-full md:w-5/12">
            <video
              className="mx-auto rounded-lg shadow-2xl h-[580px]"
              src={require("../../assets/Images/work-environment.mp4")}
              loop={true}
              autoPlay={true}
            />
          </div>
          <div className="w-full md:w-7/12 py-12 md:py-24 text-left md:pr-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              A Creative Work Environment.
            </h1>
            <p className="leading-[36px] text-[1.125rem] text-[rgba(31,26,23,var(--tw-text-opacity))] text-opacity-90">
              We have a creative work environment ensconced in a culture and
              value system of teamwork, audacity, integrity, result orientation
              and a strong social conscience. Together as a team of
              professionals we utilize a combination of meticulous, innovative
              and agile management processes to engender the sustainable growth
              and development of our diverse asset portfolios. This makes
              working with us a career enriching experience with immense
              prospects for career advancement coupled with very competitive
              employment benefits on offer in Nigeria’s financial services
              landscape.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 md:py-24 md:bg-opacity-10 md:bg-white bg-[rgba(162,166,168,var(--tw-bg-opacity))] bg-opacity-100">
        <div className="max-w-[1200px] mx-auto px-[1.5rem]">
          <h1 className="leading-[1.1] text-[3rem] mb-[0.75rem] font-[700]">
            Job Openings
          </h1>
          <div className="mt-8">
            {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <JobContent
                id="1"
                data={{
                  position: "Product Manager",
                  type_of_employment: "remote",
                  location: "Lagos",
                }}
              />
              <JobContent
                id="2"
                data={{
                  position: "UI/UX Developer",
                  type_of_employment: "remote",
                  location: "Lagos",
                }}
              />
            </div> */}
            <div className="flex justify-center items-center py-10 px-5">
              <span className="md:text-sm text-sm px-5 py-3 flex items-center gap-2 leading-5 rounded-lg bg-gray-50 text-gray-500">
                <IoWarning size={20} /> No career vacancy available at the
                moment, please check back later
              </span>
            </div>
          </div>
        </div>
      </div>
      <section
        id="faq"
        className="lg:px-6 lg:w-4/6 mx-auto py-16 md:py-36 w-full"
      >
        <Faq />
      </section>
    </div>
  );
};

// export async function getStaticProps() {
//   const jobData = await makeRequest("/jobs", null, null);
//   const heroData = await makeRequest("/pages/careers/intro", null, null);
//   const genData = await makeRequest("/pages/careers/general", null, null);
//   const pageData = await makeRequest("/pages/careers/page/content", null, null);
//   const openingsData = await makeRequest(
//     "/pages/careers/job/openings",
//     null,
//     null
//   );

//   return {
//     props: {
//       jobOpening: jobData?.data?.data.filter(item => item?.published),
//       heroContent: heroData?.data?.data,
//       genContent: genData?.data?.data,
//       pageContent: pageData?.data?.data,
//       jobContent: openingsData?.data?.data,
//     },
//   };
// }

export default CareerPage;
