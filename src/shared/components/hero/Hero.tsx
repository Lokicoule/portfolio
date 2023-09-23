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
import HeroContactInfo from "./ContactInfo";

const socialLinks = [
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedinIn />,
    iconClassName: "text-[#0072b1] bg-secondary",
  },
  {
    href: "https://www.github.com/",
    icon: <FaGithub />,
    iconClassName: "text-[#0072b1] bg-secondary",
  },
];

const contactInfo = [
  {
    label: "Email",
    value: "loikfekkai@gmail.com",
    icon: <FaEnvelopeOpenText />,
    href: "mailto:loikfekkai@gmail.com",
  },
  {
    label: "Location",
    value: "Mimizan, France (40)",
    icon: <FaMapMarkerAlt />,
  },
  {
    label: "Birthday",
    value: "Sept 17, 1992",
    icon: <FaCalendarAlt />,
  },
];

const Hero = () => {
  return (
    <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-primary text-center px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
      <img
        src={img}
        className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px] hover:brightness-125 transition duration-200 ease-linear"
        alt="avatar"
        title="avatar"
        loading="lazy"
      />
      <div className="pt-[100px] pb-8">
        <h1 className="mt-6 mb-1 text-5xl font-semibold text-primary font-primary uppercase">
          Loik Fekkai
        </h1>
        <h3 className="rounded-lg mb-4 px-5 py-1.5 text-secondary bg-secondary inline-block capitalize">
          Software Engineer
        </h3>

        <div className="flex justify-center space-x-3">
          <HeroSocialLinks socialLinks={socialLinks} />
        </div>
        <div className="p-7 rounded-2xl mt-7 bg-secondary">
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
