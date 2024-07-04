import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import AppModal from "../Widgets/Modal/Modal";
import BodModal from "./ModalContent/BodModal";

const Boards = ({ data, notClickable }) => {
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
      <div className="grid mt-[50px] xl:mt-[100px] sm:grid-cols-2 lg:grid-cols-3 gap-y-[100px]">
        {data.map(item => (
          <div key={item.id} className="">
            {item.image_url ? (
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
            ) : (
              <div className="bg-[#484848] w-[160px] h-[160px] mx-auto rounded-full flex justify-center items-center">
                <h2 className="text-white font-bold text-4xl">
                  {item.staff_initials}
                </h2>
              </div>
            )}
            <h5
              onClick={() =>
                !notClickable &&
                handleRedirection({
                  header: item.director_name,
                  content: item.profile,
                })
              }
              className={`text-[#9A2333] font-medium mt-3 text-center ${
                !notClickable && "cursor-pointer hover:underline"
              }`}
            >
              {item?.director_name || item?.staff_name}
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
