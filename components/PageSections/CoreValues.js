import React from "react";
import { IoBulbOutline } from "react-icons/io5";

const CoreValues = () => {
  return (
    <>
      <div className="absolute top-0 left-0 lg:left-[39%] -z-10 bottom-0 flex justify-center items-center lg:mt-1">
        <div className="flex items-center justify-center rounded-[9999px] dark:border-gray-800 border-[#FFF1F4] w-[520px] h-[520px] border-[32px]">
          <div className="flex items-center justify-center rounded-[9999px] dark:border-gray-900 border-[#FFF5F7] border-[32px] w-[464px] h-[464px]" />
        </div>
      </div>
      <div className="flex flex-col gap-7 items-center md:flex-row max-w-5xl md:px-16 md:py-16 justify-between mx-auto">
        <div className="flex-1 flex flex-col rounded-lg min-h-[23em] max-w-xs bg-[#9A2333]">
          <div className="flex-1 flex justify-center items-center">
            <IoBulbOutline fontSize={100} className=" text-orange-400" />
          </div>
          <div className="text-white h-[45%] card-content p-6">
            <h2 className="font-bold uppercase text-center text-lg mb-3">
              Our Vision
            </h2>
            <p className="text-white text-center">
              A leading diversified financial institution creating wealth and
              transforming society
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col rounded-lg min-h-[23em] max-w-xs bg-[#9A2333]">
          <div className="flex-1 flex justify-center items-center">
            <IoBulbOutline fontSize={100} className=" text-orange-400" />
          </div>
          <div className="text-white card-content p-6">
            <h2 className="font-bold uppercase text-center text-lg mb-3">
              Our mission
            </h2>
            <p className="text-white text-center">
              Providing unique financial solutions to strengthen and expand the
              middle class
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoreValues;
