import React, {
  ComponentPropsWithRef,
  MouseEventHandler,
  useRef,
  useState,
} from "react";

type TooltipProps = {
  text: string;
};

type TooltipComponent = React.FC<TooltipProps & ComponentPropsWithRef<"div">>;

const Tooltip: TooltipComponent = ({ children, text, ...rest }) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState<EventTarget | null>(null);
  const ref = useRef(null);

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (event) => {
    setTarget(event.currentTarget);
    setShow(true);
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setShow(false);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
      {show && target && (
        <div className="absolute z-10 bg-gray-700 text-white text-xs rounded p-2 bg-opacity-90 shadow-md">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
