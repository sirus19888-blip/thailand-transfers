"use client";

import { useEffect } from "react";

type DataLayerWindow = Window & {
  dataLayer?: object[];
};

export function RouteAnalytics({
  route,
  event = "route_result_viewed",
}: {
  route: string;
  event?: string;
}) {
  useEffect(() => {
    const trackingWindow = window as DataLayerWindow;

    trackingWindow.dataLayer = trackingWindow.dataLayer || [];
    trackingWindow.dataLayer.push({
      event,
      route,
      language: "en",
    });
  }, [event, route]);

  return null;
}
