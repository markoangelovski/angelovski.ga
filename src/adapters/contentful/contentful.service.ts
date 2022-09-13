/* eslint-disable no-use-before-define */
// It does not allow singleton pattern
// Workaround is to export instance of the class from the module
// But singleton is to be prefered since passing the instance around is easy
// Otherwise you would have to pass the module around
// /* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import * as contentful from "contentful";
import Result from "../result";
import {
  TypeHomepage,
  TypeMetaData,
  TypePage,
  TypeProduct
} from "./contentful.types";
// import { IPageFields } from './types1';

/** Class representing an api to Contentful. All Contentful data manipulation (fetching, posting, updating)
 * should be done using this singleton.
 */
export default class ContentfulService {
  private static instance: ContentfulService;

  public pages;

  public products;

  public filters;

  /** Contentful client used to fetch data */
  private client: contentful.ContentfulClientApi;

  private constructor() {
    this.client = contentful.createClient({
      space: process.env.CF_SPACE_ID || "",
      accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN || "",
      environment: process.env.CF_ENVIRONMENT || "master"
    });
  }

  /**
   * Creates instane of ContentfulService if it does not exist. Othwerise it retuns existing one.
   * @returns instance of ContentfulService
   */
  public static getInstance(): ContentfulService {
    if (!ContentfulService.instance) {
      ContentfulService.instance = new ContentfulService();
    }

    return ContentfulService.instance;
  }

  /**
   * Fetches content of type "metaData" from Contentful
   * @param filter optional filter for available options refer to official documentation
   * @returns promise of type result if fetch succeded then promise will return result.ok with fetched pages
   * within "_value" property. Otherwise it will return result.fail with error contained wihin "error" property
   */
  async getPagesMetaData(
    filter?: Record<string, string>
  ): Promise<Result<Array<TypeMetaData>>> {
    try {
      const data = await this.client.getEntries<TypeMetaData>({
        content_type: "metaData",
        ...filter,
        include: 6,
        limit: 1000
      });
      const pages: TypeMetaData[] = data.items.map(page => page);
      return Result.ok<Array<TypeMetaData>>(pages);
    } catch (e) {
      return Result.fail<Array<TypeMetaData>>(
        `Fetching pages meta data failed with the error ${e}.`
      );
    }
  }

  /**
   * Fetches content of type "metaData" from Contentful
   * @param filter optional filter for available options refer to official documentation
   * @returns promise of type result if fetch succeded then promise will return result.ok with fetched pages
   * within "_value" property. Otherwise it will return result.fail with error contained wihin "error" property
   */
  async getPages(
    filter?: Record<string, string>
  ): Promise<Result<Array<TypeHomepage | TypeProduct>>> {
    try {
      const data = await this.client.getEntries<TypeHomepage | TypeProduct>({
        ...filter,
        include: 6,
        limit: 1000
      });
      const pages: TypeHomepage[] | TypeProduct[] = data.items.map(
        page => page
      );
      return Result.ok<Array<TypeMetaData>>(pages);
    } catch (e) {
      return Result.fail<Array<TypeMetaData>>(
        `Fetching static pages failed with the error ${e}.`
      );
    }
  }
}
