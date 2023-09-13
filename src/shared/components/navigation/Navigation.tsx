import { useEffect, useState } from "react";
import NavigationItem from "./NavigationItem";
import { NavigationPresenter } from "./NavigationPresenter";
import { NavigationViewModel } from "./NavigationViewModel";

type NavigationProps = {
  presenter: NavigationPresenter;
  defaultClassName: string;
  activeClassName: string;
  iconClassName?: string;
  onClick?: () => void;
};

type NavigationComponent = React.FC<NavigationProps>;

const Navigation: NavigationComponent = ({
  defaultClassName,
  activeClassName,
  iconClassName,
  onClick,
  presenter,
}) => {
  const [viewModel, setViewModel] = useState<NavigationViewModel | undefined>();

  useEffect(() => {
    presenter.load((vm) => setViewModel(vm));
  }, [presenter]);

  if (!viewModel) {
    return null;
  }

  return (
    <>
      {viewModel.items.map((item) => (
        <NavigationItem
          key={item.id}
          item={item}
          defaultClassName={defaultClassName}
          activeClassName={activeClassName}
          iconClassName={iconClassName}
          onClick={onClick}
        />
      ))}
    </>
  );
};

export default Navigation;
