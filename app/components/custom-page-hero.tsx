import { IoChatboxEllipsesOutline } from "react-icons/io5";
import BackImg from "@/assets/Images/blogBackground.jpeg";
import type { ReactNode } from "react";

interface CustomHeaderProps {
	bg?: string;
	hasBackImg?: boolean;
	imgUrl?: {
		src: string;
	};
	floatLeft?: boolean;
	content?: ReactNode;
	noIcon?: boolean;
	icon?: ReactNode;
	name?: string;
	sub?: string;
}
const CustomHeader = ({
	bg = "rgba(162,166,168,0.1)",
	hasBackImg = false,
	imgUrl,
	floatLeft = false,
	content,
	noIcon = false,
	icon,
	name = "Testimonials",
	sub = "Our Customers can speak for us",
}: CustomHeaderProps) => {
	const backgroundStyle = hasBackImg
		? {
				backgroundImage: `url(${imgUrl?.src || BackImg.src})`,
				height: "100%",
				width: "100%",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}
		: {};

	const containerClassName = hasBackImg
		? "w-full flex flex-col items-center justify-center text-center min-h-[420px] bg-opacity-95 bg-[rgb(255_236_239)]"
		: `container px-4 xl:px-28 ${floatLeft ? "w-full" : ""}`;
	return (
		<header
			className={`flex bg-opacity-10 justify-center items-center min-h-[360px] md:min-h-[420px] -mt-14 ${bg}`}
			style={{ ...backgroundStyle, backgroundColor: bg }}
		>
			<div className={containerClassName}>
				<div className="flex flex-col items-center">
					{content || (
						<>
							{!noIcon && (
								<div className="text-7xl text-opacity-[1] text-[rgb(162_166_168)]">
									{icon || <IoChatboxEllipsesOutline />}
								</div>
							)}
							<h1
								className={`section-header ${
									noIcon && "mb-[0.75rem] leading-[1.1]"
								}`}
							>
								{name}
							</h1>
							<p
								className={
									"section-hint text-[rgba(31,26,23,var(--tw-text-opacity))] text-opacity-[0.9]"
								}
							>
								{sub}
							</p>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default CustomHeader;
