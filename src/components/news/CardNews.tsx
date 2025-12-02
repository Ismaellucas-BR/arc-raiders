import { Link } from "react-router";

interface PropsCard {
  title: string;
  thumbnail?: string | null;
  content?: string;
  slug: string;
  date?: string;
}

export default function CardNews({ title, thumbnail, slug, date }: PropsCard) {
  return (
    <Link
      to={`/news/${slug}`}
      className="rounded-lg border border-[#51a5b7] block overflow-hidden">
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-[100px] object-cover md:h-[200px] rounded-t-lg"
        />
      ) : (
        <div className="w-full h-[100px] md:h-[200px] bg-gray-200 rounded-t-lg" />
      )}

      <div className="flex flex-col justify-center items-start gap-1 py-3 px-4 bg-white rounded-b-lg h-[102px]">
        <p className="font-barlow font-medium text-dark-blue text-left text-[1.125rem] leading-5">
          {title}
        </p>
        {date && (
          <p className="font-barlow font-medium text-[0.75rem] text-[#130918cc]">
            {date}
          </p>
        )}
      </div>
    </Link>
  );
}
