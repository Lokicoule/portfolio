import { LangSelector } from "../lang";
import { LangController } from "../lang/LangController";
import { LangPresenter } from "../lang/LangPresenter";
import MobileMenu from "../menu/MobileMenu";
import ThemeModeSwitcher from "../theme/ThemeModeSwitcher";

type HeaderProps = {
  lang: {
    presenter: LangPresenter;
    controller: LangController;
  };
};

type HeaderComponent = React.FC<HeaderProps>;

const Header: HeaderComponent = ({ lang }) => {
  return (
    <header className="container w-full bg-transparent flex justify-between py-5 lg:px-0 lg:pt-[50px]">
      <div className="w-full flex justify-between px-4 items-center">
        <div className="lg:flex-grow hidden lg:flex" />
        <div className="flex space-x-5 lg:flex-row flex-row-reverse space-x-reverse lg:space-x-5 items-center">
          <LangSelector {...lang} />
          <ThemeModeSwitcher />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
