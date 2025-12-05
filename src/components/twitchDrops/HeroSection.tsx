import Logo from "../svg/Logo";
import TwitchLogo from "../svg/TwitchIcon";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
export default function HeroSection() {
  const { t } = useTranslation(["TwitchDrops", "common"]);
  return (
    <section className="relative hero-twitch flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover w-full min-w-[100%] h-[100vh]">
      <div className="bg-black/50 absolute inset-0 z-0 h-full"></div>
      <div className="flex flex-col justify-center items-center min-w-[90%] gap-6 py-10 z-10 xl:gap-12">
        <div className="flex flex-col justify-center items-center gap-3 md:gap-6 xl:gap-12">
          <div className="flex justify-center items-center gap-3">
            <Logo textcolor="#fff" />
            <TwitchLogo width={21.22} height={25} />
          </div>
          <h2 className="text-[#ece2d0] text-[3rem] md:text-[3.5rem] xl:text-[5rem] text-center leading-10 uppercase font-bold">
            Twitch Drops
          </h2>
        </div>
        <div className="flex gap-x-7 gap-y-3 justify-center">
          <p className="font-barlow text-[1.125rem] font-medium text-center leading-6 md:text-[1.25rem] xl:text-[1.5rem]">
            {t("TwitchDrops:EarnInGame")}
          </p>
        </div>
        <Link
          to=""
          className="bg-yellow-arc text-dark-blue rounded-sm uppercase font-barlow font-semibold px-10 py-3 text-[1.125rem]">
          {t("common:LearnMore")}
        </Link>
      </div>
    </section>
  );
}
