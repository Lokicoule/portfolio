import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../theme/ThemeProvider";
import { ModeController } from "./ModeController";

type ModeProps = {
  controller: ModeController;
};

type ModeComponent = React.FC<ModeProps>;

const Mode: ModeComponent = ({ controller }) => {
  const useModeController = controller.createHook();
  const { handleToggleTheme } = useModeController();
  const { mode } = useTheme();

  return (
    <button
      className="w-10 h-10 rounded-full flex justify-center cursor-pointer items-center lg:text-black text-white text-xl font-bold lg:bg-white lg:hover:text-white hover:text-2xl hover:bg-sky-to-blue transition-all duration-300 ease-in-out"
      onClick={handleToggleTheme}
    >
      {mode === "light" ? (
        <FiMoon className=" dark:hidden" />
      ) : (
        <FiSun className="hidden dark:block" />
      )}
    </button>
  );
};

export default Mode;
