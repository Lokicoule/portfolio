import { Popover, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { LangController } from "./LangController";
import { LangPresenter } from "./LangPresenter";
import { LangViewModel } from "./LangViewModel";

type LangViewProps = {
  controller: LangController;
  presenter: LangPresenter;
};

type LangViewComponent = React.FC<LangViewProps>;

const LangView: LangViewComponent = ({ controller, presenter }) => {
  const useLangController = controller.createHook();
  const { handleLanguageChange } = useLangController();

  const [viewModel, setViewModel] = useState<LangViewModel | undefined>();

  useEffect(() => {
    presenter.load((vm) => setViewModel(vm));

    //return () => presenter.unload();
  }, [presenter]);

  if (!viewModel) {
    return null;
  }

  return (
    <div className="flex items-center">
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={` text-white group bg-transparent rounded-md inline-flex items-center font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>{viewModel.lang === "fr" ? "FR" : "EN"}</span>
              <FiChevronUp
                className={`
                ${open ? "rotate-180 transform" : ""}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-6 px-5 py-6 bg-white dark:bg-[#05151e] backdrop-blur-sm">
                    {[
                      {
                        code: "en",
                        name: "English",
                      },
                      {
                        code: "fr",
                        name: "Français",
                      },
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang.code);
                          close();
                        }}
                        className={`
                        ${
                          viewModel.lang === lang.code
                            ? "bg-gradient-to-b from-sky-400 to-blue-500 "
                            : ""
                        }
                        flex items-start p-3 -m-3 rounded-lg hover:bg-gradient-to-b from-sky-400 to-blue-500 hover:text-white hover:brightness-125 transition ease-in-out duration-150`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center justify-between space-x-3 text-gray-900 dark:text-white">
                            <div
                              className={`font-medium  ${
                                viewModel.lang === lang.code ? "text-white" : ""
                              }`}
                            >
                              {lang.name}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default LangView;
