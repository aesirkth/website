import "autotrack/lib/plugins/outbound-form-tracker";
import "autotrack/lib/plugins/outbound-link-tracker";
import "autotrack/lib/plugins/url-change-tracker";

(window as any).dataLayer = (window as any).dataLayer || [];
function gtag() {
  /* eslint prefer-rest-params: 0 */
  (window as any).dataLayer.push(arguments);
}
(gtag as any)("js", new Date());

(gtag as any)("require", "eventTracker");
(gtag as any)("require", "outboundLinkTracker");
(gtag as any)("require", "urlChangeTracker");
// eslint-disable-next-line @typescript-eslint/camelcase
(gtag as any)("config", "UA-113469156-1", { anonymize_ip: true });
