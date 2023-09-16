import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navigationPresenter } from "../../composition";
import Navigation from "../navigation/Navigation";
import { motion } from "framer-motion";

const MobileMenu: React.FC = () => {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button className="lg:opacity-0 lg:hidden visible opacity-100  bg-sky-to-blue w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-xl font-bold">
            <motion.div
              animate={{
                rotate: open ? 90 : 0,
                scale: open ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            </motion.div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200 delay-150"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-200 delay-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              static
              className={`${
                open
                  ? "block rounded-b-[20px] shadow-md absolute left-0 top-20 z-50 w-full bg-white dark:bg-[#05151e]"
                  : "hidden"
              } lg:hidden`}
            >
              <ul className="flex flex-col">
                <Navigation
                  presenter={navigationPresenter}
                  defaultClassName="mobile-link-menu text-black dark:text-white"
                  activeClassName="mobile-link-menu text-white linked bg-sky-to-blue"
                  iconClassName="text-xl mr-2"
                />
              </ul>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default MobileMenu;
