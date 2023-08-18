import PageTitle from "../../shared/components/page-title/PageTitle";
import ContactForm from "./ContactForm";
import { NotificationService } from "../../shared/notifications/notificationsService";

const Contact = () => {
  return (
    <>
      <PageTitle title="Contact" />
      {NotificationService.makeNotifiable(
        <div className="pt-12">
          <h2 className="page-title mt-12  lg:mt-0 mb-12 md:mb-[30px]">
            Contact
          </h2>
          <ContactForm />
        </div>
      )}
    </>
  );
};

export default Contact;
