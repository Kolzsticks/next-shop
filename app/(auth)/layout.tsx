import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication OnyxShop",
  description: "Start by registering or login in to continue",
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default MainLayout;
