import { ProjectSummary } from "./ProjectSummary.types";
import CustomBtnLink from "../CustomBtnLink/CustomBtnLink";
import BuiltWithImg from "../BuiltWithImg/BuiltWithImg";
import ImageWithModal from "../ImageWithModal/ImageWithModal";

const ProjectSummary = (props: ProjectSummary) => {
  const {
    screenshotsCollection,
    title,
    shortDescription,
    productUrlLink,
    builtWithTitle,
    builtWithCollection,
    viewMoreDetailsButton
  } = props;

  const screenshot = screenshotsCollection.items[0];
  const builtWithImgs = builtWithCollection.items;

  return (
    <section className="border-b-[1px] border-gray-300  pt-5 dark:border-gray-700 md:flex">
      <div className="shrink-0">
        <ImageWithModal image={screenshot} />
      </div>
      <div className="mb-5 xl:ml-5">
        <h2 className="mt-2 text-xl font-medium xl:mt-0">{title}</h2>
        <p className="mt-2 font-light">{shortDescription}</p>
        <ul className="mt-2 list-disc pl-5">
          <li>
            <CustomBtnLink {...productUrlLink} />
          </li>
        </ul>
        <p className="mt-2 font-light">{builtWithTitle}</p>
        <div className="flex flex-wrap">
          {builtWithImgs.map((img, i) => (
            <BuiltWithImg key={i} {...img} />
          ))}
        </div>
        <div className="my-4">
          <CustomBtnLink {...viewMoreDetailsButton} />
        </div>
      </div>
    </section>
  );
};

export default ProjectSummary;
