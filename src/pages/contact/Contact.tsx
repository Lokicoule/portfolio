import PageTitle from "../../shared/components/page-title/PageTitle";
import { contactController } from "../../shared/composition";
import { NotificationService } from "../../shared/notifications/notificationsService";
import ContactFormView from "./components/ContactFormView";
import { ContactFormProps } from "./domainObjects/ContactForm";

const Contact = () => {
  const handleSubmit = (data: ContactFormProps) => {
    contactController.submitContactForm(data);
  };

  return (
    <>
      <PageTitle title="Contact" />
      {NotificationService.makeNotifiable(
        <div className="pt-12">
          <h2 className="page-title mt-12  lg:mt-0 mb-12 md:mb-[30px]">
            Contact
          </h2>
          <div className="mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#212425] dark:border-2 bg-blue-50 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]">
            <h3 className="text-4xl leading-tight bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 inline-block text-transparent bg-clip-text">
              <span>
                Toujours prêt à discuter conception et architecture logicielle,
              </span>
              <br />
              <span className="font-semibold">
                en particulier dans le domaine du Web 3.0
              </span>
            </h3>
            <ContactFormView onSubmit={handleSubmit} />
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
