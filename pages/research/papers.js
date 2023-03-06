import React, { useEffect } from "react";
import { makeRequest } from "../../apiCalls/requestHandler";
import Faq from "../../components/PageSections/Faq";
import CustomHeader from "../../components/Widgets/CustomHeader/Header";
import { TopContent } from "../../components/Widgets/CustomHeader/HeaderContent";

const Papers = ({ heroContent }) => {
  const desc =
    "Our research team organizes all they have learnt from the market into documents you can download at any time!";
  useEffect(() => {
    console.log(heroContent);
  }, []);
  return (
    <div>
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

  return {
    props: {
      heroContent: paperData?.data?.data,
    },
  };
}
