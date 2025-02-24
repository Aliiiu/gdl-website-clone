"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  candidate_name: z.string().min(2, {
    message: "Candidate name must be at least 2 characters",
  }),
  email: z.string().email("Please enter a valid email address"),
  cv_link: z.string().url("Enter a valid CV url"),
  porfolio_url: z.string().url("Enter a valid porfolio URL"),
  location: z.string().min(1, { message: "Location field must not be empty" }),
});

const JobApplicationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      candidate_name: "",
      email: "",
      cv_link: "",
      porfolio_url: "",
      location: "",
    },
  });

  const isSuccess = form.formState.isSubmitSuccessful;
  const isLoading = form.formState.isSubmitting;
  const isValid = form.formState.isValid;
  const isDisabled = !isValid || isLoading;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const data = {
      ...values,
      application_date: new Date().toISOString(),
    };
    try {
      const response = await fetch(
        "https://site.housemoni.net/job/applications",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      await response.json();
      form.reset();
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white dark:bg-gray-800 shadow-lg border border-opacity-5 rounded-lg p-6 border-[rgba(162,166,168,var(--tw-border-opacity))]">
        <h3 className="text-xl font-bold text-[rgba(153,35,51,var(--tw-text-opacity))] text-opacity-100 mb-6">
          Apply for Job
        </h3>
        <Form {...form}>
          <form
            className="flex flex-col gap-5"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="candidate_name"
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
              name="cv_link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your CV URL</FormLabel>
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
              name="porfolio_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Profile URL</FormLabel>
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
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Location</FormLabel>
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
            <div className="">
              {/* <AppButton
                    name="Submit Application"
                    loading={loading}
                    justify="justify-center"
                    className="py-[1rem] px-[1.5rem] text-center text-white bg-[#992333] w-full"
                  /> */}
              <button
                type="submit"
                className="py-3 rounded-md px-[1.5rem] text-center text-white bg-[#992333] w-full"
                disabled={isDisabled}
              >
                {isLoading ? "Submitting..." : "Submit Application"}
              </button>
            </div>
            {isSuccess && (
              <p className="text-green-400 text-center mt-2">
                Application Successful!
              </p>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
