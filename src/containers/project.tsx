import React from "react";
import { withRouteData } from "react-static";
import { Project } from "../types";
import { Column } from "@components/column";

export default withRouteData(({ project }: { project: Project }) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { default: Route, ...route } = require("@data/projects/" + project.details.fileInfo.path);
  console.log(route);
  return (
    <Column>
      <h1>{project.summary.title}</h1>
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
    </Column>
  );
});
