import CustomHeader from "@/app/components/custom-page-hero";
import { generatePageMetadata } from "@/app/utils/metadata";
import BlogTopContent from "./components/hero";
import Faq from "@/app/components/faq";
import BlogList from "./components/blog-list";
import { getBlogCategories, getBlogPosts } from "./actions";

export const generateMetadata = () => {
  return generatePageMetadata({ title: "Blog" });
};

export default async function Page() {
  const categories = await getBlogCategories();
  const blogData = await getBlogPosts();

  return (
    <main>
      <CustomHeader hasBackImg content={<BlogTopContent />} />
      <BlogList categories={categories} blogData={blogData} />
      <Faq />
    </main>
  );
}
