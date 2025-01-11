import { formatDate } from "@/utils/helper";
import Link from "next/link";
import React from "react";
import { IoLocationOutline, IoWarning } from "react-icons/io5";
import {
  getJobOpeningContent,
  getJobOpeningData,
  type JobOpening,
} from "../actions";

const JobOpenings = async () => {
  const jobOpening = await getJobOpeningData();
  const jobContent = await getJobOpeningContent();
  return (
    <section id="job-opening" className="py-12 md:py-24 bg-white">
      <div className="container px-4 xl:px-28 mx-auto">
        <h1 className="leading-[1.1] text-[3rem] mb-[0.75rem] font-[700]">
          Job Openings
        </h1>
        <div className="mt-8">
          {jobOpening.length > 0 ? (
            <div className="flex flex-wrap gap-6">
              {jobOpening.map(content => (
                <JobContent key={content.id} {...content} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center py-10 px-5">
              <span className="md:text-sm text-sm px-5 py-3 flex items-center gap-2 leading-5 rounded-lg bg-gray-50 text-gray-500">
                <IoWarning size={20} />{" "}
                {jobContent?.no_vacancy_message ||
                  `No career vacancy available at the
                  moment, please check back later`}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobOpenings;

const JobContent = ({
  id,
  position,
  type_of_employment,
  location,
  lasts_till,
}: JobOpening) => (
  <Link href={`career/${id}/apply`} className="flex-1">
    <div className="cursor-pointer relative w-full max-w-[300px] rounded-[0.5rem] border-[1px] border-[rgba(162,166,168,var(--tw-border-opacity))] border-opacity-20 bg-opacity-100 bg-[rgba(255,255,255,var(--tw-bg-opacity))] p-[1.5rem] shadow">
      <h1 className="font-bold text-xl">{position || "Job Title"}</h1>
      <div className="mb-1 py-1 px-2 inline-flex rounded text-sm bg-opacity-100 bg-[rgba(255,236,239,var(--tw-bg-opacity))] text-opacity-100 text-[rgba(153,35,51,var(--tw-text-opacity))]">
        {type_of_employment || "Job Type"}
      </div>
      <h3 className="flex justify-start items-center font-normal">
        <IoLocationOutline className="mr-1" />
        <span>{location || "Job Location"}</span>
      </h3>
      <div className="mt-1 text-sm text-opacity-100 text-[rgba(162,166,168,var(--tw-text-opacity))]">
        Closes {formatDate(lasts_till)}
      </div>
      <div className="mt-4 flex items-center justify-end text-sm capitalize text-opacity-100 text-[rgba(162,166,168,var(--tw-text-opacity))]">
        <span>a year ago</span>
      </div>
    </div>
  </Link>
);
