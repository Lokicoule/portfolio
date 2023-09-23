type FilterWorksListProps = {
  onFilterChange: (event: React.MouseEvent<HTMLLIElement>) => void;
  filter?: string;
};

type FilterWorksListComponent = React.FC<FilterWorksListProps>;

const FilterWorksList: FilterWorksListComponent = ({
  onFilterChange,
  filter,
}) => {
  return (
    <ul className="flex w-full justify-center flex-wrap font-medium pb-6 space-x-8 font-primary">
      <li
        data-filter="all"
        onClick={onFilterChange}
        className={`text-secondary cursor-pointer ${
          filter === "all"
            ? "gradient-underline-animation"
            : "gradient-underline-animation-secondary"
        }`}
      >
        All
      </li>
      <li
        data-filter="backend"
        onClick={onFilterChange}
        className={`text-secondary cursor-pointer ${
          filter === "backend"
            ? "gradient-underline-animation"
            : "gradient-underline-animation-secondary"
        }`}
      >
        Backend
      </li>
      <li
        data-filter="frontend"
        onClick={onFilterChange}
        className={`text-secondary cursor-pointer ${
          filter === "frontend"
            ? "gradient-underline-animation"
            : "gradient-underline-animation-secondary"
        }`}
      >
        Frontend
      </li>
      <li
        data-filter="tools"
        onClick={onFilterChange}
        className={`text-secondary cursor-pointer ${
          filter === "tools"
            ? "gradient-underline-animation"
            : "gradient-underline-animation-secondary"
        }`}
      >
        Tools
      </li>
    </ul>
  );
};

export default FilterWorksList;
