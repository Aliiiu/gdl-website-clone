import ManagementTeam from "@/components/management-team";

const ManagementTeamSection = () => {
  return (
    <section
      id="management-team"
      className="container lg:px-6 md:w-5/6 lg:w-4/6 mx-auto pt-16 md:pt-24 xl:pt-36 w-full"
    >
      <ManagementTeam data={assetManagement} notClickable={true} />
    </section>
  );
};

export default ManagementTeamSection;

const assetManagement = [
  {
    id: 1,
    image_url: "/Images/Josephine-Ernest-Ikechukwu.jpeg",
    staff_name: "Josephine Ernest Ikechukwu - Managing Director",
  },
  {
    id: 2,
    image_url: "/Images/Stephen-new.webp",
    staff_initials: "SF",
    staff_name: "Stephen Fidelis – Chief Financial Officer",
  },
  {
    id: 3,
    image_url: "",
    staff_initials: "OA",
    staff_name: "Olufunmilola Adebowale – Head of Research",
  },
];
