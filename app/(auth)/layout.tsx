import type { Metadata } from "next";
import "../globals.css";
import "./css/style.css";

export const metadata: Metadata = {
  title: "Shoperce",
  description: "Login Shoperce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
