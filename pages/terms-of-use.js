import React, { useEffect } from "react";
import Terms from "../components/PageSections/Terms";
import Faq from "../components/PageSections/Faq";
import { makeRequest } from "../apiCalls/requestHandler";
import Head from "next/head";
import { useRouter } from "next/router";

const TermsOfUse = ({ termsContent }) => {
  const route = useRouter();

  const { hideLayout } = route.query;
  return (
    <div className="relative">
      <Head>
        <title>Terms of Use</title>
      </Head>
      <section className="container xl:max-w-[1000px] px-4 md:px-10 xl:px-20 mx-auto">
        <Terms />
      </section>
      {hideLayout ? (
        ""
      ) : (
        <section
          id="faq"
          className="lg:px-6 lg:w-4/6 mx-auto py-16 md:py-36 w-full"
        >
          <Faq />
        </section>
      )}
    </div>
  );
};

export default TermsOfUse;

export async function getStaticProps() {
  const userData = await makeRequest("/pages/terms", null, null);

  return {
    props: {
      termsContent: userData,
    },
  };
}
