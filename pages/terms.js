import React, { useEffect } from "react";
import Terms from "../components/PageSections/Terms";
import Faq from "../components/PageSections/Faq";
import { makeRequest } from "../apiCalls/requestHandler";

const TermsOfUse = ({ termsContent }) => {
  useEffect(() => {
    // console.log(termsContent);
  }, []);
  return (
    <div className="relative">
      <div className="hidden absolute top-0 right-0 mt-[-8.8rem] mr-[-5rem] md:flex items-center justify-center rounded-[9999px] dark:border-gray-800 border-red-50 w-[220px] h-[220px] border-[32px]" />
      <section className="container lg:w-4/6 px-20 mx-auto">
        <Terms />
      </section>
      <section
        id="faq"
        className="lg:px-6 lg:w-4/6 mx-auto py-16 md:py-36 w-full"
      >
        <Faq />
      </section>
    </div>
  );
};

export default TermsOfUse;

// export async function getStaticProps() {
//   // const userData = await makeRequest("/pages/terms", null, null);

//   return {
//     props: {
//       // termsContent: userData,
//     },
//   };
// }
