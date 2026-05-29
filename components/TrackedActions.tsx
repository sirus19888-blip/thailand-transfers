"use client";

import type { ReactNode } from "react";

type DataLayerWindow = Window & {
  dataLayer?: object[];
};

type EventPayload = Record<string, string | number | boolean | undefined>;

function pushEvent(event: string, payload: EventPayload) {
  const trackingWindow = window as DataLayerWindow;

  trackingWindow.dataLayer = trackingWindow.dataLayer || [];
  trackingWindow.dataLayer.push({
    event,
    ...payload,
  });
}

export function TrackedAnchor({
  href,
  children,
  className,
  event,
  payload,
  target,
  rel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  event: string;
  payload: EventPayload;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      onClick={() => pushEvent(event, payload)}
    >
      {children}
    </a>
  );
}

export function SaveScreenshotButton({
  route,
  label = "Save screenshot",
}: {
  route: string;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        pushEvent("save_offline_clicked", {
          route,
          action: "save_screenshot_instruction",
        });

        window.alert("Use your phone screenshot buttons to save this pickup guide.");
      }}
      className="flex min-h-12 items-center justify-center rounded-2xl bg-[#f8f4ec] px-3 py-3 text-center text-xs font-extrabold text-[#0c5a4d]"
    >
      {label}
    </button>
  );
}
