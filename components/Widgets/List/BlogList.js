import Image from "next/image";
import Link from "next/link";
import { ArticleDiv } from "./list.style";
import { IoBookOutline } from "react-icons/io5";

const BlogList = ({ onPress }) => (
  <ArticleDiv
    className="flex flex-wrap md:flex-nowrap rounded-lg bg-gdlGrey dark:bg-gray-900 hover:shadow-md mt-6 mb-12 shadow-none h-auto transition-all duration-[.3s]"
    onClick={onPress}
  >
    <section className="w-full md:w-2/5">
      <div className="flex rounded-tr-[0] rounded-bl-[.5rem] relative overflow-hidden rounded-tl-[.5rem]">
        <Image src="" alt="img" />
      </div>
    </section>
    <div className="p-4 md:py-8 lg:py-6 w-full md:w-3/5">
      <div className="md:mx-2">
        <div className="flex justify-between text-black dark:text-white items-center mb-4">
          <span className="font-medium uppercase font-ibm-font">
            investments
          </span>
          <span className="opacity-50 font-normal uppercase">sep 22, 2022</span>
        </div>
        <Link href="">
          <a className="text-2xl md:text-3xl inline-block font-bold text-[#992333]">
            Identifying & Analyzing Sound Investments
          </a>
        </Link>
        <article className="md:text-[1.125rem] text-[16px] md:leading-[1.75rem] dark:text-white leading-[24px] subject w-full font-[300]">
          Once you understand the basics of investment, a typical next step is
          identifying sound financial securities, investments which will yield
          the best returns, long or short term.
        </article>
      </div>
      <div className="flex justify-between items-center text-black dark:text-white text-xs text-opacity-70 mt-12 mx-2">
        <span className="flex uppercase items-center justify-start">
          <IoBookOutline className="mr-2" /> 4 minutes
        </span>
      </div>
    </div>
  </ArticleDiv>
);

export default BlogList;
