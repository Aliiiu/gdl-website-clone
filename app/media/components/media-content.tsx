import Image from "next/image";
import { IoPlayCircleOutline } from "react-icons/io5";

const MediaContent = () => (
	<section className="-mt-16 container px-4 xl:px-28 mx-auto grid lg:grid-cols-3 gap-6">
		<div className="mb-[1rem] rounded-[0.5rem] bg-opacity-100 bg-[rgba(255,255,255,var(--tw-bg-opacity))] p-[0.5rem] shadow">
			<div className=" overflow-hidden w-auto">
				<div className="relative max-w-[360px] h-[220px] mx-auto w-full rounded-[0.5rem] bg-opacity-100 bg-[rgba(248,248,248,var(--tw-bg-opacity))] shadow">
					<Image
						src="https://res.cloudinary.com/gdlapp/image/upload/v1632128592/image/media.PNG.png"
						alt="media thumbnail"
						fill
						sizes="360px"
					/>
					<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-[rgba(31,26,23,var(--tw-bg-opacity))] bg-opacity-[0.2]">
						<div className="flex cursor-pointer items-center justify-center md:text-[3.75rem] leading-[1] text-opacity-100 text-[rgba(255,255,255,var(--tw-text-opacity))]">
							<IoPlayCircleOutline />
						</div>
					</div>
				</div>
			</div>
			<div className="relative p-[0.75rem]">
				<h2 className="overflow-hidden whitespace-nowrap text-ellipsis text-[1.125rem] leading-[1.75rem] font-[600] capitalize">
					gdl christmas vox pop
				</h2>
				<p className="flex items-center justify-start text-[0.875rem] leading-[1.25rem] text-[rgba(31,26,23,var(--tw-text-opacity))] text-opacity-80">
					We went to the streets of Lagos and asked some great people about
					Christmas, what it means to them and how the year 2020 played out in
					their opinion. Their responses ranged from gratitude to hilarious.
				</p>
			</div>
		</div>
	</section>
);

export default MediaContent;
