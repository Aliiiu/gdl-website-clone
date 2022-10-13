import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import MenuIcon, { MenuClose } from "../Widgets/Icons/Menu";

const TopbarDropdown = ({ theme, open, ...props }) => (
  <Menu
    as="div"
    className="flex lg:flex-row flex-row-reverse lg:flex-auto flex-1 items-center lg:justify-start justify-between"
  >
    <div>
      <Menu.Button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center lg:p-2 lg:px-0 p-0 text-sm text-black rounded-lg focus:outline-none focus:ring-0 focus:ring-gray-200 dark:text-white dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="false"
        // onClick={() => setOpen(!open)}
      >
        <span className="sr-only">Open main menu</span>
        {!open ? <MenuIcon theme={theme} /> : <MenuClose theme={theme} />}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100 z-20"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
      >
        <Menu.Items className="origin-top-left absolute left-0 mt-2 w-40 z-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="bg-white dark:bg-black rounded-lg p-6 px-4 lg:w-[69%] w-full animate-slide-down">
            wassa
          </div>
        </Menu.Items>
      </Transition>
    </div>
    <Link href="/">
      <a className="flex mx-4 justify-center font-title-font">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-7 sm:h-9 block"
          alt="Flowbite Logo"
        />
      </a>
    </Link>
  </Menu>
);

export default TopbarDropdown;
