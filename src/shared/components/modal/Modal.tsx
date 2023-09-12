import { Dialog } from "@headlessui/react";
import { PropsWithChildren, cloneElement, useState } from "react";
import { BsXCircle } from "react-icons/bs";

type ModalProps = PropsWithChildren<{
  triggerButton: React.ReactElement;
  className?: string;
}>;

type ModalChildrenComponent = React.FC<
  PropsWithChildren<{
    className?: string;
  }>
>;

type ModalComponent = React.FC<ModalProps> & {
  Title: ModalChildrenComponent;
  Content: ModalChildrenComponent;
};

const Modal: ModalComponent = ({ triggerButton, children, className }) => {
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
              className={`bg-white dark:bg-[#05151e] shadow-gray-800 relative rounded-xl shadow-lg p-4 md:p-8 w-full md:w-10/12 lg:w-[850px] z-50`}
            >
              <div className="overflow-y-scroll max-h-[80vh] no-scrollbar">
                <BsXCircle
                  onClick={handleClose}
                  className="text-4xl cursor-pointer absolute -top-12 md:-right-10 md:-top-6 z-50 text-white transition transform hover:rotate-45 duration-300 ease-in-out"
                />
                <Dialog.Panel className={className} as="div">
                  {children}
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
