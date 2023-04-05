import CustomHeader from "../../components/Widgets/CustomHeader/Header";
import Faq from "../../components/PageSections/Faq";
import { TopContent } from "../../components/Widgets/CustomHeader/HeaderContent";
import { useEffect } from "react";
import { makeRequest } from "../../apiCalls/requestHandler";
import Head from "next/head";
import MethodType from "../../constant/methodType";
import { useRequest } from "../../hooks/useRequest";
import { HeaderTabBar } from "../faq";

const tabNames = [
  {
    category: "All",
    id: 1,
  },
  {
    category: "Stockbroking",
    id: 2,
  },
  {
    category: "General",
    id: 3,
  },
  {
    category: "Investment",
    id: 4,
  },
];

const Blogs = ({ heroContent }) => {
  const { makeRequest, data } = useRequest({
    url: "/pages/resources/bp/general",
    method: MethodType.GET,
    // onSuccess: data => console.log(data),
  });
  // useEffect(() => {
  //   makeRequest();
  // }, []);

  useEffect(() => {
    console.log(heroContent);
  }, [heroContent]);

  const desc =
    "Everything you need to know about finance and investing in Nigeria.";
  return (
    <div>
      <Head>
        <title>Blog | GDL</title>
      </Head>
      <div>
        <CustomHeader
          hasBackImg
          content={
            <TopContent
              name={heroContent?.title || "Blog"}
              description={heroContent?.description || desc}
            />
          }
        />
        <HeaderTabBar tabs={tabNames} />
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

export default Blogs;

export async function getStaticProps() {
  const generalData = await makeRequest(
    "/pages/resources/bp/general",
    null,
    null
  );

  return {
    props: {
      heroContent: generalData?.data?.data.pop(),
    },
  };
}
