import { useNavigate, useLocation } from "react-router-dom";
import { themeController, translatingService } from "../../composition";
import { Lang } from "./ThemeController";

const LangSelector = () => {
  const useLang = themeController.getLangHook();
  const { setLang } = useLang();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const language = event.target.value;
    const newPath = location.pathname.replace(/\/(en|fr)\//, `/${language}/`);

    translatingService.setLanguage(language);
    setLang(language as Lang);
    navigate(newPath, { replace: true });
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

export default LangSelector;
