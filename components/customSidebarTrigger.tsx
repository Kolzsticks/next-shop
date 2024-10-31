"use client";
import React from "react";
import { useSidebar } from "./ui/sidebar";

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar(); // Assuming `useSidebar` provides this function

  return (
    <span
      onClick={toggleSidebar}
      className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-7 lg:[&_svg]:size-5 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-panel-left-close"
      >
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M9 3v18"></path>
        <path d="m16 15-3-3 3-3"></path>
      </svg>

    </span>
  );
}
