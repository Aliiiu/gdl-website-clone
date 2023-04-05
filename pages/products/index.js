import { useEffect, useState } from "react";
import Products, { RightProduct } from "../../components/PageSections/Products";
import Faq from "../../components/PageSections/Faq";
import JoinTheClub from "../../components/PageSections/JoinTheClub";
import { useRouter } from "next/router";
import AppModal from "../../components/Widgets/Modal/Modal";
import { ModalContent } from "../../components/PageSections/ProductContent";
import product from "../../constant/product";
import { data } from "../../utils/helper";
import { makeRequest } from "../../apiCalls/requestHandler";
import Head from "next/head";
import { useRequest } from "../../hooks/useRequest";
import MethodType from "../../constant/methodType";

const ProductPage = ({ prodContent, genContent, useCaseContent }) => {
  const [content, setContent] = useState();
  const {
    query: { params = [] },
    push,
    pathname,
  } = useRouter();
  const { makeRequest, data: productsData } = useRequest({
    url: "/pages/products",
    method: MethodType.GET,
  });
  const { makeRequest: fetchGeneral, data: generalData } = useRequest({
    url: "/pages/products/general",
    method: MethodType.GET,
  });
  const { makeRequest: fetchUsecase, data: usecaseData } = useRequest({
    url: "/pages/products/product/usecases",
    method: MethodType.GET,
  });

  // useEffect(() => {
  //   makeRequest();
  //   // fetchGeneral();
  //   fetchUsecase();
  // }, []);

  useEffect(() => {
    console.log(
      prodContent.map(item => {
        let arr = item.product_image_url.split("/");
        console.log(arr[arr.length - 1]);
      })
      // prodContent.map(item => {
      //   console.log(item);
      // })
    );
  }, [prodContent]);

  // useEffect(() => {
  //   if (!"undefined".includes(params)) {
  //     setContent(data[params[0]]);
  //     setOpen(true);
  //     // if (params) alert("wassa");
  //   } else {
  //     setOpen(false);
  //   }
  // }, [params]);

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
          <RightProduct />
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

  const prodData = await makeRequest("/pages/products/s", null, null);
  const genData = await makeRequest("/pages/products/general", null, null);
  const useCaseData = await makeRequest(
    "/pages/products/product/usecases",
    null,
    null
  );
  // console.log(jobData);
  return {
    props: {
      prodContent: prodData?.data?.data.reverse(),
      genContent: genData?.data?.data,
      useCaseContent: useCaseData?.data?.data,
    },
  };
}
