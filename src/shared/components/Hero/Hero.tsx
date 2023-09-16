import {
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import img from "/avatar.jpg";
import HeroSocialLinks from "../social-links/SocialLinks";
import HeroContactInfo from "../contact-info/ContactInfo";

const Hero = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/",
      icon: <FaLinkedinIn />,
      iconClass: "text-[#0072b1]",
    },
    {
      href: "https://www.github.com/",
      icon: <FaGithub />,
      iconClass: "text-[#0072b1]",
    },
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
    <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-primary text-center dark:bg-primary-dark px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
      <img
        src={img}
        className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px] hover:brightness-125 transition duration-200 ease-linear"
        alt=""
        loading="lazy"
      />
      <div className="pt-[100px] pb-8">
        <h1 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
          Loik Fekkai
        </h1>
        <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-secondary-dark px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
          Software Engineer
        </h3>

        <div className="flex justify-center space-x-3">
          <HeroSocialLinks socialLinks={socialLinks} />
        </div>
        <div className="p-7 rounded-2xl mt-7 bg-secondary dark:bg-secondary-dark">
          <HeroContactInfo contactInfo={contactInfo} />
        </div>

        <a
          href={"#"}
          download
          className="inline-flex items-center mx-auto bg-sky-to-blue duration-200 transition ease-linear px-8 py-3 text-lg text-white rounded-[35px] mt-6 hover:brightness-125"
        >
          <FaDownload className="mr-2" />
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Hero;
