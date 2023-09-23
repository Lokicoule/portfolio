export type IconWrapperProps = React.PropsWithChildren<{
  className?: string;
}>;

type IconWrapperComponent = React.FC<IconWrapperProps>;

const IconWrapper: IconWrapperComponent = ({ children, className }) => {
  return (
    <span
      className={`${className} w-10 h-10 rounded-lg flex justify-center items-center hover:text-white hover:bg-gradient-to-b from-sky-400 to-blue-500 transition-colors duration-300 ease-in-out`}
    >
      {children}
    </span>
  );
};

export default IconWrapper;
