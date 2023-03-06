import { AppButton } from "../Widgets/Button/Button";
import { ContentContainer } from "./pagesec.style";

export const ModalContent = ({ content }) => {
  // console.log(content);
  return (
    <ContentContainer className="content-container">
      <section>
        <div
          className="bg-green-300 w-full md:w-4/12 flex justify-center items-start rounded-tl-[.5rem] rounded-bl-[.5rem]"
          style={{
            backgroundImage: `url(${"https://res.cloudinary.com/gdlapp/image/upload/v1625840982/image/high-yield-note.jpg"})`,
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
                  src="https://res.cloudinary.com/gdlapp/image/upload/v1625840983/image/high-yield-note.svg.svg"
                  style={{ height: "50px" }}
                />
              </div>
            </div>
            <div className="sm:ml-6">
              <h1 className="text-3xl md:text-4xl font-bold text-opacity-[1] text-[#992333]">
                {content || "High Yield Note"}
              </h1>
              <h3 className="font-medium text-black border-b-0 border-black pb-0 border-opacity-20">
                High Interest Rate + Low Risk = The Perfect Investment
              </h3>
            </div>
          </div>
          <article className="mt-6 text-left">
            <p>
              With flexible interest rates higher than that of commercial banks,
              no maintenance fees and other charges, investing in our high yield
              note is the best thing you with your money.
            </p>
            <p>
              <br />
            </p>
            <p>
              You can make up to 15% per annum and your interest can be paid
              monthly or at once.
            </p>
            <p>
              <br />
            </p>
            <p>
              Investment starts with a minimum of{" "}
              <span
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "rgb(32, 33, 34)",
                }}
              >
                ₦
              </span>
              100,000.
            </p>
            <p>
              <br />
            </p>
            <p>
              We are regulated and approved by the Securities and Exchanges
              Commission (SEC) to invest money. You can sleep with both eyes
              closed knowing all your funds are safe with us.
            </p>
          </article>
          <div className="hidden md:block mt-16">
            <AppButton
              name="Invest Now →"
              className="py-[.8rem] px-[1.5rem] text-white md:mr-6 mb-4 md:mb-0 bg-[#992333]"
            />
          </div>
        </div>
      </section>
    </ContentContainer>
  );
};
