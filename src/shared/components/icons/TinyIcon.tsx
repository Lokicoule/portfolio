export type TinyIconProps = React.PropsWithChildren<{
  className?: string;
}>;

type TinyIconComponent = React.FC<TinyIconProps>;

const TinyIcon: TinyIconComponent = ({ children, className }) => {
  return (
    <div
      className={`w-10 h-10 rounded-lg flex justify-center items-center transition-colors duration-300 ease-in-out text-secondary-light dark:text-secondary-dark bg-secondary-light dark:bg-secondary-dark hover:bg-gradient-to-b from-sky-400 to-blue-500 hover:text-white `}
    >
      <span className={className}>{children}</span>
    </div>
  );
};

export default TinyIcon;