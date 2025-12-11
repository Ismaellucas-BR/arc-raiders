import AccordionSection from "../home/AccordionSection";
import { useTranslation } from "react-i18next";
export default function Enlist() {
  const { t } = useTranslation(["CreatorProgram", "common"]);
  return (
    <section className="flex flex-col justify-center items-center bg-bege w-full max-w-[100rem]">
      <div className="flex flex-col justify-center items-center gap-5 w-[90%] pt-7">
        <div className="flex justify-center items-center gap-3 w-full">
          <div className="w-[10%] bg-[linear-gradient(90deg,transparent,#130918)] h-1 lg:w-[35%]"></div>
          <div className="text-dark-blue text-[3rem] font-semibold uppercase">
            {t("Enlist")}
          </div>
          <div className="w-[10%] bg-[linear-gradient(270deg,transparent,#130918)] h-1 lg:w-[35%]"></div>
        </div>
        <p className="font-barlow font-medium text-[1.25rem] text-center leading-7 text-dark-blue xl:text-[1.5rem]">
          {" "}
          {t("TheEmbarkCreatorProgram")}
        </p>
        <div className="flex flex-col justify-center gap-7 bg-dark-blue rounded w-full p-4 lg:flex-row lg:p-8 lg:gap-10 max-w-[64rem] xl:px-8 xl:py-10">
          <div className="flex flex-col gap-3 font-barlow lg:w-1/2">
            <span className="text-[1.25rem]">
              {t("InOrder")}
              <span className="text-yellow-arc"> {t("accepted")}</span>
              {t("youMust")}
            </span>

            <ul className="flex flex-col gap-2.5 font-barlow text-[1.125rem] list-disc pl-6 leading-relaxed">
              <li>{t("BeAtLeast")}</li>
              <li>{t("HaveAnActive")}</li>
              <li>{t("FollowOurCode")}</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center gap-3 font-barlow lg:w-1/2">
            <span className="text-[1.25rem]">
              {t("WeAlsoLookFor")}
              <span className="text-yellow-arc"> {t("qualities")} </span>
              {t("suchAs")}
            </span>

            <ul className="flex flex-col gap-2.5 font-barlow text-[1.125rem] list-disc pl-6 leading-relaxed">
              <li>{t("ConsistentCoverage")}</li>
              <li>{t("ABigkindPersonality")}</li>
              <li>{t("FosterPositive")}</li>
            </ul>
          </div>
        </div>
        <p className="font-barlow font-base font-medium text-center text-dark-blue italic">
          {t("Admissions")}
        </p>
      </div>
      <AccordionSection
        title={t("common:FrequentlyAskedQuestions")}
        items={[
          {
            question: t("Acordion.quetion1"),
            answer: t("Acordion.answer1"),
          },
          {
            question: t("Acordion.quetion2"),
            answer: t("Acordion.answer2"),
          },
          {
            question: t("Acordion.quetion3"),
            answer: t("Acordion.answer3"),
          },
          {
            question: t("Acordion.quetion4"),
            answer: t("Acordion.answer4"),
          },
          {
            question: t("Acordion.quetion5"),
            answer: t("Acordion.answer5"),
          },
        ]}
      />
    </section>
  );
}
