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
    <header className="container w-full bg-transparent flex justify-end py-5 lg:px-0 lg:pt-[50px]">
      <div className="flex items-center justify-end w-full">
        <div className="space-x-5 flex items-center">
          <Lang controller={langController} presenter={langPresenter} />
          <ModeSelector controller={modeController} />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
