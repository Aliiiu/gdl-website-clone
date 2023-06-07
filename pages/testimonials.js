import CustomHeader from "../components/Widgets/CustomHeader/Header";
import Faq from "../components/PageSections/Faq";
import { TestimonyCard } from "../components/Widgets/Cards/TestimonyCard";
import { useEffect } from "react";
import { useRequest } from "../hooks/useRequest";
import MethodType from "../constant/methodType";
import Head from "next/head";
import { makeRequest } from "../apiCalls/requestHandler";

const Testimonials = ({ heroContent, generalContent }) => {
  const { makeRequest, data } = useRequest({
    url: "/pages/testimonials/s",
    method: MethodType.GET,
  });
  // const { makeRequest: fetchGeneral, data: generalData } = useRequest({
  //   url: "/pages/testimonials/s",
  //   method: MethodType.GET,
  // });

  // useEffect(() => {
  //   makeRequest();
  //   fetchGeneral();
  // }, []);

  // useEffect(() => {
  //   console.log(heroContent);
  // }, [heroContent]);

  return (
    <div>
      <Head>
        <title>Testimonial | GDL</title>
      </Head>
      <CustomHeader />
      <div className="-mt-10 grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 container px-4 xl:px-28 mx-auto">
        {heroContent.map(item => (
          <TestimonyCard key={item.id} {...item} />
        ))}
        {/* <TestimonyCard />
        <TestimonyCard />
        <TestimonyCard /> */}
      </div>
      <section
        id="faq"
        className="container px-4 xl:px-28 mx-auto py-16 md:py-36 w-full"
      >
        <Faq />
      </section>
    </div>
  );
};

export default Testimonials;

export async function getStaticProps() {
  const heroData = await makeRequest("/pages/testimonials/s");
  const generalData = await makeRequest("/pages/testimonials/general");
  return {
    props: {
      heroContent: heroData.data.data,
      generalContent: generalData.data.data,
    },
  };
}
