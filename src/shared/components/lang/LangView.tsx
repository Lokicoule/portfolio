import { useState, useEffect } from "react";
import { LangController } from "./LangController";
import { LangPresenter } from "./LangPresenter";
import { LangViewModel } from "./LangViewModel";

type LangViewProps = {
  controller: LangController;
  presenter: LangPresenter;
};

type LangViewComponent = React.FC<LangViewProps>;

const LangView: LangViewComponent = ({ controller, presenter }) => {
  const useLangController = controller.createHook();
  const { handleLanguageChange } = useLangController();

  const [viewModel, setViewModel] = useState<LangViewModel | undefined>();

  useEffect(() => {
    presenter.load((vm) => {
      console.log("loaded lang presenter");
      console.log(vm);
      setViewModel(vm);
    });

    return () => {
      console.log("unloaded lang presenter");
      presenter.unload();
    };
  }, [presenter]);

  if (!viewModel) {
    return null;
  }

  return (
    <div className="flex items-center">
      <select
        className="bg-transparent text-white ml-2"
        onChange={handleLanguageChange}
        defaultValue={viewModel?.lang}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
};

export default LangView;
