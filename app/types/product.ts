export interface Product {
  product_name: string;
  product_snippet: string;
  product_description: string;
  product_image_url: string;
  product_icon_url: string;
}

export interface ProductRedirectionParams {
  header: string;
  content: string;
  desc: string;
  icon: string;
  img: string;
}
