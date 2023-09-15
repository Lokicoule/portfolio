import {
  langController,
  langPresenter,
  modeController,
} from "../../composition";
import { Lang } from "../lang";
import MobileMenu from "../menu/MobileMenu";
import ModeSelector from "../mode/Mode";

const Header = () => {
  return (
    <header className="container w-full bg-transparent  flex justify-between py-5 lg:px-0 lg:pt-[50px]">
      <div className="w-full flex justify-between px-4">
        <div className="flex-grow" />
        <div className="flex items-center">
          <ModeSelector controller={modeController} />
          <Lang controller={langController} presenter={langPresenter} />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
