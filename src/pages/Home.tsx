import { useEffect } from "react";
import AccordionSection from "../components/home/AccordionSection";
import AvailableSectionComplete from "../components/home/available-now/AvailableSectionComplete";
import Features from "../components/home/Features";
import HeroNoVideo from "../components/home/HeroNoVideo";
import LastetsNews from "../components/home/LastetsNews";
import WatchTrailers from "../components/home/WatchTrailers";
import { useLocation } from "react-router";
import ScrollToHash from "../components/ScrollToHash";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("home");
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const el = document.getElementById(id);

      setTimeout(() => {
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.state]);

  return (
    <div className="flex flex-col justify-center items-center max-w-[100rem]">
      <ScrollToHash />
      <HeroNoVideo />
      <LastetsNews />
      <WatchTrailers />
      <Features />
      <AvailableSectionComplete />
      <AccordionSection
        title="Perguntas frequentes"
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
          {
            question: t("Acordion.quetion6"),
            answer: t("Acordion.answer6"),
          },
          {
            question: t("Acordion.quetion7"),
            answer: t("Acordion.answer7"),
          },
        ]}
      />
    </div>
  );
}
