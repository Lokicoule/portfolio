import { Modal } from "../adapters/@headlessui";

type ConfirmModalProps = {
  triggerButton: React.ReactElement;
  onConfirm: () => void;
  className?: string;
  title?: string;
  content?: string;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  triggerButton,
  onConfirm,
  className,
  title = "Confirmation",
  content = "Are you sure you want to proceed ?",
}) => {
  return (
    <Modal triggerButton={triggerButton} className={className}>
      {({ handleClose }) => (
        <>
          <Modal.Title className="text-xl font-semibold">{title}</Modal.Title>
          <Modal.Content>
            <p>{content}</p>
            <div className="flex justify-end mt-4 space-x-3">
              <div className="inline-block rounded-md hover:bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300  ease-in-out">
                <button
                  className="font-semibold border-primary hover:border-transparent px-4 py-2 rounded-md border-[2px] text-primary hover:text-white transition ease-in duration-200 "
                  onClick={() => {
                    onConfirm();
                    handleClose();
                  }}
                >
                  Confirm
                </button>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </Modal.Content>
        </>
      )}
    </Modal>
  );
};

export default ConfirmModal;
