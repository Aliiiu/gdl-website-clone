"use client";

import { useMutation } from "@tanstack/react-query";
import { useQueryState } from "nuqs";
import { makeRequest } from "@/apiCalls/requestHandler";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  request_type: z.string().nullable(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Using nuqs to manage the request_type query parameter
  const [requestType] = useQueryState("request_type");

  // Mutation for submitting the complaint
  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await makeRequest(
        `/user/requests/${requestType}`,
        data,
        "POST"
      );
      return response.data;
    },
    onSuccess: () => {
      toast("Successfully submitted complaints");
    },
    onError: error => {
      toast.error(`Error submitting complaint: ${error.message}`);
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    if (requestType) {
      formData.append("request_type", requestType);
    }
    submitMutation.mutate(formData);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input
                  className="bg-[#c2cfd6] bg-opacity-20 border-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input
                  className="bg-[#c2cfd6] bg-opacity-20 border-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none border-none bg-[#c2cfd6] bg-opacity-20"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="bg-brand py-2 px-4 mt-5 rounded-lg text-white w-fit"
        >
          Contact Us
        </button>
      </form>
    </Form>
  );
}
