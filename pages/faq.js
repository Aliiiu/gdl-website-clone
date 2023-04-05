import CustomHeader from "../components/Widgets/CustomHeader/Header";
import faqImage from "../assets/Images/faq.jpeg";
import { TopContent } from "../components/Widgets/CustomHeader/HeaderContent";
import AppAccordion from "../components/Widgets/Accordion/Accordion";
import { makeRequest } from "../apiCalls/requestHandler";
import { useEffect } from "react";
import Head from "next/head";
import { useRequest } from "../hooks/useRequest";
import MethodType from "../constant/methodType";
import { DetailTabs } from "../components/DetailsComponent/DetailsTab";

export const HeaderTabBar = props => (
  <div className="border-b-[1px] border-[rgba(194,207,214,var(--tw-border-opacity))] border-opacity-[0.3] h-[60px]">
    <div className="flex justify-start md:justify-center h-full items-center overflow-x-auto px-[1.5rem] max-w-[1200px] mx-auto">
      <DetailTabs tabs={props.tabs} onPress={() => alert("nothing for now")} />
    </div>
  </div>
);

const faqArray = [
  {
    question: "What is the full meaning of GDL",
    answer: "Growth and Development Asset Management Limited",
  },
  // {
  //   question: "How do I get started?",
  //   answer:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  // },
  // {
  //   question: "What licenses do you have?",
  //   answer:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  // },
  // {
  //   question: "How can I be sure my money is safe with you?",
  //   answer:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  // },
  // {
  //   question: "How many products are there?",
  //   answer:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  // },
  // {
  //   question: "How fast can I withdraw?",
  //   answer:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  // },
];

const tabNames = {
  All: "",
  Investments: "",
};

const FAQPage = ({ heroContent, faqContent, catContent }) => {
  const desc =
    "A compilation of answers to questions that will help you understand our products even better.";
  const { makeRequest, data } = useRequest({
    url: "/pages/faqs/s",
    method: MethodType.GET,
  });
  const { makeRequest: fetchGeneral, data: generalData } = useRequest({
    url: "/pages/faqs/s",
    method: MethodType.GET,
  });
  const { makeRequest: fetchFaqCategories, data: categoryData } = useRequest({
    url: "/pages/faqs/categories",
    method: MethodType.GET,
  });
  // useEffect(() => {
  //   makeRequest();
  //   fetchGeneral();
  //   fetchFaqCategories();
  // }, []);

  useEffect(() => {
    console.log(catContent);
  }, [catContent]);

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
        <HeaderTabBar tabs={catContent} />
      </div>
      <div className="my-10 md:px-[1.5rem] px-[1.25rem] mx-auto max-w-[56rem]">
        {faqContent.map((content, idx) => (
          <AppAccordion key={idx} {...content} category={catContent} />
        ))}
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
      catContent: catData?.data?.data,
    },
  };
}
