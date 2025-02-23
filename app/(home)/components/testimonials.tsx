"use client";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Autoplay from "embla-carousel-autoplay";

const TestimonyLayout = ({
  testimonial,
}: {
  testimonial: Array<{
    name: string;
    image_url: string;
    porfolio: string;
    testimonial: string;
  }>;
}) => {
  const [api, setApi] = React.useState<CarouselApi>();

  const plugin = React.useMemo(
    () =>
      Autoplay({
        delay: 4000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    []
  );

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
      <section className="py-5 md:py-10 bg-opacity-[1] bg-[rgba(255,236,239,var(--tw-bg-opacity))]">
        <div className=" md:mx-auto max-w-[1200px] flex justify-between items-center mx-4 -mt-32 md:mt-0">
          <Carousel
            className="w-full"
            setApi={setApi}
            plugins={[plugin]}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonial.map(content => (
                <CarouselItem key={content.name}>
                  <CarouselSlide {...content} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[rgba(255,214,220,var(--tw-bg-opacity))]" />
            <CarouselNext className="bg-[rgba(255,214,220,var(--tw-bg-opacity))]" />
            <CarouselPagination api={api} />
          </Carousel>
        </div>
        <div className="text-center mt-12">
          <Link
            href="/testimonials"
            className="font-medium text-opacity-100 flex items-center justify-center text-[rgba(153,35,51,var(--tw-text-opacity))]"
          >
            More Testimonials
            <AiOutlineArrowRight className="ml-1" />
          </Link>
        </div>
      </section>
    </section>
  );
};

export default TestimonyLayout;

const CarouselSlide = ({
  image_url,
  name,
  porfolio,
  testimonial,
}: {
  image_url: string;
  name: string;
  porfolio: string;
  testimonial: string;
}) => (
  <div className="relative mx-auto max-w-2xl flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start px-5 md:px-0">
    <div className="mb-8 relative">
      <div className="top-0 right-0 w-24 h-24 md:w-32 md:h-32 border-[8px] rounded-[9999px] border-opacity-[0.2] md:border-opacity-20 absolute border-[rgba(255,115,137,var(--tw-border-opacity))]" />
      <div className="bottom-0 left-0 md:-ml-3 -mb-2 w-28 h-28 md:w-44 md:h-44 border-[8px] rounded-[9999px] border-opacity-[0.2] md:border-opacity-20 absolute border-[rgba(255,115,137,var(--tw-border-opacity))]" />
      <div
        style={{
          backgroundImage: `url(${image_url})`,
        }}
        className="bg-center bg-no-repeat bg-cover w-60 h-60 border-[12px] relative rounded-full border-opacity-100 border-[rgba(255,214,220,var(--tw-border-opacity))] bg-opacity-100 bg-[rgba(255,255,255,var(--tw-bg-opacity))]"
      />
    </div>
    <div className="ml-0 md:ml-16">
      <div className="text-center md:text-left">
        <div className="mb-8">
          <h2 className="text-2xl font-medium">{name}</h2>
          <h5 className="text-opacity-[0.8] text-[rgba(31,26,23,var(--tw-text-opacity))] text-lg">
            {porfolio}
          </h5>
        </div>
        <p className="text-xl font-bold mt-6 mb-16">{testimonial}</p>
      </div>
    </div>
  </div>
);

const CarouselPagination = ({ api }: { api: CarouselApi | undefined }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const slides = api?.scrollSnapList() || [];

  return (
    <div className=" flex justify-center items-center">
      {slides.map((_, index) => (
        <button
          key={crypto.randomUUID()}
          type="button"
          onClick={() => api?.scrollTo(index)}
          className={`w-6 h-1 bg-[rgba(162,166,168,var(--tw-bg-opacity))] mr-2 transition-all duration-300 ${
            selectedIndex === index ? "bg-opacity-100" : "bg-opacity-30"
          } cursor-pointer`}
        />
      ))}
    </div>
  );
};
