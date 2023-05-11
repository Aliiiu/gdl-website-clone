import Link from "next/link";
import BlogList from "../Widgets/List/BlogList";
import { useRouter } from "next/router";

const blogData = [
  {
    id: 1,
    category: "INVESTMENT",
    title: "Identifying & Analyzing Sound Investments",
    info: "Once you understand the basics of investment, a typical next step is identifying sound financial securities, investments which will yield the best returns, long or short term.",
    time: "4 minutes",
    srcImg: "/Images/grow-your-income.png",
  },
];

const BlogLayout = ({ blogPost }) => {
  const router = useRouter();
  const handleOnPress = title => {
    const url = title.replace(/ /g, "-").toLowerCase();
    router.push(`/blog/${url}`);
    // console.log(url);
  };
  return (
    <section className="pt-12 md:pt-24" id="blog">
      <div className="px-[1.5rem] mx-auto max-w-[1200px]">
        <div className="text-center">
          <h1 className="md:leading-[1.1] leading-[2.5rem] md:text-[3rem] text-[2.25rem] mb-[.75rem] font-[700] visible opacity-[1]">
            Blog
          </h1>
          <p className="w-full md:w-1/2 lg:w-2/5 mx-auto md:text-[1.125rem] md:leading-[1.75rem] leading-[24px] dark:text-white">
            Everything you need to know about Finance and Investing in Nigeria.
          </p>
        </div>
        <section className="mt-16 md:px-[1.5rem] mx-auto max-w-[56rem]">
          {/* {blogData.map(content => (
            <BlogList
              key={content.id}
              onPress={() => handleOnPress(content.id)}
              {...content}
            />
          ))} */}
          <BlogList
            // onPress={() => handleOnPress(blogPost.title)}
            {...blogPost}
          />
        </section>
        <div className="mt-16 mb-5 md:mb-10 text-center">
          <Link href="/blog">
            <a className="font-medium text-[#992333] dark:text-white">
              Read On →
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogLayout;
