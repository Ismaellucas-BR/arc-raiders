import FirstBar from "../svg/FirstBar";
import { useTranslation } from "react-i18next";
export default function SecondSection() {
  const { t } = useTranslation("CreatorProgram");
  return (
    <section
      id="EnlistNow"
      className="bg-second-section-creator bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center max-w-[100rem]">
      <div className="flex flex-col justify-center items-start w-[90%] gap-7 pt-7 pb-7 xl:pb-0">
        <p className="font-barlow font-medium text-[1.25rem] uppercase lg:text-[1.5rem]">
          {t("CreatorProgram:FromEmbark")}
        </p>
        <span className="font-barlow font-medium text-[1.125rem] uppercase lg:text-[1.25rem] xl:text-[1.5rem]">
          {t("WeWantToWork")}{" "}
          <span className="text-yellow-arc!">{t("passionate")}</span>{" "}
          {t("aboutOurGames")}{" "}
          <span className="text-yellow-arc!">{t("engage")}</span>{" "}
          {t("withTheirAudience")}{" "}
          <span className="text-yellow-arc!">{t("unique")}</span>.
        </span>
        <div className="flex justify-center items-center gap-3 lg:justify-start xl:justify-between">
          <div className="w-full lg:w-3/4 xl:w-1/2 md:py-10 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-[10%] lg:w-[5%]">
                <FirstBar />
              </div>
              <h2
                className={`font-barlow font-bold  whitespace-pre-line text-[2.5rem] leading-10 md:text-[3.5rem] md:leading-14 xl:text-[4rem] xl:leading-16`}>
                {t("EnlistNow")}
              </h2>
            </div>

            <p className="text-lg opacity-90 text-[1.25rem] md:text-[1rem] font-barlow lg:text-[1.25rem]">
              {t("RaiderRookie")}
            </p>
            <a
              href="#ProgramTiers"
              className="bg-yellow-arc text-dark-blue rounded-sm uppercase font-barlow font-semibold px-10 py-3 text-[1.125rem] max-w-fit">
              {t("ProgramTiers")}
            </a>
          </div>
          <div className="flex justify-baseline items-baseline h-full">
            <img
              src="https://arcraiders.developerismaellucas.com/imgs/scrappy-cowboy.png"
              alt="Foto do galo scrappy"
              className="hidden xl:flex w-[466px] h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
