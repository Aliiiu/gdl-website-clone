import { z } from "zod";

export interface Product {
  product_name: string;
  product_snippet: string;
  product_description?: string;
  product_image_url?: string;
  product_icon_url?: string;
  img?: string;
}

const ProductSchema = z.object({
  id: z.number(),
  publish_product: z.boolean().optional(),
  product_icon_url: z.string().url().optional(),
  product_image_url: z.string().url(),
  product_name: z.string().min(1, "Product name is required"),
  product_snippet: z.string(),
  product_description: z.string().optional(),
  link_to_form: z.string().url().optional(),
  call_to_action: z.string().url().optional(),
  show_payment_link: z.boolean().default(false).optional(),
  payment_link_call_to_action: z.string().url().optional(),
  payment_link_url: z.string().url().optional(),
  percente_Image_position_vertical: z.number().min(0).max(100).optional(),
  percente_Image_position_horizontal: z.number().min(0).max(100).optional(),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});

export type ProductItem = z.infer<typeof ProductSchema>;
const ProductsArraySchema = z.array(ProductSchema);
export type Products = z.infer<typeof ProductsArraySchema>;

export interface ProductRedirectionParams {
  header: string;
  content: string;
  desc: string;
  icon: string;
  img: string;
}
