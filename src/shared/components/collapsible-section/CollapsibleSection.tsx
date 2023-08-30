import { Disclosure } from "@headlessui/react";
import { FiChevronUp } from "react-icons/fi";

interface ICollapsibleSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CollapsibleSection: React.FC<ICollapsibleSectionProps> = ({
  icon,
  title,
  children,
  defaultOpen = false,
}) => {
  return (
    <Disclosure as="div" className="mt-2" defaultOpen={defaultOpen}>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
            <div className="flex items-center">
              {icon}
              {title}
            </div>
            <FiChevronUp
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-blue-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500 px-4 py-2">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default CollapsibleSection;
