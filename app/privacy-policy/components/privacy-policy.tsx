import React from "react";
import { IoLockClosed } from "react-icons/io5";
import parse from "html-react-parser";
import { getPrivacyContent } from "../actions";

const PrivacyPolicy = async () => {
  const data = await getPrivacyContent();
  return (
    <section className="xl:max-w-[1000px] px-4 md:px-10 xl:px-20 mx-auto">
      <div className="mt-10 md:mt-20 xl:mt-32">
        <div className="flex">
          <IoLockClosed className="text-5xl md:text-6xl xl:text-7xl" />
          <div className="ml-4">
            <h1 className="text-2xl md:text-4xl xl:text-6xl">Privacy Policy</h1>
            <p className="text-dark text-opacity-80">
              Last Updated: Jul 9, 2021
            </p>
          </div>
        </div>
        <hr className="border-gdlGrey border-opacity-30 w-full mt-5" />
      </div>
      {parse(data?.privacy_policy || "")}
    </section>
  );
};

export default PrivacyPolicy;
