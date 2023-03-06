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

const ProductPage = ({ prodContent }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const {
    query: { params = [] },
    push,
    pathname,
  } = useRouter();

  useEffect(() => {
    if (!"undefined".includes(params)) {
      setContent(data[params[0]]);
      setOpen(true);
      // if (params) alert("wassa");
    } else {
      setOpen(false);
    }
  }, [params]);

  return (
    <>
      <div>
        <section id="our-product" className="py-16 md:py-28">
          <Products nobutton product={product} />
        </section>
        <section className="mt-12 md:mt-26">
          <RightProduct />
        </section>
        <section
          id="faq"
          className="lg:px-6 lg:w-4/6 mx-auto py-16 md:py-36 w-full"
        >
          <Faq />
        </section>
      </div>
      <AppModal
        open={open}
        onClose={() => push("/products")}
        content={<ModalContent content={content} />}
      />
    </>
  );
};

export default ProductPage;

// export async function getServerSideProps(context) {
//   const { careerid } = context.query;

//
