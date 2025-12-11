import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import GridCardNews from "../news/GridCardNews";
import { Link } from "react-router";
import NewsSkeleton from "../NewsSkeleton";
import jsonNoticias from "../../data/news.json";

export default function LastetsNews() {
  const { t } = useTranslation("home");
  const [noticias, setNoticias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setNoticias(jsonNoticias.slice(0, 4)); // 👈 limita para 4
      setLoading(false);
    }, 300);
  }, []);

  return (
    <section
      id="news"
      className="flex flex-col items-center justify-center gap-7 md:gap-10 lg:py-20 pb-10 max-w-[100rem] bg-bege w-full py-10 xl:px-12">
      <h2 className="text-dark-blue font-barlow font-bold text-center text-[3rem] md:text-[4rem] xl:text-[5rem] uppercase leading-12 w-full xl:leading-24">
        {t("LatestNews")}
      </h2>

      <div className="flex flex-col items-center justify-center w-[70%] gap-7 md:w-[90%]">
        {loading ? (
          <NewsSkeleton count={4} />
        ) : (
          <GridCardNews noticias={noticias} />
        )}
      </div>

      <div className="px-4 w-full flex flex-col justify-center items-center lg:w-[60%]">
        <Link
          to="/news"
          className="w-full rounded-sm uppercase font-barlow font-semibold bg-[#f1aa1c] text-dark-blue text-center px-10 py-2 text-[1.125rem] cursor-pointer">
          {t("SeeMoreArticles")}
        </Link>
      </div>
    </section>
  );
}
