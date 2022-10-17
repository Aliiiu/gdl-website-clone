import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AppButton } from "../Widgets/Button/Button";
import { SectionWrapper } from "./Products";

const JoinTheClub = () => {
  return (
    <SectionWrapper className="flex ">
      <div className="flex-1">
        <Image src={"/svgs/profile.svg"} alt="" width={190} height={144} />
        <h2 className="text-4xl my-2 font-semibold leading-none">
          Ready to Get Started?
        </h2>
        <p className="hint mb-8 text-primary max-w-[450px] text-opacity-80">
          Begin your journey to financial freedom. Make your money work for you.
          Let&apos;s go!
        </p>
        <AppButton
          name="Create an Account"
          href={"/"}
          className="bg-[#9A2333] text-white px-4 py-3"
          icon={<AiOutlineArrowRight className="font-thin text-sm" />}
        />
        <h5 className="mt-6 text-base">Already Have an Account? Login</h5>
      </div>
      <div className="flex-1">
        <Image
          src={"/svgs/notifications.svg"}
          alt=""
          width={190}
          height={144}
        />
        <h2 className="text-4xl my-2 font-semibold leading-none capitalize">
          Join the club
        </h2>
        <p className="hint mb-6 text-primary max-w-[450px] text-opacity-80">
          Subscribe to our Newsletter and be the first to receive updates on our
          new investment opportunities and promotions.
        </p>
        <form>
          <div className="border-b border-[#9A2333]">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border-0 outline-none py-3 w-full"
            />
            <div className="text-red-500 text-sm"></div>
          </div>
          <div className="border-b border-[#9A2333]">
            <input
              type="text"
              placeholder="Your Email Address"
              className="bg-transparent py-3 outline-none w-full"
            />
            <div className="text-red-500 text-sm"></div>
          </div>
          <div className="border-b border-[#9A2333] outline-none">
            <input
              type="text"
              placeholder="Your Phone (Optional)"
              className="bg-transparent py-3 outline-none w-full"
            />
            <div className="text-red-500 text-sm"></div>
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default JoinTheClub;
