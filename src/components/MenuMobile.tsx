import { Link } from "react-router";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { AlignJustify } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./translation/LanguageSwitcher";
import { useNavigate } from "react-router";
export default function MenuMobile() {
  const navigate = useNavigate();
  const { t } = useTranslation("common");
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="stroke-white dark:stroke-white" size={32} />
      </SheetTrigger>
      <SheetContent className="bg-[#111]">
        <SheetHeader>
          <SheetTitle className="text-white">
            {t("questionMobileMenu")}
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-3">
          <ul className="flex flex-col justify-center items-start gap-4 font-barlow font-semibold capitalize cursor-pointer text-xl pl-2">
            <li>
              <button
                className="span-effect text-[1.125rem]! uppercase text-white"
                onClick={() => {
                  if (location.pathname !== "/") {
                    // Se NÃO estiver na Home → navega para a Home com um state
                    navigate("/", { state: { scrollTo: "watch" } });
                  } else {
                    // Se já estiver na Home → rola diretamente
                    const section = document.querySelector("#watch");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                News {t("Games")}
              </button>
            </li>
            <li>
              <button
                className="span-effect text-[1.125rem]! uppercase text-white"
                onClick={() => {
                  navigate("/#watch"); // navega para a home com hash
                }}>
                Media {t("Games")}
              </button>
            </li>

            <li>
              <button
                className="span-effect text-[1.125rem]! uppercase text-white"
                onClick={() => {
                  navigate("/#features");
                }}>
                features {t("Games")}
              </button>
            </li>

            <li>
              <Link
                className="span-effect text-[1.125rem]! uppercase text-white"
                to="/twitch-drops">
                Twitch Drops
              </Link>
            </li>

            <li>
              <Link
                className="span-effect text-[1.125rem]! uppercase text-white"
                to="/creator-program">
                Creator Program
              </Link>
            </li>
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
