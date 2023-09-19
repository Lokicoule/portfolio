import PageLayout from "../../shared/components/layouts/PageLayout";
import { contactController } from "../../shared/composition";
import { NotificationService } from "../../shared/notifications/notificationsService";
import ContactFormView from "./components/ContactFormView";
import { ContactFormProps } from "./domainObjects/ContactForm";

type ContactContainerComponent = React.FC;

const ContactContainer: ContactContainerComponent = () => {
  const handleSubmit = async (data: ContactFormProps) => {
    await contactController.submitContactForm(data);
  };

  return (
    <PageLayout title="Contact">
      {NotificationService.makeNotifiable(
        <div className="mx-4 md:mx-[60px] p-4 md:p-16 border-1 border-primary bg-blue-50 rounded-xl bg-primary mb-[30px] md:mb-[60px]">
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
      )}
    </PageLayout>
  );
};

export default ContactContainer;