// TODO: sredi types
const EmbeddedDiagram = ({ diagram }: any) => {
  const { title, description, height, diagramIframeSource } = diagram;

  const diagramSrc = diagramIframeSource?.content[0].content[0].value;

  return (
    <div className="group flex cursor-pointer flex-col">
      <iframe
        title={title}
        frameBorder="0"
        style={{ width: "1024px", height: height + "px" }}
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
