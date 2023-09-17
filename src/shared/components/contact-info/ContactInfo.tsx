interface ContactInfo {
  label: string;
  value: string;
  color: string;
  icon: JSX.Element;
  iconClass: string;
  href?: string;
}

interface Props {
  contactInfo: ContactInfo[];
}

const ContactInfo: React.FC<Props> = ({ contactInfo }) => {
  return (
    <>
      {contactInfo.map((info, index) => (
        <div
          key={index}
          className={`flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5 ${
            index === contactInfo.length - 1 ? "" : "mb-2.5"
          }`}
        >
          <span
            className={`flex-shrink-0 btn-social bg-primary-light dark:bg-black ${info.iconClass} shadow-md`}
          >
            {info.icon}
          </span>
          <div className="text-left ml-2.5">
            <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
              {info.label}
            </p>
            {info.href ? (
              <p className="dark:text-white break-all">
                <a
                  className="hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 hover:inline-block hover:text-transparent hover:bg-clip-text"
                  href={info.href}
                >
                  {info.value}
                </a>
              </p>
            ) : (
              <p className="dark:text-white break-all">{info.value}</p>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
