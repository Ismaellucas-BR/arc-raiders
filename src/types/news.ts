// Tipos dos blocos ----------------------------------

export interface TitleBlock {
  id: number;
  __component: "blocos.title";
  title: string;
}

export interface DateBlock {
  id: number;
  __component: "blocos.date-field";
  date_field: string;
}

// Você pode adicionar outros blocos aqui quando precisar
export type HeaderBlocks = TitleBlock | DateBlock;

// Tipo raiz da notícia -------------------------------

export interface NewsItem {
  id: number;
  locale?: string;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Header_noticia: HeaderBlocks[];
}

// Tipo do componente --------------------------------

export interface GridCardNewsProps {
  data: NewsItem[];
}
