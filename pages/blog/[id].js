import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { makeRequest } from "../../apiCalls/requestHandler";
import Image from "next/image";
import Head from "next/head";
import parse from "html-react-parser";

const Article = ({ article, blogData }) => {
  const { query } = useRouter();

  useEffect(() => {
    console.log(query.id);
    const title = query.id.replace(/-/g, " ");
    // console.log(article.find(item => item.title.toLowerCase() === title));
    console.log(article);
  }, [article]);
  return (
    <div>
      <Head>
        <title>Blog Article</title>
      </Head>
      <div className="container pb-20 lg:w-4/6 mx-auto">
        <div className="relative mt-10 w-full h-96">
          <Image
            unoptimized
            src={article.featured_image_url}
            alt="img"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h1 className="text-3xl my-5 text-center">{article.title}</h1>
        {parse(article.body)}
        <div className="my-1 flex gap-4">
          <h3>Tags: </h3>
          {JSON.parse(article.tags).map((item, idx) => (
            <p key={item} className="text-second">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const title = id.replace(/-/g, " ");
  // const id = params.pop();
  console.log(id);
  const blogPost = await makeRequest("/posts/s", null, null);

  return {
    props: {
      article: title
        ? blogPost?.data?.data.find(item => item.title.toLowerCase() === title)
        : "",
      blogData: blogPost.data?.data,
    },
  };
}

export default Article;
