'use client'

import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollHook = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    // Listen for route changes to scroll to the top
    router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup the event listener on unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);
};

export default ScrollHook;
