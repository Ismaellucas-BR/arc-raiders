import Mixtape from "../../assets/imgs/Mixtape-section/mixtape.png";
import SecondBar from "../svg/SecondBar";
import { useTranslation } from "react-i18next";
export default function MixtapeSection() {
  const { t } = useTranslation("CreatorProgram");
  return (
    <section
      id="ProgramTiers"
      className="bg-mixtape-section bg-cover bg-center bg-no-repeat  flex flex-col justify-center items-center max-w-[100rem]">
      <div className=" flex flex-col justify-center items-center py-10 max-w-[62.5rem]">
        <div className="flex flex-col justify-center items-center gap-7 w-[90%]">
          <div>
            <div>
              <div className="w-full flex flex-col items-end gap-4 md:p-10 xl:items-start">
                <div className="flex items-center gap-3">
                  <div className="w-[70%] lg:w-fit xl:w-[60%]">
                    <img
                      className="w-[124.24px] h-[80px] md:w-[234.28px] md:h-[150px] xl:w-[312.38px] xl:h-[200px]"
                      src={Mixtape}
                      alt="Fita cassete"
                    />
                  </div>
                  <div className="w-[2%]">
                    <SecondBar extraclasssvg="h-[80px]! w-[6.61px]! md:h-[100px]!" />
                  </div>
                  <h2
                    className={`font-barlow font-bold  whitespace-pre-line text-[3rem] leading-12 md:text-[3.5rem] md:leading-14 xl:text-[4rem]`}>
                    {t("EmbarkCreators")}
                  </h2>
                </div>
                <div className="flex flex-col gap-3 md:w-[55%] lg:w-[66%]">
                  <p className="text-lg opacity-90 text-[1.25rem] font-barlow xl:text-[1.25rem]">
                    {t("WhetherYouAre")}
                  </p>
                  <p className="text-lg opacity-90 text-[1.25rem] font-barlow font-semibold xl:text-[1.25rem] uppercase">
                    {t("ExclusivePerks")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="w-full md:p-10 flex flex-col items-start gap-4 ">
                <div className="flex items-center gap-3 md:flex-row-reverse lg:w-full lg:justify-between ">
                  <div className="w-[70%]  lg:w-fit lg:flex lg:justify-end xl:w-[100%] xl:justify-start">
                    <img
                      className="w-[124.24px] h-[80px] md:w-[234.28px] md:h-[150px] xl:w-[312.38px] xl:h-[200px]"
                      src={Mixtape}
                      alt="Fita cassete"
                    />
                  </div>
                  <div className="flex justify-center items-center gap-3 lg:w-full lg:justify-start">
                    <div className="w-[2%]">
                      <SecondBar extraclasssvg="h-[80px]! w-[6.61px]! md:h-[100px]!" />
                    </div>
                    <h2
                      className={`font-barlow font-bold  whitespace-pre-line text-[3rem] leading-12 md:text-[3.5rem] md:leading-14 lg:w-fit xl:text-[4rem]`}>
                      {t("EmbarkPartners")}
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col gap-3 md:w-[55%]  xl:w-[70%]">
                  <p className="text-lg opacity-90 text-[1.25rem] font-barlow xl:text-[1.25rem]">
                    {t("AnExclusiveTier")}
                  </p>
                  <p className="text-lg opacity-90 text-[1.25rem] font-barlow font-semibold xl:text-[1.25rem] uppercase">
                    {t("PossibilityToBeSponsored")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark-blue flex flex-col justify-center items-center py-10">
        <div className="flex flex-col justify-center items-start gap-5 font-barlow font-normal uppercase w-[90%]">
          <h2 className="text-[1.25rem] xl:text-[1.5rem]">
            {t("LookingToLevelUp")}
          </h2>
          <span className="text-[1.125rem] xl:text-[1.5rem]">
            {t("NoMatter")}{" "}
            <span className="text-yellow-arc">{t("possibility")} </span>
            {t("toBeInvited")}
          </span>
        </div>
      </div>
    </section>
  );
}
