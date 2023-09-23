import PageLayout from "../../shared/components/layouts/PageLayout";
import { NotificationService } from "../../shared/notifications/notificationsService";
import { TranslatingService } from "../../shared/translating/translatingService";
import { ContactController } from "./ContactController";
import ContactFormView from "./components/ContactFormView";
import { ContactFormProps } from "./domainObjects/ContactForm";

type ContactContainerProps = {
  controller: ContactController;
  service: TranslatingService;
};
type ContactContainerComponent = React.FC<ContactContainerProps>;

const ContactContainer: ContactContainerComponent = ({
  controller,
  service,
}) => {
  const handleSubmit = async (data: ContactFormProps) => {
    await controller.submitContactForm(data);
  };

  return (
    <PageLayout
      title={service.translateAndSanitize("contact.title")}
      description={service.translateAndSanitize("contact.description.meta")}
      className="lg:rounded-2xl lg:bg-primary"
    >
      {NotificationService.makeNotifiable(
        <div className="mx-4 md:mx-[60px] p-4 md:p-16 border-1 border-primary bg-secondary rounded-xl bg-primary mb-[30px] md:mb-[60px]">
          <h3 className="text-4xl leading-tight bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 inline-block text-transparent bg-clip-text">
            {service.translateAndSanitize("contact.description.content")}
          </h3>
          <div className="mt-10">
            <ContactFormView onSubmit={handleSubmit} />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default ContactContainer;
