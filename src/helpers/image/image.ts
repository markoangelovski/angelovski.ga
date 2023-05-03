// Next's image optimization does not work with next export

import { ImageLoaderProps } from "next/image";
import { ImageDetails, ImageType } from "types/contentful.types";

// https://nextjs.org/docs/api-reference/next/image#loader
export const imgLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https:${src}?w=${width}&q=${quality || 75}&fm=webp`;
};

export const imgAspectRatio = ({ image }: { image: ImageDetails }) => {
  return image.width / image.height;
};
