import Image from "next/image";
import Link from "next/link";
import { ArticleDiv } from "./list.style";
import { IoBookOutline } from "react-icons/io5";

const BlogList = ({ onPress, category, title, info, time, srcImg }) => (
  <ArticleDiv
    className="flex flex-wrap md:flex-nowrap rounded-lg bg-gdlGrey dark:bg-gray-900 hover:shadow-md mt-6 mb-12 shadow-none h-auto transition-all duration-[.3s]"
    onClick={onPress}
  >
    <section className="w-full md:w-2/5">
      <div className="flex w-full h-full rounded-tr-[0] rounded-bl-[.5rem] relative overflow-hidden rounded-tl-[.5rem]">
        <Image src={srcImg} alt="img" layout="fill" />
      </div>
    </section>
    <div className="p-4 md:py-8 lg:py-6 w-full md:w-3/5">
      <div className="md:mx-2">
        <div className="flex justify-between text-black dark:text-white items-center mb-4">
          <span className="font-medium uppercase font-ibm-font">
            {category}
          </span>
          <span className="opacity-50 font-normal uppercase">sep 22, 2022</span>
        </div>
        <Link href="">
          <a className="text-2xl md:text-3xl inline-block font-bold text-[#992333]">
            {title}
          </a>
        </Link>
        <article className="md:text-[1.125rem] text-[16px] md:leading-[1.75rem] dark:text-white leading-[24px] subject w-full font-[300]">
          {info}
        </article>
      </div>
      <div className="flex justify-between items-center text-black dark:text-white text-xs text-opacity-70 mt-12 mx-2">
        <span className="flex uppercase items-center justify-start">
          <IoBookOutline className="mr-2" /> {time}
        </span>
      </div>
    </div>
  </ArticleDiv>
);

export default BlogList;
