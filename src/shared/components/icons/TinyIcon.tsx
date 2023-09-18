export type TinyIconProps = React.PropsWithChildren<{
  className?: string;
}>;

type TinyIconComponent = React.FC<TinyIconProps>;

const TinyIcon: TinyIconComponent = ({ children, className }) => {
  return (
    <div
      className={`w-10 h-10 rounded-lg flex justify-center items-center text-[#0072b1] bg-secondary hover:text-white hover:bg-gradient-to-b from-sky-400 to-blue-500 transition-colors duration-300 ease-in-out`}
    >
      <span className={className}>{children}</span>
    </div>
  );
};

export default TinyIcon;
