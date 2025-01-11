import BoardTeam from "@/components/board-team";

const BoardTeamSection = () => {
  return (
    <section
      id="board-of-directors"
      className="container lg:px-6 md:w-5/6 lg:w-4/6 mx-auto pt-16 md:pt-24 xl:pt-36 w-full"
    >
      <BoardTeam data={stockbrokersBOD} notClickable={true} />
    </section>
  );
};

export default BoardTeamSection;

const stockbrokersBOD = [
  {
    id: 1,
    image_url: "/Images/kolawole-Ayeye.jpeg",
    staff_name: "Kolawole Ayeye - Chairman",
  },
  {
    id: 2,
    image_url: "/Images/Esther-new.webp",
    staff_initials: "TAS",
    staff_name: "Chinyere Esther Ndife – Managing Director",
  },
  {
    id: 3,
    image_url: "/Images/Oyekemi-Ayeye.jpeg",
    staff_name: "Oyekemi Ayeye - Non-Executive Director",
  },
  {
    id: 4,
    image_url: "/Images/Josephine-Ernest-Ikechukwu.jpeg",
    staff_name: "Josephine Ernest Ikechukwu - Non-Executive Director",
  },
  {
    id: 5,
    image_url: "/Images/Cyril.webp",
    staff_initials: "CBI",
    staff_name:
      "Cyril Baba-Oyathelemi Ikazoboh - Non-Executive (Independent Director)",
  },
];
