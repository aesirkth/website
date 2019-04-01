import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

// Render the app in a browser environment
if (typeof document !== "undefined") {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;

  const render = (Comp: Function) => {
    renderMethod(<Comp />, document.getElementById("root"));
  };

  render(App);

  if (module.hot) {
    module.hot.accept("./app", () => render(require("./app").default));
  }
}

export default App; // Export App for SSR
