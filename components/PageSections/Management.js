import Image from "next/image";
import Link from "next/link";
import React from "react";
import management from "../../constant/management";

const Management = () => {
  return (
    <div>
      <h2 className="title mb-4 text-center">Management Team</h2>
      <p className="text-center">Meet the people behind the wheel</p>
      <div className="grid mt-[100px] sm:grid-cols-2 md:grid-cols-3 gap-y-[100px]">
        {management.map(item => (
          <div key={item.id} className="">
            <div className="relative rounded-lg overflow-hidden mx-auto w-[191px] h-[256px]">
              <Image src={item.image} alt="" layout="fill" />
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

export default Management;
