import React from "react";
import {
  IoBulb,
  IoFlame,
  IoHeart,
  IoMegaphone,
  IoShieldCheckmark,
  IoThumbsUp,
} from "react-icons/io5";

const CoreValues = () => {
  return (
    <section
      id="core-values"
      className="container lg:px-6 md:w-5/6 lg:w-4/6 mx-auto pt-16 md:pt-24 xl:pt-36 w-full"
    >
      <div>
        <h2 className="title mb-4 text-center">Our Core Values</h2>
        <p className="text-center mx-auto max-w-lg">
          Amongst other things we stand for, these are values we find at the
          core of our being.
        </p>
        <div className="grid mt-[100px] grid-cols-2 md:grid-cols-3 gap-y-[100px]">
          {coreValues.map(item => (
            <div key={item.id} className="">
              {item.icon}
              <h5 className="text-[#9A2333] font-medium mt-3 cursor-pointer text-center">
                {item.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

const coreValues = [
  {
    id: 1,
    icon: (
      <div className="w-20 mx-auto flex justify-center items-center h-20 bg-[#f8c300] bg-opacity-10 rounded-full">
        <IoShieldCheckmark fontSize={40} color="#f8c300" />
      </div>
    ),
    name: "Integrity",
  },
  {
    id: 2,
    icon: (
      <div className="w-20 mx-auto flex justify-center items-center h-20 bg-[#da251d] bg-opacity-10 rounded-full">
        <IoMegaphone fontSize={40} color="#da251d" />
      </div>
    ),
    name: "Audacity",
  },
  {
    id: 3,
    icon: (
      <div className="w-20 mx-auto flex justify-center items-center h-20 bg-[#3bb3c2] bg-opacity-10 rounded-full">
        <IoThumbsUp fontSize={40} color="#3bb3c2" />
      </div>
    ),
    name: "Result Orientation",
  },
  {
    id: 4,
    icon: (
      <div className="w-20 mx-auto flex justify-center items-center h-20 bg-[#ef9ba0] bg-opacity-10 rounded-full">
        <IoBulb fontSize={40} color="#ef9ba0" />
      </div>
    ),
    name: "Innovation",
  },
  {
    id: 5,
    icon: (
      <div className="w-20 mx-auto flex justify-center items-center h-20 bg-[#84c225] bg-opacity-10 rounded-full">
        <IoHeart fontSize={40} color="#84c225" />
      </div>
    ),
    name: "Strong Social Conscience",
  },
  {
    id: 6,
    icon: (
      <div className="w-20 mx-auto flex justify-center items-center h-20 bg-[#1f1a17] bg-opacity-10 rounded-full">
        <IoFlame fontSize={40} color="#1f1a17" />
      </div>
    ),
    name: "Entrepreneurial Spirit",
  },
];
