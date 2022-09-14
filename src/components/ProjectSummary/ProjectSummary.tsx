import Image from "next/image";

import { imgAspectRatio, imgLoader } from "@global/helpers/image/image";

import { ProjectSummary } from "./ProjectSummary.types";
import InternalLink from "../InternalLink/InternalLink";
import BuiltWithImg from "../BuiltWithImg/BuiltWithImg";

const ProjectSummary = (props: ProjectSummary) => {
  const {
    screenshotsCollection,
    title,
    shortDescription,
    productUrlLink,
    builtWithCollection,
    viewMoreDetailsButton
  } = props;

  const screenshot = screenshotsCollection.items[0];
  const ar = imgAspectRatio(screenshot);
  const builtWithImgs = builtWithCollection.items;

  return (
    <section className="mt-5 border-b-2 border-black dark:border-white xl:flex">
      <div className="">
        <Image
          src={screenshot.image.src}
          alt={screenshot.imageAltText}
          title={screenshot.imageTitle}
          width={600}
          height={600 / ar}
          loader={imgLoader}
        />
      </div>
      <div className="mb-5 xl:ml-5">
        <h2 className="mt-2 text-xl font-medium xl:mt-0">{title}</h2>
        <p className="mt-2 font-light">{shortDescription}</p>
        <ul className="mt-2 list-disc pl-5">
          <li>
            <InternalLink {...productUrlLink} />
          </li>
        </ul>
        <p className="mt-2 font-light">Built with:</p>
        <div className="flex flex-wrap">
          {builtWithImgs.map((img, i) => (
            <BuiltWithImg key={i} {...img} />
          ))}
        </div>
        <div className="my-4">
          <InternalLink {...viewMoreDetailsButton} />
        </div>
      </div>
    </section>
  );
};

export default ProjectSummary;
