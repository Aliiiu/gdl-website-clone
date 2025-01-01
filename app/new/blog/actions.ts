import { makeRequest } from "@/apiCalls/requestHandler";

export type BlogCategory = {
  id: number;
  category_name: string;
};

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  featured_image_url: string;
  body: string;
  related_posts: null | string[];
  tags: string;
  save_as_draft: boolean;
  publish_later: boolean;
  publish_later_date: string;
  read_time: string;
  createdAt: string;
  updatedAt: string;
  category: {
    id: number;
    category_name: string;
    createdAt: string;
    updatedAt: string;
  };
};

export async function getBlogHeroContent() {
  const heroContent = await makeRequest("/pages/resources/bp/general");
  return heroContent.data.data.pop();
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  const categories = await makeRequest("/post/categories");
  return categories.data.data.reverse();
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await makeRequest("/posts/s");
  return posts.data.data;
}
