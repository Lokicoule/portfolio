import { Link, useLocation } from "react-router-dom";
import { NavigationItemProps } from "./NavigationViewModel";

type NavItemProps = {
  item: NavigationItemProps;
  defaultClassName: string;
  activeClassName: string;
  iconClassName?: string;
  onClick?: () => void;
};

type NavigationItemComponent = React.FC<NavItemProps>;

const NavigationItem: NavigationItemComponent = ({
  item,
  defaultClassName,
  activeClassName,
  iconClassName,
  onClick,
}) => {
  const location = useLocation();
  const langPrefix = location.pathname.split("/")[1];
  const langPath =
    langPrefix === "en" || langPrefix === "fr" ? `/${langPrefix}` : "";

  const currentPath = location.pathname.replace(/\/$/, "");

  const isActive =
    currentPath === `${langPath}${item.routePath}`
      ? activeClassName
      : defaultClassName;

  return (
    <Link
      key={item.id}
      className={`${isActive} `}
      to={`${langPath}${item.routePath}`}
      onClick={onClick}
    >
      <span className={iconClassName}>{item.icon}</span>
      {item.name}
    </Link>
  );
};

export default NavigationItem;
