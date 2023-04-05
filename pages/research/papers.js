import Head from "next/head";
import React, { useEffect } from "react";
import { makeRequest } from "../../apiCalls/requestHandler";
import Faq from "../../components/PageSections/Faq";
import CustomHeader from "../../components/Widgets/CustomHeader/Header";
import { TopContent } from "../../components/Widgets/CustomHeader/HeaderContent";

const Papers = ({ heroContent, genContent }) => {
  const desc =
    "Our research team organizes all they have learnt from the market into documents you can download at any time!";
  useEffect(() => {
    console.log(genContent);
  }, []);
  return (
    <div>
      <Head>
        <title>Papers | GDL</title>
      </Head>
      <CustomHeader
        hasBackImg
        content={<TopContent name="Research Papers" description={desc} />}
      />
      <section
        id="faq"
        className="lg:px-6 lg:w-4/6 mx-auto py-16 md:py-36 w-full"
      >
        <Faq />
      </section>
    </div>
  );
};

export default Papers;

export async function getStaticProps() {
  const paperData = await makeRequest(
    "/pages/resources/rp/research/papers",
    null,
    null
  );
  const genData = await makeRequest("/pages/resources/rp/general", null, null);

  return {
    props: {
      heroContent: paperData?.data?.data,
      genContent: genData?.data?.data,
    },
  };
}
