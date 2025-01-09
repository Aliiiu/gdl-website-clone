"use client";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineStock } from "react-icons/ai";
import Menu from "../assets/menu";
import MenuClose from "../assets/menu-close";
import {
  IoBriefcaseOutline,
  IoBulbOutline,
  IoCallOutline,
  IoChatboxOutline,
  IoChevronForward,
  IoCubeOutline,
  IoFilmOutline,
  IoHeartHalfOutline,
  IoHelp,
  IoHomeOutline,
  IoIdCardOutline,
  IoMailOpenOutline,
  IoPeopleCircleOutline,
  IoPersonCircleOutline,
  IoRocketOutline,
  IoShapesOutline,
  IoTelescopeOutline,
} from "react-icons/io5";
import { FaMoneyBill, FaHandHoldingUsd } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiMoneyStack, GiTakeMyMoney } from "react-icons/gi";
import { RiFundsBoxFill } from "react-icons/ri";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const [urlstate, _] = useState({
    home: true,
    about: false,
    products: false,
    "finance & Leasing": false,
    "asset management": false,
    stockbrokers: false,
    resources: false,
    contact: false,
  });
  const [value, setValue] = useState(0);
  const checkScroll = () => {
    const header = document.querySelector("header");

    if (header) {
      if (window.innerWidth <= 768) {
        header.style.backgroundColor = "#fff";
      }
      if (window.scrollY > 30 || open) {
        header.classList.add("bg-white");
        header.classList.add("dark:bg-gray-900");
        header.classList.add("shadow-md");
      } else {
        header.classList.remove("bg-white");
        header.classList.remove("dark:bg-gray-900");
        header.classList.remove("shadow-md");
      }
    }
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (open) {
        body.classList.add("overflow-hidden");
      } else {
        body.classList.remove("overflow-hidden");
      }
    }
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [open]);

  return (
    <header
      className={
        "z-30 sticky top-0 right-0 left-0 border-gray-200 w-full dark:border-gray-600 transition ease-in-out duration-500"
      }
    >
      <Transition
        show={open}
        enter="transition ease-out duration-500"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
      >
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          className="bg-[#1F1A17] bg-opacity-80 top-0 left-0 mt-[60px] right-0 bottom-0 fixed Overlay h-[100vh] overflow-y-scroll"
          data-v-0ab2563a=""
          onClick={() => setOpen(!open)}
        />
        <nav
          className={`container px-4 xl:px-28 mx-auto fixed top-0 left-0 mt-[68px] md:w-[66.666667%] w-full ${
            open ? "animate-slide-down" : "animate-slide-up"
          }`}
        >
          <div className="flex bg-white dark:bg-gray-800 w-full rounded-lg">
            <ul className="w-2/5 md:1/4 mt-[1rem] h-full border-r-[1px] border-opacity-[0.1] border-[rgba(194,207,214,var(--tw-border-opacity))]">
              {Object.keys(urlstate).map((content, index) => (
                <NavLink
                  key={crypto.randomUUID()}
                  name={content}
                  className={`${index === value ? "selected " : ""} capitalize`}
                  onClick={() => setValue(index)}
                />
              ))}
            </ul>
            <div className="w-3/5 md:w-3/4 overflow-y-auto rounded-tr-lg rounded-br-lg px-6 py-4 min-h-[320px] max-h-[80vh] bg-[#f9f9f9] transition-all duration-[.3s]">
              <div className="flex flex-wrap md:-mx-2 -mx-4 transition">
                {homeLinks[value]?.map(content => (
                  <HomeLink key={content.name} {...content} setOpen={setOpen} />
                ))}
              </div>
            </div>
          </div>
        </nav>
      </Transition>
      <div
        className={
          "container flex justify-center bg-white px-4 xl:px-28 mx-auto"
        }
      >
        <div className="bg-white w-full animate-fade-in">
          <nav className="py-2 z-20 top-0 left-0">
            <div className="w-full flex justify-between items-center mx-auto">
              <div className="flex items-center">
                <div className="flex items-center gap-4 lg:justify-start justify-between">
                  <button
                    data-collapse-toggle="navbar-sticky"
                    type="button"
                    className="hidden lg:inline-flex items-center lg:p-2 lg:px-0 p-0 text-sm text-black rounded-lg focus:outline-none focus:ring-0 focus:ring-gray-200 dark:text-white dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky"
                    aria-expanded="false"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Open main menu</span>
                    {!open ? <Menu /> : <MenuClose />}
                  </button>
                  <Link href="/">
                    <Image
                      width={30}
                      height={40}
                      alt="GDL Logo"
                      src="https://res.cloudinary.com/gdlapp/image/upload/v1625500547/image/gdllogo.svg.svg"
                    />
                  </Link>
                </div>
                <div
                  className="hidden justify-between items-center md:flex"
                  id="navbar-sticky"
                >
                  <ul className="flex flex-col p-4 py-2 mt-4 lg:mx-7 md:flex-row gap-x-6 md:gap-x-6 xl:gap-x-6 2xl:gap-x-12 md:mt-0 lg:text-[15px] md:font-light md:border-0 text-gray-500 dark:text-gray-400 dark:border-gray-700">
                    <LinkList name="about" url="/about" />
                    <LinkList
                      name="finance & leasing"
                      url="/finance-and-leasing"
                    />
                    <LinkList name="asset mgt" url="/asset-management" />
                    <LinkList name="stockbrokers" url="/stockbrokers" />
                    <LinkList name="products" url="/products" />
                    <LinkList name="blog" url="/blog" />
                  </ul>
                </div>
              </div>
              <div className="hidden lg:flex gap-x-6 justify-end items-center">
                <a
                  href="https://app.gdl.com.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white font-light"
                >
                  Login
                </a>
                <Link
                  href="https://app.gdl.com.ng/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-2 bg-brand text-white px-4 py-2 rounded-md"
                >
                  <span>Create an Account</span>
                  <AiOutlineArrowRight className="font-thin text-sm" />
                </Link>
              </div>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="lg:hidden inline-flex items-center lg:p-2 lg:px-0 p-0 text-sm text-black rounded-lg focus:outline-none focus:ring-0 focus:ring-gray-200 dark:text-white dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open main menu</span>
                {!open ? <Menu /> : <MenuClose />}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Topbar;

const LinkList = ({ name, url }: { name: string; url: string }) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={`${url}`}
        className={`block py-2 sm:pr-4 no-underline ${
          pathname === url ? "text-second font-medium" : ""
        } hover:text-second hover:font-normal duration-500 ease-in-out hover:no-underline transition sm:pl-3 capitalize md:bg-transparent md:p-0`}
        aria-current="page"
      >
        {name}
      </Link>
    </li>
  );
};

