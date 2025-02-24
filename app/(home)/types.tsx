import { z } from "zod";

export const HeroSchema = z.object({
  title: z.string(),
  description: z.string(),
  call_to_action_link: z.string(),
  call_to_action_title: z.string(),
});

export type HeroResponse = z.infer<typeof HeroSchema>;

const BlogSchema = z.object({
  id: z.number(),
  title: z.string().min(1, "Title is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  author: z.string().min(1, "Author is required"),
  featured_image_url: z.string().url(),
  body: z.string().min(1, "Description is required"),
  related_posts: z
    .array(z.number())
    .min(1, "Related posts is required")
    .nullable(),
  tags: z.string().min(1, "Tags is required"),
  save_as_draft: z.boolean(),
  publish_later: z.boolean(),
  publish_later_date: z.string().datetime(),
  read_time: z.string(),
  category: z.object({
    id: z.string(),
    category_name: z.string(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
  }),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Blogs = z.infer<typeof BlogSchema>;
