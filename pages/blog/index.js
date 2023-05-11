import CustomHeader from "../../components/Widgets/CustomHeader/Header";
import Faq from "../../components/PageSections/Faq";
import { TopContent } from "../../components/Widgets/CustomHeader/HeaderContent";
import { useEffect } from "react";
import { makeRequest } from "../../apiCalls/requestHandler";
import Head from "next/head";
import MethodType from "../../constant/methodType";
import { useRequest } from "../../hooks/useRequest";
import { HeaderTabBar } from "../faq";
import BlogList from "../../components/Widgets/List/BlogList";
import { useState } from "react";

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

const Blogs = ({ heroContent, blogContent, blogCat }) => {
  const [blogData, setBlogData] = useState(() => blogContent);

  const desc =
    "Everything you need to know about finance and investing in Nigeria.";

  const blogFiltering = tag => {
    // console.log(tag);
    if (tag === 2) {
      setBlogData(() => blogContent);
    } else {
      setBlogData(() => blogContent.filter(item => item.category.id === tag));
    }
  };
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
        <HeaderTabBar tabs={blogCat} onPress={blogFiltering} />
        <div className="container px-4 xl:px-44 mx-auto py-16 md:py-36 w-full">
          {blogData.map(item => (
            <BlogList key={item.id} {...item} />
          ))}
        </div>
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

  const blogData = await makeRequest("/posts/s", null, null);
  const catData = await makeRequest("/post/categories", null, null);

  return {
    props: {
      heroContent: generalData?.data?.data.pop(),
      blogContent: blogData?.data?.data,
      blogCat: catData?.data?.data.reverse(),
    },
  };
}
