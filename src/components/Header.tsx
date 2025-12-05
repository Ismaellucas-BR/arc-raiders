import MenuMobile from "../components/MenuMobile";
import Logo from "../components/svg/Logo";
import { Link, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/translation/LanguageSwitcher";
export default function Header() {
  const navigate = useNavigate();
  const { t } = useTranslation("common");

  return (
    <header className="sticky top-0 z-20 bg-[#ece2d0] h-[3.875rem] flex flex-col justify-center items-start  w-full max-w-[100rem]">
      <div className="flex justify-between py-3 w-full xl:w-[90%] px-2 lg:px-4">
        <div className="flex gap-7 justify-center items-center">
          <Link to="/" className="flex">
            <Logo textcolor="#130918" />
          </Link>

          <nav className="hidden xl:flex">
            <ul className="flex justify-center items-center gap-4 font-barlow font-semibold capitalize cursor-pointer text-xl">
              <li>
                <button
                  className="span-effect text-[1.125rem]! uppercase text-dark-blue"
                  onClick={() => {
                    navigate("/#news");
                  }}>
                  {t("News")}
                </button>
              </li>
              <li>
                <button
                  className="span-effect text-[1.125rem]! uppercase text-dark-blue"
                  onClick={() => {
                    navigate("/#watch"); // navega para a home com hash
                  }}>
                  {t("Media")}
                </button>
              </li>

              <li>
                <button
                  className="span-effect text-[1.125rem]! uppercase text-dark-blue"
                  onClick={() => {
                    navigate("/#features");
                  }}>
                  {t("Features")}
                </button>
              </li>

              <li>
                <Link
                  className="span-effect text-[1.125rem]! uppercase text-dark-blue"
                  to="/twitch-drops">
                  Twitch Drops
                </Link>
              </li>

              <li>
                <Link
                  className="span-effect text-[1.125rem]! uppercase text-dark-blue"
                  to="/creator-program">
                  {t("Creator-Program")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center justify-center md:hidden">
          <MenuMobile />
        </div>

        <div className="hidden md:flex">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
