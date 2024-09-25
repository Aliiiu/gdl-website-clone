import CustomHeader from "../components/Widgets/CustomHeader/Header";
import faqImage from "../assets/Images/faq.jpeg";
import { TopContent } from "../components/Widgets/CustomHeader/HeaderContent";
import AppAccordion from "../components/Widgets/Accordion/Accordion";
import { makeRequest } from "../apiCalls/requestHandler";
import Head from "next/head";
import { useRequest } from "../hooks/useRequest";
import MethodType from "../constant/methodType";
import { DetailTabs } from "../components/DetailsComponent/DetailsTab";
import { useState } from "react";
import { IoWarning } from "react-icons/io5";

export const HeaderTabBar = props => (
  <div className="border-b-[1px] border-[rgba(194,207,214,var(--tw-border-opacity))] border-opacity-[0.3] h-[60px]">
    <div className="flex justify-start md:justify-center h-full items-center overflow-x-auto px-[1.5rem] max-w-[1200px] mx-auto">
      <DetailTabs tabs={props.tabs} onPress={i => props.onPress(i)} />
    </div>
  </div>
);

const FAQPage = ({ heroContent, faqContent, catContent }) => {
  const [faqData, setFaqData] = useState(() => faqContent);
  const desc =
    "A compilation of answers to questions that will help you understand our products even better.";
  const { makeRequest, data } = useRequest({
    url: "/pages/faqs/s",
    method: MethodType.GET,
  });

  const faqFiltering = tag => {
    if (tag === 4) {
      setFaqData(() => faqContent);
    } else {
      setFaqData(() => faqContent.filter(item => item.category_id === tag));
    }
  };

  return (
    <div>
      <Head>
        <title>FAQ | GDL</title>
      </Head>
      <div>
        <CustomHeader
          hasBackImg
          imgUrl={faqImage}
          content={
            <TopContent
              name={heroContent.title}
              description={heroContent.description}
            />
          }
        />
        <HeaderTabBar tabs={catContent} onPress={faqFiltering} />
      </div>
      <div className="my-10 md:px-[1.5rem] px-[1.25rem] mx-auto max-w-[56rem]">
        {faqData.length > 0 ? (
          faqData.map((content, idx) => (
            <AppAccordion key={idx} {...content} category={catContent} />
          ))
        ) : (
          <div className="flex justify-center items-center py-10 px-5">
            <span className="md:text-sm text-sm px-5 py-3 flex items-center leading-5 rounded-lg bg-gray-50 text-gray-500">
              <IoWarning size={20} /> There are currently no available data for
              this service
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQPage;

export async function getStaticProps() {
  const faqData = await makeRequest("/pages/faqs/s", null, null);
  const heroData = await makeRequest("/pages/faqs/general", null, null);
  const catData = await makeRequest("/pages/faqs/categories", null, null);

  return {
    props: {
      faqContent: faqData?.data?.data.reverse(),
      heroContent: heroData?.data?.data[0],
      catContent: catData?.data?.data.reverse(),
    },
  };
}
