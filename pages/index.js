import HomePage from "./home";
import Head from "next/head";
import { makeRequest } from "../apiCalls/requestHandler";

const App = ({
  heroContent,
  statContent,
  prodContent,
  testimonialContent,
  mediaContent,
  blogContent,
  getStartedContent,
}) => {
  console.log(prodContent);
  return (
    <>
      <Head>
        <title>Home | GDL</title>
      </Head>
      <HomePage
        hero={heroContent[0]}
        stat={statContent[0]}
        products={prodContent.filter(item => item?.publish_product === true)}
        testimonial={testimonialContent}
        media={mediaContent}
        blog={blogContent}
        getStarted={getStartedContent}
      />
    </>
  );
};

export default App;

export async function getStaticProps() {
  const heroData = await makeRequest("/pages/home/hero");
  const statData = await makeRequest("/pages/home/statistics");
  const prodData = await makeRequest("/pages/products/s");
  const testimonialData = await makeRequest("/pages/testimonials/s");
  const mediaData = await makeRequest("/pages/home/media");
  const blogData = await makeRequest("/pages/home/blog");
  const getStartedData = await makeRequest("/pages/home/get/started");
  // console.log(heroData);
  return {
    props: {
      heroContent: heroData?.data?.data,
      statContent: statData?.data?.data,
      prodContent: prodData?.data?.data.reverse(),
      testimonialContent: testimonialData?.data?.data,
      mediaContent: mediaData?.data?.data,
      blogContent: blogData?.data?.data,
      getStartedContent: getStartedData?.data?.data,
    },
  };
}
