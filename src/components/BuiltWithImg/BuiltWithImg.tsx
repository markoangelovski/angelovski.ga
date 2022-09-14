import Image from "next/image";

import { imgLoader } from "@global/helpers/image/image";

import { ImageType } from "types/contentful.types";

const BuiltWithImg = (props: ImageType) => {
  const { image, imageAltText, imageTitle } = props;

  return (
    <div className="m-2 flex h-12 w-12 items-center justify-center rounded-full  dark:bg-white">
      <Image
        src={image.src}
        alt={imageAltText}
        title={imageTitle}
        width={50}
        height={50}
        loader={imgLoader}
      />
    </div>
  );
};

export default BuiltWithImg;
