import { useEffect, useState } from "react";
import AccordionSection from "../components/home/AccordionSection";
import AvailableSectionComplete from "../components/home/available-now/AvailableSectionComplete";
import Features from "../components/home/Features";
import HeroNoVideo from "../components/home/HeroNoVideo";
import LastetsNews from "../components/home/LastetsNews";
import WatchTrailers from "../components/home/WatchTrailers";
import { useLocation } from "react-router";
import ScrollToHash from "../components/ScrollToHash";
import SkeletonHome from "../skeletons/SkeletonHome";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation("home");
  const [noticias, setNoticias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Carregar notícias
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          "http://localhost:1337/api/noticias?populate=*"
        );

        const json = await res.json();
        setNoticias(json.data ?? []);
      } catch (e) {
        console.error("Erro ao carregar notícias:", e);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  // Scroll automático ao voltar com state
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

  // Loading Skeleton
  if (loading) return <SkeletonHome />;

  return (
    <div className="flex flex-col justify-center items-center max-w-[100rem]">
      <ScrollToHash />

      <HeroNoVideo />

      {/* Últimas notícias usando somente LastetsNews */}
      <LastetsNews onLoaded={() => setLoading(false)} />

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
