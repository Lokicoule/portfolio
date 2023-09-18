import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navigationPresenter } from "../../composition";
import Navigation from "../navigation/Navigation";

const MobileMenu: React.FC = () => {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="lg:hidden flex justify-center cursor-pointer w-10 h-10 bg-sky-to-blue rounded-full items-center text-xl hover:text-2xl text-white font-bold hover:brightness-125 transition-all duration-300 ease-in-out focus-no-outline">
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
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
                  ? "block rounded-b-[20px] shadow-md absolute left-0 top-20 z-50 w-full bg-primary-light dark:bg-[#030814]"
                  : "hidden"
              } lg:hidden`}
            >
              <ul className="flex flex-col">
                <Navigation
                  presenter={navigationPresenter}
                  defaultClassName="mobile-link-menu text-primary-light dark:text-primary-dark"
                  activeClassName="mobile-link-menu text-white linked bg-sky-to-blue"
                  iconClassName="text-xl mr-2"
                  onClick={close}
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
