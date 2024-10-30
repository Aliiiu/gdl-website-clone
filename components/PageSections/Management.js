import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import AppModal from "../Widgets/Modal/Modal";
import ManagementModal from "./ModalContent/ManagementModal";

const Management = ({ data, notClickable }) => {
  const {
    query: { params = [] },
    push,
  } = useRouter();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();

  const handleRedirection = item => {
    setContent(item);
    setOpen(true);
  };

  return (
    <div>
      <h2 className="title mb-4 text-center">Management Team</h2>
      <p className="text-center">Meet the people behind the wheel</p>
      <div className="grid mt-[50px] xl:mt-[100px] sm:grid-cols-2 md:grid-cols-3 gap-y-[100px]">
        {data.map(item => (
          <div key={item.id} className="">
            {item.image_url ? (
              <div className="relative rounded-lg overflow-hidden mx-auto w-[191px] h-[256px]">
                <Image
                  unoptimized
                  src={item.image_url}
                  alt=""
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
            <button
              type="button"
              onClick={() =>
                !notClickable &&
                handleRedirection({
                  header: item.staff_name,
                  content: item.profile,
                })
              }
              className={`text-[#9A2333] font-medium mt-3 mx-auto max-w-[300px] text-center ${
                !notClickable && "cursor-pointer hover:underline"
              }`}
            >
              {item.staff_name}
            </button>
          </div>
        ))}
      </div>
      <AppModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        content={<ManagementModal content={content} />}
      />
    </div>
  );
};

export default Management;
