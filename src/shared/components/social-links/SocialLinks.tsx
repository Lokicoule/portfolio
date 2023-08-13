interface SocialLink {
  href: string;
  icon: JSX.Element;
  iconClass: string;
}

interface Props {
  socialLinks: SocialLink[];
}

const SocialLinks: React.FC<Props> = ({ socialLinks }) => {
  return (
    <>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={`btn-social ${link.iconClass}`}>{link.icon}</span>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
