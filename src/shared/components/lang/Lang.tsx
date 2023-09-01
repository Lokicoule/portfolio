import { LangController } from "./LangController";

type LangProps = {
  controller: LangController;
};

type LangComponent = React.FC<LangProps>;

const Lang: LangComponent = ({ controller }) => {
  const useLangController = controller.createHook();
  const { handleLanguageChange } = useLangController();

  return (
    <div className="flex items-center">
      <select
        className="bg-transparent text-white ml-2"
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
};

export default Lang;
