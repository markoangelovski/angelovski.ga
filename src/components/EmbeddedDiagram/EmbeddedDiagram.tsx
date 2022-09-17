import Image from "next/image";
import Link from "next/link";

import useScreenSize from "@global/helpers/hooks/useScreenSize";
import { imgLoader } from "@global/helpers/image/image";

import { Diagram } from "./EmbeddedDiagram.types";

const EmbeddedDiagram = ({ diagram }: { diagram: Diagram }) => {
  const screen = useScreenSize();

  const { title, description, height, diagramIframeSource, mobileImage } =
    diagram;

  const diagramSrc = diagramIframeSource?.content[0].content[0].value;

  if (screen?.isMobile)
    // Redirect user to new tab on mobile and display the entire diagram
    return (
      <div className="my-5">
        <Link href={diagramSrc}>
          <a target="_blank">
            <Image
              src={mobileImage.image.src}
              alt={mobileImage.imageAltText}
              title={mobileImage.imageTitle}
              width={mobileImage.image.width}
              height={mobileImage.image.height}
              loader={imgLoader}
            />
            <p className="mt-2 text-sm">{description}</p>
          </a>
        </Link>
      </div>
    );

  return (
    <div className="group flex w-full flex-col md:max-w-5xl">
      <iframe
        title={title}
        className="w-full"
        frameBorder="0"
        style={{ height: height + "px" }}
        src={diagramSrc}
      ></iframe>
      <span className="invisible mt-1 self-end text-xs text-gray-500 group-hover:visible dark:text-gray-400">
        Ctrl + scroll to zoom in.
      </span>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default EmbeddedDiagram;
