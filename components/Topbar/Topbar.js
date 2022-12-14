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
import GDLlogo from "../../assets/images/gdllogo.svg.svg";
import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";
import { homeLinks } from "../../utils/helper";

const NavLink = ({ url, name, className, ...props }) => (
  <li onClick={props.onClick}>
    <a className={`${className}`}>
      {name} <IoChevronForward className="text-[#ABA9A7]" />
    </a>
  </li>
);

const HomeLink = ({ url, name, icon, subname, ...props }) => (
  <Link href={`${url}`}>
    <a className="sub-menu" onClick={() => props.setOpen(false)}>
      <div>
        <div className="icon">{icon}</div>
      </div>
      <div className="ml-4">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-xs md:block hidden">{subname}</p>
      </div>
    </a>
  </Link>
);

const Topbar = props => {
  const [mode, setMode] = useState(false);
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const router = useRouter();
  const [urlstate, setUrlState] = useState({
    home: true,
    about: false,
    products: false,
    resources: false,
    contact: false,
  });
  const [value, setValue] = useState(0);

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
  }, []);

  const checkScroll = () => {
    const header = document.querySelector("header");

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
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  return (
    <header
      className={`z-30 sticky top-0 right-0 left-0 border-gray-200 dark:border-gray-600 transition ease-in-out duration-500 justify-start items-center`}
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
        <OverlayDiv
          className="top-0 left-0 mt-[60px] right-0 bottom-0 fixed Overlay h-[100vh] overflow-y-scroll"
          data-v-0ab2563a=""
          onClick={() => setOpen(!open)}
        ></OverlayDiv>
        <nav
          className={`md:mx-[2rem] max-w-[1200px] px-[.5rem] mx-auto fixed top-0 left-0 mt-[68px] lg:w-[66.666667%] w-full ${
            open ? "animate-slide-down" : "animate-slide-up"
          }`}
        >
          <NavDiv className="flex bg-white dark:bg-gray-800 w-full rounded-lg">
            <ul className="left-nav mt-[1rem] h-full border-r-[1px] border-opacity-[0.1] border-[rgba(194,207,214,var(--tw-border-opacity))]">
              {Object.keys(urlstate).map((content, index) => (
                <NavLink
                  name={content}
                  className={`${index == value ? "selected " : ""} capitalize`}
                  onClick={() => setValue(index)}
                />
              ))}
            </ul>
            <div className="right-nav transition-all duration-[.3s]">
              <div className="flex flex-wrap md:-mx-2 -mx-4 transition">
                {homeLinks[value]?.map(content => (
                  <HomeLink {...content} setOpen={setOpen} />
                ))}
              </div>
            </div>
          </NavDiv>
        </nav>
      </Transition>
      <TopContainer className={`w-full`}>
        <div className="bg-transparent lg:w-4/6 w-full animate-fade-in">
          <nav className="py-2 z-20 top-0 left-0">
            <div className="container flex flex-wrap items-center mx-auto">
              <div className="flex lg:flex-row flex-row-reverse lg:w-auto w-full items-center lg:justify-start justify-between">
                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center lg:p-2 lg:px-0 p-0 text-sm text-black rounded-lg focus:outline-none focus:ring-0 focus:ring-gray-200 dark:text-white dark:focus:ring-gray-600"
                  aria-controls="navbar-sticky"
                  aria-expanded="false"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open main menu</span>
                  {!open ? <Menu theme={theme} /> : <MenuClose theme={theme} />}
                </button>
                <Link href="/">
                  <a className="flex items-center mx-4 flex-col justify-center font-title-font">
                    <img
                      className="h-10"
                      src="https://res.cloudinary.com/gdlapp/image/upload/v1625500547/image/gdllogo.svg.svg"
                    />
                  </a>
                </Link>
              </div>

              <div
                className="hidden flex-grow justify-between items-center md:flex md:order"
                id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 py-2 mt-4 lg:mx-7 md:flex-row md:space-x-12 md:mt-0 lg:text-[15px] md:font-light md:border-0 text-gray-500 dark:text-gray-400 dark:border-gray-700">
                  <LinkList name="about" url="/about" />
                  <LinkList name="product" url="/products" />
                  <LinkList name="blog" url="/blog" />
                </ul>
              </div>
              <div className="hidden flex-grow lg:flex gap-x-6 justify-end items-center">
                <div className="flex justify-start items-center">
                  <label
                    htmlFor="toggleB"
                    className="flex w-full items-center cursor-pointer"
                  >
                    <div className="w-4/5 flex justify-end">
                      <span className="mr-3 lg:text-sm text-sm uppercase font-light text-gray-900 dark:text-gray-400">
                        night
                      </span>
                    </div>

                    <div class="relative">
                      <input
                        type="checkbox"
                        checked={theme == "dark" ? true : false}
                        onChange={() => null}
                        id="toggleB"
                        className="sr-only"
                        onClick={() => {
                          setMode(!mode);
                          setTheme(theme == "dark" ? "light" : "dark");
                        }}
                      />
                      <div className="drawer block bg-gray-200 w-9 h-5 rounded-full"></div>
                      <div className="dot absolute left-0.5 top-0.5 bg-black dark:bg-white w-4 h-4 rounded-full transition"></div>
                    </div>
                  </label>
                </div>
                <Link href="/login">
                  <a className="text-black dark:text-white font-light">Login</a>
                </Link>
                <AppButton
                  name="Create an Account"
                  icon={<AiOutlineArrowRight className="font-thin text-sm" />}
                />
              </div>
            </div>
          </nav>
        </div>
      </TopContainer>
    </header>
  );
};

export default Topbar;
