import React from "react";
import { withRouteData } from "react-static";
import { Project } from "@src/types/data";
import { Column } from "@components/column";
import { MarkdownWrapper } from "@components/markdown";

export default withRouteData(({ project }: { project: Project }) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { default: Route, readingTime } = require("@data/projects/" +
    project.details.fileInfo.path);

  let subTitle = null;
  if (project.summary.completed === false) {
    subTitle = `An ongoing project since ${project.summary.started}`;
  } else {
    if (project.summary.completed === project.summary.started) {
      subTitle = `A project during ${project.summary.started}`;
    } else {
      subTitle = `A project between ${project.summary.started} and ${project.summary.completed}`;
    }
  }
  return (
    <Column>
      <MarkdownWrapper
        prefix="projects/"
        title={project.summary.title}
        subTitle={subTitle}
        readingTime={readingTime}
      >
        <Route />
      </MarkdownWrapper>
    </Column>
  );
});
