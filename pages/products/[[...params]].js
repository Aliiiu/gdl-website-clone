import { useEffect, useState } from "react";
import Products, { RightProduct } from "../../components/PageSections/Products";
import Faq from "../../components/PageSections/Faq";
import JoinTheClub from "../../components/PageSections/JoinTheClub";
import { useRouter } from "next/router";
import AppModal from "../../components/Widgets/Modal/Modal";
import { ModalContent } from "../../components/PageSections/ProductContent";

const data = {
  "gdl-canary-fund": "GDL Canary Fund",
  "high-yield-note": "High Yield Note",
};

const ProductPage = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const {
    query: { params = [] },
    push,
  } = useRouter();

  useEffect(() => {
    if (!"undefined".includes(params)) {
      // alert(params[0]);
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
          <Products nobutton />
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
