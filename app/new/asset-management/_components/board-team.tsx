import BoardTeam from "@/app/components/board-team";
import React from "react";

const BoardTeamSection = () => {
	return (
		<section
			id="board-of-directors"
			className="container lg:px-6 md:w-5/6 lg:w-4/6 mx-auto pt-16 md:pt-24 xl:pt-36 w-full"
		>
			<BoardTeam data={assetBOD} notClickable={true} />
		</section>
	);
};

export default BoardTeamSection;

const assetBOD = [
	{
		id: 1,
		image_url: "/Images/kolawole-Ayeye.jpeg",
		staff_name: "Kolawole Ayeye – Chairman",
	},
	{
		id: 2,
		image_url: "/Images/Josephine-Ernest-Ikechukwu.jpeg",
		staff_name: "Josephine Ernest Ikechukwu - Managing Director",
	},
	{
		id: 3,
		image_url: "/Images/Oyekemi-Ayeye.jpeg",
		staff_name: "Oyekemi Ayeye - Non-Executive Director",
	},
	{
		id: 4,
		image_url: "/Images/christiana-bamidele-george.jpeg",
		staff_name:
			"Christiana Bamidele George - Non-Executive (Independent Director)",
	},
	{
		id: 5,
		image_url: "/Images/Ofonama-Joshua.jpeg",
		staff_name: "Ofonama Joshua - Non-Executive Director",
	},
];
