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

export interface TypePageFields {
  entryTitle: Contentful.EntryFields.Symbol;
  metaData: Contentful.Entry<TypeMetaDataFields>;
  content?: Contentful.Entry<Record<string, any>>[];
}

export type TypePage = Contentful.Entry<TypePageFields>;

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

export interface TypeProjectSummaryFields {
  entryTitle: Contentful.EntryFields.Symbol;
  screenshots: Contentful.Entry<TypeImageFields>[];
  title: Contentful.EntryFields.Symbol;
  shortDescription: Contentful.EntryFields.Text;
  productUrlLink: Contentful.Entry<TypeButtonFields>;
  builtWith: Contentful.Entry<TypeImageFields>[];
  viewMoreDetailsButton: Contentful.Entry<TypeButtonFields>;
}

export type TypeProjectSummary = Contentful.Entry<TypeProjectSummaryFields>;
