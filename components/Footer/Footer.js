import Image from "next/image";
import { FooterBox } from "./footer.style";
import GDLlogo from "../../assets/images/gdllogo.svg.svg";
import Link from "next/link";
import {
  footerLinkData,
  companyLinks,
  productLinks,
  resourceLinks,
} from "../../utils/helper";

const Socials = ({ url, icon }) => (
  <Link href={url} target="_blank">
    <a className="mr-4 dark:text-white">{icon}</a>
  </Link>
);
const Companylink = ({ url, name }) => (
  <Link href={url} title={name}>
    <a className="leading-[32px] block text-sm">{name}</a>
  </Link>
);

const Footer = () => {
  return (
    <FooterBox className="bg-white dark:bg-gray-900">
      <section className="constraintlayout pb-5 mx-auto max-w-[1200px]">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full lg:w-1/4 mb-6 px-6">
            <div className="flex items-center justify-start mb-6">
              <img
                className="h-10"
                src="https://res.cloudinary.com/gdlapp/image/upload/v1625500547/image/gdllogo.svg.svg"
              />
              <div className="ml-3">
                <h1 className="md:text-lg font-bold text-base">GDL</h1>
                <h2 className="text-black dark:text-white text-sm">RC623338</h2>
              </div>
            </div>
            <h2 className="text-sm">Growth & Development Limited</h2>
            <hr className="border-grey border-opacity-50 mt-4 mb-6" />
            <div className="flex justify-start items-center my-3 text-sm text-black dark:text-white text-opacity-70">
              <h3>
                Lagos Office : No 1, Afolabi Lesi Street, Ilupeju, Lagos | Abuja
                Office : St James House (2nd floor), Plot 1109/No. 167 Cadastral
                Zone A08 Ademola Adetokunbo Crescent, Wuse ll, Abuja- Nigeria
              </h3>
            </div>
            <div className="flex justify-start items-center my-3 text-sm text-opacity-70">
              <Link href="tel:2348077946785">
                <a>+2347054435000</a>
              </Link>
              <Link href="tel:2348077946785">
                <a>
                  <span>,</span>+2347054435000
                </a>
              </Link>
            </div>
            <div className="flex justify-start items-center my-3 text-sm text-opacity-70">
              <Link href="mailto:customerservice@gdl.com.ng">
                <a>customerservice@gdl.com.ng</a>
              </Link>
            </div>
            <hr className="border-white border-opacity-10 mb-4 mt-6" />
            <div className="socials flex mt-6 justify-between items-center text-2xl">
              {footerLinkData.map(content => (
                <Socials {...content} />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 px-6">
            <h2 className="font-medium text-xl text-black dark:text-white text-opacity-40 md:font-bold">
              Company
            </h2>
            <div className="text-black dark:text-white">
              {companyLinks.map(content => (
                <Companylink {...content} />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 px-6">
            <h2 className="font-medium text-xl text-black dark:text-white text-opacity-40 md:font-bold">
              Products
            </h2>
            <div className="text-black dark:text-white">
              {productLinks.map(content => (
                <Companylink {...content} />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 px-6">
            <h2 className="font-medium text-xl text-black dark:text-white text-opacity-40 md:font-bold">
              Resources
            </h2>
            <div className="text-black dark:text-white">
              {resourceLinks.map(content => (
                <Companylink {...content} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="constraintlayout mx-auto max-w-[1200px]">
        <hr className="border-grey border-opacity-30 mt-4" />
        <div className="text-black dark:text-white text-opacity-50 my-8 text-base">
          <div>
            <p className="dark:text-white">
              Growth and Development Asset Management Limited (“GDL”) is a
              Limited Liability company registered with the Corporate Affairs
              Commission with RC Number: 623338. GDL and its subsidiary
              companies are regulated by the Securities & Exchange Commission,
              the Nigerian Stock Exchange and the Central Bank of Nigeria.
            </p>
          </div>
        </div>
        <hr className="border-grey border-opacity-30 mb-4" />
      </section>
      <section className="bg-black bg-opacity-0">
        <div className="constraintlayout mx-auto max-w-[1200px] text-sm py-5 md:py-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-black dark:text-white text-opacity-50 mb-5 md:mb-0">
            Copyright © 2022 GDL. All Rights Reserved.
          </div>
          <div className="flex items-center justify-end">
            <Link href="/terms-of-use">
              <a className="mr-3">Terms of Use</a>
            </Link>
            .
            <Link href="/privacy-policy">
              <a className="ml-3">Privacy Policy</a>
            </Link>
          </div>
        </div>
      </section>
    </FooterBox>
  );
};

export default Footer;
