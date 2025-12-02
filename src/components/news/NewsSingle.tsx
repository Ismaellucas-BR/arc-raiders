import { useEffect, useState } from "react";
import { useParams } from "react-router";

// TIPOS --------------------------
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
  __component: "blocos.sub-title";
  subtitle: string;
}

interface BlocoDate extends BlocoBase {
  __component: "blocos.date-field";
  date_field: string;
}

interface RichChildText {
  type: "text";
  text: string;
}

interface RichChildLink {
  type: "link";
  url: string;
  target?: string;
  children: RichChildText[];
}

type RichChild =
  | RichChildText
  | RichChildLink
  | { type: string; [k: string]: any };

interface RichTextNode {
  type: string;
  children: RichChild[];
}

interface BlocoContent extends BlocoBase {
  __component: "blocos.content";
  content: RichTextNode[];
}

interface BlocoVideo extends BlocoBase {
  __component: "blocos.video";
  video: string;
}

interface BlocoBarra extends BlocoBase {
  __component: "blocos.barra-amarela";
  barra_amarela: string | null;
}

type Bloco =
  | BlocoTitle
  | BlocoSubtitle
  | BlocoDate
  | BlocoContent
  | BlocoVideo
  | BlocoBarra
  | BlocoBase;

interface Noticia {
  id: number;
  Header_noticia: Bloco[];
  [k: string]: any;
}

