import CustomHeader from "../../../../components/Widgets/CustomHeader/Header";
import {
  IoBriefcaseOutline,
  IoCloudUploadOutline,
  IoLocationOutline,
} from "react-icons/io5";
import Faq from "../../../../components/PageSections/Faq";
import { TextField } from "../../../../components/Widgets/Form/Form";
import { useForm } from "react-hook-form";
import { AppButton } from "../../../../components/Widgets/Button/Button";
import { useRouter } from "next/router";
import { makeRequest } from "../../../../apiCalls/requestHandler";
import { useCallback, useRef, useState } from "react";
import { getBase64 } from "../../../../utils/helper";
import cloudinaryServiceApi from "../../../../services/cloudinaryServicesApi";
import axios from "axios";
import useLoading from "../../../../hooks/useLoading";
import { useEffect } from "react";

const HeaderComponent = ({ positionData }) => (
  <div className="flex flex-wrap justify-center md:justify-start items-center w-full">
    <div className="mb-6 md:mb-0">
      <div className="text-6xl w-24 h-24 md:w-32 md:h-32 rounded-lg flex items-center justify-center bg-opacity-20 text-opacity-100 text-[rgba(162,166,168,var(--tw-text-opacity))] bg-[rgba(162,166,168,var(--tw-bg-opacity))]">
        <IoBriefcaseOutline />
      </div>
    </div>
    <div className="md:ml-8">
      <a className="cursor-pointer hidden md:inline-block mb-2 text-sm text-opacity-100 text-[rgba(153,35,51,var(--tw-text-opacity))]">
        ← Back
      </a>
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

const InnerContent = ({ name, desc }) => (
  <div className="mb-10">
    <h2 className="text-[1.875rem] leading-[2.25rem] mb-[.5rem] font-[700] text-opacity-100 text-[rgba(162,166,168,var(--tw-text-opacity))]">
      {name}
    </h2>
    <div className="text-[1.125rem] leading-[1.75rem]">
      <p className="leading-[36px]">{desc}</p>
    </div>
  </div>
);

const CareerDetailsPage = ({ jobOpening, jobId, position, ...props }) => {
  const { handleSubmit, formState, register, setValue, reset } = useForm({
    mode: "onChange",
  });
  const router = useRouter();
  const index = Number(jobId) - 1;
  // console.log(position[index]);

  const side_content = [
    { name: "Overview", desc: "You can make more money for all" },
    { name: "Job Description", desc: jobOpening[index]?.job_description },
    { name: "Responsibilities", desc: jobOpening[index]?.job_responsibilities },
  ];
  const fileRef = useRef();
  const [image, setImage] = useState("");

  const uploadImage = img => {
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "rstorkdu");
    // formData.append("cloud_name", "dbkiemdqb");

    // fileUpload(formData);

    // props.postAction(UPLOAD_CLOUDINARY, null, formData, null, fileUpload);
    cloudinaryServiceApi
      .uploadImage(formData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  const onFileChange = useCallback(async event => {
    if (event.target.files[0]) {
      // console.log(event.target.files[0]);
      const base64 = await getBase64(event.target.files[0]);
      uploadImage(event.target.files[0]);
      setImage(base64);
      // console.log(base64);
      // onChange(event);
    }
  }, []);

  const handleCloudUpload = () => {
    fileRef.current.click();
  };

  const { loading, startLoading, stopLoading } = useLoading();
  const [showSuccess, setShowSuccess] = useState(false);
  const onSubmit = data => {
    startLoading();
    data.application_date = new Date().toISOString();
    console.log(data);
    axios
      .post("https://test-site.gdlapi.com.ng/job/applications", data)
      .then(res => {
        console.log(res.data);
        setShowSuccess(true);
      })
      .catch(err => console.log(err))
      .finally(() => {
        stopLoading();
        setValue("");
      });
  };

  useEffect(() => {
    reset();
  }, [showSuccess]);
  return (
    <div>
      <CustomHeader
        floatLeft
        bg="#FEECEF"
        content={<HeaderComponent positionData={position[index]} />}
      />
      <section className="py-12 md:-mt-24">
        <div className="px-[1.5rem] mx-auto max-w-[1200px] flex flex-wrap">
          <div className="w-full lg:w-3/5 md:px-6 md:pt-24">
            {side_content.map(content => (
              <InnerContent key={content.name} {...content} />
            ))}
          </div>
          <div className="w-full lg:w-2/5 md:px-6">
            <div className="bg-white dark:bg-gray-800 shadow-lg border border-opacity-5 rounded-lg p-6 border-[rgba(162,166,168,var(--tw-border-opacity))]">
              <h3 className="text-xl font-bold text-[rgba(153,35,51,var(--tw-text-opacity))] text-opacity-100 mb-6">
                Apply for Job
              </h3>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    type="text"
                    label="Your Name"
                    name="name"
                    error={formState.errors.candidate_name}
                    {...register("candidate_name", { required: true })}
                  />
                  <TextField
                    label="Your Email"
                    name="email"
                    type="email"
                    error={formState.errors.email}
                    {...register("email", { required: true })}
                  />
                  {/* <div className="mb-4">
                    <label htmlFor="" className="mb-2 font-light">
                      Your Resume
                    </label>
                    <div className="cursor-pointer">
                      <a
                        className="flex items-center justify-start text-blue-500 font-normal capitalize gap-2"
                        onClick={handleCloudUpload}
                      >
                        Select File <IoCloudUploadOutline />{" "}
                        {props.loading ? "loading..." : ""}
                      </a>
                      <input
                        type="file"
                        ref={fileRef}
                        // name={name}
                        onChange={onFileChange}
                        hidden
                        accept={[".jpg", ".png", ".pdf"]}
                      />
                    </div>
                  </div> */}
                  <TextField
                    label="Your CV URL"
                    name="cv_link"
                    type="text"
                    error={formState.errors.cv_link}
                    {...register("cv_link", { required: true })}
                  />
                  <TextField
                    label="Your Profile URL"
                    name="porfolio_url"
                    type="text"
                    error={formState.errors.porfolio_url}
                    {...register("porfolio_url", { required: true })}
                  />
                  <TextField
                    label="Your Location"
                    name="location"
                    type="text"
                    error={formState.errors.location}
                    {...register("location", { required: true })}
                  />
                  <div className="mt-8">
                    <AppButton
                      name="Submit Application"
                      loading={loading}
                      justify="justify-center"
                      className="py-[1rem] px-[1.5rem] text-center text-white bg-[#992333] w-full"
                    />
                    {/* <button
                      type="submit"
                      className="py-[1rem] px-[1.5rem] text-center text-white bg-[#992333] w-full"
                    >
                      Submit
                    </button> */}
                  </div>
                  {showSuccess && (
                    <p className="text-green-400 text-center mt-2">
                      Application Successful!
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="faq"
        className="lg:px-6 lg:w-4/6 mx-auto py-16 md:py-36 w-full"
      >
        <Faq />
      </section>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const { careerid } = context.query;

//   const jobData = await makeRequest("/job/positions", null, null);
//   const jobOpeningData = await makeRequest("/jobs", null, null);
//   // console.log(jobData);
//   return {
//     props: {
//       jobOpening: jobData?.data?.data,
//       jobId: careerid,
//       position: jobOpeningData?.data?.data,
//     },
//   };
// }

export default CareerDetailsPage;
