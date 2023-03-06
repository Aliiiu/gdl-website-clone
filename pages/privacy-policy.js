import React, { useEffect } from "react";
import { makeRequest } from "../apiCalls/requestHandler";
import Faq from "../components/PageSections/Faq";
import Privacy from "../components/PageSections/Privacy";

const Privacypolicy = ({ privacyContent }) => {
  useEffect(() => {
    console.log(privacyContent);
  }, []);
  return (
    <div className="relative">
      <div className="hidden absolute top-0 right-0 mt-[-8.8rem] mr-[-5rem] md:flex items-center justify-center rounded-[9999px] dark:border-gray-800 border-red-50 w-[220px] h-[220px] border-[32px]" />
      <section className="container lg:w-4/6 px-20 mx-auto">
        <Privacy />
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

export default Privacypolicy;

// export async function getStaticProps() {
//   const userData = await makeRequest("/pages/privacy/policy", null, null);

//   return {
//     props: {
//       privacyContent: userData?.data?.data,
//     },
//   };
// }
