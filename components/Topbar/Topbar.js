import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { TopContainer, OverlayDiv, NavDiv } from "./topbar.styles";
import LinkList from "../Widgets/Link/Link";
import Link from "next/link";
import { useTheme } from "next-themes";
import Menu, { MenuClose } from "../Widgets/Icons/Menu";
import { AppButton } from "../Widgets/Button/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/router";
import { IoChevronForward } from "react-icons/io5";
import { homeLinks } from "../../utils/helper";

const NavLink = ({ url, name, className, ...props }) => (
  <li>
    <button
      type="button"
      onClick={props.onClick}
      className={`w-full text-base leading-6 font-light flex cursor-pointer items-center justify-between gap-2 border-b border-[#C2CFD6]/20 py-3 px-4 [&.selected]:font-medium [&.selected]:bg-[#f9f9f9] ${className}`}
    >
      <span className="text-left">{name}</span>{" "}
      <IoChevronForward className="text-[#ABA9A7] flex-shrink-0" />
    </button>
  </li>
);

const HomeLink = ({ url, name, icon, subname, ...props }) => (
  <Link href={`${url}`}>
    <button
      type="button"
      className="mt-2 md:mt-3 mb-3 md:mb-6 w-full md:w-1/2 px-2 flex cursor-pointer items-center justify-start"
      onClick={() => props.setOpen(false)}
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
    </button>
  </Link>
);

const Topbar = props => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const router = useRouter();
  const [urlstate, setUrlState] = useState({
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

    if (window.innerWidth <= 768) {
      header.style.backgroundColor = "#fff";
    }
    if (window.scrollY > 30 || open) {
      header?.classList.add("bg-white");
      header?.classList.add("dark:bg-gray-900");
      header?.classList.add("shadow-md");
    } else {
      header?.classList.remove("bg-white");
      header?.classList.remove("dark:bg-gray-900");
      header?.classList.remove("shadow-md");
    }
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (open) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
    checkScroll();
  }, [open]);

  useEffect(() => {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    if (router.pathname === "/") {
      setColor(true);
    }
  }, [router.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

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
        <div
          className="top-0 left-0 mt-[60px] right-0 bottom-0 fixed Overlay h-[100vh] overflow-y-scroll bg-primary/80"
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
      <TopContainer className={"container bg-white px-4 xl:px-28 mx-auto"}>
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
                    {!open ? (
                      <Menu theme={theme} />
                    ) : (
                      <MenuClose theme={theme} />
                    )}
                  </button>
                  <Link href="/">
                    <button
                      type="button"
                      className="flex cursor-pointer items-center flex-col justify-center font-title-font"
                    >
                      <img
                        className="h-10"
                        alt="GDL Logo"
                        src="https://res.cloudinary.com/gdlapp/image/upload/v1625500547/image/gdllogo.svg.svg"
                      />
                    </button>
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
                <a
                  href="https://app.gdl.com.ng/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AppButton
                    name="Create an Account"
                    icon={<AiOutlineArrowRight className="font-thin text-sm" />}
                  />
                </a>
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
                {!open ? <Menu theme={theme} /> : <MenuClose theme={theme} />}
              </button>
            </div>
          </nav>
        </div>
      </TopContainer>
    </header>
  );
};

export default Topbar;