const NavLink = ({
  name,
  className,
  onClick,
}: {
  name: string;
  className?: string;
  onClick: () => void;
}) => (
  <li>
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-base leading-6 font-light flex cursor-pointer items-center justify-between gap-2 border-b border-[#C2CFD6]/20 py-3 px-4 [&.selected]:font-medium [&.selected]:bg-[#f9f9f9] ${className}`}
    >
      <span className="text-left">{name}</span>{" "}
      <IoChevronForward className="text-[#ABA9A7] flex-shrink-0" />
    </button>
  </li>
);

const HomeLink = ({
  url,
  name,
  icon,
  subname,
  setOpen,
}: {
  url: string;
  name: string;
  icon: React.ReactNode;
  subname: string;
  setOpen: (open: boolean) => void;
}) => (
  <Link
    href={`${url}`}
    className="mt-2 md:mt-3 mb-3 md:mb-6 w-full md:w-1/2 px-2 flex cursor-pointer items-center justify-start"
    onClick={() => setOpen(false)}
  >
    <div>
      <div className="h-8 w-8 md:h-12 md:w-12 md:text-2xl text-base leading-8 md:leading-6 flex items-center justify-center rounded-full bg-[#FFD6DC]/50 md:bg-[#FFD6DC] text-[#992333] transition-all duration-300 ease-in-out">
        {icon}
      </div>
    </div>
    <div className="ml-4 flex flex-col items-start">
      <h3 className="font-semibold text-sm md:text-base">{name}</h3>
      <p className="text-xs md:block hidden text-left">{subname}</p>
    </div>
  </Link>
);

export const homeLinks = [
  [
    { name: "Home", subname: "GDL Home", icon: <IoHomeOutline />, url: "/" },
    {
      name: "Products",
      subname: "Some of our products",
      icon: <IoCubeOutline />,
      url: "/products",
    },
    {
      name: "Get Started",
      subname: "In Three Easy Steps",
      icon: <IoRocketOutline />,
      url: "/#get-started",
    },
    {
      name: "Testimonials",
      subname: "What people are saying",
      icon: <IoHeartHalfOutline />,
      url: "/testimonials",
    },
    {
      name: "Blog",
      subname: "Guides on Finance",
      icon: <IoBulbOutline />,
      url: "/blog",
    },
    {
      name: "Media",
      subname: "Our social participation",
      icon: <IoFilmOutline />,
      url: "/media",
    },
  ],
  [
    {
      name: "Corporate Information",
      subname: "What we stand for",
      icon: <IoPersonCircleOutline />,
      url: "/about#corporate-information",
    },

    {
      name: "Core Values",
      subname: "In Three Easy Steps",
      icon: <IoShapesOutline />,
      url: "/about#core-values",
    },

    {
      name: "Management Team",
      subname: "Guides on Finance",
      icon: <IoIdCardOutline />,
      url: "/about#management-team",
    },
    {
      name: "Board of Directors",
      subname: "Our social participation",
      icon: <IoPeopleCircleOutline />,
      url: "/about#board-of-directors",
    },
  ],
  [
    {
      name: "GDL Value Note",
      subname: "Get Better Value",
      icon: <FaMoneyBill />,
      url: "/products",
    },

    {
      name: "Financial Advisory",
      subname: "Don’t take on that big project alone; get a loan.",
      icon: <FaHandHoldingUsd />,
      url: "/products",
    },
    {
      name: "GDL Money Market Fund",
      subname: "Your savings redefined",
      icon: <FaMoneyBillTransfer />,
      url: "/products",
    },
    {
      name: "GDL Stockbroking",
      subname: "Stack your cash from stocks",
      icon: <AiOutlineStock />,
      url: "/products",
    },
    {
      name: "GDL Canary Fund",
      subname: "Find your balance",
      icon: <GiMoneyStack />,
      url: "/products",
    },
    {
      name: "GDL Long Term Note",
      subname: "Play the long game",
      icon: <RiFundsBoxFill />,
      url: "/products",
    },
    {
      name: "GDL Income Fund",
      subname: "There's no cap to your income growth",
      icon: <GiTakeMyMoney />,
      url: "/products",
    },
  ],
  [
    {
      name: "Corporate Information",
      subname: "What we stand for",
      icon: <IoPersonCircleOutline />,
      url: "/finance-and-leasing#corporate-information",
    },

    {
      name: "Management Team",
      subname: "Guides on Finance",
      icon: <IoIdCardOutline />,
      url: "/finance-and-leasing#management-team",
    },
    {
      name: "Board of Directors",
      subname: "Our social participation",
      icon: <IoPeopleCircleOutline />,
      url: "/finance-and-leasing#board-of-directors",
    },
    {
      name: "Products",
      subname: "Some of our products",
      icon: <IoCubeOutline />,
      url: "/finance-and-leasing#products",
    },
  ],
  [
    {
      name: "Corporate Information",
      subname: "What we stand for",
      icon: <IoPersonCircleOutline />,
      url: "/asset-management#corporate-information",
    },

    {
      name: "Management Team",
      subname: "Guides on Finance",
      icon: <IoIdCardOutline />,
      url: "/asset-management#management-team",
    },
    {
      name: "Board of Directors",
      subname: "Our social participation",
      icon: <IoPeopleCircleOutline />,
      url: "/asset-management#board-of-directors",
    },
    {
      name: "Products",
      subname: "Some of our products",
      icon: <IoCubeOutline />,
      url: "/asset-management#products",
    },
  ],
  [
    {
      name: "Corporate Information",
      subname: "What we stand for",
      icon: <IoPersonCircleOutline />,
      url: "/stockbrokers#corporate-information",
    },

    {
      name: "Management Team",
      subname: "Guides on Finance",
      icon: <IoIdCardOutline />,
      url: "/stockbrokers#management-team",
    },
    {
      name: "Board of Directors",
      subname: "Our social participation",
      icon: <IoPeopleCircleOutline />,
      url: "/stockbrokers#board-of-directors",
    },
    {
      name: "Products",
      subname: "Some of our products",
      icon: <IoCubeOutline />,
      url: "/stockbrokers#products",
    },
  ],
  [
    {
      name: "Blog",
      subname: "Guides on Finance",
      icon: <IoBulbOutline />,
      url: "/products",
    },

    {
      name: "Career",
      subname: "Join the tribe",
      icon: <IoBriefcaseOutline />,
      url: "/career",
    },

    {
      name: "Testimonials",
      subname: "What people are saying",
      icon: <IoHeartHalfOutline />,
      url: "/testimonial",
    },
    {
      name: "Media",
      subname: "Our social participation",
      icon: <IoFilmOutline />,
      url: "/media",
    },
    {
      name: "Research",
      subname: "Stay informed, Beat the odds",
      icon: <IoTelescopeOutline />,
      url: "/research",
    },
    {
      name: "FAQs",
      subname: "Frequently Asked Questions",
      icon: <IoHelp />,
      url: "/faq",
    },
  ],
  [
    {
      name: "Contact Us",
      subname: "Our Contact Information",
      icon: <IoChatboxOutline />,
      url: "/contact",
    },

    {
      name: "Write to Us",
      subname: "Send us an email",
      icon: <IoMailOpenOutline />,
      url: "/contact",
    },

    {
      name: "Call Us",
      subname: "Give us a call",
      icon: <IoCallOutline />,
      url: "/contact",
    },
  ],
];
