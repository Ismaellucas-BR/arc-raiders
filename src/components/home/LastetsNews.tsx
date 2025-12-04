import { useEffect, useState } from "react";
import GridCardNews from "../news/GridCardNews";
import { Link } from "react-router";

interface Props {
  onLoaded?: () => void;
}

export default function LastetsNews({ onLoaded }: Props) {
  const [noticias, setNoticias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          "http://localhost:1337/api/noticias?populate=*"
        );
        const json = await res.json();
        setNoticias(json.data ?? []);
      } catch (err) {
        console.error("Erro ao carregar notícias:", err);
      } finally {
        setLoading(false);
        onLoaded?.();
      }
    }

    load();
  }, []);

  if (loading) return <p>Carregando…</p>;

  return (
    <section
      id="news"
      className="flex flex-col items-center justify-center gap-7 md:gap-10 lg:py-20 pb-10 max-w-[100rem] bg-bege w-full py-10 xl:w-full xl:py-10 xl:px-12">
      <h2 className="text-dark-blue font-barlow font-bold text-center text-[3rem] md:text-[4rem] xl:text-[5rem] uppercase leading-12 w-full xl:leading-24">
        Últimas Notícias
      </h2>

      <div className="flex flex-col items-center justify-center w-[70%] gap-7 md:w-[90%]">
        <GridCardNews noticias={noticias.slice(0, 4)} />
      </div>

      <div className="px-4 w-full flex flex-col justify-center items-center lg:w-[60%]">
        <Link
          to="/news"
          className="w-full rounded-sm uppercase font-barlow font-semibold bg-[#f1aa1c] text-dark-blue text-center px-10 py-2 text-[1.125rem] cursor-pointer">
          Veja mais artigos
        </Link>
      </div>
    </section>
  );
}
