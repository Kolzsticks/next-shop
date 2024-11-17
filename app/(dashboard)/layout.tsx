
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { CustomTrigger } from "@/components/customSidebarTrigger";
// import { ThemeToggler } from "./(main_components)/ThemeToggleButton";
// import { ThemeProvider } from "@/components/theme-provider";

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
