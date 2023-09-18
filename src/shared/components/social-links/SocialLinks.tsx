import TinyIcon from "../icons/TinyIcon";

export interface SocialLinkProps {
  href: string;
  icon: JSX.Element;
  iconClassName?: string;
}

interface Props {
  socialLinks: SocialLinkProps[];
}

const SocialLinks: React.FC<Props> = ({ socialLinks }) => {
  return (
    <div className="flex flex-wrap items-center space-x-2">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TinyIcon className={link.iconClassName}>{link.icon}</TinyIcon>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
