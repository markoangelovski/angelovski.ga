import Image from "next/image";
import Link from "next/link";

import useScreenSize from "@global/helpers/hooks/useScreenSize";
import { imgLoader } from "@global/helpers/image/image";

import { Diagram } from "./EmbeddedDiagram.types";

export const CursorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="inline h-5 w-5"
  >
    <path
      fillRule="evenodd"
      d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z"
      clipRule="evenodd"
    />
  </svg>
);

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
          <a
            className="event_external_link"
            data-action-detail={
              "View diagram in new tab - mobile - " + mobileImage.imageTitle
            }
            target="_blank"
          >
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
    <div className="group my-5 flex w-full flex-col md:max-w-5xl">
      <iframe
        title={title}
        className="w-full"
        frameBorder="0"
        style={{ height: height + "px" }}
        src={diagramSrc}
      ></iframe>
      <span className="invisible mt-1 self-end text-xs text-gray-500 group-hover:visible dark:text-gray-400">
        <CursorIcon /> Ctrl + scroll to zoom in. Click{" "}
        <Link href={diagramSrc}>
          <a
            className="event_external_link text-blue-400"
            data-action-detail={
              "View diagram in new tab - desktop - " + mobileImage.imageTitle
            }
            target="_blank"
          >
            here
          </a>
        </Link>{" "}
        to view in new tab.
      </span>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default EmbeddedDiagram;
