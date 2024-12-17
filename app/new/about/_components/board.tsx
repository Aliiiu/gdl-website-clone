import BoardTeam from "@/app/components/board-team";
import { getBoardDetails } from "../actions";

const Board = async () => {
	const boardDetail = await getBoardDetails();
	return (
		<section
			id="board-of-directors"
			className="container lg:px-6 md:w-5/6 lg:w-4/6 mx-auto pt-16 md:pt-24 xl:pt-36 w-full"
		>
			<BoardTeam data={boardDetail} />
		</section>
	);
};

export default Board;
