interface SocialLink {
  href: string;
  icon: JSX.Element;
  iconClass: string;
}

interface Props {
  socialLinks: SocialLink[];
}

const HeroSocialLinks: React.FC<Props> = ({ socialLinks }) => {
  return (
    <div className="flex justify-center space-x-3">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={`social-btn ${link.iconClass}`}>{link.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default HeroSocialLinks;
