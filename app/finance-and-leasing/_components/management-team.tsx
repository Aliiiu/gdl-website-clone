import ManagementTeam from "@/components/management-team";
import React from "react";

const ManagementTeamSection = () => {
  return (
    <section
      id="management-team"
      className="container lg:px-6 md:w-5/6 lg:w-4/6 mx-auto pt-16 md:pt-24 xl:pt-36 w-full"
    >
      <ManagementTeam data={management} notClickable={true} />
    </section>
  );
};

export default ManagementTeamSection;

const management = [
  {
    id: 2,
    image_url: "/Images/Ofonama-Joshua.jpeg",
    staff_name: "Ofonama Joshua – Managing Director",
  },
  {
    id: 4,
    image_url: "/Images/Oluyemi-Adekoya.jpeg",
    staff_name: "Oluyemi Adekoya - Director",
  },
  {
    id: 3,
    image_url: "/Images/Sola.webp",
    staff_initials: "OS",
    staff_name: "Olusola Sanni- Head of Credit",
  },
  {
    id: 5,
    image_url: "/Images/Stephen-new.webp",
    staff_initials: "SF",
    staff_name: "Stephen Fidelis – CFO",
  },
];
