import { AppButton } from "../Widgets/Button/Button";
import { ContentContainer } from "./pagesec.style";
import parse from "html-react-parser";

export const ModalContent = ({ content, ...props }) => (
  <ContentContainer className="content-container">
    <section>
      <div
        className="bg-green-300 w-full md:w-4/12 flex justify-center items-start rounded-tl-[.5rem] rounded-bl-[.5rem]"
        style={{
          backgroundImage: `url(${content?.img})`,
          backgroundPosition: "39% 0%",
          backgroundSize: "cover",
          minHeight: "100%",
        }}
      ></div>
      <div className="w-full md:w-8/12 px-6 md:px-10 py-16">
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center text-center sm:text-left">
          <div className="bg-opacity-[1] bg-[rgba(248,248,248,var(--tw-bg-opacity))] p-4 rounded-lg mb-4 md:mb-0">
            <div className="opacity-20">
              <img
                className="mx-auto"
                src={content?.icon}
                style={{ height: "50px" }}
              />
            </div>
          </div>
          <div className="sm:ml-6">
            <h1 className="text-3xl md:text-4xl font-bold text-opacity-[1] text-[#992333]">
              {content?.header || "High Yield Note"}
            </h1>
            <h3 className="font-medium text-black border-b-0 border-black pb-0 border-opacity-20">
              {content?.desc}
            </h3>
          </div>
        </div>
        <article className="mt-6 text-left">{parse(content?.content)}</article>
        <div className="hidden md:block mt-16">
          <AppButton
            name="Invest Now →"
            className="py-[.8rem] px-[1.5rem] text-white md:mr-6 mb-4 md:mb-0 bg-[#992333]"
            onPress={() => window.location("www.app.gdl.com.ng?product=canary")}
          />
        </div>
      </div>
    </section>
  </ContentContainer>
);
