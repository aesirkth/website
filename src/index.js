import "./style";
import App from "./components/app";

if (typeof window !== "undefined") {
  /* eslint no-console: 0 */
  /* global System */
  System.import("./analytics").then(() => console.info("Analytics ready"));
  System.import("./errors").then(() => console.info("Error logging ready"));
}
export default App;
