import Image from "next/image";
import Link from "next/link";
import React, { type ReactNode } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <JoinTheClub />
      <FooterSection />
    </footer>
  );
};

export default Footer;

const JoinTheClub = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffecef] to-white">
      <div className="container px-4 xl:px-28 mx-auto flex flex-col justify-center items-center md:flex-row gap-6">
        <div className="py-12 md:py-24 flex-1">
          <div className=" mx-auto">
            <div className="">
              <div className="mb-3">
                <Image
                  src={"/svgs/profile.svg"}
                  alt=""
                  width={190}
                  height={144}
                />
              </div>
              <h2 className="text-4xl my-2 font-semibold leading-none">
                Ready to Get Started?
              </h2>
              <p className="hint mb-8 text-primary dark:text-white text-lg max-w-[500px]">
                Begin your journey to financial freedom. Make your money work
                for you. Let&apos;s go!
              </p>
              <div className="mt-10">
                <Link
                  href={"https://app.gdl.ng/signup"}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#9A2333] text-white px-[1.5rem] py-3 flex items-center gap-2 w-fit rounded-lg"
                >
                  <span>Create an Account</span>
                  <AiOutlineArrowRight className="font-thin text-sm" />
                </Link>
                <div className="mt-6">
                  Already Have an Account?
                  <Link
                    href="https://app.gdl.ng"
                    className="text-brand hover:underline dark:text-white font-medium pl-1"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 md:py-24 w-full flex-1">
          <div className="mx-auto">
            <div className="">
              <div>
                <div className="mb-3">
                  <Image
                    src={"/svgs/notifications.svg"}
                    alt=""
                    width={190}
                    height={144}
                  />
                </div>
                <div className="">
                  <h2 className="md:text-4xl text-3xl font-bold flex justify-start items-center mb-2">
                    Join the club
                  </h2>
                  <p className="text-lg">
                    Subscribe to our Newsletter and be the first to receive
                    updates on our new investment opportunities and promotions.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <span>
                  <form>
                    <div className="border-b border-[#9A2333] border-opacity-50 mb-5">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="bg-transparent border-0 outline-none py-3 w-full"
                      />
                      <div className="text-red-500 text-sm" />
                    </div>
                    <div className="border-b border-[#9A2333] border-opacity-50 mb-5">
                      <input
                        type="text"
                        placeholder="Your Email Address"
                        className="bg-transparent py-3 outline-none w-full"
                      />
                      <div className="text-red-500 text-sm" />
                    </div>
                    <div className="border-b border-[#9A2333] border-opacity-50 mb-5 outline-none">
                      <input
                        type="text"
                        placeholder="Your Phone (Optional)"
                        className="bg-transparent py-3 outline-none w-full"
                      />
                      <div className="text-red-500 text-sm" />
                    </div>
                  </form>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Socials = ({ url, icon }: { url: string; icon: ReactNode }) => (
  <Link
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="mr-4 dark:text-white"
  >
    {icon}
  </Link>
);
const Companylink = ({ url, name }: { url: string; name: string }) => (
  <Link
    href={url}
    className="leading-[32px] block text-sm w-fit hover:underline hover:text-brand"
  >
    {name}
  </Link>
);

