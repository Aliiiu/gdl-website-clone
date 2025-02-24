import { makeRequest } from "@/apiCalls/requestHandler";

type TestimonialRresponse = {
  id: number;
  show_testimonial: boolean;
  image_url: string;
  name: string;
  porfolio: string;
  testimonial: string;
};

export const getTestimonialData = async (): Promise<TestimonialRresponse[]> => {
  const testimonialResponse = await makeRequest("/pages/testimonials/s");
  return testimonialResponse.data.data;
};
