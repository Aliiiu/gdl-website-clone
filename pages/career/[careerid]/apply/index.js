import CustomHeader from "../../../../components/Widgets/CustomHeader/Header";
import { IoBriefcaseOutline, IoLocationOutline } from "react-icons/io5";
import Faq from "../../../../components/PageSections/Faq";
import { TextField } from "../../../../components/Widgets/Form/Form";
import { useForm } from "react-hook-form";
import { AppButton } from "../../../../components/Widgets/Button/Button";

const HeaderComponent = () => (
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
        Head Services
      </h1>
      <div className="md:text-[1.125rem] text-sm leading-[1.75rem] text-[rgba(31,26,23,var(--tw-text-opacity))] text-opacity-90 flex flex-wrap justify-center md:justify-start items-center font-medium">
        <div className="flex items-center justify-start">
          <IoLocationOutline />
          <span>Lagos</span>
        </div>
        <span className="mx-3">•</span>
        <div>Full-Time</div>
        <span className="mx-3">•</span>
        <div className="capitalize">a year ago</div>
      </div>
      <div className="text-sm md:text-base text-opacity-80 text-[rgba(31,26,23,var(--tw-text-opacity))] text-center md:text-left mt-1">
        Closes Aug 5, 2021
      </div>
    </div>
  </div>
);

const side_content = [
  { name: "Overview", desc: "You can make more money for all" },
  { name: "Job Description", desc: "Serving" },
  { name: "Responsibilities", desc: "Serve the staff" },
];

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

const CareerDetailsPage = () => {
  const { handleSubmit, formState, register } = useForm({ mode: "onChange" });

  const onSubmit = () => {
    //
  };
  return (
    <div>
      <CustomHeader floatLeft bg="#FEECEF" content={<HeaderComponent />} />
      <section className="py-12 md:-mt-24">
        <div className="px-[1.5rem] mx-auto max-w-[1200px] flex flex-wrap">
          <div className="w-full lg:w-3/5 md:px-6 md:pt-24">
            {side_content.map(content => (
              <InnerContent {...content} />
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
                    error={formState.errors.name}
                    {...register("name", { required: true })}
                  />
                  <TextField
                    label="Your Email"
                    name="email"
                    type="email"
                    error={formState.errors.email}
                    {...register("email", { required: true })}
                  />
                  <TextField
                    label="Your Profile URL"
                    name="profile_url"
                    type="text"
                    error={formState.errors.profile_url}
                    {...register("profile_url", { required: true })}
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
                      justify="justify-center"
                      className="py-[1rem] px-[1.5rem] text-center text-white bg-[#992333] w-full"
                    />
                  </div>
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

export default CareerDetailsPage;
