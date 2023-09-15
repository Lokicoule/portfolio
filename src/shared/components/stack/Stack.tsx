import { FiCode, FiLayout, FiPackage, FiServer, FiTool } from "react-icons/fi";
import { SiMaterialdesignicons } from "react-icons/si";

export interface StackProps {
  languages?: string[];
  frameworks?: string[];
  libraries?: string[];
  tools?: string[];
  architectures?: string[];
  databases?: string[];
  tag?: {
    className: string;
  };
}

type StackComponent = React.FC<StackProps>;

const Stack: StackComponent = ({
  languages,
  frameworks,
  libraries,
  tools,
  architectures,
  databases,
  tag,
}) => {
  const stackItems = [
    {
      title: "Languages",
      icon: <FiCode className="inline-block mr-2" />,
      items: languages,
    },
    {
      title: "Frameworks",
      icon: <FiLayout className="inline-block mr-2" />,
      items: frameworks,
    },
    {
      title: "Libraries",
      icon: <FiPackage className="inline-block mr-2" />,
      items: libraries,
    },
    {
      title: "Databases",
      icon: <FiServer className="inline-block mr-2" />,
      items: databases,
    },
    {
      title: "Tools",
      icon: <FiTool className="inline-block mr-2" />,
      items: tools,
    },
    {
      title: "Architectures",
      icon: <SiMaterialdesignicons className="inline-block mr-2" />,
      items: architectures,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      <ul className="list-none space-y-2 lg:mr-6">
        {stackItems.map(
          (stackItem) =>
            stackItem.items && (
              <li key={stackItem.title} className="flex items-center">
                <span className="dark:text-white flex items-center">
                  {stackItem.icon}
                  <span className="ml-2 font-medium">{stackItem.title}:</span>
                </span>
                <div className="flex flex-wrap ml-2">
                  {stackItem.items.map((item, i) => (
                    <span
                      key={i}
                      className={`${
                        tag?.className || "tag"
                      } px-2 py-1 rounded-full text-sm font-medium mr-2`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Stack;
