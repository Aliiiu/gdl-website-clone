import Image from "next/image";
import Link from "next/link";
import { ArticleDiv } from "./list.style";
import { IoBookOutline } from "react-icons/io5";
import { formatDate } from "../../../utils/helper";

const BlogList = ({
  onPress,
  category,
  title,
  info,
  read_time,
  srcImg,
  featured_image_url,
  excerpt,
  createdAt,
  id,
}) => {
  return (
    <div>
      {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
      <div className="flex flex-wrap md:flex-nowrap rounded-lg bg-gdlGrey h-[350px] dark:bg-gray-900 hover:shadow-md mt-6 mb-12 shadow-none transition-all duration-[.3s]">
        <section className="w-full md:w-2/5">
          <div className="flex w-full h-full rounded-tr-[0] rounded-bl-[.5rem] relative overflow-hidden rounded-tl-[.5rem]">
            <Image
              unoptimized
              src={featured_image_url}
              alt="img"
              layout="fill"
            />
          </div>
        </section>
        <div className="p-4 md:py-8 lg:py-6 flex flex-col justify-between w-full md:w-3/5">
          <div className="md:mx-2 ">
            <div className="flex justify-between text-black dark:text-white items-center mb-4">
              <span className="font-medium uppercase font-ibm-font">
                {category?.category_name}
              </span>
              <span className="opacity-50 font-normal uppercase">
                {formatDate(createdAt) || "sep 22, 2022"}
              </span>
            </div>
            <Link href={`/blog/${title?.replace(/ /g, "-").toLowerCase()}`}>
              {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a className="text-2xl md:text-3xl inline-block font-bold text-[#992333]">
                {title}
              </a>
            </Link>
            <article className="md:text-[1.125rem] text-[16px] md:leading-[1.75rem] dark:text-white leading-[24px] subject w-full font-[300]">
              {excerpt}
            </article>
          </div>
          <div className="flex justify-between items-center text-black dark:text-white text-xs text-opacity-70 mx-2">
            <span className="flex uppercase items-center justify-start">
              <IoBookOutline className="mr-2" /> {read_time || "4 min"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
