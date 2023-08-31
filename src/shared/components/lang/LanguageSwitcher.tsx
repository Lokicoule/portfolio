import { useNavigate } from "react-router-dom";
import { translatingService } from "../../composition";
import { RiEnglishInput } from "react-icons/ri";

const LanguageSwitcher = () => {
  const navigate = useNavigate();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const language = event.target.value;

    translatingService.setLanguage(language);
    navigate(`/${language}/resume`, { replace: true });
  };

  return (
    <div className="flex items-center">
      <select
        className="bg-transparent text-white ml-2"
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
