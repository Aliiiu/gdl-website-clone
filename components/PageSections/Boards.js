import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import boardOfDirector, { boardDetails } from "../../constant/boardsOfDirector";
import { useRouter } from "next/router";
import { managementDetails } from "../../constant/management";
import AppModal from "../Widgets/Modal/Modal";
import BodModal from "./ModalContent/BodModal";

const Boards = ({ data }) => {
  const {
    query: { params = [] },
    push,
  } = useRouter();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();

  // useEffect(() => {
  //   // console.log(params[1]);
  //   if (!"undefined".includes(params)) {
  //     // console.log(params);
  //     setContent(managementDetails[params[1]]);
  //     setOpen(true);
  //   } else {
  //     setOpen(false);
  //   }
  // }, [params]);
  const handleRedirection = item => {
    setContent(item);
    setOpen(true);
  };
  return (
    <div>
      <h2 className="title mb-4 text-center">Board Of Directors</h2>
      <p className="text-center">Meet the people behind the wheel</p>
      <div className="grid mt-[100px] sm:grid-cols-2 lg:grid-cols-3 gap-y-[100px]">
        {data.map(item => (
          <div key={item.id} className="">
            <div className="relative rounded-[50%] overflow-hidden mx-auto w-[160px] h-[160px]">
              <Image
                unoptimized
                src={item.image_url}
                alt=""
                layout="fill"
                objectFit="cover"
                objectPosition={"top"}
              />
            </div>
            <h5
              onClick={() =>
                handleRedirection({
                  header: item.director_name,
                  content: item.profile,
                })
              }
              className="text-[#9A2333] font-medium mt-3 cursor-pointer text-center"
            >
              {item.director_name}
            </h5>
          </div>
        ))}
      </div>
      <AppModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        content={<BodModal content={content} />}
      />
    </div>
  );
};

export default Boards;
