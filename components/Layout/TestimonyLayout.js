import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import Carousel, { consts } from "react-elastic-carousel";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MainImage } from "./layout.style";

const CarouselContent = ({ image_url, name, porfolio, testimonial }) => (
  <div
    key={name}
    className="relative mx-auto max-w-2xl flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start px-5 md:px-0"
  >
    <div className="mb-8 relative">
      <div className="top-0 right-0 w-24 h-24 md:w-32 md:h-32 border-[8px] rounded-[9999px] border-opacity-[0.2] md:border-opacity-20 absolute border-[rgba(255,115,137,var(--tw-border-opacity))]" />
      <div className="bottom-0 left-0 md:-ml-3 -mb-2 w-28 h-28 md:w-44 md:h-44 border-[8px] rounded-[9999px] border-opacity-[0.2] md:border-opacity-20 absolute border-[rgba(255,115,137,var(--tw-border-opacity))]" />
      <MainImage
        style={{
          backgroundImage: `url(${image_url})`,
          height: "15rem",
          width: "15rem",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50%",
        }}
        className="border-[12px] relative rounded-[9999px] border-opacity-100 border-[rgba(255,214,220,var(--tw-border-opacity))] bg-opacity-100 bg-[rgba(255,255,255,var(--tw-bg-opacity))]"
      />
      <div />
    </div>
    <div className="ml-0 md:ml-16">
      <div className="text-center md:text-left">
        <div className="mb-8">
          <h2 className="text-2xl font-medium">
            <span>{name}</span>
          </h2>
          <h5 className="text-opacity-[0.8] text-[rgba(31,26,23,var(--tw-text-opacity))] text-lg">
            {porfolio}
          </h5>
        </div>
        <p className="text-xl font-bold mt-6 mb-16">{testimonial}</p>
      </div>
    </div>
  </div>
);

const TestimonyLayout = ({ testimonial }) => {
  const carouselArrow = ({ type, onClick }) => {
    const pointer =
      type === consts.PREV ? (
        <IoChevronBackOutline />
      ) : (
        <IoChevronForwardOutline />
      );
    return (
      <button
        type="button"
        className="relative flex justify-center items-center bg-opacity-[1] bg-[rgba(255,214,220,var(--tw-bg-opacity))] w-11 h-10 rounded-full cursor-pointer hover:shadow-md my-auto transition ease-in-out duration-500"
        onClick={onClick}
      >
        {pointer}
      </button>
    );
  };

  const renderPagination = ({ pages, activePage, onClick }) => {
    return (
      <div className="px-4 lg:px-6 mx-auto max-w-[1200px] relative z-20">
        <div className="mt-6 flex justify-center items-center">
          {pages.map(page => {
            const isActivePage = activePage === page;
            return (
              // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
              <div
                key={page}
                onClick={() => onClick(page)}
                className={`w-6 h-1 bg-[rgba(162,166,168,var(--tw-bg-opacity))] mr-2 transition-all duration-300 ${
                  isActivePage ? "bg-opacity-100" : "bg-opacity-30"
                } cursor-pointer`}
              />
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/testimonials"
            className="font-medium text-opacity-100 flex items-center text-[rgba(153,35,51,var(--tw-text-opacity))]"
          >
            More Testimonials
            <AiOutlineArrowRight className="ml-1" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section id="testimonial">
      <div className="pt-40 md:pt-52 pb-40 md:pb-10 bg-opacity-[1] bg-[rgba(255,236,239,var(--tw-bg-opacity))]">
        <section className="flex flex-col justify-center items-center px-[1.5rem] mx-auto max-w-[1200px]">
          <h3 className="uppercase font-medium text-opacity-[1] text-[rgba(153,35,51,var(--tw-text-opacity))] text-lg">
            Why GDL?
          </h3>
          <div className="text-3xl md:text-5xl font-bold h-24 flex justify-center items-center text-center">
            <div className="">Grow Wealth Easily</div>
          </div>
        </section>
      </div>
      <section className="relative py-16 md:py-40 bg-opacity-[1] min-h-[700px] md:min-h-[500px] bg-[rgba(255,236,239,var(--tw-bg-opacity))]">
        <div className="absolute z-10 md:z-0 md:mx-auto max-w-[1200px] left-0 right-0 top-0 bottom-0 flex justify-between items-center mx-4 -mt-32 md:mt-0">
          <Carousel
            renderArrow={carouselArrow}
            renderPagination={renderPagination}
          >
            {testimonial.map(content => {
              return <CarouselContent key={content.name} {...content} />;
            })}
          </Carousel>
        </div>
      </section>
    </section>
  );
};

export default TestimonyLayout;
