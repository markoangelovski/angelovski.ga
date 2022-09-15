import { useState } from "react";
import Image from "next/image";

import { imgAspectRatio, imgLoader } from "@global/helpers/image/image";

import { ImageType } from "types/contentful.types";
import useScreenSize from "@global/helpers/hooks/useScreenSize";

const ImageWithModal = ({
  image,
  width
}: {
  image: ImageType;
  width?: number;
}) => {
  const [open, setOpen] = useState(false);

  const toggleModal = (state: boolean) => {
    // Prevents scrolling when modal is open.
    state
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
    setOpen(state);
  };

  const screen = useScreenSize();

  const ar = imgAspectRatio(image);

  // Sets the default width to 600 if width prop is not passed.
  width = width || 600;
  // Check if user is on mobile and use the device screen width if yes.
  width = screen?.isMobile ? screen.width : width;

  return (
    <>
      <div className="group flex flex-col">
        <Image
          onClick={() => toggleModal(!open)}
          className="cursor-pointer"
          src={image.image.src}
          alt={image.imageAltText}
          title={image.imageTitle}
          width={width}
          height={width / ar}
          loader={imgLoader}
        />
        <span className="invisible mt-1 self-end text-xs text-gray-500 group-hover:visible dark:text-gray-400">
          Click on the image to view in full size.
        </span>
      </div>

      {open && (
        <div
          onClick={() => toggleModal(false)}
          className="fixed inset-0 z-10 flex h-screen w-full cursor-default items-center justify-center bg-neutral-500/75"
        >
          <div className="flex max-w-[1600px] flex-col">
            <span
              title="Close"
              className="z-20 h-6 w-6 translate-y-6 cursor-pointer self-end bg-neutral-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>

            <div className="bg-neutral-500">
              <Image
                className="z-10 cursor-pointer"
                src={image.image.src}
                alt={image.imageAltText}
                title={image.imageTitle}
                width={image.image.width}
                height={image.image.height}
                loader={imgLoader}
              />
            </div>
            <p className="bg-neutral-300 p-2 text-sm text-black">
              {image.image.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageWithModal;
