import React from "react";
import Faq from "../../components/PageSections/Faq";
import CustomHeader from "../../components/Widgets/CustomHeader/Header";
import { TopContent } from "../../components/Widgets/CustomHeader/HeaderContent";

const Papers = () => {
  const desc =
    "Our research team organizes all they have learnt from the market into documents you can download at any time!";
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
