"use client";

import { useEffect } from "react";

export default function BeforeInstallPrompt() {
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault(); // Prevents the mini-infobar from appearing on mobile
      (e as any).prompt(); // Casts the event to any to call prompt()
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
  }, []);

  return null; // No need to return UI since this is only for the event listener
}
