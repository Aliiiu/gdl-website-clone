import HomePage from "./home";
import { makeRequest } from "../apiCalls/requestHandler";
import Head from "next/head";

const App = ({
  heroContent,
  statContent,
  prodContent,
  getStartedContent,
  UVPContent,
  testimonialContent,
  mediaContent,
  blogContent,
}) => (
  <>
    <Head>
      <title>Home | GDL</title>
    </Head>
    <HomePage />
  </>
);

export default App;

// export async function getStaticProps() {
//   const userData = await makeRequest("/pages/home/hero", null, null);
//   const statData = await makeRequest("/pages/home/statistics", null, null);
//   const prodData = await makeRequest("/pages/home/products", null, null);
//   const testimonialData = await makeRequest(
//     "/pages/home/testimonials",
//     null,
//     null
//   );
//   const mediaData = await makeRequest("/pages/home/media", null, null);
//   const blogData = await makeRequest("/pages/home/blog", null, null);
//   const getStartedData = await makeRequest(
//     "/pages/home/get/started",
//     null,
//     null
//   );
//   const UVPData = await makeRequest(
//     "/pages/home/unique/selling/proposition",
//     null,
//     null
//   );

//   return {
//     props: {
//       heroContent: userData?.data,
//       statContent: statData?.data,
//       prodContent: prodData?.data,
//       getStartedContent: getStartedData?.data,
//       UVPContent: UVPData?.data,
//       testimonialContent: testimonialData?.data,
//       mediaContent: mediaData?.data,
//       blogContent: blogData?.data,
//     },
//   };
// }
