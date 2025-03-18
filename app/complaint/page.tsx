import {
  ContactDetails,
  EmailDetails,
  PhoneDetails,
} from "./_components/contact-details";
import { generatePageMetadata } from "@/utils/metadata";
import CustomHeader from "@/components/custom-page-hero";
import Faq from "@/components/faq";
import ContactForm from "./_components/contact-form";

export const metadata = generatePageMetadata({ title: "Contact-Us" });

const ComplaintPage = () => {
  return (
    <div>
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
            <ContactDetails name="Email" details={<EmailDetails />} />
          </div>
          <div className="right-pane w-6/12 rounded-tr-[0.5rem] rounded-bl-[0] rounded-br-[0.5rem] md:px-[2.5rem] px-[1.25rem] md:py-[4rem] py-[3rem] bg-[rgba(248,248,248,var(--tw-bg-opacity))] bg-opacity-[0.75]">
            <p className="mb-8">
              Avail us with the following information and we will get back to
              you in the least possible time.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
      <Faq />
    </div>
  );
};

export default ComplaintPage;
