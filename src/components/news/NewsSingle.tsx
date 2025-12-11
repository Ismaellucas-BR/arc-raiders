import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Data from "../../data/News.json";
import { useTranslation } from "react-i18next";

// Traduções
import enNews from "../../i18n/locales/en/news.json";
import ptNews from "../../i18n/locales/pt/News.json";

// --------------------------------- TIPOS
interface BlocoBase {
  id: number;
  __component: string;
  [k: string]: any;
}

interface BlocoTitle extends BlocoBase {
  __component: "blocos.title";
  title: string;
}

interface BlocoSubtitle extends BlocoBase {
  __component:
    | "blocos.sub-title"
    | "blocos.subtitle-21px"
    | "blocos.subtitle-18px";
  subtitle: string;
}

interface BlocoDate extends BlocoBase {
  __component: "blocos.date-field";
  date_field: string;
}

interface RichTextNode {
  type: string;
  children: any[];
}

interface BlocoContent extends BlocoBase {
  __component: "blocos.content";
  content: RichTextNode[];
}

interface BlocoVideo extends BlocoBase {
  __component: "blocos.video";
  video: string;
}

interface BlocoImage extends BlocoBase {
  __component: "blocos.image";
  image_single: string;
}

interface BlocoBarra extends BlocoBase {
  __component: "blocos.barra-amarela";
}

type Bloco =
  | BlocoTitle
  | BlocoSubtitle
  | BlocoDate
  | BlocoContent
  | BlocoVideo
  | BlocoImage
  | BlocoBarra
  | BlocoBase;

interface Noticia {
  id: number;
  Header_noticia: Bloco[];
  [k: string]: any;
}

