import React, { useEffect, useState } from "react";
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

/**
 * Normaliza um slug/string:
 * - converte para lowercase
 * - troca underscores por hífen (padronizamos pra '-')
 * - troca qualquer sequência de espaços por '-'
 * - remove caracteres inválidos (mantém a-z, 0-9, '-' e '_')
 */
function normalizeSlug(raw?: string | null) {
  if (!raw) return "";
  return (
    String(raw)
      .toLowerCase()
      .trim()
      .replace(/_/g, "-") // underscores → hífen
      .replace(/\s+/g, "-") // espaços → hífen
      // remover caracteres que não queremos (mantemos letras, números, hífen)
      .replace(/[^a-z0-9-]/g, "")
      // colapsa múltiplos hífens consecutivos
      .replace(/-+/g, "-")
  );
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
        // DEBUG: descomente se precisar inspecionar a resposta
        // console.log("strapi json:", json);

        const normalizedParam = normalizeSlug(slug);

        // json.data pode ser array
        const items = Array.isArray(json.data) ? json.data : [];

        // procura no array de noticias um item cujo Header_noticia contenha um bloco "blocos.slug"
        const found = items.find((item: any) => {
          // header pode estar em attributes.Header_noticia ou direto Header_noticia dependendo do shape
          const headerBlocks: any[] =
            item.attributes?.Header_noticia ?? item.Header_noticia ?? [];

          if (!Array.isArray(headerBlocks)) return false;

          // procurar bloco do tipo slug dentro do headerBlocks
          for (const b of headerBlocks) {
            if (!b || typeof b !== "object") continue;
            // bloco do tipo slug pode ser { __component: "blocos.slug", slug: "..." }
            if (b.__component === "blocos.slug") {
              const rawSlug = (b.slug ?? b?.value ?? "").toString();
              const normalizedDataSlug = normalizeSlug(rawSlug);

              // compara strings normalizadas
              if (normalizedDataSlug === normalizedParam) return true;

              // adicional: aceitar se troca - por _ etc (normalizamos ambos para '-')
              // já feito pela normalizeSlug — portanto suficiente
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
            ...found.attributes, // caso precise outros atributos
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
                  {(block as BlocoTitle).title}
                </h1>
              );

            case "blocos.sub-title":
              return (
                <h2
                  key={`h2-${block.id}`}
                  className="text-2xl font-semibold mt-6 mb-3">
                  {(block as BlocoSubtitle).subtitle}
                </h2>
              );

            case "blocos.date-field":
              return (
                <p
                  key={`p-${block.id}`}
                  className="font-barlow font-medium text-base text-dark-blue mb-1">
                  {(block as BlocoDate).date_field}
                </p>
              );

            case "blocos.barra-amarela":
              return (
                <div
                  key={`barra-${block.id}`}
                  className="bg-yellow-arc h-[2px] my-4"
                  style={{
                    color: "#111",
                    fontWeight: 700,
                  }}>
                  {(block as BlocoBarra).barra_amarela ?? ""}
                </div>
              );

            case "blocos.content":
              return (
                <div key={`div-${block.id}`} className="prose prose-lg mb-4">
                  {(block as BlocoContent).content.map((node, ni) => {
                    const isEmptyParagraph =
                      node.type === "paragraph" &&
                      node.children.length === 1 &&
                      (node.children[0] as any).type === "text" &&
                      (
                        (node.children[0] as RichChildText).text ?? ""
                      ).trim() === "";

                    if (isEmptyParagraph) {
                      return <br key={`br-${block.id}-${ni}`} />;
                    }

                    if (node.type === "paragraph") {
                      return (
                        <p
                          key={`p-${block.id}-${ni}`}
                          className="font-barlow font-medium text-[1.125rem]">
                          {node.children.map((child, ci) => {
                            if ((child as RichChildText).type === "text") {
                              return (child as RichChildText).text;
                            }

                            if ((child as RichChildLink).type === "link") {
                              const link = child as RichChildLink;
                              const innerText =
                                link.children?.map((c) => c.text).join("") ??
                                link.url;
                              return (
                                <a
                                  key={`a-${block.id}-${ni}-${ci}`}
                                  href={link.url}
                                  target={link.target ?? "_blank"}
                                  rel="noreferrer">
                                  {innerText}
                                </a>
                              );
                            }

                            return (child as any).text ?? null;
                          })}
                        </p>
                      );
                    }

                    return (
                      <div key={`node-${block.id}-${ni}`} className="mb-3">
                        {node.children.map((child, ci) =>
                          (child as any).text ? (
                            <span key={`span-${block.id}-${ni}-${ci}`}>
                              {(child as any).text}
                            </span>
                          ) : null
                        )}
                      </div>
                    );
                  })}
                </div>
              );

            case "blocos.video": {
              const videoField = (block as BlocoVideo).video ?? "";
              const embedUrl = buildYouTubeEmbed(videoField);

              if (!embedUrl) {
                return (
                  <p key={`video-link-${block.id}`} className="my-6">
                    <a href={videoField} target="_blank" rel="noreferrer">
                      {videoField}
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

            default:
              return <div key={`div2-${block.id}`} />;
          }
        })}
      </div>
    </article>
  );
}
