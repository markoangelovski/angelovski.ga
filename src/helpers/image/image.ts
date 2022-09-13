// Next's image optimization does not work with next export

import { ImageLoaderProps } from "next/image";

// https://nextjs.org/docs/api-reference/next/image#loader
export const imgLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https:${src}?w=${width}&q=${quality || 75}&fm=webp`;
};
