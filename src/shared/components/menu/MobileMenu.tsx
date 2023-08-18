import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Navigation from "./Navigation";

const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      {!open ? (
        <button
          id="menu-button"
          className="lg:opacity-0 lg:invisible visible opacity-100  bg-sky-to-blue w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3 p-3"
          onClick={toggleMenu}
        >
          <AiOutlineMenu />
        </button>
      ) : (
        <button
          id="menu-button"
          className="lg:opacity-0 cursor-pointer lg:invisible visible opacity-100  bg-sky-to-blue w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 p-3"
          onClick={toggleMenu}
        >
          <AiOutlineClose />
        </button>
      )}
      <nav className={`${open ? "block lg:hidden" : "hidden"}`}>
        <ul
          className={`${
            open
              ? "block rounded-b-[20px] shadow-md absolute left-0 top-20 z-50 w-full backdrop-blur-xl bg-white/30"
              : "flex my-12 "
          }`}
        >
          <Navigation
            defaultClassName="mobile-link-menu"
            activeClassName="mobile-link-menu text-white linked bg-sky-to-blue"
            iconClassName="text-xl mr-2"
            onClick={toggleMenu}
          />
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;

/* import { Dialog, Transition, Menu } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Navigation from "./Navigation"; */
/* 
const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      {!open ? (
        <span
          onClick={toggleMenu}
          className="lg:opacity-0 lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3 "
        >
          <AiOutlineMenu />
        </span>
      ) : (
        <span
          onClick={toggleMenu}
          className="lg:opacity-0 cursor-pointer lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3"
        >
          <AiOutlineClose />
        </span>
      )}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25 dark:bg-gray-900 dark:bg-opacity-50 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full flex-col overflow-y-auto bg-white pb-12 shadow-xl sm:max-w-xs">
                <div className="flex px-4 pb-5 pt-5 justify-end sm:px-6 border-b border-gray-200 dark:border-gray-700 sm:hidden">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-full p-2 text-gray-400 btn-social bg-white"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <AiOutlineClose aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-2 mt-2">
                  <Navigation
                    defaultClassName="mobile-link-menu"
                    activeClassName="mobile-link-menu text-white linked bg-sky-to-blue"
                    iconClassName="text-xl mr-2"
                    onClick={toggleMenu}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default MobileMenu; */
