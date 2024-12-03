"use client";
import Image from "next/image";

import {
  User,
  Package,
  Heart,
  CreditCard,
  Settings,
  MapPin,
  Lock,
  Bell,
  ChevronUp,
  HomeIcon,
} from "lucide-react";

import Link from "next/link";

import { useSidebar } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { handleSignOut } from "@/app/(auth)/actions/authActions";
import { useSession } from "next-auth/react";
import { getFirstName } from "@/app/utils/functions";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: User, // Represents user's profile/dashboard
  },
  {
    title: "Orders",
    url: "/orders",
    icon: Package, // Represents order history or status
  },
  {
    title: "Wishlist",
    url: "/wishlist",
    icon: Heart, // Represents wishlist items
  },
  {
    title: "Payment Methods",
    url: "/payment_methods",
    icon: CreditCard, // Represents payment details or saved cards
  },
  {
    title: "Addresses",
    url: "/adresses",
    icon: MapPin, // Represents address management
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell, // Represents notification preferences
  },
  {
    title: "Change Password",
    url: "/change_password",
    icon: Lock, // Represents security/password change
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings, // Represents general settings
  },
];

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  const [isMobile, setIsMobile] = useState(false);
  const { data: session, status } = useSession();
  const initials = getFirstName(session?.user?.name || 'Guest');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true); // On mobile screens
      } else {
        setIsMobile(false); // On larger screens
      }
    };

    // Initialize the screen size
    handleResize();

    // Add event listener to resize the window
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = () => {
    if (isMobile) {
      toggleSidebar(); // Only toggle sidebar on mobile screens
    }
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Link href="/" className="flex items-center" title="Go back Home">
              <Image
                width={30}
                height={30}
                src="/img/logo.png"
                alt="OnyxShop logo"
              />
              <span className="text-xl">
                <span className="fg-theme">Onyx</span>
                <span className="text-black">Shop</span>
              </span>

              <span className="ml-2 text-orange-500">
                <HomeIcon />
              </span>
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex gap-8 lg:gap-4 mt-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link onClick={handleLinkClick} href={item.url}>
                      <item.icon className="mr-2" />{" "}
                      <span className="lg:text-sm text-lg ">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                className="focus-visible:ring-0 outline-none ring-0"
                asChild
              >
                <SidebarMenuButton className="focus:outline-none ">
                  <User /> {initials}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem className="w-full">
                  <form action={handleSignOut} className="w-full">
                    <span className="w-full">
                      <button
                        className="w-full focus:outline-none ring-0 text-left"
                        type="submit"
                      >
                        Sign out
                      </button>
                    </span>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
