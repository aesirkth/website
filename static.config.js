import axios from "axios";
import path from "path";

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
  getRoutes: async () => {
    const { data: posts } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return [
      {
        path: "/blog",
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: "src/containers/post",
          getData: () => ({
            post
          })
        }))
      }
    ];
  }
};