// --------------------------------- HELPERS
function buildYouTubeEmbed(url: string) {
  if (!url) return "";
  if (url.includes("/embed/")) return url;
  const match = url.match(/v=([^&]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : "";
}

function normalizeSlug(raw?: string | null) {
  if (!raw) return "";
  return String(raw)
    .toLowerCase()
    .trim()
    .replace(/_/g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");
}

function formatRichText(text: string) {
  if (!text) return "";
  let formatted = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  formatted = formatted.replace(/\n/g, "<br/>");
  return formatted;
}

// --------------------------------- COMPONENTE
export default function NewsSingle() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const normalizedParam = normalizeSlug(slug);

    // Busca original no News.json
    const originalItem = Data.find(
      (item: any) => normalizeSlug(item.slug) === normalizedParam
    );

    if (!originalItem) {
      setNoticia(null);
      setLoading(false);
      return;
    }

    // Escolhe o JSON de tradução baseado no idioma
    const translations = i18n.language === "en" ? enNews : ptNews;

    // Procura tradução correspondente
    const translatedItem = translations.find(
      (t: any) => normalizeSlug(t.slug) === normalizedParam
    );

    // Se existir tradução, usa ela. Se não, usa o original:
    const sourceItems = translatedItem?.items ?? originalItem.items;

    // Monta os blocos normalmente (sem mudar nada da estrutura)
    const Header_noticia: Bloco[] = sourceItems.map((b: any, index: number) => {
      switch (b.type) {
        case "title":
          return {
            id: index,
            __component: "blocos.title",
            title: b.value,
          };

        case "image":
          return {
            id: index,
            __component: "blocos.image",
            image_single: b.value,
          };

        case "sub-title":
          return {
            id: index,
            __component: "blocos.sub-title",
            subtitle: b.value,
          };

        case "subtitle-21px":
          return {
            id: index,
            __component: "blocos.subtitle-21px",
            subtitle: b.value,
          };

        case "subtitle-18px":
          return {
            id: index,
            __component: "blocos.subtitle-18px",
            subtitle: b.value,
          };

        case "date":
          return {
            id: index,
            __component: "blocos.date-field",
            date_field: b.value,
          };

        case "list":
          return {
            id: index,
            __component: "blocos.content",
            content: [
              {
                type: "list",
                children: (b.value ?? []).map((txt: string) => ({
                  type: "list-item",
                  children: [{ type: "text", text: txt }],
                })),
              },
            ],
          };

        case "paragraph":
          return {
            id: index,
            __component: "blocos.content",
            content: [
              {
                type: "paragraph",
                children: [{ type: "text", text: b.value }],
              },
            ],
          };

        case "video":
          return {
            id: index,
            __component: "blocos.video",
            video: b.value,
          };

        case "barra-amarela":
          return {
            id: index,
            __component: "blocos.barra-amarela",
          };

        default:
          return {
            id: index,
            __component: "blocos.content",
            content: [
              {
                type: "paragraph",
                children: [{ type: "text", text: "" }],
              },
            ],
          };
      }
    });

    setNoticia({
      id: Math.random(),
      Header_noticia,
      ...originalItem,
    });

    setLoading(false);
  }, [slug, i18n.language]);

  // -------------------------------- RENDER
  if (loading) return <p className="text-center py-10">Carregando…</p>;
  if (!noticia)
    return <p className="text-center py-10">Notícia não encontrada.</p>;

  return (
    <article className="w-full p-3 bg-bege max-w-[100rem]">
      <div className="w-full max-w-3xl mx-auto text-dark-blue">
        {noticia.Header_noticia.map((block) => {
          switch (block.__component) {
            case "blocos.title":
              return (
                <h1
                  key={block.id}
                  className="font-barlow text-[2rem] font-bold uppercase mb-4">
                  {block.title}
                </h1>
              );

            case "blocos.image":
              return (
                <div key={block.id} className="my-6">
                  <img src={block.image_single} className="w-full h-auto" />
                </div>
              );

            case "blocos.sub-title":
              return (
                <h2 key={block.id} className="text-2xl font-semibold mt-6 mb-3">
                  {block.subtitle}
                </h2>
              );

            case "blocos.subtitle-21px":
              return (
                <h2
                  key={block.id}
                  className="font-barlow text-[21px] mt-6 mb-3 uppercase font-bold">
                  {block.subtitle}
                </h2>
              );

            case "blocos.subtitle-18px":
              return (
                <h3
                  key={block.id}
                  className="font-barlow text-[18px] font-semibold mt-4 mb-2">
                  {block.subtitle}
                </h3>
              );

            case "blocos.date-field":
              return (
                <p
                  key={block.id}
                  className="font-barlow text-base font-medium mb-1">
                  {block.date_field}
                </p>
              );

            case "blocos.content":
              return (
                <div key={block.id} className="mb-4">
                  {block.content.map((node: any, i: number) => {
                    if (node.type === "paragraph") {
                      return (
                        <p
                          key={i}
                          className="font-barlow text-[1.125rem] font-medium mb-3 leading-6"
                          dangerouslySetInnerHTML={{
                            __html: formatRichText(
                              node.children.map((c: any) => c.text).join("")
                            ),
                          }}
                        />
                      );
                    }

                    if (node.type === "list") {
                      return (
                        <ul
                          key={i}
                          className="list-disc pl-6 mb-4 font-barlow text-[1.125rem] font-medium">
                          {node.children.map((li: any, j: number) => (
                            <li
                              key={j}
                              dangerouslySetInnerHTML={{
                                __html: formatRichText(
                                  li.children.map((c: any) => c.text).join("")
                                ),
                              }}
                            />
                          ))}
                        </ul>
                      );
                    }

                    return null;
                  })}
                </div>
              );

            case "blocos.barra-amarela":
              return (
                <div key={block.id} className="bg-yellow-arc h-[2px] mb-4" />
              );

            case "blocos.video":
              return (
                <div key={block.id} className="my-6">
                  <iframe
                    className="w-full rounded h-[226px] md:h-[405px] lg:h-[506px]"
                    src={buildYouTubeEmbed(block.video)}
                    allowFullScreen
                  />
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
    </article>
  );
}
