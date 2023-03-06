import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import boardOfDirector, { boardDetails } from "../../constant/boardsOfDirector";
import AppModal from "../Widgets/Modal/Modal";
import BodModal from "./ModalContent/BodModal";
import { useRouter } from "next/router";
import { managementDetails } from "../../constant/management";

const Boards = () => {
  const {
    query: { params = [] },
    push,
  } = useRouter();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const bodRef = useRef(null);

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
  const handleRedirection = url => () => {
    push({ pathname: `${url}` });
    // bodRef.current.scrollIntoView();
  };
  return (
    <div ref={bodRef}>
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
            <h5
              onClick={handleRedirection(item.href)}
              className="text-[#9A2333] font-medium mt-3 cursor-pointer text-center"
            >
              {item.name}
            </h5>
          </div>
        ))}
      </div>
      {/* <AppModal
        open={open}
        onClose={() => {
          // mangRef.current.scrollIntoView();
          // let elem = document.getElementById("management");
          // elem.scrollIntoView({ behavior: "smooth" });
          setOpen(false);
          push("/about");
        }}
        content={<BodModal content={content} />}
      /> */}
    </div>
  );
};

export default Boards;
