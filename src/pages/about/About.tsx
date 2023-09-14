import PageLayout from "../../shared/components/layouts/PageLayout";
import { PiCodeLight } from "react-icons/pi";

const services = [
  {
    id: "1",
    icon: <PiCodeLight />,
    title: "Ui/Ux Design",
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    color: "#D566FF",
    bg: "#FCF4FF",
  },
  {
    id: "2",
    icon: <PiCodeLight />,
    title: "App Development",
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    color: "#DDA10C",
    bg: "#FEFAF0",
  },
  {
    id: "3",
    icon: <PiCodeLight />,
    title: "Photography",
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    color: "#8774FF",
    bg: "#FCF4FF",
  },
  {
    id: "4",
    icon: <PiCodeLight />,
    title: "Photography",
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    color: "#FF6080",
    bg: "#FFF4F4",
  },
  {
    id: "5",
    icon: <PiCodeLight />,
    title: "Managment",
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    color: "#FF75D8",
    bg: "#FFF0F8",
  },
  {
    id: "6",
    icon: <PiCodeLight />,
    title: "Web Development",
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    color: "#269FFF",
    bg: "#F3FAFF",
  },
];

const About = () => {
  return (
    <PageLayout title="About">
      <div className="container mx-auto px-4 md:px-10 lg:px-14">
        <p className="text-lg leading-8 mb-6 text-gray-500 dark:text-gray-400">
          I am a software engineer with a strong interest in software
          architecture and design. I am passionate about the Web and everything
          related to it. I am also interested in the{" "}
          <span className="font-semibold">Web 3.0</span> and the{" "}
          <span className="font-semibold">decentralized web</span>. I am always
          looking for new challenges and opportunities to learn new things.
        </p>
      </div>

      <section className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
        <h3 className="text-[35px] dark:text-white font-medium pb-5">
          What I do!
        </h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-[#05151e] rounded-xl p-8  dark:hover:shadow-xl transition duration-200 ease-in-out dark:hover:bg-[#121e26] border-[1px] border-gray-200 dark:border-gray-700 hover:bg-[#FAFAFA]"
            >
              <div className="flex items-center mb-5">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ background: `${service.bg}` }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: `${service.color}` }}
                  >
                    <span className="text-white text-2xl">{service.icon}</span>
                  </div>
                </div>
                <h4 className="text-xl font-medium dark:text-white">
                  {service.title}
                </h4>
              </div>
              <p className="text-gray-500 dark:text-gray-400">{service.des}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
