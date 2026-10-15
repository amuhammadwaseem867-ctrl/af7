"use client";

import { useSyncExternalStore } from "react";

const READY_EVENT = "af7:ready";

export function markPageReady() {
  window.__af7Ready = true;
  window.dispatchEvent(new Event(READY_EVENT));
}

function subscribe(callback) {
  window.addEventListener(READY_EVENT, callback);
  return () => window.removeEventListener(READY_EVENT, callback);
}

/** True once the first-visit preloader has started revealing the page. */
export default function usePageReady() {
  return useSyncExternalStore(
    subscribe,
    () => Boolean(window.__af7Ready),
    () => false
  );
}
