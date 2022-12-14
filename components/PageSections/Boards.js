import Image from "next/image";
import Link from "next/link";
import React from "react";
import boardOfDirector from "../../constant/boardsOfDirector";

const Boards = () => {
  return (
    <div>
      <h2 className="title mb-4 text-center">Board Of Directors</h2>
      <p className="text-center">Meet the people behind the wheel</p>
      <div className="grid mt-[100px] sm:grid-cols-2 lg:grid-cols-3 gap-y-[100px]">
        {boardOfDirector.map(item => (
          <div key={item.id} className="">
            <div className="relative rounded-[50%] overflow-hidden mx-auto w-[160px] h-[160px]">
              <Image
                src={item.image}
                alt=""
                layout="fill"
                objectFit="cover"
                objectPosition={"top"}
              />
            </div>
            <Link href={item.href}>
              <h5 className="text-[#9A2333] font-medium mt-3 cursor-pointer text-center">
                {item.name}
              </h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boards;
