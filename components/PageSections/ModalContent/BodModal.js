import React from "react";
import parse from "html-react-parser";

const BodModal = ({ content }) => {
  // console.log(content);
  return (
    <div className="rounded-lg p-8 max-w-[70vw] min-h-[280px] bg-white">
      <h2 className="text-center font-semibold mb-3 text-2xl">
        {content?.header}
      </h2>
      <div className="text-left">{parse(content?.content)}</div>
    </div>
  );
};

export default BodModal;
