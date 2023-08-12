import {
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import img from "/avatar.jpg";

const Hero = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/",
      icon: <FaLinkedinIn />,
      color: "#0072b1",
    },
    { href: "https://www.github.com/", icon: <FaGithub />, color: "#0072b1" },
  ];

  const contactInfo = [
    {
      label: "Email",
      value: "loikfekkai@gmail.com",
      color: "green-500",
      icon: <FaEnvelopeOpenText />,
      iconClass: "text-[#6AB5B9]",
      href: "mailto:loikfekkai@gmail.com",
    },
    {
      label: "Location",
      value: "Mimizan, France",
      color: "pink-500",
      icon: <FaMapMarkerAlt />,
      iconClass: "text-[#FD7590]",
    },
    {
      label: "Birthday",
      value: "Sept 17, 1992",
      color: "blue-500",
      icon: <FaCalendarAlt />,
      iconClass: "text-[#C17CEB]",
    },
  ];

  return (
    <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
      <img
        src={img}
        className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
        alt=""
      />
      <div className="pt-[100px] pb-8">
        <h1 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
          Loik Fekkai
        </h1>
        <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
          Software Engineer
        </h3>

        <div className="flex justify-center space-x-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-btn text-[#0072b1]">{link.icon}</span>
            </a>
          ))}
        </div>

        <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5 ${
                index === contactInfo.length - 1 ? "" : "mb-2.5"
              }`}
            >
              <span
                className={`flex-shrink-0 social-btn bg-white dark:bg-black ${info.iconClass} shadow-md`}
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
        </div>

        <a
          href={"#"}
          download
          className="inline-flex items-center mx-auto sky-to-blue-grad duration-200 transition ease-linear px-8 py-3 text-lg text-white rounded-[35px] mt-6 hover:opacity-90"
        >
          <FaDownload className="mr-2" />
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Hero;
