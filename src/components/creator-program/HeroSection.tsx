import Logo from "../svg/Logo";
import { useTranslation } from "react-i18next";
export default function HeroSection() {
  const { t } = useTranslation(["CreatorProgram", "common"]);
  return (
    <section className="relative hero-creator flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover w-full h-[100vh] max-w-[100rem]">
      <div className="bg-black/50 absolute inset-0 z-0 h-full"></div>
      <div className="flex flex-col justify-center items-center min-w-[90%] gap-6 py-10 z-10 xl:gap-12">
        <div className="flex flex-col justify-center items-center gap-3 md:gap-6 xl:gap-12">
          <div className="flex justify-center items-center gap-3">
            <Logo textcolor="#fff" />
          </div>
          <h2 className="text-[#ece2d0] text-[3rem] md:text-[3.5rem] xl:text-[5rem] text-center leading-12 uppercase font-bold md:leading-14 xl:leading-20">
            {t("CreatorProgram:heroTitle")}
          </h2>
        </div>
        <div className="flex gap-x-7 gap-y-3 justify-center">
          <p className="font-barlow text-[1.125rem] font-medium text-center leading-6 md:text-[1.25rem] xl:text-[1.5rem] w-[85%]">
            {t("CreatorProgram:subTitle")}
          </p>
        </div>
        <a
          href="#EnlistNow"
          className="bg-yellow-arc text-dark-blue rounded-sm uppercase font-barlow font-semibold px-10 py-3 text-[1.125rem] ">
          {t("common:LearnMore")}
        </a>
      </div>
    </section>
  );
}
