import Image from "next/image";
import { IoPlayCircleOutline } from "react-icons/io5";
import { getCareerBannerContent } from "../actions";

export default async function CareerBanner() {
  const bannerContent = await getCareerBannerContent();
  return (
    <section className="-mt-12 container px-4 xl:px-28 mx-auto mb-16">
      <div className="max-w-5xl mx-auto rounded-lg bg-white shadow-xl p-3 md:p-10 lg:py-0 flex flex-wrap">
        <div className="w-full lg:w-1/2 md:pr-6 flex justify-center items-center">
          <div className="relative overflow-hidden w-full">
            <div className="max-w-[640px] h-[300px] mx-auto w-full rounded-[0.5rem] bg-opacity-[1] bg-[rgba(248,248,248,var(--tw-bg-opacity))] shadow relative overflow-hidden">
              <Image
                src="https://res.cloudinary.com/gdlapp/image/upload/v1626694372/image/GDL%20Group.jpg"
                alt="career-banner"
                fill
                sizes="640px"
              />
              <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-[rgba(31,26,23,var(--tw-bg-opacity))] bg-opacity-[0.2]">
                <div className="flex cursor-pointer items-center justify-center md:text-[3.75rem] leading-[1] text-opacity-100 text-[rgba(255,255,255,var(--tw-text-opacity))]">
                  <IoPlayCircleOutline />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 py-6 md:py-12 px-2 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-opacity-100 text-[rgba(162,166,168,var(--tw-text-opacity))]">
            {bannerContent?.title}
          </h2>
          <p className="leading-[36px] text-[1.125rem] text-opacity-90 text-[rgba(31,26,23,var(--tw-text-opacity))]">
            {bannerContent?.description}
          </p>
        </div>
      </div>
    </section>
  );
}
