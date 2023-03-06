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

const Management = () => {
  const {
    query: { params = [] },
    push,
  } = useRouter();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const mangRef = useRef(null);

  useEffect(() => {
    // console.log(params[1]);
    if (!"undefined".includes(params)) {
      // console.log(params);
      setContent(managementDetails[params[1]]);
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [params]);
  const handleRedirection = url => () => {
    push({ pathname: `${url}` });
    // mangRef.current.scrollIntoView();
  };
  return (
    <div ref={mangRef}>
      <h2 className="title mb-4 text-center">Management Team</h2>
      <p className="text-center">Meet the people behind the wheel</p>
      <div className="grid mt-[100px] sm:grid-cols-2 md:grid-cols-3 gap-y-[100px]">
        {management.map(item => (
          <div key={item.id} className="">
            <div className="relative rounded-lg overflow-hidden mx-auto w-[191px] h-[256px]">
              <Image src={item.image} alt="" layout="fill" />
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
      <AppModal
        open={open}
        onClose={() => {
          // mangRef.current.scrollIntoView();
          // let elem = document.getElementById("management");
          // elem.scrollIntoView({ behavior: "smooth" });
          setOpen(false);
          push("/about#management-team");
        }}
        content={<ManagementModal content={content} />}
      />
    </div>
  );
};

export default Management;
