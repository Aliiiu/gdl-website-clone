import Products, { RightProduct } from "../../components/PageSections/Products";
import Faq from "../../components/PageSections/Faq";
import { useRouter } from "next/router";
import { data } from "../../utils/helper";
import { makeRequest } from "../../apiCalls/requestHandler";
import Head from "next/head";

const ProductPage = ({ prodContent, heroContent }) => {
  const {
    query: { params = [] },
    push,
    pathname,
  } = useRouter();

  // useEffect(() => {
  //   if (!"undefined".includes(params)) {
  //     setContent(data[params[0]]);
  //     setOpen(true);
  //     // if (params) alert("wassa");
  //   } else {
  //     setOpen(false);
  //   }
  // }, [params]);

  console.log({ heroContent });

  return (
    <>
      <Head>
        <title>Products | GDL</title>
      </Head>
      <div>
        <section id="our-product" className="py-16 md:py-28">
          <Products nobutton product={prodContent} />
        </section>
        <section className="mt-12 md:mt-26">
          <RightProduct content={heroContent} />
        </section>
        <section
          id="faq"
          className="container px-4 xl:px-28 mx-auto py-16 md:py-36 w-full"
        >
          <Faq />
        </section>
      </div>
      {/* <AppModal
        open={open}
        onClose={() => push("/products")}
        content={<ModalContent content={content} />}
      /> */}
    </>
  );
};

export default ProductPage;

export async function getStaticProps() {
  // const { careerid } = context.query;
  const heroData = await makeRequest("/pages/home/hero");

  const prodData = await makeRequest("/pages/products/s", null, null);
  const genData = await makeRequest("/pages/products/general", null, null);
  const useCaseData = await makeRequest(
    "/pages/products/product/usecases",
    null,
    null
  );
  return {
    props: {
      prodContent: prodData?.data?.data.reverse(),
      genContent: genData?.data?.data,
      useCaseContent: useCaseData?.data?.data,
      heroContent: heroData?.data?.data[0] || [],
    },
  };
}
