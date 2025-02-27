import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "@/styles/markdown.module.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPosts } from "../actions";
import { decodeSlug } from "@/utils/helper";

interface MarkdownRenderProps {
  content: string;
}

// Define metadata types
type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const title = decodeSlug(id);

  try {
    const blogPost = await getBlogPosts();
    const article = blogPost.find(item => item.title === title);

    if (!article) {
      return {
        title: "Blog Article Not Found",
      };
    }

    return {
      title: article.title,
    };
  } catch (error) {
    return {
      title: "Blog Article",
    };
  }
}

// Markdown renderer component
const MarkdownRender: React.FC<MarkdownRenderProps> = React.memo(
  ({ content }) => {
    if (!content) return null;
    return <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>;
  }
);

MarkdownRender.displayName = "MarkdownRender";

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  const title = decodeSlug(id);

  try {
    const blogPost = await getBlogPosts();

    // console.log({ id: title, blogTitle: blogPost[0].title });

    if (!blogPost) {
      notFound();
    }

    const article = blogPost.find(item => item.title === title);
    // console.log({ article });
    if (!article) {
      console.log("Article not found");
      notFound();
    }

    const content = article.body.replace(/<br( )*\/?>/g, "\n") || "";
    const tags = JSON.parse(article.tags);

    return (
      <div>
        <div className="container pb-20 lg:w-4/6 mx-auto">
          <h1 className="text-3xl my-5 text-center font-semibold">
            {article.title}
          </h1>
          <div className={`${styles.markdownBody}`}>
            <MarkdownRender content={content} />
          </div>
          <div className="my-1 flex gap-4">
            <h3>Tags: </h3>
            {tags.map((item: string) => (
              <p key={item} className="text-second">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    notFound();
  }
}
