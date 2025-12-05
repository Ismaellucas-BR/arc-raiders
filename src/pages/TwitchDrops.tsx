import AccordionSection from "../components/home/AccordionSection";
import HeroSection from "../components/twitchDrops/HeroSection";
import { useTranslation } from "react-i18next";
export default function TwitchDropsPage() {
  const { t } = useTranslation(["common", "TwitchDrops"]);
  return (
    <main className="flex flex-col justify-center items-center w-full max-w-[100rem]">
      <HeroSection />
      <section className="bg-bege w-full">
        <AccordionSection
          title={t("FrequentlyAskedQuestions")}
          items={[
            {
              question: t("TwitchDrops:Acordion.quetion1"),
              answer: t("TwitchDrops:Acordion.answer1"),
            },
            {
              question: t("TwitchDrops:Acordion.quetion2"),
              answer: t("TwitchDrops:Acordion.answer2"),
            },
            {
              question: t("TwitchDrops:Acordion.quetion3"),
              answer: t("TwitchDrops:Acordion.answer3"),
            },
            {
              question: t("TwitchDrops:Acordion.quetion4"),
              answer: t("TwitchDrops:Acordion.answer4"),
            },
            {
              question: t("TwitchDrops:Acordion.quetion5"),
              answer: t("TwitchDrops:Acordion.answer5"),
            },
            {
              question: t("TwitchDrops:Acordion.quetion6"),
              answer: t("TwitchDrops:Acordion.answer6"),
            },
            {
              question: t("TwitchDrops:Acordion.quetion7"),
              answer: t("TwitchDrops:Acordion.answer7"),
            },
            {
              question: t("TwitchDrops:Acordion.quetion8"),
              answer: t("TwitchDrops:Acordion.answer8"),
            },
          ]}
        />
      </section>
    </main>
  );
}
