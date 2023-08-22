import React, { useState } from "react";
import { ContactFormProps } from "../domainObjects/ContactForm";

const ContactFormView: React.FC<{
  onSubmit: (props: ContactFormProps) => void;
}> = ({ onSubmit }) => {
  const [formState, setFormState] = useState<ContactFormProps>({
    email: "",
    name: "",
    message: "",
    title: "",
  });

  function onFormStateChanged(newState: string, field: string) {
    setFormState({
      ...formState,
      [field]: newState,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(formState);
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mt-[40px] mb-8 group">
        <input
          type="text"
          name="name"
          className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
          placeholder=" "
          required
          onChange={(e) => onFormStateChanged(e.target.value, "name")}
        />
        <label
          htmlFor="name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Nom *
        </label>
      </div>

      <div className="relative z-0 w-full mb-8 group">
        <input
          type="email"
          name="user_email"
          className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
          placeholder=" "
          id="user_email"
          required
          onChange={(e) => onFormStateChanged(e.target.value, "email")}
        />
        <label
          htmlFor="user_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Email *
        </label>
      </div>

      <div className="relative z-0 w-full mb-8 group">
        <input
          type="text"
          name="message"
          className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
          placeholder=" "
          id="message"
          required
          onChange={(e) => onFormStateChanged(e.target.value, "message")}
        />
        <label
          htmlFor="message"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Message *
        </label>
      </div>

      <div className="transition-all duration-300  ease-in-out inline-block hover:bg-gradient-to-r from-sky-400 to-blue-600 rounded-lg  mt-3">
        <input
          type="submit"
          className=" transition ease-in duration-200 font-semibold cursor-pointer border-color-910   hover:border-transparent px-6  py-2 rounded-lg border-[2px]  hover:text-white   dark:text-white "
          value="Submit"
        />
      </div>
    </form>
  );
};

export default ContactFormView;
