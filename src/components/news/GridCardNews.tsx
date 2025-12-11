import CardNews from "./CardNews";

interface Props {
  noticias?: any[];
}

export default function GridCardNews({ noticias = [] }: Props) {
  const lista = Array.isArray(noticias) ? noticias : [];

  return (
    <div className="flex flex-col gap-5 md:flex-wrap md:flex-row md:justify-center md:items-center">
      {lista.map((n: any) => {
        const title =
          n.items?.find((i: any) => i.type === "title")?.value || "Sem título";

        const thumbnail = n.thumb ?? "";
        const date = n.date ?? "";
        const slug = n.slug ?? "";

        return (
          <div key={slug} className="w-full md:w-[45%] xl:w-[22%]">
            <CardNews
              title={title}
              thumbnail={thumbnail}
              date={date}
              slug={slug}
            />
          </div>
        );
      })}
    </div>
  );
}
