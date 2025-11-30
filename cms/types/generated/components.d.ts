import type { Schema, Struct } from '@strapi/strapi';

export interface BlocosBarraAmarela extends Struct.ComponentSchema {
  collectionName: 'components_blocos_barra_amarelas';
  info: {
    displayName: 'barra-amarela';
  };
  attributes: {
    barra_amarela: Schema.Attribute.String;
  };
}

export interface BlocosContent extends Struct.ComponentSchema {
  collectionName: 'components_blocos_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface BlocosDateField extends Struct.ComponentSchema {
  collectionName: 'components_blocos_date_fields';
  info: {
    displayName: 'date_field';
  };
  attributes: {
    date_field: Schema.Attribute.String;
  };
}

export interface BlocosImage extends Struct.ComponentSchema {
  collectionName: 'components_blocos_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    image_single: Schema.Attribute.String;
  };
}

export interface BlocosItemLista extends Struct.ComponentSchema {
  collectionName: 'components_blocos_item_listas';
  info: {
    displayName: 'item-lista';
  };
  attributes: {
    list_text: Schema.Attribute.String;
    subitem: Schema.Attribute.Component<'blocos.subitem-lista', true>;
  };
}

export interface BlocosListaPrincipal extends Struct.ComponentSchema {
  collectionName: 'components_blocos_lista_principals';
  info: {
    displayName: 'Lista Principal';
  };
  attributes: {
    item_lista: Schema.Attribute.Component<'blocos.item-lista', true>;
    list_title: Schema.Attribute.String;
  };
}

export interface BlocosSlug extends Struct.ComponentSchema {
  collectionName: 'components_blocos_slugs';
  info: {
    displayName: 'slug';
  };
  attributes: {
    slug: Schema.Attribute.String;
  };
}

export interface BlocosSubTitle extends Struct.ComponentSchema {
  collectionName: 'components_blocos_sub_titles';
  info: {
    displayName: 'SubTitle';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
  };
}

export interface BlocosSubitemLista extends Struct.ComponentSchema {
  collectionName: 'components_blocos_subitem_listas';
  info: {
    displayName: 'subitem-lista';
  };
  attributes: {
    subitem_list_text: Schema.Attribute.String;
  };
}

export interface BlocosSubtitle18Px extends Struct.ComponentSchema {
  collectionName: 'components_blocos_subtitle_18pxes';
  info: {
    displayName: 'subtitle_18px';
  };
  attributes: {
    subtitle_18px: Schema.Attribute.String;
  };
}

export interface BlocosSubtitle21Px extends Struct.ComponentSchema {
  collectionName: 'components_blocos_subtitle_21pxes';
  info: {
    displayName: 'subtitle_21px';
  };
  attributes: {
    subtitle_21px: Schema.Attribute.String;
  };
}

export interface BlocosTag extends Struct.ComponentSchema {
  collectionName: 'components_blocos_tags';
  info: {
    displayName: 'Tag';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

export interface BlocosThumbnail extends Struct.ComponentSchema {
  collectionName: 'components_blocos_thumbnails';
  info: {
    displayName: 'thumbnail';
  };
  attributes: {
    link_image: Schema.Attribute.String;
  };
}

export interface BlocosTitle extends Struct.ComponentSchema {
  collectionName: 'components_blocos_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface BlocosVideo extends Struct.ComponentSchema {
  collectionName: 'components_blocos_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    video: Schema.Attribute.String;
  };
}

export interface ContentContent extends Struct.ComponentSchema {
  collectionName: 'components_content_contents';
  info: {
    displayName: 'Content';
    icon: 'check';
  };
  attributes: {};
}

export interface HeaderTag extends Struct.ComponentSchema {
  collectionName: 'components_header_tags';
  info: {
    displayName: 'Tag';
  };
  attributes: {};
}

export interface TesteDeCategoriaTitulo extends Struct.ComponentSchema {
  collectionName: 'components_teste_de_categoria_titulos';
  info: {
    displayName: 'Titulo';
  };
  attributes: {};
}

export interface TituloTitulo extends Struct.ComponentSchema {
  collectionName: 'components_titulo_titulos';
  info: {
    displayName: 'Titulo';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocos.barra-amarela': BlocosBarraAmarela;
      'blocos.content': BlocosContent;
      'blocos.date-field': BlocosDateField;
      'blocos.image': BlocosImage;
      'blocos.item-lista': BlocosItemLista;
      'blocos.lista-principal': BlocosListaPrincipal;
      'blocos.slug': BlocosSlug;
      'blocos.sub-title': BlocosSubTitle;
      'blocos.subitem-lista': BlocosSubitemLista;
      'blocos.subtitle-18px': BlocosSubtitle18Px;
      'blocos.subtitle-21px': BlocosSubtitle21Px;
      'blocos.tag': BlocosTag;
      'blocos.thumbnail': BlocosThumbnail;
      'blocos.title': BlocosTitle;
      'blocos.video': BlocosVideo;
      'content.content': ContentContent;
      'header.tag': HeaderTag;
      'teste-de-categoria.titulo': TesteDeCategoriaTitulo;
      'titulo.titulo': TituloTitulo;
    }
  }
}
