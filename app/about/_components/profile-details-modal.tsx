import React from "react";
import parse from "html-react-parser";
const ProfileDetailsModal = ({
  staffName,
  profile,
}: {
  staffName: string;
  profile: string;
}) => {
  return (
    <div className=" bg-white">
      <h2 className="text-center font-semibold mb-3 text-2xl">{staffName}</h2>
      <div className="text-left w-full">{parse(profile)}</div>
    </div>
  );
};

export default ProfileDetailsModal;
