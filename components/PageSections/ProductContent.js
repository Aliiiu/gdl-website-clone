import { ContentContainer } from "./pagesec.style";

export const ModalContent = ({ content }) => (
  <ContentContainer className="content-container">
    <section>
      <div className="bg-green-300 w-full md:w-4/12">wassa</div>
      <div className="w-full bg-red-300 md:w-8/12 px-6 md:px-10 py-16">
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center text-center sm:text-left">
          <div className="bg-opacity-[1] bg-[rgba(248,248,248,var(--tw-bg-opacity))] p-4 rounded-lg mb-4 md:mb-0">
            <div className="opacity-20">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/gdlapp/image/upload/v1625840983/image/high-yield-note.svg.svg"
                // style={{ height: "50px" }}
              />
            </div>
          </div>
          <div className="sm:ml-6">
            <h1 className="text-3xl md:text-4xl font-bold text-opacity-[1] text-[#992333]">
              {content}
            </h1>
          </div>
        </div>
      </div>
    </section>
  </ContentContainer>
);
