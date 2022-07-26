import * as Contentful from "contentful";

export interface TypeButtonFields {
  entryTitle: Contentful.EntryFields.Symbol;
  type: "Button" | "Link";
  label: Contentful.EntryFields.Symbol;
  destination: Contentful.EntryFields.Symbol;
  altText: Contentful.EntryFields.Symbol;
  eventClass?: Contentful.EntryFields.Symbol;
  eventLabel?: Contentful.EntryFields.Symbol;
  externalLink: Contentful.EntryFields.Boolean;
}

export type TypeButton = Contentful.Entry<TypeButtonFields>;

export interface TypeHomepageFields {
  entryTitle: Contentful.EntryFields.Symbol;
  metaData: Contentful.Entry<TypeMetaDataFields>;
  productTiles: Contentful.Entry<TypeProductFields>[];
}

export type TypeHomepage = Contentful.Entry<TypeHomepageFields>;

export interface TypeImageFields {
  entryTitle: Contentful.EntryFields.Symbol;
  imageTitle: Contentful.EntryFields.Symbol;
  imageAltText: Contentful.EntryFields.Symbol;
  image: Contentful.Asset;
}

export type TypeImage = Contentful.Entry<TypeImageFields>;

export interface TypeMetaDataFields {
  entryTitle: Contentful.EntryFields.Symbol;
  canonicalUrl: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
  title: Contentful.EntryFields.Symbol;
  metaTitle: Contentful.EntryFields.Symbol;
  metaDescription: Contentful.EntryFields.Text;
  metaOgType: Contentful.EntryFields.Symbol;
  metaOgUrl: Contentful.EntryFields.Symbol;
  metaOgTitle: Contentful.EntryFields.Symbol;
  metaOgDescription: Contentful.EntryFields.Text;
  metaOgImage: Contentful.Entry<TypeImageFields>;
  twitterCard?: Contentful.EntryFields.Symbol;
  twitterUrl: Contentful.EntryFields.Symbol;
  twitterTitle: Contentful.EntryFields.Symbol;
  twitterDescription: Contentful.EntryFields.Text;
  twitterImage: Contentful.Entry<TypeImageFields>;
}

export type TypeMetaData = Contentful.Entry<TypeMetaDataFields>;

export interface TypeProductFields {
  entryTitle: Contentful.EntryFields.Symbol;
  metaData: Contentful.Entry<TypeMetaDataFields>;
  screenshots: Contentful.Entry<TypeImageFields>[];
  title: Contentful.EntryFields.Symbol;
  shortDescription: Contentful.EntryFields.Text;
  productUrl: Contentful.Entry<TypeButtonFields>;
  builtWith: Contentful.Entry<TypeImageFields>[];
  viewMoreDetailsButton: Contentful.Entry<TypeButtonFields>;
}

export type TypeProduct = Contentful.Entry<TypeProductFields>;

export type MetaData = {
  entryTitle: string;
  canonicalUrl: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  metaOgType: string;
  metaOgUrl: string;
  metaOgTitle: string;
  metaOgDescription: string;
  metaOgImage: {
    entryTitle: string;
    imageTitle: string;
    imageAltText: string;
    image: {
      title: string;
      description: string;
      url: string;
      size: number;
      width: number;
      height: number;
      fileName: string;
      contentType: string;
      src: string;
    };
    component: string;
    __typename: string;
  };
  twitterCard: string;
  twitterUrl: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: {
    entryTitle: string;
    imageTitle: string;
    imageAltText: string;
    image: {
      title: string;
      description: string;
      url: string;
      size: number;
      width: number;
      height: number;
      fileName: string;
      contentType: string;
      src: string;
    };
    component: string;
    __typename: string;
  };
  __typename: string;
  componentId: string;
};
