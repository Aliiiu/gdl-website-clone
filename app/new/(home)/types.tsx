import { z } from "zod";

export const HeroSchema = z.object({
	title: z.string(),
	description: z.string(),
	call_to_action_link: z.string(),
	call_to_action_title: z.string(),
});

export type HeroResponse = z.infer<typeof HeroSchema>;

const ProductSchema = z.object({
	id: z.number(),
	publish_product: z.boolean(),
	product_icon_url: z.string().url(),
	product_image_url: z.string().url(),
	product_name: z.string().min(1, "Product name is required"),
	product_snippet: z.string().optional(),
	product_description: z.string(),
	link_to_form: z.string().url().optional(),
	call_to_action: z.string().url().optional(),
	show_payment_link: z.boolean().default(false),
	payment_link_call_to_action: z.string().url().optional(),
	payment_link_url: z.string().url().optional(),
	percente_Image_position_vertical: z.number().min(0).max(100),
	percente_Image_position_horizontal: z.number().min(0).max(100),
	createdAt: z.string().datetime(),
	updatedAt: z.string().datetime(),
});
const ProductsArraySchema = z.array(ProductSchema);

export type ProductItem = z.infer<typeof ProductSchema>;
export type Products = z.infer<typeof ProductsArraySchema>;
