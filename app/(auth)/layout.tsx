import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Dashboard OnyxShop",
  description: "Checkout your dashboard.",
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default MainLayout;
