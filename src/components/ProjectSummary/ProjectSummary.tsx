import { ProjectSummary } from "./ProjectSummary.types";
import InternalLink from "../InternalLink/InternalLink";
import BuiltWithImg from "../BuiltWithImg/BuiltWithImg";
import ImageModal from "../ImageModal/ImageModal";

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
  const builtWithImgs = builtWithCollection.items;

  return (
    <section className="border-b-[1px] border-gray-300 pt-5 dark:border-gray-700 xl:flex">
      <div className="">
        <ImageModal image={screenshot} />
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
