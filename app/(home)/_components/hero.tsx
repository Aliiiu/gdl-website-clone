import Link from "next/link";
import { getHeroData } from "../_actions";
import Image from "next/image";

async function Hero() {
  const hero = await getHeroData();
  return (
    <section className="flex flex-col items-start justify-center relative container px-4 xl:px-28 mx-auto md:min-h-[500px] min-h-[460px]">
      <div className="absolute top-0 right-0 mt-[-8.8rem] mr-[-5rem]">
        <div className="hidden 2xl:flex items-center justify-center rounded-full dark:border-gray-800 border-red-50 w-[220px] h-[220px] border-[32px]" />
      </div>
      <div className="absolute top-0 left-0 bottom-0 flex justify-center items-center -ml-52">
        <div className="flex items-center justify-center rounded-[9999px] dark:border-gray-800 border-[#FFF1F4] w-[500px] h-[500px] border-[32px]">
          <div className="flex items-center justify-center rounded-[9999px] dark:border-gray-900 border-[#FFF5F7] border-[32px] w-[445px] h-[445px]" />
        </div>
      </div>
      <div className="relative w-full md:w-9/12 lg:w-3/5">
        <h1 className="text-4xl md:text-5xl text-center md:text-left font-bold">
          {hero.title || "Build Wealth Comfortably"}
        </h1>
        <p className="visible dark:text-[#F9FAFB] opacity-[1] md:leading-[32px] leading-[24px] mx-0 md:w-[80%] w-full md:text-left text-center md:text-[1.25rem]  mt-[.25rem] font-light animate-glide-up">
          {`Your financial goals are our priority. We are committed to building
            your wealth with different investment options, all tailored to suit
            you.`}
        </p>
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center mt-6">
          <Link
            href={hero.call_to_action_link}
            target="_blank"
            rel="noreferrer"
            className="py-3 px-[1.5rem] rounded-lg cursor-pointer text-white md:mr-6 mb-4 md:mb-0 bg-[#992333]"
          >{`${hero.call_to_action_title} →`}</Link>
          <Link href="/products">
            <h5 className="font-light z-10 cursor-pointer">Learn More</h5>
          </Link>
        </div>
      </div>
      <div className="max-w-[100%] hidden w-[450px] h-[500px] lg:h-[620px] lg:w-[520px] lg:mr-[4rem] md:block absolute right-0 bottom-0 mb-[-5em] lg:mb-[-8rem] animate-fade-in">
        <Image
          src={"/Images/bg.png"}
          fill
          sizes="(max-width: 1024px) 450px, 520px"
          alt=""
        />
      </div>
    </section>
  );
}

export default Hero;
