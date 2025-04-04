import React from "react";
import { IoBulbOutline } from "react-icons/io5";
import { getMissionVisionData } from "../actions";

const MissionVision = async () => {
	const { vision, mission } = await getMissionVisionData();

	return (
		<section className="overflow-hidden py-16 md:py-24 xl:py-36">
			<div className="flex -z-10 justify-center w-full">
				<div className="-z-10 flex justify-center items-center lg:mt-1">
					<div className="flex items-center justify-center rounded-[9999px] dark:border-gray-800 border-[#FFF1F4] w-[520px] h-[520px] border-[32px]">
						<div className="flex items-center justify-center rounded-[9999px] dark:border-gray-900 border-[#FFF5F7] border-[32px] w-[464px] h-[464px]" />
					</div>
				</div>
			</div>
			<div className="z-10 mt-[-510px] flex flex-col gap-7 items-center md:flex-row max-w-5xl md:px-16 md:py-16 justify-between mx-auto">
				<div className="flex-1 flex flex-col rounded-lg min-h-[23em] max-w-xs bg-[#9A2333]">
					<div className="flex-1 flex justify-center items-center">
						<IoBulbOutline fontSize={100} className=" text-orange-400" />
					</div>
					<div className="text-white h-[45%] bg-primary/20 p-6">
						<h2 className="font-bold uppercase text-center text-lg mb-3">
							{vision.title}
						</h2>
						<p className="text-white text-center">
							{vision.description ||
								`A leading diversified financial institution creating wealth and
              transforming society`}
						</p>
					</div>
				</div>
				<div className="flex-1 flex flex-col rounded-lg min-h-[23em] max-w-xs bg-[#9A2333]">
					<div className="flex-1 flex justify-center items-center">
						<IoBulbOutline fontSize={100} className=" text-orange-400" />
					</div>
					<div className="text-white bg-primary/20 p-6">
						<h2 className="font-bold uppercase text-center text-lg mb-3">
							{mission.title}
						</h2>
						<p className="text-white text-center">{mission.description}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MissionVision;
