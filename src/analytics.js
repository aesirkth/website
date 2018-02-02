import "autotrack/lib/plugins/outbound-form-tracker";
import "autotrack/lib/plugins/outbound-link-tracker";
import "autotrack/lib/plugins/url-change-tracker";

window.dataLayer = window.dataLayer || [];
function gtag() {
  /* eslint prefer-rest-params: 0 */
  window.dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("require", "eventTracker");
gtag("require", "outboundLinkTracker");
gtag("require", "urlChangeTracker");
gtag("config", "UA-113469156-1");