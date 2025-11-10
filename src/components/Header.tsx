import MenuMobile from "./MenuMobile";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./translation/LanguageSwitcher";
export default function Header() {
  const { t } = useTranslation("common");
  return (
    <header className=" flex justify-center bg-white w-full h-[5rem]">
      <div className="flex justify-between py-3 w-[90%]">
        <div className="flex gap-7 items-center">
          <Link to="/" className="flex">
            {" t"}
            <img
              src="https://uhf.microsoft.com/images/xbox/RW4ESm.png"
              alt="Logo do xbox"
              className="w-[4.687rem]"
            />
          </Link>
          <nav className="hidden xl:flex">
            <ul className="flex justify-center items-center gap-4 font-inter capitalize cursor-pointer text-xl">
              <li className="nav-effect">
                <Link
                  className="span-effect text-[0.8125rem]! text-gray26"
                  to={"/agents"}>
                  GamePass
                </Link>
              </li>
              <li className="nav-effect">
                <Link
                  className="span-effect span-effect text-[0.8125rem]! text-gray26"
                  to={"/maps"}>
                  {t("Games")}
                </Link>
              </li>
              <li className="nav-effect">
                <Link
                  className="span-effect span-effect text-[0.8125rem]! text-gray26"
                  to={"/arsenal"}>
                  {t("Devices")}
                </Link>
              </li>
              <li className="nav-effect text-black">
                <Link
                  className="span-effect span-effect text-[0.8125rem]! text-gray26"
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
    </header>
  );
}
