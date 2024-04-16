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
  postContent,
}) => {
  console.log({ postContent });
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
        blogPost={postContent}
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
  const blogPosts = await makeRequest("/posts/s");
  const getStartedData = await makeRequest("/pages/home/get/started");
  return {
    props: {
      heroContent: heroData?.data?.data,
      statContent: statData?.data?.data,
      prodContent: prodData?.data?.data.reverse(),
      testimonialContent: testimonialData?.data?.data,
      mediaContent: mediaData?.data?.data,
      blogContent: blogData?.data?.data,
      postContent: blogPosts?.data?.data?.shift(),
      getStartedContent: getStartedData?.data?.data,
    },
  };
}
