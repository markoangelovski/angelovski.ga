import { documentToReactComponents as renderRichText } from "@contentful/rich-text-react-renderer";

import ImageModal from "../ImageModal/ImageModal";

const RenderTitle = ({
  title,
  titleType
}: {
  title: string;
  titleType: string;
}) => {
  if (!title) return null;

  switch (titleType) {
    case "H1":
      return <h1>{title}</h1>;
    case "H2":
      return <h2>{title}</h2>;
    case "H3":
      return <h3>{title}</h3>;
    default:
      return null;
  }
};

// TODO: Handle these types!!
const ProjectDetail = (props: any) => {
  const {
    title,
    titleType,
    description,
    imagesSectionCollection,
    secondaryTitle,
    secondaryTitleType,
    secondaryDescription
  } = props;
  const images = imagesSectionCollection.items;

  return (
    <section>
      <RenderTitle title={title} titleType={titleType} />
      {renderRichText(description)}
      {images.map((image: any, i: number) => (
        <ImageModal key={i} image={image} />
      ))}
      <RenderTitle title={secondaryTitle} titleType={secondaryTitleType} />
      {renderRichText(secondaryDescription)}
    </section>
  );
};

export default ProjectDetail;
