export type ImageDetails = {
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

export type ImageType = {
  entryTitle: string;
  imageTitle: string;
  imageAltText: string;
  imageUrl: string;
  image: ImageDetails;
  component: string;
  __typename: string;
};

export type LinkType = {
  entryTitle: string;
  type: string;
  label: string;
  destination: string;
  altText: string;
  eventClass: string;
  eventLabel: string;
  externalLink: boolean;
  component: string;
  __typename: string;
};

export interface MetaData {
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
  metaOgImage: ImageType;
  twitterCard: string;
  twitterUrl: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: ImageType;
  __typename: string;
  componentId: string;
}
