import { Fragment, PropsWithChildren, cloneElement, useState } from "react";
import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import { BsXCircle } from "react-icons/bs";

type ModalProps = {
  triggerButton: React.ReactElement;
  children: (props: { onClose: () => void }) => React.ReactNode;
};

type ModalComponent = React.FC<ModalProps> & {
  Title: React.FC<PropsWithChildren>;
  Content: React.FC<PropsWithChildren>;
};

const Modal: ModalComponent = ({ triggerButton, children }) => {
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
        <Transition.Root show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed z-10 inset-0 overflow-y-auto"
            onClose={() => setIsOpen(false)}
          >
            <div className="flex items-center justify-center min-h-screen">
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
              <div className="relative bg-white dark:bg-[#323232] rounded-xl shadow-lg p-4 md:p-8 w-full md:w-10/12 lg:w-[850px] z-50">
                <div className="overflow-y-scroll max-h-[80vh] no-scrollbar">
                  <BsXCircle
                    onClick={handleClose}
                    className="text-4xl cursor-pointer absolute -top-12 md:-right-10 md:-top-6 z-50 text-white transition transform hover:rotate-45 duration-300 ease-in-out"
                  />

                  {children({ onClose: handleClose })}
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      ) : null}
    </>
  );
};

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=" sticky top-0 py-1  bg-white dark:bg-[#323232]">
      {children}
    </div>
  );
};

const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="p-4 md:p-8">{children}</div>;
};

Modal.Title = Title;
Modal.Content = Content;

export default Modal;
