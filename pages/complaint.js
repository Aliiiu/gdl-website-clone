import Link from "next/link";
import Faq from "../components/PageSections/Faq";
import CustomHeader from "../components/Widgets/CustomHeader/Header";
import { useForm } from "react-hook-form";
import { TextField } from "../components/Widgets/Form/Form";
import { makeRequest } from "../apiCalls/requestHandler";
import { useEffect, useLayoutEffect, useState } from "react";
import { AppButton } from "../components/Widgets/Button/Button";
import Head from "next/head";
import { useRequest } from "../hooks/useRequest";
import MethodType from "../constant/methodType";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const ContactDetails = ({ name, details }) => (
  <div className="relative mt-[1rem] mb-[2rem]">
    <span className="leading-[1.75rem] text-opacity-100 text-[rgba(255,115,137,var(--tw-text-opacity))] text-[1.25rem] font-[700]">
      {name}
    </span>
    <div className="text-[1.125rem] leading-[1.75rem] text-opacity-100 text-[rgba(255,115,137,var(--tw-text-opacity))]">
      {details || (
        <Link
          href="https://www.google.com/maps/place/1+Afolabi+Lesi+St,+Ilupeju,+Lagos/@6.5579637,3.364944,20z/data=!4m13!1m7!3m6!1s0x103b8d8e6cec0a79:0x9067273ce8922c66!2s1+Afolabi+Lesi+St,+Ilupeju,+Lagos!3b1!8m2!3d6.5578744!4d3.3649306!3m4!1s0x103b8d8e6cec0a79:0x9067273ce8922c66!8m2!3d6.5578744!4d3.3649306"
          target="_blank"
        >
          ➤ Lagos Office : No 1, Afolabi Lesi Street, Ilupeju, Lagos | Abuja
          Office : St James House (2nd floor), Plot 1109/No. 167 Cadastral Zone
          A08 Ademola Adetokunbo Crescent, Wuse ll, Abuja- Nigeria
        </Link>
      )}
    </div>
  </div>
);

const PhoneDetails = () => (
  <>
    <Link
      href="tel:2347054435000"
      className="text-opacity-100 text-[rgba(255,214,220,var(--tw-text-opacity))]"
    >
      +2347054435000
    </Link>
    <Link
      href="tel:2347054435000"
      className="text-opacity-100 text-[rgba(255,214,220,var(--tw-text-opacity))]"
    >
      <span>, </span>+2347054435000
    </Link>
  </>
);

const EmailDetail = () => (
  <Link
    href="mailto:customerservice@gdl.com.ng"
    className="text-opacity-100 text-[rgba(255,214,220,var(--tw-text-opacity))]"
  >
    customerservice@gdl.com.ng
  </Link>
);

const ComplaintPage = () => {
  const { handleSubmit, formState, register } = useForm({ mode: "onChange" });
  const [querystr, setQueryStr] = useState(null);
  const { query } = useRouter();
  const { makeRequest, data } = useRequest({
    url: "/pages/contact",
    method: MethodType.GET,
  });
  const { makeRequest: fetchForm, data: formData } = useRequest({
    url: "/pages/contact/form",
    method: MethodType.GET,
  });

  const {
    makeRequest: sendComplaint,
    data: response,
    loading,
  } = useRequest({
    url: `/user/requests/${querystr}`,
    method: MethodType.POST,
    onSuccess: data => toast("Successfully submited complaints"),
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    makeRequest();
    fetchForm();
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useLayoutEffect(() => {
    // /requests/delete-my-data
    setQueryStr(query.request_type);
  }, []);

  const onSubmit = data => {
    data.request_type = querystr;
    sendComplaint(data);
  };
  return (
    <div>
      <Head>
        <title>Contact-Us | GDL</title>
      </Head>
      <CustomHeader
        name="Give Your Complaint"
        bg="#FFFFFF"
        noIcon
        sub="Have any issues using any of our services?"
      />
      <section className="px-[1.5rem] mx-auto max-w-[1200px] mb-20">
        <div className="md:rounded-lg shadow-xl -mx-5 md:mx-auto flex flex-wrap">
          <div className="left-pane w-6/12 rounded-tr-[0] rounded-bl-[0.5rem] rounded-tl-[0.5rem] md:py-[4rem] md:px-[2.5rem] py-[3rem] px-[1.25rem] relative overflow-hidden bg-opacity-100 bg-[rgba(153,35,51,var(--tw-bg-opacity))] text-white">
            <div className="relative text-[rgba(255,115,137,var(--tw-text-opacity))] text-opacity-100 font-bold text-3xl mb-12">
              Contact Information
            </div>
            <ContactDetails name="Address" />
            <ContactDetails name="Phone" details={<PhoneDetails />} />
            <ContactDetails name="Email" details={<EmailDetail />} />
          </div>
          <div className="right-pane w-6/12 rounded-tr-[0.5rem] rounded-bl-[0] rounded-br-[0.5rem] md:px-[2.5rem] px-[1.25rem] md:py-[4rem] py-[3rem] bg-[rgba(248,248,248,var(--tw-bg-opacity))] bg-opacity-[0.75]">
            <p className="mb-8">
              Avail us with the following information and we will get back to
              you in the least possible time.
            </p>
            <div className="">
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
                  label="Your Message"
                  name="message"
                  type="textarea"
                  error={formState.errors.message}
                  {...register("message", { required: true })}
                />
                <AppButton name="Contact us" loading={loading} />
              </form>
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

export default ComplaintPage;
