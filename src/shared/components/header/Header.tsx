import ThemeMode from "../theme-mode/ThemeMode";

const Header = () => {
  return (
    <div className="container w-full bg-[#F3F6F6] dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5  lg:px-0 lg:pt-[50px]">
      <div className="w-full flex justify-between  px-4">
        <a href="/">
          <h1 className="text-2xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 inline-block text-transparent bg-clip-text font-bold hover:brightness-125 transition-all duration-300 ease-in-out">
            Lokicoule
          </h1>
        </a>
        <div className="flex items-center">
          <ThemeMode />
        </div>
      </div>
    </div>
  );
};

export default Header;