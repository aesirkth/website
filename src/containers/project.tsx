import React from "react";
import { withRouteData } from "react-static";
import { Project } from "../types";
import { Column } from "@components/column";
import { MarkdownWrapper } from "@components/markdown";

export default withRouteData(({ project }: { project: Project }) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { default: Route } = require("@data/projects/" + project.details.fileInfo.path);
  return (
    <Column>
      <MarkdownWrapper title={project.summary.title}>
        <h2>
          {project.summary.completed === false && (
            <>An ongoing project since {project.summary.started}</>
          )}
          {project.summary.completed !== false &&
            project.summary.completed === project.summary.started && (
              <>A project during {project.summary.started}</>
            )}
          {project.summary.completed !== false &&
            project.summary.completed !== project.summary.started && (
              <>
                A project between {project.summary.started} and {project.summary.completed}
              </>
            )}
        </h2>
        <Route />
      </MarkdownWrapper>
    </Column>
  );
});
