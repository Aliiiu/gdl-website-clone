import Image from "next/image";
import React from "react";
import styled from "styled-components";
import product from "../../constant/product";
import Link from "next/link";
import { AppButton } from "../Widgets/Button/Button";

export const SectionWrapper = styled.div`
  .title {
    font-size: 48px;
    font-weight: 700;
  }
  .hint {
    font-size: 18px;
    font-weight: normal;
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
    padding: 1em 1.5em;
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
    <SectionWrapper className="flex flex-col gap-10">
      <div className="text-center">
        <h2 className="title text-primary">Our Products</h2>
        <p className="hint text-primary mt-5 text-opacity-90 lg:max-w-[470px] mx-auto">
          We have various products which have been specifically designed for
          you. There is something for everyone at GDL.
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
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
                className="mt-4 text-primary uppercase card-btn bg-white"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-10 justify-center">
        <AppButton
          name="Explore More"
          href={"/"}
          className="bg-[#9A2333] card-btn text-white"
        />
      </div>
    </SectionWrapper>
  );
};

export default Products;
