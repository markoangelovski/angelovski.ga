import { useState } from "react";
import Image from "next/image";

import { imgAspectRatio, imgLoader } from "@global/helpers/image/image";

import { ImageType } from "types/contentful.types";
import useScreenSize from "@global/helpers/hooks/useScreenSize";

const ImageModal = ({ image }: { image: ImageType }) => {
  const [open, setOpen] = useState(false);

  const screen = useScreenSize();

  const ar = imgAspectRatio(image);

  return (
    <>
      <Image
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
        src={image.image.src}
        alt={image.imageAltText}
        title={image.imageTitle}
        width={600}
        height={600 / ar}
        loader={imgLoader}
      />
      {!screen?.isMobile && open && (
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 flex h-full w-full cursor-default items-center justify-center bg-neutral-500/75 outline-none"
        >
          <div className="flex flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="z-20 h-6 w-6 translate-y-6 cursor-pointer self-end bg-neutral-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            <Image
              onClick={() => setOpen(!open)}
              className="z-10 cursor-pointer"
              src={image.image.src}
              alt={image.imageAltText}
              title={image.imageTitle}
              width={image.image.width}
              height={image.image.height}
              loader={imgLoader}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
