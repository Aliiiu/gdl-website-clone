import CustomHeader, {
  HeaderTabBar,
} from "../components/Widgets/CustomHeader/Header";
import faqImage from "../assets/Images/faq.jpeg";
import { TopContent } from "../components/Widgets/CustomHeader/HeaderContent";
import AppAccordion from "../components/Widgets/Accordion/Accordion";
import { makeRequest } from "../apiCalls/requestHandler";
import { useEffect } from "react";

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

const FAQPage = ({ heroContent, genContent, pageContent }) => {
  const desc =
    "A compilation of answers to questions that will help you understand our products even better.";

  useEffect(() => {
    console.log(heroContent);
    console.log(genContent);
    console.log(pageContent);
  });
  return (
    <div>
      <div>
        <CustomHeader
          hasBackImg
          imgUrl={faqImage}
          content={<TopContent name="FAQs" description={desc} />}
        />
        <HeaderTabBar tabs={tabNames} />
      </div>
      <div className="my-10 md:px-[1.5rem] px-[1.25rem] mx-auto max-w-[56rem]">
        {faqArray.map((content, idx) => (
          <AppAccordion key={idx} {...content} />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;

// export async function getStaticProps() {
//   const heroData = await makeRequest("/pages/faqs/s", null, null);
//   const genData = await makeRequest("/pages/faqs/general", null, null);
//   const catData = await makeRequest("/pages/faqs/categories", null, null);

//   return {
//     props: {
//       heroContent: heroData?.data?.data,
//       genContent: genData?.data?.data,
//       pageContent: catData?.data?.data,
//     },
//   };
// }
