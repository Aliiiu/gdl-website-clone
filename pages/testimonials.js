import CustomHeader from "../components/Widgets/CustomHeader/Header";
import Faq from "../components/PageSections/Faq";
import { TestimonyCard } from "../components/Widgets/Cards/TestimonyCard";
import { makeRequest } from "../apiCalls/requestHandler";
import { useEffect } from "react";

const Testimonials = ({ heroContent, genContent }) => {
  useEffect(() => {
    console.log(heroContent);
    console.log(genContent);
  });
  return (
    <div>
      <CustomHeader />
      <div className="-mt-10 grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 container px-4 xl:px-28 mx-auto">
        <TestimonyCard />
        <TestimonyCard />
        <TestimonyCard />
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

// export async function getStaticProps() {
//   const testData = await makeRequest("/pages/testimonials/s", null, null);
//   const genData = await makeRequest("/pages/testimonials/general", null, null);

//   return {
//     props: {
//       heroContent: testData?.data?.data,
//       genContent: genData?.data?.data,
//     },
//   };
// }
