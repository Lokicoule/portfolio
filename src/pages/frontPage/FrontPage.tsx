import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoGmail,
  BiDownload,
} from "react-icons/bi";
import {
  MdLocationOn,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import Footer from "../../shared/components/Footer/Footer";

const Hero = () => {
  return (
    <div className="col-span-12 lg:col-span-4 lg:h-screen lg:sticky top-44">
      <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
        <img
          src="/public/avatar.jpg"
          className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px] hover:drop-shadow-2xl transition duration-150 brightness-125 grayscale contrast-125 hover:brightness-100 hover:grayscale-0 hover:contrast-100"
          alt="Avatar"
        />
        <div className="pt-[100px] pb-8">
          <h1 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
            Loik Fekkai
          </h1>
          <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
            Full Stack Developer
          </h3>
          <div className="flex justify-center space-x-3">
            <a
              className="bg-[#F0F0F0] rounded-xl p-2 hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 transform hover:text-white transition duration-150"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoLinkedin className="w-6 h-6" />
            </a>
            <a
              className="bg-[#F0F0F0] rounded-xl p-2 hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 hover:text-white transition duration-150"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoGithub className="w-6 h-6" />
            </a>
          </div>
          <div className="bg-gray-700 rounded-xl p-8 mt-8">
            <div className="flex py-2.5 border-b border-gray-1OO dark:border-gray-600">
              <span className="flex-shrink-0 socialbtn bg-gray-800 rounded-xl p-2 hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 transform hover:text-white transition duration-150">
                <MdLocationOn className="w-6 h-6" />
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-gray-400">Localisation</p>
                <p className="text-white">Paris, France</p>
              </div>
            </div>
            <div className="flex py-2.5">
              <span className="flex-shrink-0 socialbtn bg-gray-800 rounded-xl p-2 hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 transform hover:text-white transition duration-150">
                <BiLogoGmail className="w-6 h-6" />
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-white">
                  <a
                    className="hover:text-blue transition duration-150"
                    href="mailto:loikfekkai@gmail.com"
                  >
                    loikfekkai@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <button className="mt-10 p-3 inline-flex items-center mx-auto rounded-[30px] text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 hover:bg-grey-4OO">
            <BiDownload className="w-6 h-6" />
            <p className="text-xl ml-2 text-white indent-2">Download CV</p>
          </button>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="col-span-12 lg:col-span-8">
      <header className="lg:w-[526px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold">About me</h2>
          <div className="flex space-x-3">
            <button className="bg-[#F0F0F0] rounded-xl p-2 hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 transform hover:text-white transition duration-150">
              <MdOutlineDarkMode className="w-6 h-6" />
            </button>
            <button className="bg-[#F0F0F0] rounded-xl p-2 hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 transform hover:text-white transition duration-150">
              <MdOutlineLightMode className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
      <div className="bg-white dark:bg-[#111111] rounded-[20px] p-6 mt-6 lg:mt-0">
        <h2 className="text-3xl font-semibold mb-4">About me</h2>
        <p className="text-[#7B7B7B] dark:text-[#A6A6A6]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          vestibulum, nisi vel aliquam ultricies, nunc massa vehicula lectus, eu
          commodo odio nisl eget urna. Nulla facilisi. Duis euismod, ipsum vitae
          aliquam aliquet, turpis nisi ultrices justo, quis ultricies sapien
          velit eget augue. Nulla facilisi. Duis euismod, ipsum vitae aliquam
          aliquet, turpis nisi ultrices justo, quis ultricies sapien velit eget
          augue.
        </p>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="w-full bg-[#F3F6F6] dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5 lg:px-0 lg:pt-[50px] px-4">
      <div className="w-full flex justify-between">
        <img src="/public/logo.png" className="w-10 h-10" alt="Logo" />
        <div className="w-full flex items-center space-x-3">
          <button className="bg-[#F0F0F0] rounded-full p-2 hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 transform hover:text-white transition duration-150">
            <MdOutlineDarkMode className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function FrontPage() {
  return (
    <section className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 md:pb-16">
      <div className="flex flex-col justify-center items-center">
        <Header />
        <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
          <Hero />
          <About />
        </div>
      </div>
      <Footer />
    </section>
  );
}
