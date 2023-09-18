import { navigationPresenter } from "../../composition";
import Navigation from "../navigation/Navigation";

const DesktopMenu = () => {
  const defaultClassName =
    "flex flex-col justify-center items-center w-full h-20 rounded-[10px] text-tertiary font-medium transition-all duration-300 ease-in-out bg-secondary hover:bg-tertiary";

  return (
    <header className="hidden lg:block">
      <nav className="lg:w-[526px] h-[144px] p-[30px] ml-auto mb-10 rounded-[16px] bg-primary">
        <ul className={`flex space-x-2`}>
          <Navigation
            presenter={navigationPresenter}
            defaultClassName={defaultClassName}
            activeClassName={`${defaultClassName} text-white bg-gradient-to-b from-sky-400 to-blue-500 `}
            iconClassName="text-xl mb-1"
          />
        </ul>
      </nav>
    </header>
  );
};

export default DesktopMenu;
