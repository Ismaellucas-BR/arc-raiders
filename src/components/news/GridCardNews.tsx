import CardNews from "./CardNews";

interface Props {
  noticias?: any[]; // vem do parent; pode ser undefined
}

export default function GridCardNews({ noticias = [] }: Props) {
  const lista = Array.isArray(noticias) ? noticias : [];

  if (lista.length === 0) {
    return <p className="text-white">Nenhuma notícia encontrada.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {lista.map((n: any) => {
        // se seus dados vêm dentro de item.attributes, ajusta aqui:
        const source = n.attributes ?? n;

        const header = Array.isArray(source.Header_noticia)
          ? source.Header_noticia
          : [];

        const title = header.find((b: any) => b.title)?.title ?? "Sem título";

        // thumbnail pode ser link direto (link_image) ou media - tentamos vários formatos
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

        // se thumbnail for relativo (p.ex. /uploads/...), prefixa
        const thumbSrc =
          thumbnail && thumbnail.startsWith("http")
            ? thumbnail
            : thumbnail
            ? `http://localhost:1337${thumbnail}`
            : "";

        return (
          <CardNews
            key={n.id}
            title={title}
            thumbnail={thumbSrc || undefined}
            date={date}
            slug={slug}
          />
        );
      })}
    </div>
  );
}
