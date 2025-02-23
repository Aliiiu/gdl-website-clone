"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";
import type { BlogCategory, BlogPost } from "../actions";
import { IoBookOutline, IoWarning } from "react-icons/io5";
import Link from "next/link";
import { formatDate } from "@/utils/helper";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";

const BlogList = ({
  categories,
  blogData,
}: {
  categories: BlogCategory[];
  blogData: BlogPost[];
}) => {
  const [activeCategory, setActiveCategory] = useState(2);
  const ITEMS_PER_PAGE = 10;
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["blogs", activeCategory],
      queryFn: async ({ pageParam = 1 }) => {
        const filteredBlogs =
          activeCategory === 2
            ? blogData
            : blogData.filter(blog => blog.category.id === activeCategory);

        const start = (pageParam - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        return filteredBlogs.slice(start, end);
      },
      getNextPageParam: (lastPage: BlogPost[], pages) => {
        return lastPage.length === ITEMS_PER_PAGE
          ? pages.length + 1
          : undefined;
      },
      initialPageParam: 1,
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <section>
      <Tabs
        defaultValue="general"
        onValueChange={value => {
          const category = categories.find(
            cat => cat.category_name.toLowerCase() === value
          );
          setActiveCategory(category?.id || 2);
        }}
      >
        <TabsList className="h-[60px] border-b border-[#C2CFD6]/30 w-full bg-transparent">
          <div className="flex items-center justify-center gap-5 xl:gap-10 w-full">
            {categories.map(catContent => (
              <TabsTrigger
                key={catContent.id}
                value={catContent.category_name.toLowerCase()}
                className="data-[state=active]:text-brand data-[state=active]:shadow-none"
              >
                {catContent.category_name}
              </TabsTrigger>
            ))}
          </div>
        </TabsList>
        {categories.map(category => (
          <TabsContent
            key={category.id}
            value={category.category_name.toLowerCase()}
            className="container px-4 xl:px-44 mx-auto py-16 w-full"
          >
            {status === "pending" ? (
              <BlogListSkeleton />
            ) : status === "error" ? (
              <div>Error loading blogs</div>
            ) : (
              <>
                {data && data.pages.length > 0 ? (
                  data.pages.map(group => (
                    <React.Fragment key={crypto.randomUUID()}>
                      {group.map(blog => (
                        <BlogListItem key={blog.id} {...blog} />
                      ))}
                    </React.Fragment>
                  ))
                ) : (
                  <div className="flex justify-center items-center py-10 px-5">
                    <span className="md:text-sm text-sm px-5 py-3 flex items-center leading-5 rounded-lg bg-gray-50 text-gray-500">
                      <IoWarning size={20} /> There are currently no available
                      data for this service
                    </span>
                  </div>
                )}
              </>
            )}
          </TabsContent>
        ))}
      </Tabs>
      <div ref={ref} className="h-10 flex justify-center items-center">
        {isFetchingNextPage && (
          <div className="text-gray-500">Loading more posts...</div>
        )}
        {!hasNextPage && data && data.pages.length > 0 && (
          <div className="text-gray-500">
            You&apos;ve reached the end of the list
          </div>
        )}
      </div>
    </section>
  );
};
export default BlogList;

const BlogListItem = ({
  category,
  title,
  read_time,
  featured_image_url,
  excerpt,
  createdAt,
}: BlogPost) => {
  const url = encodeURIComponent(title?.replace(/ /g, "-").toLowerCase());

  return (
    <div className="flex flex-wrap md:flex-nowrap rounded-lg bg-gdlGrey dark:bg-gray-900 hover:shadow-md mt-6 mb-12 shadow-none transition-all duration-300">
      <section className="w-full md:w-2/5">
        <div className="flex w-full h-full rounded-tr-[0] rounded-bl-[.5rem] relative overflow-hidden rounded-tl-[.5rem]">
          <Image
            src={featured_image_url}
            alt="img"
            fill
            sizes="100%"
            className=" object-cover"
          />
        </div>
      </section>
      <div className="p-4 md:py-8 lg:py-4 2xl:py-10 flex flex-col justify-between gap-4 w-full md:w-3/5">
        <div className="md:mx-2">
          <div className="flex justify-between text-black dark:text-white items-center mb-4">
            <span className="font-medium uppercase font-ibm-font">
              {category?.category_name}
            </span>
            <span className="opacity-50 font-normal uppercase">
              {formatDate(createdAt) || ""}
            </span>
          </div>
          <Link
            href={`/blog/${url}`}
            className="text-2xl md:text-3xl font-bold text-[#992333]"
            style={{
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              display: "block",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </Link>
          <article
            className="md:text-[1.125rem] 2xl:mt-4 text-[16px] line-clamp-4 md:leading-[1.75rem] dark:text-white leading-[24px] subject w-full font-[300]"
            style={{
              WebkitLineClamp: "4",
              WebkitBoxOrient: "vertical",
              display: "-webkit-box",
              overflow: "hidden",
            }}
          >
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
  );
};

const BlogListSkeleton = () => {
  return (
    <div className="animate-pulse">
      {[1, 2, 3, 4, 5].map(item => (
        <div
          key={item}
          className="flex flex-wrap md:flex-nowrap rounded-lg bg-gdlGrey dark:bg-gray-900 mt-6 mb-12"
        >
          <section className="w-full md:w-2/5">
            <div className="h-[250px] bg-gray-200 dark:bg-gray-700 rounded-tl-lg rounded-bl-lg" />
          </section>
          <div className="p-4 md:py-8 lg:py-4 2xl:py-10 flex flex-col justify-between gap-4 w-full md:w-3/5">
            <div className="md:mx-2">
              <div className="flex justify-between items-center mb-4">
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
              </div>
              <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
              </div>
            </div>
            <div className="flex justify-between items-center mx-2">
              <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
