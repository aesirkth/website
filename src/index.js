import "./style";
import App from "./components/app";

import "autotrack/lib/plugins/outbound-link-tracker";
import "autotrack/lib/plugins/url-change-tracker";
import Raven from "raven-js";
Raven
  .config("https://e20ef790f5704cde9f95f731be7fd847@sentry.io/153019")
  .install();

export default App;
