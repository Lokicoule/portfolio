import { useState } from "react";
import { useAsyncCallback } from "../../../shared/hooks/useAsyncCallback";
import { ContactFormProps } from "../domainObjects/ContactForm";
import TextInputField from "../../../shared/components/form/TextInputField";
import TextAreaField from "../../../shared/components/form/TextAreaField";
import { BsSendCheck } from "react-icons/bs";

export interface ContactFormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface ContactFormElement extends HTMLFormElement {
  readonly elements: ContactFormElements;
}

interface ContactFormViewProps {
  onSubmit: (data: ContactFormProps) => Promise<void>;
}

const ContactFormView: React.FC<ContactFormViewProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormProps>({
    name: "",
    email: "",
    message: "",
  });
  const [{ isLoading, isSuccessful }, sendMessage] = useAsyncCallback(onSubmit);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<ContactFormElement>) => {
    event.preventDefault();

    await sendMessage(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInputField
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        min={2}
        max={50}
        required
      />
      <TextInputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextAreaField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        minLength={10}
        maxLength={500}
      />

      {!isSuccessful ? (
        <div className="inline-block rounded-lg mt-3 hover:bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300  ease-in-out">
          <button
            className="font-semibold border-primary hover:border-transparent px-6  py-2 rounded-lg border-[2px] text-primary hover:text-white transition ease-in duration-200 "
            type="submit"
            disabled={isLoading || isSuccessful}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </div>
      ) : (
        <span className="text-green-500 p-2 rounder-lg">
          <BsSendCheck className="inline-block mr-2 text-xl" />
          Message sent successfully!
        </span>
      )}
    </form>
  );
};

export default ContactFormView;
