import { useEffect, useState } from "react";
import GridCardNews from "../components/news/GridCardNews";
import { useTranslation } from "react-i18next";
import NewsSkeleton from "../components/NewsSkeleton";
import data from "../data/News.json";

export default function News() {
  const { t } = useTranslation("common");

  const [noticias, setNoticias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento
    setTimeout(() => {
      setNoticias(data); // pega direto do JSON
      setLoading(false);
    }, 300);
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 bg-bege w-full py-5 max-w-[100rem]">
      <div className="flex flex-col justify-center items-center gap-3 border-b-2 border-yellow-arc md:w-full">
        <div className="flex flex-col pb-1 w-[90%] md:w-[70%] max-w-[90rem]">
          <h1 className="text-dark-blue font-barlow font-bold text-[2rem] uppercase w-[90%] ">
            {t("News")}
          </h1>
          <h2 className="text-dark-blue font-barlow font-semibold text-[1.5rem] uppercase">
            {t("FollowTheLatest")}
          </h2>
        </div>
      </div>

      <div className="w-[70%] py-5 md:w-[90%] max-w-[90rem]">
        {loading ? (
          <NewsSkeleton count={12} />
        ) : (
          <GridCardNews noticias={noticias} />
        )}
      </div>
    </div>
  );
}
