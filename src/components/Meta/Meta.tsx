import Head from "next/head";

import { MetaData } from "types/contentful.types";

const Meta = ({ metaData }: { metaData: MetaData }) => {
  const {
    title,
    metaTitle,
    metaDescription,
    metaOgType,
    metaOgUrl,
    metaOgTitle,
    metaOgDescription,
    metaOgImage,
    twitterCard,
    twitterUrl,
    twitterTitle,
    twitterDescription,
    twitterImage
  } = metaData;

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={metaTitle}></meta>
      <meta name="description" content={metaDescription}></meta>

      <meta property="og:type" content={metaOgType}></meta>
      <meta property="og:url" content={metaOgUrl}></meta>
      <meta property="og:title" content={metaOgTitle}></meta>
      <meta property="og:description" content={metaOgDescription}></meta>
      <meta
        property="og:image"
        content={"https:" + metaOgImage.image.url}
      ></meta>

      <meta property="twitter:card" content={twitterCard}></meta>
      <meta property="twitter:url" content={twitterUrl}></meta>
      <meta property="twitter:title" content={twitterTitle}></meta>
      <meta property="twitter:description" content={twitterDescription}></meta>
      <meta
        property="twitter:image"
        content={"https:" + twitterImage.image.url}
      ></meta>
    </Head>
  );
};

export default Meta;
