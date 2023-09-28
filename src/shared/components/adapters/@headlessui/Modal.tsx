import { Dialog } from "@headlessui/react";
import { PropsWithChildren, cloneElement, useState } from "react";
import { BsXCircle } from "react-icons/bs";

type ModalProps = {
  triggerButton: React.ReactElement;
  className?: string;
  panelClassName?: string;
  children: (props: {
    isOpen: boolean;
    handleClose: () => void;
  }) => React.ReactNode;
};

type ModalChildrenComponent = React.FC<
  PropsWithChildren<{
    className?: string;
  }>
>;

type ModalComponent = React.FC<ModalProps> & {
  Title: ModalChildrenComponent;
  Content: ModalChildrenComponent;
};

const Modal: ModalComponent = ({
  triggerButton,
  children,
  className,
  panelClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const trigger = cloneElement(triggerButton, {
    onClick: handleOpen,
  });

  return (
    <>
      {trigger}
      {isOpen ? (
        <Dialog
          as="div"
          open={isOpen}
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            <div
              className={`${className} relative p-4 md:p-8 z-50 bg-primary shadow-gray-900 rounded-xl shadow-none dark:shadow-lg`}
            >
              <div className="overflow-y-scroll max-h-[80vh] no-scrollbar">
                <BsXCircle
                  onClick={handleClose}
                  className="h-10 w-10 cursor-pointer absolute -bottom-12 right-1/2 transform translate-x-1/2 md:-right-10 md:-top-6 z-50 text-white transition transform hover:rotate-45 duration-300 ease-in-out focus-no-outline"
                  tabIndex={0}
                />
                <Dialog.Panel className={panelClassName} as="div">
                  {children({
                    isOpen,
                    handleClose,
                  })}
                </Dialog.Panel>
              </div>
            </div>
          </div>
        </Dialog>
      ) : null}
    </>
  );
};

const Title: ModalChildrenComponent = ({ children, className }) => {
  return (
    <Dialog.Title as="div" className={className}>
      {children}
    </Dialog.Title>
  );
};

const Content: ModalChildrenComponent = ({ children, className }) => {
  return (
    <Dialog.Description as="div" className={className}>
      {children}
    </Dialog.Description>
  );
};

Modal.Title = Title;
Modal.Content = Content;

export default Modal;
