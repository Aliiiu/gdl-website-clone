import Head from "next/head";
import React, { useEffect } from "react";
import { makeRequest } from "../apiCalls/requestHandler";
import Faq from "../components/PageSections/Faq";
import Privacy from "../components/PageSections/Privacy";

const Privacypolicy = ({ privacyContent }) => {
  return (
    <div className="relative">
      <Head>
        <title>Privacy-Policy | GDL</title>
      </Head>
      <section className="xl:max-w-[1000px] px-4 md:px-10 xl:px-20 mx-auto">
        <Privacy data={privacyContent} />
      </section>
      <section
        id="faq"
        className="xl:max-w-[1000px] px-4 md:px-10 xl:px-20 mx-auto py-16 md:py-36 w-full"
      >
        <Faq />
      </section>
    </div>
  );
};

export default Privacypolicy;

export async function getStaticProps() {
  const userData = await makeRequest("/pages/privacy/policy", null, null);

  return {
    props: {
      privacyContent: userData?.data?.data.pop(),
    },
  };
}
