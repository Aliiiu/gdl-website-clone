"use client";

import type { Staff } from "@/app/about/types";
import Image from "next/image";
import { useState } from "react";
import { ModalTrigger } from "./global/modal-trigger";
import ProfileDetailsModal from "@/app/about/_components/profile-details-modal";

const BoardTeam = ({
  data,
  notClickable,
}: {
  data: Staff[];
  notClickable?: boolean;
}) => {
  return (
    <div>
      <h2 className="title mb-4 text-center">Board Of Directors</h2>
      <p className="text-center">Meet the people behind the wheel</p>
      <div className="grid mt-[50px] xl:mt-[100px] sm:grid-cols-2 lg:grid-cols-3 gap-y-[100px]">
        {data.map(item => (
          <div key={item.id} className="flex flex-col items-center">
            {item.image_url ? (
              <div className="relative rounded-[50%] overflow-hidden mx-auto w-[160px] h-[160px]">
                <Image
                  unoptimized
                  src={item.image_url}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="160px"
                />
              </div>
            ) : (
              <div className="bg-[#484848] w-[160px] h-[160px] mx-auto rounded-full flex justify-center items-center">
                <h2 className="text-white font-bold text-4xl">
                  {item.staff_initials}
                </h2>
              </div>
            )}
            {notClickable ? (
              <button
                type="button"
                className={
                  "text-[#9A2333] font-medium mt-3 mx-auto max-w-[300px] text-center"
                }
              >
                {item.staff_name}
              </button>
            ) : (
              <ModalTrigger
                className=" w-full max-w-[70vw] min-h-[280px]"
                trigger={
                  <button
                    type="button"
                    className={
                      "text-[#9A2333] font-medium mt-3 mx-auto max-w-[300px] text-center cursor-pointer hover:underline"
                    }
                  >
                    {item?.director_name}
                  </button>
                }
              >
                <ProfileDetailsModal
                  staffName={item.director_name ?? ""}
                  profile={item.profile ?? ""}
                />
              </ModalTrigger>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardTeam;
