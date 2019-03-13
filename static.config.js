import axios from "axios";
import path from "path";
import jdown from "jdown";

export default {
  plugins: [
    "react-static-plugin-typescript",
    [
      "react-static-plugin-css-modules",
      {
        modules: true, // set true by default
        localIdentName: "[hash:base64:12]" // just an example
        // any other options you wish from css-loader
        // want to use sass? you can track it down in your webpack build and add the loader
        // otherwise open an issue tagging @ScriptedAlchemy. He will enhance the options if required
      }
    ]
  ],
  entry: path.join(__dirname, "src", "index.tsx"),
  getSiteData: () => ({
    title: "ÆSIR - Association of Engineering Students in Rocketry",
    metaDescription:
      "Association of Engineering Students in Rocketry, by students from KTH Royal Institute of Technology, in Stockholm, Sweden."
  }),
  getRoutes: async data => {
    const projectsMap = await jdown("./src/data/projects", {
      parseMd: false,
      fileInfo: true
    });

    const projects = Object.keys(projectsMap).map(key => {
      const summary = projectsMap[key].summary;
      const details = projectsMap[key].details;
      return {
        folder: key,
        details: {
          fileInfo: {
            path: details.fileInfo.path.replace(/\\/g, "/"),
            modifiedAt: details.fileInfo.modifiedAt
          }
        },
        summary: {
          title: summary.title,
          slug: summary.slug,
          started: summary.started,
          completed: summary.completed,
          fileInfo: {
            path: summary.fileInfo.path.replace(/\\/g, "/"),
            modifiedAt: summary.fileInfo.modifiedAt
          }
        },
        sortBy: summary.sortBy || summary.started || summary.title
      };
    });
    projects.sort((a, b) => b.sortBy.localeCompare(a.sortBy));

    const currentProjects = projects.filter(el => el.summary.completed === false);
    const pastProjects = projects.filter(el => typeof el.summary.completed === "number");

    console.dir(
      { projects, currentProjects, pastProjects },
      {
        depth: 10
      }
    );

    return [
      {
        path: "/styling-test",
        component: "src/pages/styling-test",
        noindex: true
      },
      {
        path: "/",
        getData: () => ({
          currentProjects,
          pastProjects
        }),
        children: projects.map(project => ({
          path: `/projects/${project.summary.slug}`,
          component: "src/containers/project",
          getData: () => ({
            project
          })
        }))
      }
    ];
  }
};
