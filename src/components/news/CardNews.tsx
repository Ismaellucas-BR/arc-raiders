import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import enNews from "../../i18n/locales/en/news.json";
import ptNews from "../../i18n/locales/pt/News.json";

interface PropsCard {
  title: string;
  thumbnail?: string | null;
  slug: string;
  date?: string; // data original
}

export default function CardNews({ title, thumbnail, slug, date }: PropsCard) {
  const { i18n } = useTranslation();

  // troca o JSON conforme o idioma
  const translations = i18n.language === "en" ? enNews : ptNews;

  // encontra a notícia pela slug
  const translated = translations.find((n) => n.slug === slug);

  // título traduzido
  const translatedTitle =
    translated?.items?.find((i) => i.type === "title")?.value ?? title;

  // ✔ data traduzida
  const translatedDate =
    translated?.items?.find((i) => i.type === "date")?.value ?? date;

  return (
    <Link
      to={`/news/${slug}`}
      className="rounded-lg border border-[#51a5b7] block overflow-hidden">
      {thumbnail ? (
        <img
          src={thumbnail}
          alt=""
          className="w-full h-[100px] object-cover md:h-[200px] rounded-t-lg"
        />
      ) : (
        <div className="w-full h-[100px] md:h-[200px] bg-gray-200 rounded-t-lg" />
      )}

      <div className="flex flex-col justify-center items-start gap-1 py-3 px-4 bg-white rounded-b-lg h-[102px]">
        <p className="font-barlow font-medium text-dark-blue text-left text-[1.125rem] leading-5">
          {translatedTitle}
        </p>

        {translatedDate && (
          <p className="font-barlow font-medium text-[0.75rem] text-[#130918cc]">
            {translatedDate}
          </p>
        )}
      </div>
    </Link>
  );
}
