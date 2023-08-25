import { toast, ToastContainer } from "react-toastify";
import { Notification } from "./Notification";

export class NotificationService {
  public showToast(notification: Notification) {
    toast(notification.getMessage(), {
      toastId: notification.getId().getValue(),
      type: notification.getType(),
    });
  }

  public updateToast(notification: Notification) {
    toast.update(notification.getId().getValue(), {
      render: notification.getMessage(),
      type: notification.getType(),
    });
  }

  public static makeNotifiable(children: JSX.Element) {
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {children}
      </>
    );
  }
}
