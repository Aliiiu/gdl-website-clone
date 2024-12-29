import CustomHeader from "@/app/components/custom-page-hero";
import { generatePageMetadata } from "@/app/utils/metadata";
import { IoBriefcaseOutline, IoLocationOutline } from "react-icons/io5";
import { getJobDetails, type JobOpening } from "../../(home)/actions";
import Faq from "@/app/components/faq";
import ApplyForJob from "./components/apply-job";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}
export const generateMetadata = () => {
  return generatePageMetadata({ title: "Apply" });
};

export default async function Page(props: PageProps) {
  const { id: positionId } = await props.params;
  const position = await getJobDetails(Number(positionId));
  return (
    <main>
      <CustomHeader bg="#FEECEF" content={<HeaderComponent {...position} />} />
      <ApplyForJob job={position} />
      <Faq />
    </main>
  );
}

const HeaderComponent = ({ ...positionData }: JobOpening) => (
  <div className="flex flex-wrap justify-center md:justify-start items-center w-full">
    <div className="mb-6 md:mb-0">
      <div className="text-6xl w-24 h-24 md:w-32 md:h-32 rounded-lg flex items-center justify-center bg-opacity-20 text-opacity-100 text-[rgba(162,166,168,var(--tw-text-opacity))] bg-[rgba(162,166,168,var(--tw-bg-opacity))]">
        <IoBriefcaseOutline />
      </div>
    </div>
    <div className="md:ml-8">
      <Link
        href={"/career"}
        className="cursor-pointer hidden md:inline-block mb-2 text-sm text-opacity-100 text-[rgba(153,35,51,var(--tw-text-opacity))]"
      >
        ← Back
      </Link>
      <h1 className="text-2xl md:text-5xl font-bold text-center md:text-left">
        {positionData?.position || "Position Name"}
      </h1>
      <div className="md:text-[1.125rem] text-sm leading-[1.75rem] text-[rgba(31,26,23,var(--tw-text-opacity))] text-opacity-90 flex flex-wrap justify-center md:justify-start items-center font-medium">
        <div className="flex items-center justify-start">
          <IoLocationOutline />
          <span>{positionData?.location || "Location"}</span>
        </div>
        <span className="mx-3">•</span>
        <div>{positionData?.type_of_employment || "Job Mode"}</div>
        <span className="mx-3">•</span>
        <div className="capitalize">a year ago</div>
      </div>
      <div className="text-sm md:text-base text-opacity-80 text-[rgba(31,26,23,var(--tw-text-opacity))] text-center md:text-left mt-1">
        Closes {new Date(positionData?.lasts_till).toDateString()}
      </div>
    </div>
  </div>
);
