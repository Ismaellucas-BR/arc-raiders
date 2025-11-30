export interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface StrapiImage {
  data: {
    id: number;
    attributes: {
      url: string;
      formats?: {
        small?: StrapiImageFormat;
        medium?: StrapiImageFormat;
        large?: StrapiImageFormat;
      };
    };
  } | null;
}

export interface NoticiaTexto {
  __component: "noticia.texto";
  id: number;
  texto: string;
}

export interface NoticiaImagem {
  __component: "noticia.imagem";
  id: number;
  imagem: StrapiImage;
}

export interface NoticiaLista {
  __component: "noticia.lista";
  id: number;
  itens: string[];
}

export interface NoticiaBarra {
  __component: "noticia.barra";
  id: number;
  texto: string;
}

export type NoticiaContentBlock =
  | NoticiaTexto
  | NoticiaImagem
  | NoticiaLista
  | NoticiaBarra;

export interface Noticia {
  id: number;
  attributes: {
    title: string;
    slug: string;
    date: string;
    descricao_curta: string;
    thumbnail?: StrapiImage;
    conteudo: NoticiaContentBlock[];
  };
}

export interface StrapiResponse<T> {
  data: T;
  meta: any;
}
