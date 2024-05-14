import Image from "next/image";
import Link from "next/link";
import { IoBookOutline } from "react-icons/io5";
import { formatDate } from "../../../utils/helper";
import { useRouter } from "next/router";

const BlogList = ({
  category,
  title,
  read_time,
  featured_image_url,
  excerpt,
  createdAt,
}) => {
  const url = encodeURIComponent(title?.replace(/ /g, "-").toLowerCase());

  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap rounded-lg bg-gdlGrey dark:bg-gray-900 hover:shadow-md mt-6 mb-12 shadow-none transition-all duration-[.3s]">
        <section className="w-full md:w-2/5">
          <div className="flex w-full h-full rounded-tr-[0] rounded-bl-[.5rem] relative overflow-hidden rounded-tl-[.5rem]">
            <Image
              unoptimized
              src={featured_image_url}
              alt="img"
              layout="fill"
              className=" object-cover"
            />
          </div>
        </section>
        <div className="p-4 md:py-8 lg:py-4 2xl:py-10 flex flex-col justify-between gap-4 w-full md:w-3/5">
          <div className="md:mx-2 ">
            <div className="flex justify-between text-black dark:text-white items-center mb-4">
              <span className="font-medium uppercase font-ibm-font">
                {category?.category_name}
              </span>
              <span className="opacity-50 font-normal uppercase">
                {formatDate(createdAt) || ""}
              </span>
            </div>
            <Link href={`/blog/${url}`}>
              <a className="text-2xl md:text-3xl inline-block line-clamp-1 font-bold text-[#992333]">
                {title}
              </a>
            </Link>
            <article className="md:text-[1.125rem] 2xl:mt-4 text-[16px] line-clamp-4 md:leading-[1.75rem] dark:text-white leading-[24px] subject w-full font-[300]">
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
