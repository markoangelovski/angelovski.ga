import {
  documentToReactComponents as renderRichText,
  Options
} from "@contentful/rich-text-react-renderer";
import { MARKS, BLOCKS, INLINES, Document } from "@contentful/rich-text-types";

import ImageWithModal from "../ImageWithModal/ImageWithModal";
import EmbeddedDiagram from "../EmbeddedDiagram/EmbeddedDiagram";
import CustomBtnLink from "../CustomBtnLink/CustomBtnLink";

import { ProjectDetail } from "./ProjectDetail.types";
import { ImageType } from "types/contentful.types";
import { Diagram } from "../EmbeddedDiagram/EmbeddedDiagram.types";

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
      return (
        <h1 className="py-10 text-3xl font-medium text-cyan-700 dark:text-cyan-300">
          {title}
        </h1>
      );
    case "H2":
      return (
        <h2 className="py-5 text-2xl font-medium text-cyan-700 dark:text-cyan-300">
          {title}
        </h2>
      );
    case "H3":
      return (
        <h3 className="py-5 text-xl font-medium text-cyan-700 dark:text-cyan-300">
          {title}
        </h3>
      );
    default:
      return null;
  }
};

const ProjectDetail = (props: ProjectDetail) => {
  const {
    title,
    titleType,
    description,
    imagesSectionCollection,
    diagramsSectionCollection
  } = props;

  const images = imagesSectionCollection?.items;
  const diagrams = diagramsSectionCollection?.items;

  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.ITALIC]: text => <em>{text}</em>
    },
    renderNode: {
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        if (node.data.target.sys.contentType.sys.id === "button") {
          return <CustomBtnLink {...node.data.target.fields} />;
        }
      },
      [BLOCKS.PARAGRAPH]: (node, children) =>
        // Rich text field in Contentful injects an empty p tag at the end of rich text. This is to prevent the extra p tag from rendering.
        Array.isArray(children) &&
        !!children[0] && <p className="mt-2">{children}</p>,
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="mt-2 list-disc pl-5">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="mt-2 list-decimal pl-5">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => {
        // Text in li tags is wrapped in p tags by default. This is a workaround to remove p tags. It does not support nested elements. https://github.com/contentful/rich-text/issues/126#issuecomment-981068613
        const normalisedChildren = renderRichText(node as Document, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => children,
            [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>
          }
        });
        return normalisedChildren;
      }
    }
  };

  return (
    <section className="md:px-5">
      <RenderTitle title={title} titleType={titleType} />

      {renderRichText(description, options)}

      <div className="mb-5 flex flex-col items-center">
        {images?.map((image: ImageType, i: number) => (
          <div key={i} className="my-5 max-w-5xl">
            <ImageWithModal image={image} width={1024} />
            <p className="text-sm">{image.image.description}</p>
          </div>
        ))}

        {diagrams?.map((diagram: Diagram, i: number) => (
          <EmbeddedDiagram key={i} diagram={diagram} />
        ))}
      </div>

      <hr className="mt-2 dark:border-neutral-500" />
    </section>
  );
};

export default ProjectDetail;
