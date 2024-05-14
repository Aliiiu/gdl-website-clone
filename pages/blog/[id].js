import React from "react";
import { makeRequest } from "../../apiCalls/requestHandler";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "../../styles/markdown.module.css";

// eslint-disable-next-line react/display-name
const MarkdownRender = React.memo(({ content }) => {
  if (!content) return null;

  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>;
});

const Article = ({ article }) => {
  const content = article?.body.replace(/<br( )*\/?>/g, "\n") || "";
  return (
    <div>
      <Head>
        <title>Blog Article</title>
      </Head>
      <div className="container pb-20 lg:w-4/6 mx-auto">
        <h1 className="text-3xl my-5 text-center font-semibold">
          {article.title}
        </h1>
        <div className={`${styles.markdownBody}`}>
          <MarkdownRender content={content} />
        </div>
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

export const getServerSideProps = async context => {
  const { id } = context.query;

  if (!id) {
    return {
      notFound: true,
    };
  }

  let title = id.replace(/(?<!-)-(?!-)/g, " ").replace(/-{3}/g, " - ");

  try {
    const blogPost = await makeRequest("/posts/s", null, null);

    if (!blogPost || !blogPost.data || !blogPost.data.data) {
      return {
        notFound: true,
      };
    }

    const article = blogPost.data.data.find(
      item => item.title.toLowerCase() === title
    );

    if (!article) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        article,
        blogData: blogPost.data.data,
      },
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      notFound: true,
    };
  }
};

export default Article;
