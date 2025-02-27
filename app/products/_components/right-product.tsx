import Link from "next/link";
import { getHeroData } from "../../(home)/_actions";

export const RightProduct = async () => {
  const content = await getHeroData();
  return (
    <section className="pt-16 md:pt-24 xl:pt-36">
      <div className="px-[1.25rem] md:px-[1.5rem] mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center justify-center rounded-3xl text-primary min-h-[400px] bg-[#FFECEF4D]">
          <div className="p-6 text-center">
            <h2 className="font-bold text-5xl mb-1">
              Which Product is right for me?
            </h2>
            <p className="font-medium text-lg">
              Let&apos;s help you choose a product that will work specifically
              for you.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href={content.call_to_action_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-opacity-[1] text-[rgba(153,35,51,var(--tw-text-opacity))] font-medium"
            >
              Get Started →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
