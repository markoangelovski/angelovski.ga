import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from "next";

import ContentfulService from "@global/adapters/contentful/contentful.service";
import { TrimStructure } from "@global/adapters/contentful/contentful.adapter";
import Result from "@global/adapters/result";
import {
  TypeHomepage,
  TypeMetaData,
  TypeProduct
} from "@global/adapters/contentful/contentful.types";
import { buildSlug } from "@global/helpers/url/url";

import Layout from "../src/components/Layout/Layout";

const Home: NextPage = ({
  metaData
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout metaData={metaData}>
        <div>random</div>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contentfulService = ContentfulService.getInstance();
  const pagesResult: Result<TypeMetaData[]> =
    await contentfulService.getPagesMetaData();
  const slugs: string[] = [];

  if (pagesResult.isFailure) {
    throw new Error(pagesResult.error);
  }

  pagesResult?.getValue()?.forEach(page => {
    if (page.fields.slug) {
      slugs.push(page.fields.slug);
    } else {
      throw new Error(`Page must have a slug defined.`);
    }
  });

  return {
    paths: slugs,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageSlug = buildSlug(params?.slug);
  const contentfulService = ContentfulService.getInstance();

  // getStaticProps only passes the "slug" of the page
  // because of this page needs to be fetched based on the slug
  // slug of the page must be unique
  const pagesResult: Result<(TypeHomepage | TypeProduct)[]> =
    await contentfulService.getPages({
      content_type: pageSlug === "/" ? "homepage" : "product",
      "fields.metaData.sys.contentType.sys.id": "metaData",
      "fields.metaData.fields.slug": `${pageSlug}`
    });

  if (pagesResult.isFailure) {
    throw new Error(pagesResult.error);
  }

  const pageDataResult = pagesResult.getValue();
  const pageData = pageDataResult && pageDataResult[0];

  if (!pageData) {
    throw new Error("Page data does not exist");
  }

  const pageInfo = TrimStructure(pageData.fields.metaData);

  return {
    props: { metaData: pageInfo }
  };
};

export default Home;
