import { ProjectSummary } from "./ProjectSummary.types";

const ProjectSummary = (props: ProjectSummary) => {
  return <div>{JSON.stringify(props, null, 2)}</div>;
};

export default ProjectSummary;
