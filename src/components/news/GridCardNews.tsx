import { useEffect } from "react";
import CardNews from "./CardNews";

interface Props {
  noticias?: any[];
  onLoaded?: () => void; // ⬅️ importante!
}

export default function GridCardNews({ noticias = [], onLoaded }: Props) {
  const lista = Array.isArray(noticias) ? noticias : [];

  // ⬅️ Quando a lista tiver pelo menos 1 item, avisa que terminou
  useEffect(() => {
    if (lista.length > 0) {
      onLoaded?.();
    }
  }, [lista, onLoaded]);

  return (
    <div className="flex flex-col gap-5 md:flex-wrap md:flex-row md:justify-center md:items-center">
      {lista.map((n: any) => {
        const source = n.attributes ?? n;

        const header = Array.isArray(source.Header_noticia)
          ? source.Header_noticia
          : [];

        const title = header.find((b: any) => b.title)?.title ?? "Sem título";

        const thumbBlock =
          header.find((b: any) => b.__component === "blocos.thumbnail") ??
          header.find((b: any) => b.thumbnail) ??
          header.find((b: any) => b.link_image);

        const thumbnail =
          thumbBlock?.link_image ??
          thumbBlock?.thumbnail ??
          thumbBlock?.image?.url ??
          "";

        const date = header.find((b: any) => b.date_field)?.date_field ?? "";

        const rawSlug = header.find((b: any) => b.slug)?.slug ?? title;
        const slug = String(rawSlug)
          .toLowerCase()
          .trim()
          .replace(/_/g, "-")
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "")
          .replace(/-+/g, "-");

        const thumbSrc =
          thumbnail && thumbnail.startsWith("http")
            ? thumbnail
            : thumbnail
            ? `http://localhost:1337${thumbnail}`
            : "";

        return (
          <div key={n.id} className="w-full md:w-[45%] xl:w-[22%]">
            <CardNews
              title={title}
              thumbnail={thumbSrc || undefined}
              date={date}
              slug={slug}
            />
          </div>
        );
      })}
    </div>
  );
}