const FooterSection = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="pb-5 container px-4 xl:px-28 mx-auto">
        <div className="flex flex-wrap xl:-mx-6">
          <div className="w-full lg:w-1/4 mb-6 px-6">
            <div className="flex items-center justify-start mb-2">
              <Image
                width={40}
                height={40}
                src="https://res.cloudinary.com/gdlapp/image/upload/v1625500547/image/gdllogo.svg.svg"
                alt="gdl-logo"
              />
              <div className="ml-3">
                <h1 className="md:text-lg font-bold text-base">GDL</h1>
                <h2 className="text-black dark:text-white text-sm">RC623338</h2>
              </div>
            </div>
            <h2 className="text-sm">Growth & Development Limited</h2>
            <hr className="border-grey border-opacity-50 mt-2 mb-4" />
            <div className="flex justify-start items-center text-sm text-black dark:text-white text-opacity-70">
              <h3>
                <strong>Lagos Office :</strong> No 1, Afolabi Lesi Street,
                Ilupeju, Lagos.
                <br />
                <strong>Ibadan Office :</strong> 103, MKO Abiola Way, Ibadan.{" "}
                <br />
                <strong>Port Harcourt Office :</strong> 16 Woji road GRA Phase
                2, Port-Harcourt.
                <br />
                <strong>Abuja Office :</strong> St James House (2nd floor), Plot
                1109/No. 167 Cadastral Zone A08 Ademola Adetokunbo Crescent,
                Wuse ll, Abuja- Nigeria.
              </h3>
            </div>
            <div className="flex justify-start gap-1 items-center my-2 text-sm text-opacity-70">
              <Link
                href="tel:2347054435000"
                className="hover:underline hover:text-brand"
              >
                +2347054435000,
              </Link>
            </div>
            <div className="flex justify-start items-center my-2 text-sm text-opacity-70">
              <Link
                href="mailto:customerservice@gdl.com.ng"
                className=" text-second hover:underline"
              >
                customerservice@gdl.com.ng
              </Link>
            </div>
            <hr className="border-white border-opacity-10 mb-4 mt-6" />
            <div className="socials flex mt-6 gap-5 items-center text-2xl">
              {footerLinkData.map(content => (
                <Socials key={content.id} {...content} />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 px-6">
            <h2 className="font-medium text-xl text-black dark:text-white text-opacity-40 md:font-bold">
              Company
            </h2>
            <div className="">
              {companyLinks.map((content, index) => (
                <Companylink key={content.id} {...content} />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 px-6">
            <h2 className="font-medium text-xl text-black dark:text-white text-opacity-40 md:font-bold">
              Products
            </h2>
            <div className="text-black dark:text-white">
              {productLinks.map((content, index) => (
                <Companylink key={content.name} {...content} />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 px-6">
            <h2 className="font-medium text-xl text-black text-opacity-40 md:font-bold">
              Resources
            </h2>
            <div className="">
              {resourceLinks.map(content => (
                <Companylink key={content.name} {...content} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className=" container px-4 xl:px-28 mx-auto">
        <hr className="border-grey border-opacity-30 mt-4" />
        <div className="text-black dark:text-white text-opacity-50 my-8 text-base">
          <div>
            <p className="dark:text-white">
              Growth and Development Asset Management Limited (GDL) is a Limited
              Liability company registered with the Corporate Affairs Commission
              with RC Number: 623338. GDL and its subsidiary companies are
              regulated by the Securities & Exchange Commission, the Nigerian
              Stock Exchange and the Central Bank of Nigeria.
            </p>
          </div>
        </div>
        <hr className="border-grey border-opacity-30 mb-4" />
      </section>
      <section className="bg-black bg-opacity-0">
        <div className=" container px-4 xl:px-28 mx-auto text-sm py-5 md:py-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-black dark:text-white text-opacity-50 mb-5 md:mb-0">
            Copyright © {new Date().getFullYear()} GDL. All Rights Reserved.
          </div>
          <div className="flex items-center justify-end">
            <Link href="/terms-of-use" className="mr-3">
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className="ml-3 cursor-pointer">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export const footerLinkData = [
  {
    id: 1,
    url: "https://www.facebook.com/GDLAssetManagement/",
    icon: <IoLogoFacebook className="text-second" />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/company/gdl-nigeria/",
    icon: <IoLogoLinkedin className="text-second" />,
  },
  {
    id: 3,
    url: "https://www.instagram.com/gdl_nigeria/",
    icon: <IoLogoInstagram className="text-second" />,
  },
  {
    id: 4,
    url: "https://twitter.com/gdl_nigeria",
    icon: <IoLogoTwitter className="text-second" />,
  },
];
export const companyLinks = [
  { id: 1, url: "/about#core-values", name: "Core Values" },
  { id: 2, url: "/about#corporate-information", name: "Corporate Information" },
  { id: 3, url: "/about#board-of-directors", name: "Board of Directors" },
  { id: 4, url: "/about#management-team", name: "Management Team" },
];
export const productLinks = [
  { url: "/products", name: "Value Note" },
  { url: "/products", name: "Finance" },
  { url: "/products", name: "Dollar Note" },
  { url: "/products", name: "Money Market Fund" },
  { url: "/products", name: "Stockbroking" },
  { url: "/products", name: "GDL Canary Fund" },
  { url: "/products", name: "Long Term Note" },
  { url: "/products", name: "GDL Income Fund" },
];

export const resourceLinks = [
  { url: "/blog", name: "Blog" },
  { url: "/career", name: "Career" },
  { url: "/testimonials", name: "Testimonials" },
  { url: "/media", name: "Media" },
  { url: "/research", name: "Research" },
  { url: "/faq", name: "FAQs" },
  { url: "/contact", name: "Contact" },
];
