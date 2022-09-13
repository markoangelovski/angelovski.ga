import { ProjectSummary } from "./ProjectSummary.types";

const ProjectSummary = (props: ProjectSummary) => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
};

export default ProjectSummary;
