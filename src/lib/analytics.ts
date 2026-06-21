// analytics.ts
// ─────────────────────────────────────────────────────────────────────────────
// Frontend analytics stubs.
// These match the analytics_events table in the backend diagram:
//   id, creator_id, product_id, event_type, creator_id, device_type, created_at
//
// Enum values from the flow diagram:
//   STORE_VIEW | PRODUCT_VIEW | PRODUCT_CLICK
//
// TODO (backend team):
//   1. Replace the console.log inside trackEvent with a real POST to /api/analytics
//   2. The API should write a row into analytics_events
//   3. From analytics_events the platform can compute:
//      - Total storefront views  (STORE_VIEW)
//      - Product views           (PRODUCT_VIEW)
//      - Product clicks          (PRODUCT_CLICK)
//      - Top products
//      - Daily trends
//      - Device analytics        (device_type from navigator.userAgent)
//      - Traffic source          (referrer from document.referrer)
// ─────────────────────────────────────────────────────────────────────────────

import { trackAnalyticsEvent } from "./api";

export type EventType = "STORE_VIEW" | "PRODUCT_VIEW" | "PRODUCT_CLICK";

export type TrackEventPayload = {
  type: EventType;
  creatorId?: string;
  productId?: number | string;
};

export function trackEvent(payload: TrackEventPayload): void {
  // Call the backend API handler asynchronously (fails silently if API is offline/unimplemented)
  trackAnalyticsEvent({
    type: payload.type,
    creatorId: payload.creatorId,
    productId: payload.productId ? String(payload.productId) : undefined,
    deviceType: getDeviceType(),
    trafficSource: typeof window !== "undefined" ? document.referrer || "direct" : "direct",
  });

  if (process.env.NODE_ENV === "development") {
    console.log("[analytics]", payload);
  }
}

// Detects device type for device_analytics table
export function getDeviceType(): "mobile" | "tablet" | "desktop" {
  if (typeof window === "undefined") return "desktop";
  const ua = navigator.userAgent;
  if (/tablet|ipad|playbook|silk/i.test(ua)) return "tablet";
  if (/mobile|iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(ua)) return "mobile";
  return "desktop";
}

// Captures traffic source for traffic_source_analytics table
export function getTrafficSource(): string {
  if (typeof window === "undefined") return "direct";
  const referrer = document.referrer;
  if (!referrer) return "direct";
  if (referrer.includes("instagram")) return "instagram";
  if (referrer.includes("youtube")) return "youtube";
  if (referrer.includes("twitter") || referrer.includes("x.com")) return "twitter";
  if (referrer.includes("whatsapp")) return "whatsapp";
  if (referrer.includes("google")) return "google";
  return "other";
}