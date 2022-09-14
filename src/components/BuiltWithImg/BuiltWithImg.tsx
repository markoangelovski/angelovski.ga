import Image from "next/image";

import { imgLoader } from "@global/helpers/image/image";

import { ImageType } from "types/contentful.types";
import Link from "next/link";

const BuiltWithImg = (props: ImageType) => {
  const { image, imageAltText, imageTitle, imageUrl } = props;

  return (
    <div className="m-2 h-12 w-12 rounded-full dark:overflow-hidden dark:bg-white">
      <Link href={imageUrl}>
        <a
          className="flex cursor-pointer items-center justify-center"
          target="_blank"
        >
          <Image
            src={image.src}
            alt={imageAltText}
            title={imageTitle}
            width={50}
            height={50}
            loader={imgLoader}
          />
        </a>
      </Link>
    </div>
  );
};

export default BuiltWithImg;
