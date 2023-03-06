import CustomHeader, {
  HeaderTabBar,
} from "../../components/Widgets/CustomHeader/Header";
import Faq from "../../components/PageSections/Faq";
import { TopContent } from "../../components/Widgets/CustomHeader/HeaderContent";
import { useEffect } from "react";
import { makeRequest } from "../../apiCalls/requestHandler";

const tabNames = {
  All: "",
  Stockbroking: "",
  General: "",
  Investments: "",
};

const Blogs = ({ heroContent }) => {
  useEffect(() => {
    console.log(heroContent);
  }, []);
  const desc =
    "Everything you need to know about finance and investing in Nigeria.";
  return (
    <div>
      <div>
        <CustomHeader
          hasBackImg
          content={<TopContent name="Blog" description={desc} />}
        />
        <HeaderTabBar tabs={tabNames} />
      </div>
      <section
        id="faq"
        className="lg:px-6 lg:w-4/6 mx-auto py-16 md:py-36 w-full"
      >
        <Faq />
      </section>
    </div>
  );
};

export default Blogs;

// export async function getStaticProps() {
//   const generalData = await makeRequest(
//     "/pages/resources/bp/general",
//     null,
//     null
//   );

//   return {
//     props: {
//       heroContent: generalData?.data?.data,
//     },
//   };
// }
