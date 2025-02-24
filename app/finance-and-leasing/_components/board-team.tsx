import BoardTeam from "@/components/board-team";
import React from "react";

const BoardTeamSection = () => {
  return (
    <section
      id="board-of-directors"
      className="container lg:px-6 md:w-5/6 lg:w-4/6 mx-auto pt-16 md:pt-24 xl:pt-36 w-full"
    >
      <BoardTeam data={financeBOD} notClickable={true} />
    </section>
  );
};

export default BoardTeamSection;

const financeBOD = [
  {
    id: 1,
    image_url: "/Images/Lanre-Olaoluwa.jpeg",
    staff_name: "Olanrewaju Olaoluwa - Chairman",
  },
  {
    id: 2,
    image_url: "/Images/Ofonama-Joshua.jpeg",
    staff_name: "Ofonama Joshua – Managing Director",
  },
  {
    id: 3,
    image_url: "/Images/Oyekemi-Ayeye.jpeg",
    staff_name: "Oyekemi Ayeye - Non-Executive Director",
  },
  {
    id: 4,
    image_url: "/Images/Oluyemi-Adekoya.jpeg",
    staff_name: "Oluyemi Adekoya - Non-Executive Director",
  },
  {
    id: 5,
    image_url: "/Images/victoria.jpg",
    staff_initials: "VA",
    staff_name: "Victoria Abiola Ajayi - Non-Executive (Independent Director)",
  },
];
