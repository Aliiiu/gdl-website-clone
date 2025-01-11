import React from "react";
import { JobOpening } from "../../../(home)/actions";
import { getJobPositionsData } from "../actions";
import JobApplicationForm from "./job-application-form";

const ApplyForJob = async ({ job }: { job: JobOpening }) => {
  const jobPositions = await getJobPositionsData();
  const positionDetails = jobPositions.filter(
    item => item.title_of_position === job.position
  )[0];

  const side_content = [
    {
      name: "Overview",
      desc: positionDetails.title_of_position || "Job Position",
    },
    {
      name: "Job Description",
      desc: positionDetails?.job_description || "Description",
    },
    {
      name: "Responsibilities",
      desc: positionDetails?.job_responsibilities || "Responsibilities",
    },
  ];

  return (
    <section className="container px-4 xl:px-28 mx-auto py-12 md:-mt-24">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:px-6 md:pt-24">
          {side_content.map(content => (
            <InnerContent key={content.name} {...content} />
          ))}
        </div>
        <JobApplicationForm />
      </div>
    </section>
  );
};

export default ApplyForJob;

const InnerContent = ({ name, desc }: { name: string; desc: string }) => (
  <div className="mb-10">
    <h2 className="text-[1.875rem] leading-[2.25rem] mb-[.5rem] font-[700] text-opacity-100 text-[rgba(162,166,168,var(--tw-text-opacity))]">
      {name}
    </h2>
    <div className="text-lg leading-[1.75rem]">
      <p className="leading-[36px]">{desc}</p>
    </div>
  </div>
);
