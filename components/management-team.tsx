"use client";

import type { Staff } from "@/app/about/types";
import Image from "next/image";
import React, { useState } from "react";
import { ModalTrigger } from "./global/modal-trigger";
import ProfileDetailsModal from "@/app/about/_components/profile-details-modal";

const ManagementTeam = ({
  data,
  notClickable,
}: {
  data: Staff[];
  notClickable?: boolean;
}) => {
  return (
    <div>
      <h2 className="title mb-4 text-center">Management Team</h2>
      <p className="text-center">Meet the people behind the wheel</p>
      <div className="grid mt-[50px] xl:mt-[100px] sm:grid-cols-2 md:grid-cols-3 gap-y-[100px]">
        {data.map(item => (
          <div key={item.id} className="flex flex-col items-center">
            {item.image_url ? (
              <div className="relative rounded-lg overflow-hidden mx-auto w-[191px] h-[256px]">
                <Image
                  unoptimized
                  src={item.image_url}
                  alt="management-staff-profile"
                  fill
                  sizes="191px"
                />
              </div>
            ) : (
              <div className="bg-[#484848] w-[191px] h-[256px] mx-auto rounded-lg flex justify-center items-center">
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
                    {item.staff_name}
                  </button>
                }
              >
                <ProfileDetailsModal
                  staffName={item.staff_name ?? ""}
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

export default ManagementTeam;
