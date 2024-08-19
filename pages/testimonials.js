import CustomHeader from "../components/Widgets/CustomHeader/Header";
import Faq from "../components/PageSections/Faq";
import { TestimonyCard } from "../components/Widgets/Cards/TestimonyCard";
import Head from "next/head";
import { makeRequest } from "../apiCalls/requestHandler";

const Testimonials = ({ heroContent }) => {
  return (
    <div>
      <Head>
        <title>Testimonial | GDL</title>
      </Head>
      <CustomHeader />
      <div className="-mt-10 grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 container px-4 xl:px-28 mx-auto">
        {heroContent.map(item => {
          return <TestimonyCard key={item.id} {...item} />;
        })}
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
  const testimonialData = await makeRequest("/pages/testimonials/s");
  return {
    props: {
      heroContent: testimonialData.data.data,
    },
  };
}
