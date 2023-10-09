import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import management, { managementDetails } from "../../constant/management";
import AppModal from "../Widgets/Modal/Modal";
import ManagementModal from "./ModalContent/ManagementModal";

const data = {
  "gdl-canary-fund": "GDL Canary Fund",
  "oyekemi-ayeye": "High Yield Note",
};

const Management = ({ data }) => {
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
      <div className="grid mt-[100px] sm:grid-cols-2 md:grid-cols-3 gap-y-[100px]">
        {data.map(item => (
          <div key={item.id} className="">
            <div className="relative rounded-lg overflow-hidden mx-auto w-[191px] h-[256px]">
              <Image unoptimized src={item.image_url} alt="" layout="fill" />
            </div>
            <h5
              onClick={() =>
                handleRedirection({
                  header: item.staff_name,
                  content: item.profile,
                })
              }
              className="text-[#9A2333] font-medium mt-3 cursor-pointer text-center"
            >
              {item.staff_name}
            </h5>
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
