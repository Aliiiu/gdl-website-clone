import Image from "next/image";
import { getTestimonialData } from "../actions";

export default async function TestimonialList() {
	const testimonials = await getTestimonialData();
	return (
		<section className="-mt-10 grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 container px-4 xl:px-28 mx-auto">
			{testimonials.map((item) => {
				return <TestimonialCard key={item.id} {...item} />;
			})}
		</section>
	);
}

const TestimonialCard = ({
	image_url,
	name,
	porfolio,
	testimonial,
}: {
	image_url: string;
	name: string;
	porfolio: string;
	testimonial: string;
}) => {
	return (
		<div>
			<div className="mb-[1.5rem]">
				<div className="rounded-[0.5rem] bg-[rgba(255,255,255,var(--tw-bg-opacity))] bg-opacity-[0.4] shadow-lg">
					<div className="relative h-[5rem] rounded-tl-[0.5rem] rounded-tr-[0.5rem] border-b-0 border-[rgba(162,166,168,var(--tw-border-opacity))] border-opacity-[0.2] bg-opacity-[1] bg-[rgba(255,255,255,var(--tw-bg-opacity))] pt-[1.25rem]">
						<div className="relative z-10 w-24 h-24 mx-auto mb-[-1.25rem] rounded-[9999px]">
							<Image
								src={image_url}
								fill
								className="mx-auto rounded-full border-4 border-[#A2A6A8]/10 object-cover object-top shadow-none"
								alt="testimonial-image"
							/>
						</div>
					</div>
					<div className="mt-[0.75rem] rounded-br-[0.5rem] rounded-bl-[0.5rem] bg-[rgba(255,255,255,var(--tw-bg-opacity))] bg-opacity-[0.2] py-[4rem] px-[2rem] pb-[2rem] shadow-lg skew-y-3">
						<h1 className="text-center text-lg mb-8 font-bold -skew-y-3">
							{testimonial}
						</h1>
						<div className="text-right">
							<h2 className="font-medium -skew-y-3">{name}</h2>
							<h3 className="text-sm opacity-75 -skew-y-3">{porfolio}</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