// HELPERS -----------------------
function buildYouTubeEmbed(urlOrFragment: string) {
  if (!urlOrFragment) return "";
  if (urlOrFragment.includes("/embed/") || urlOrFragment.startsWith("http")) {
    if (!/^https?:\/\//i.test(urlOrFragment)) return `https://${urlOrFragment}`;
    return urlOrFragment;
  }

  const queryIndex = urlOrFragment.indexOf("?");
  const raw =
    queryIndex === -1 ? urlOrFragment : urlOrFragment.slice(queryIndex + 1);
  try {
    const params = new URLSearchParams(raw);
    const v = params.get("v");
    if (v) return `https://www.youtube.com/embed/${v}`;
  } catch (e) {
    const match = urlOrFragment.match(/v=([^&]+)/);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
  }

  const idMatch =
    urlOrFragment.match(/v=([^&]+)/) ||
    urlOrFragment.match(/\/([A-Za-z0-9_-]{11})$/);
  if (idMatch) return `https://www.youtube.com/embed/${idMatch[1]}`;

  return "";
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

// COMPONENTE -----------------------
export default function NewsSingle() {
  const { slug } = useParams<{ slug: string }>();
  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          "http://localhost:1337/api/noticias?locale=en&populate=*"
        );
        const json = await res.json();

        const normalizedParam = normalizeSlug(slug);
        const items = Array.isArray(json.data) ? json.data : [];

        const found = items.find((item: any) => {
          const headerBlocks: any[] =
            item.attributes?.Header_noticia ?? item.Header_noticia ?? [];

          if (!Array.isArray(headerBlocks)) return false;

          for (const b of headerBlocks) {
            if (!b || typeof b !== "object") continue;

            if (b.__component === "blocos.slug") {
              const rawSlug = (b.slug ?? b?.value ?? "").toString();
              const normalizedDataSlug = normalizeSlug(rawSlug);

              if (normalizedDataSlug === normalizedParam) return true;
            }
          }

          return false;
        });

        if (!found) {
          setNoticia(null);
        } else {
          const headerBlocks =
            found.attributes?.Header_noticia ?? found.Header_noticia ?? [];
          setNoticia({
            id: found.id,
            Header_noticia: headerBlocks,
            ...found.attributes,
          });
        }
      } catch (e) {
        console.error("Erro ao carregar notícia:", e);
        setNoticia(null);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [slug]);

  if (loading) return <p className="text-center py-10">Carregando…</p>;
  if (!noticia)
    return <p className="text-center py-10">Notícia não encontrada.</p>;

  return (
    <article className="w-full p-3 bg-bege">
      <div className="w-full max-w-3xl mx-auto text-dark-blue">
        {noticia.Header_noticia.map((block) => {
          switch (block.__component) {
            case "blocos.title":
              return (
                <h1
                  key={`h1-${block.id}`}
                  className="font-barlow text-[2rem] font-bold leading-10 uppercase mb-4">
                  {block.title}
                </h1>
              );

            case "blocos.sub-title":
              return (
                <h2
                  key={`h2-${block.id}`}
                  className="text-2xl font-semibold mt-6 mb-3">
                  {block.subtitle}
                </h2>
              );

            case "blocos.date-field":
              return (
                <p
                  key={`p-${block.id}`}
                  className="font-barlow font-medium text-base text-dark-blue mb-1">
                  {block.date_field}
                </p>
              );

            case "blocos.barra-amarela":
              return (
                <div
                  key={`barra-${block.id}`}
                  className="bg-yellow-arc h-[2px] my-4">
                  {block.barra_amarela ?? ""}
                </div>
              );

            /* ===========================================
             * CONTENT COM SUPORTE TOTAL A LISTAS
             * =========================================== */
            case "blocos.content":
              return (
                <div key={`div-${block.id}`} className="prose prose-lg mb-4">
                  {block.content.map((node: any, ni: number) => {
                    // UL (unordered list)
                    if (node.type === "list" && node.format === "unordered") {
                      return (
                        <ul
                          key={`ul-${block.id}-${ni}`}
                          className="list-disc pl-6 mb-4 font-barlow text-[1.125rem] font-medium">
                          {node.children.map((li: any, lii: number) => (
                            <li
                              key={`li-${block.id}-${ni}-${lii}`}
                              className="mb-1">
                              {li.children.map((child: any, ci: number) => (
                                <span
                                  key={ci}
                                  className={child.bold ? "font-bold" : ""}>
                                  {child.text}
                                </span>
                              ))}
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    // PARÁGRAFO NORMAL
                    if (node.type === "paragraph") {
                      // 🔥 SE O PARÁGRAFO ESTIVER VAZIO, RETORNA <br />
                      const isEmpty =
                        !node.children ||
                        node.children.length === 0 ||
                        node.children.every(
                          (c: any) => !c.text || c.text.trim() === ""
                        );

                      if (isEmpty) {
                        return <br key={`br-${block.id}-${ni}`} />;
                      }

                      return (
                        <p
                          key={`p-${block.id}-${ni}`}
                          className="font-barlow font-medium text-[1.125rem]">
                          {node.children.map((child: any, ci: number) => {
                            if (child.type === "text")
                              return (
                                <span
                                  key={ci}
                                  className={child.bold ? "font-bold" : ""}>
                                  {child.text}
                                </span>
                              );

                            if (child.type === "link") {
                              const inner =
                                child.children
                                  ?.map((c: any) => c.text)
                                  .join("") ?? child.url;

                              return (
                                <a
                                  key={ci}
                                  href={child.url}
                                  target={child.target ?? "_blank"}
                                  rel="noreferrer">
                                  {inner}
                                </a>
                              );
                            }

                            return null;
                          })}
                        </p>
                      );
                    }

                    return null;
                  })}
                </div>
              );

            case "blocos.video": {
              const embedUrl = buildYouTubeEmbed(block.video ?? "");

              if (!embedUrl) {
                return (
                  <p key={`video-link-${block.id}`} className="my-6">
                    <a href={block.video} target="_blank" rel="noreferrer">
                      {block.video}
                    </a>
                  </p>
                );
              }

              return (
                <div key={`iframe-${block.id}`} className="my-6">
                  <iframe
                    className="w-full rounded h-[226px] md:h-[405px] lg:h-[506px]"
                    height={226}
                    src={embedUrl}
                    title={`video-${block.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              );
            }

            // SUBTITLE 21PX
            case "blocos.subtitle-21px":
              return (
                <h3
                  key={`subtitle21-${block.id}`}
                  className="font-barlow text-[21px] font-bold leading-snug mt-6 mb-3">
                  {block.subtitle_21px}
                </h3>
              );
            case "blocos.subtitle-18px":
              return (
                <h2
                  key={`subtitle18-${block.id}`}
                  className="font-barlow text-[18px] font-bold leading-snug mt-6 mb-3">
                  {block.subtitle_18px}
                </h2>
              );

            // IMAGE SINGLE
            case "blocos.image":
              return (
                <div
                  key={`img-${block.id}`}
                  className="my-6 w-full flex justify-center">
                  <img
                    src={block.image_single}
                    alt=""
                    className="w-full h-auto"
                  />
                </div>
              );

            // DEFAULT ----------------------------
            default:
              return <div key={`empty-${block.id}`} />;
          }
        })}
      </div>
    </article>
  );
}
