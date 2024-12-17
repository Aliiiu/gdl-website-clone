"use client";

import Image from "next/image";
import type { Staff } from "../new/about/types";
import { useState } from "react";

const BoardTeam = ({
	data,
	notClickable,
}: { data: Staff[]; notClickable?: boolean }) => {
	const [open, setOpen] = useState(false);
	const [content, setContent] = useState<{ header: string; content: string }>();

	const handleRedirection = (item: { header: string; content: string }) => {
		setContent(item);
		setOpen(true);
	};

	return (
		<div>
			<h2 className="title mb-4 text-center">Board Of Directors</h2>
			<p className="text-center">Meet the people behind the wheel</p>
			<div className="grid mt-[50px] xl:mt-[100px] sm:grid-cols-2 lg:grid-cols-3 gap-y-[100px]">
				{data.map((item) => (
					<div key={item.id} className="flex flex-col items-center">
						{item.image_url ? (
							<div className="relative rounded-[50%] overflow-hidden mx-auto w-[160px] h-[160px]">
								<Image
									unoptimized
									src={item.image_url}
									alt=""
									fill
									className="object-cover object-top"
									sizes="160px"
								/>
							</div>
						) : (
							<div className="bg-[#484848] w-[160px] h-[160px] mx-auto rounded-full flex justify-center items-center">
								<h2 className="text-white font-bold text-4xl">
									{item.staff_initials}
								</h2>
							</div>
						)}
						<button
							type="button"
							onClick={() =>
								!notClickable &&
								handleRedirection({
									header: item.director_name ?? "",
									content: item.profile,
								})
							}
							className={`text-[#9A2333] max-w-[300px] mx-auto font-medium mt-3 text-center ${
								!notClickable && "cursor-pointer hover:underline"
							}`}
						>
							{item?.director_name || item?.staff_name}
						</button>
					</div>
				))}
			</div>
			{/* <AppModal
					open={open}
					onClose={() => {
						setOpen(false);
					}}
					content={<BodModal content={content} />}
				/> */}
		</div>
	);
};

export default BoardTeam;
