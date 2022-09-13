import type { GetStaticPaths, GetStaticProps } from "next";

import ContentfulService from "@global/adapters/contentful/contentful.service";
import {
  parseRefJSON,
  refReplacer,
  TrimStructure
} from "@global/adapters/contentful/contentful.adapter";
import Result from "@global/adapters/result";
import {
  TypeMetaData,
  TypePage
} from "@global/adapters/contentful/contentful.types";
import { buildSlug } from "@global/helpers/url/url";
import { ContentfulComponents } from "@global/helpers/components-mapper/components-mapper";
import Layout from "../src/components/Layout/Layout";

import { PageProps } from "types/page.types";

const Page = (props: PageProps) => {
  const { metaData, components, globalComponents } = props;
  const componentsData = [parseRefJSON(components)];
  const globalcomponentsData = parseRefJSON(globalComponents);

  return (
    <>
      <Layout metaData={metaData} globalComponents={globalcomponentsData}>
        <ContentfulComponents componentsProps={componentsData[0].content} />
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
  const pagesResult: Result<TypePage[]> = await contentfulService.getPages({
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

  const globalComponentsData = await contentfulService.getGlobalComponents();

  if (globalComponentsData.isFailure) {
    throw new Error(globalComponentsData.error);
  }

  const globalComponents = globalComponentsData.getValue() as any;

  // "content" comes from Contentful, it is the name of the Reference field "Content" where all page sections are linked
  pageData.fields.content = TrimStructure(pageData.fields.content);

  if (globalComponents.header) {
    globalComponents.header = TrimStructure(globalComponents.header);
  }

  const globalComponentsMapped = {
    header: globalComponents.header
  };

  // Escape circural reference
  const pageComponentsJsonString = JSON.stringify(
    pageData.fields,
    refReplacer()
  );
  const globalComponentsJsonString = JSON.stringify(
    globalComponentsMapped,
    refReplacer()
  );

  return {
    props: {
      metaData: pageInfo,
      components: pageComponentsJsonString,
      globalComponents: globalComponentsJsonString
    }
  };
};

export default Page;
