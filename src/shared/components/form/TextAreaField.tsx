import React from "react";

interface TextAreaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  maxLength?: number;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  name,
  value,
  onChange,
  required = false,
  rows = 3,
  maxLength,
}) => {
  return (
    <div className="relative z-0 w-full mb-10 group text-sm ">
      <textarea
        name={name}
        className="block autofill:bg-transparent py-2.5 px-0 w-full text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:gradient-underline-fixed focus-no-outline peer"
        onChange={onChange}
        value={value}
        required={required}
        rows={rows}
        maxLength={maxLength}
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-tertiary transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 duration-300 transition-all"
      >
        {label} {required && "*"}
      </label>
    </div>
  );
};

export default TextAreaField;