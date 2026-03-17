export type AnalyticsEvent =
  | "view_menu"
  | "add_to_cart"
  | "start_checkout"
  | "place_order_click";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  payload: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload, timestamp: Date.now() });

  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics]", event, payload);
  }
}
