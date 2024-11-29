
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { CustomTrigger } from "@/components/customSidebarTrigger";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Dashboard",
  description: "Checkout your dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full
        
        ">
          <CustomTrigger />
          {/* <div className="fixed top-2 right-2">
            <ThemeToggler />
          </div> */}
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
