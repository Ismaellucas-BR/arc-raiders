import MenuMobile from "./MenuMobile";
import Logo from "./svg/Logo";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./translation/LanguageSwitcher";
export default function Header() {
  const { t } = useTranslation("common");
  return (
    <header className=" flex flex-col justify-center items-start bg-[#ece2d0] w-full xl:h-[3.875rem]">
      <div className="flex justify-between py-3 w-full xl:w-[90%] px-2 lg:px-4">
        <div className="flex gap-7 justify-center items-center">
          <Link to="/" className="flex">
            <Logo textcolor="#130918" />
          </Link>
          <nav className="hidden xl:flex">
            <ul className="flex justify-center items-center gap-4 font-barlow font-semibold capitalize cursor-pointer text-xl">
              <li className="">
                <Link
                  className="span-effect text-[1.125rem]! uppercase text text-dark-blue"
                  to={"/agents"}>
                  Sobre
                </Link>
              </li>
              <li className="">
                <Link
                  className="span-effect span-effect text-[1.125rem]! uppercase text text-dark-blue"
                  to={"/maps"}>
                  Notícias e Comunidade
                  {t("Games")}
                </Link>
              </li>
              <li className="">
                <Link
                  className="span-effect span-effect text-[1.125rem]! uppercase text text-dark-blue"
                  to={"/arsenal"}>
                  Embarcar{t("Devices")}
                </Link>
              </li>
              <li className="">
                <Link
                  className="span-effect span-effect text-[1.125rem]! uppercase text text-dark-blue"
                  to={"/midia"}>
                  {t("Play")}
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
      <div className="flex gap-7 items-center w-full ">
        <nav className="hidden md:flex xl:hidden border-t border-dark-blue w-full pt-2 md:px-2">
          <ul className="flex justify-center items-center gap-4 font-barlow font-semibold capitalize cursor-pointer text-xl">
            <li className="">
              <Link
                className="span-effect text-[1.125rem]! uppercase text text-dark-blue"
                to={"/agents"}>
                Sobre
              </Link>
            </li>
            <li className="">
              <Link
                className="span-effect span-effect text-[1.125rem]! uppercase text text-dark-blue"
                to={"/maps"}>
                Notícias e Comunidade
                {t("Games")}
              </Link>
            </li>
            <li className="">
              <Link
                className="span-effect span-effect text-[1.125rem]! uppercase text text-dark-blue"
                to={"/arsenal"}>
                Embarcar{t("Devices")}
              </Link>
            </li>
            <li className="">
              <Link
                className="span-effect span-effect text-[1.125rem]! uppercase text text-dark-blue"
                to={"/midia"}>
                {t("Play")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
