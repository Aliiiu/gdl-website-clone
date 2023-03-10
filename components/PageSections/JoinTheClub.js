import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AppButton } from "../Widgets/Button/Button";
import { SectionWrapper } from "./Products";
import Link from "next/link";

const JoinTheClub = () => {
  return (
    <div className="container px-4 xl:px-28 mx-auto flex flex-col justify-center items-center md:flex-row gap-6">
      <div className="py-12 md:py-24 flex-1">
        <div className=" mx-auto">
          <div className="">
            <div className="mb-3">
              <Image
                src={"/svgs/profile.svg"}
                alt=""
                width={190}
                height={144}
              />
            </div>
            <h2 className="text-4xl my-2 font-semibold leading-none">
              Ready to Get Started?
            </h2>
            <p className="hint mb-8 text-primary dark:text-white text-lg">
              Begin your journey to financial freedom. Make your money work for
              you. Let&apos;s go!
            </p>
            <div className="mt-10">
              <AppButton
                name="Create an Account"
                href={"/"}
                textSize={"text-[1rem]"}
                className="bg-[#9A2333] text-white px-[1.5rem] py-3"
                icon={<AiOutlineArrowRight className="font-thin text-sm" />}
              />
              <div className="mt-6">
                <Link href="">
                  <a className="text-black dark:text-white font-medium">
                    Already Have an Account? Login
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 md:py-24 w-full flex-1">
        <div className="mx-auto">
          <div className="">
            <div>
              <div className="mb-3">
                <Image
                  src={"/svgs/notifications.svg"}
                  alt=""
                  width={190}
                  height={144}
                />
              </div>
              <div className="">
                <h2 className="md:text-4xl text-3xl font-bold flex justify-start items-center mb-2">
                  Join the club
                </h2>
                <p className="text-lg">
                  Subscribe to our Newsletter and be the first to receive
                  updates on our new investment opportunities and promotions.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <span>
                <form>
                  <div className="border-b border-[#9A2333] border-opacity-50 mb-5">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="bg-transparent border-0 outline-none py-3 w-full"
                    />
                    <div className="text-red-500 text-sm"></div>
                  </div>
                  <div className="border-b border-[#9A2333] border-opacity-50 mb-5">
                    <input
                      type="text"
                      placeholder="Your Email Address"
                      className="bg-transparent py-3 outline-none w-full"
                    />
                    <div className="text-red-500 text-sm"></div>
                  </div>
                  <div className="border-b border-[#9A2333] border-opacity-50 mb-5 outline-none">
                    <input
                      type="text"
                      placeholder="Your Phone (Optional)"
                      className="bg-transparent py-3 outline-none w-full"
                    />
                    <div className="text-red-500 text-sm"></div>
                  </div>
                </form>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTheClub;
