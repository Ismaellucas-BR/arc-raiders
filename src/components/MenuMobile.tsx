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
        <AlignJustify className="stroke-dark-blue" size={32} />
      </SheetTrigger>
      <SheetContent className="bg-[#111]">
        <SheetHeader>
          <SheetTitle className="text-white">
            {t("WhatAreYouLookingFor")}
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-3">
          <ul className="flex flex-col justify-start items-start gap-4 font-barlow font-semibold capitalize cursor-pointer text-xl pl-4">
            <li>
              <button
                className="span-effect text-[1.125rem]! uppercase text-white cursor-pointer"
                onClick={() => {
                  navigate("/#news");
                }}>
                {t("News")}
              </button>
            </li>
            <li>
              <button
                className="span-effect text-[1.125rem]! uppercase text-white cursor-pointer"
                onClick={() => {
                  navigate("/#watch"); // navega para a home com hash
                }}>
                {t("Media")}
              </button>
            </li>

            <li>
              <button
                className="span-effect text-[1.125rem]! uppercase text-white cursor-pointer"
                onClick={() => {
                  navigate("/#features");
                }}>
                {t("Features")}
              </button>
            </li>

            <li>
              <Link
                className="span-effect text-[1.125rem]! uppercase text-white cursor-pointer"
                to="/twitch-drops">
                Twitch Drops
              </Link>
            </li>

            <li>
              <Link
                className="span-effect text-[1.125rem]! uppercase text-white cursor-pointer"
                to="/creator-program">
                {t("Creator-Program")}
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
