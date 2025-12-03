import MenuMobile from "../components/MenuMobile";
import Logo from "../components/svg/Logo";
import { Link, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/translation/LanguageSwitcher";
import { HashLink } from "react-router-hash-link";
export default function Header() {
  const navigate = useNavigate();
  const { t } = useTranslation("common");

  return (
    <header className="flex flex-col justify-center items-start bg-[#ece2d0] w-full xl:h-[3.875rem] max-w-[100rem]">
      <div className="flex justify-between py-3 w-full xl:w-[90%] px-2 lg:px-4">
        <div className="flex gap-7 justify-center items-center">
          <Link to="/" className="flex">
            <Logo textcolor="#130918" />
          </Link>

          <nav className="hidden xl:flex">
            <ul className="flex justify-center items-center gap-4 font-barlow font-semibold capitalize cursor-pointer text-xl">
              <li>
                <Link
                  to="/#watch"
                  className="span-effect text-[1.125rem] uppercase text-dark-blue">
                  Media
                </Link>
              </li>

              <li>
                <button
                  className="span-effect text-[1.125rem]! uppercase text-dark-blue"
                  onClick={() => {
                    const section = document.querySelector("#features");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }}>
                  features {t("Games")}
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
                  Creator Program
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
