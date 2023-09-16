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
      className="w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center lg:text-black text-white text-xl font-bold lg:bg-white hover:bg-sky-to-blue transition-all duration-300 ease-in-out lg:hover:text-white hover:text-gray-300"
      onClick={handleToggleTheme}
    >
      {mode === "light" ? (
        <FiMoon className="text-2xl dark-mode-light dark:hidden" />
      ) : (
        <FiSun className="text-2xl dark-mode-dark hidden  fill-jacarta-700  group-hover:fill-white group-focus:fill-white dark:block dark:fill-white " />
      )}
    </button>
  );
};

export default Mode;
