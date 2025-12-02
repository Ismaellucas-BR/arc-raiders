import { useEffect, useState } from "react";
import GridCardNews from "../components/news/GridCardNews";
import { useTranslation } from "react-i18next";

export default function News() {
  const { t, i18n } = useTranslation("common");

  const [noticias, setNoticias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // idioma atual (en, pt, etc.)
  const locale = i18n.language || "en";

  useEffect(() => {
    async function carregarNoticias() {
      try {
        const res = await fetch(
          `http://localhost:1337/api/noticias?locale=en&populate=*`
        );

        if (!res.ok) throw new Error("Erro ao buscar notícias");

        const json = await res.json();

        setNoticias(json.data || []);
      } catch (error) {
        console.error("Erro Strapi:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarNoticias();
  }, [locale]);

  return (
    <div className="flex flex-col items-center gap-5 mt-10 bg-bege w-full py-5 xl:mt-20">
      <div className="flex flex-col justify-center items-center gap-3 border-b-2 border-yellow-arc md:w-full">
        <div className="flex flex-col pb-1 w-[90%] md:w-[70%] max-w-[90rem]">
          <h1 className="text-dark-blue font-barlow font-bold text-[2rem] uppercase w-[90%] ">
            {t("News")}
          </h1>
          <h2 className="text-dark-blue font-barlow font-semibold text-[1.5rem] uppercase">
            Follow the latest news about ARC Raiders.
          </h2>
        </div>
      </div>

      <div className="w-[70%] py-5 md:w-[90%] max-w-[90rem]">
        {loading ? (
          <p className="text-center text-dark-blue font-barlow">Loading...</p>
        ) : (
          <GridCardNews noticias={noticias} />
        )}
      </div>
    </div>
  );
}
