import Image from "next/image";
import React from "react";
import styled from "styled-components";
import product from "../../constant/product";
import img from "../../assets/Images/cardOneImg.png";
import Link from "next/link";
import { AppButton } from "../Widgets/Button/Button";

export const SectionWrapper = styled.div`
  .title {
    font-size: 3rem;
    line-height: 1.1 !important;
    font-weight: 700;
  }
  .hint {
    font-size: 1.125rem;
    /* font-weight: normal; */
  }
  .card {
    border-radius: 0.5em;
    overflow: hidden;
    width: 100%;
    height: 28em;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent),
      var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
  }
  .card-btn {
    border-radius: 0.5em;
    padding: 0.75rem 1.5em;
    font-size: 1rem;
  }
  .getstarted-card {
    background: url("/Images/get-started.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent),
      var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
  }
  .getstarted-bg {
    --tw-bg-opacity: 0.5;
    background-color: rgba(31, 26, 23, var(--tw-bg-opacity));
  }

  .faq-card {
    background: url("/Images/blog.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .form-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media screen(min-width: 500px) {
    .getstarted-card {
      background-position: left;
      background-size: cover;
    }
  }
`;

const Products = () => {
  return (
    <SectionWrapper className="px-[1.5rem] mx-auto max-w-[1200px]">
      <div className="text-center md:text-center">
        <h1 className="title mb-[.75rem]">Our Products</h1>
        <p className="hint w-full md:w-1/2 lg:w-2/5 leading-[1.75rem] text-opacity-[0.9] text-[rgba(31,26,23,var(--tw-text-opacity))] dark:text-white mx-auto">
          We have various products which have been specifically designed for
          you. There is something for everyone at GDL.
        </p>
      </div>
      <div className="mt-10 md:mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {product.map(item => (
          <div
            key={item.title}
            className="card flex flex-col relative justify-end"
          >
            <Image
              src={item.img}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              objectPosition={"center"}
            />
            <div
              style={{
                background:
                  "linear-gradient(180deg,transparent,rgba(153,35,51,.25),rgba(153,35,51,.85))",
              }}
              className="flex p-6 h-full justify-end z-10 text-white flex-col items-start"
            >
              <h2 className="text-xl font-bold lg:text-2xl">{item.title}</h2>
              <p className="text-lg text-white">{item.hint}</p>
              <AppButton
                name="Learn more"
                href={"/"}
                className="mt-4 uppercase card-btn bg-white text-black"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-10 md:mt-20 justify-center items-center">
        <AppButton
          name="Explore More"
          href={"/"}
          className="bg-[#9A2333] py-[1rem] rounded-[0.5rem] px-[1.5rem] text-[1.5rem] text-white"
        />
      </div>
    </SectionWrapper>
  );
};

export default Products;
