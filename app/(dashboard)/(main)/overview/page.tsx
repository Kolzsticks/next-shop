'use client'

import { OverviewCards } from "@/components/overview_card";
import { ShoppingBag, DollarSign, Heart } from "lucide-react"; // Import icons
import useCartStore from "@/app/(main)/store/CartStore";
import { useSession } from "next-auth/react";

const Overview = () => {
  const { cartItems, totalItems, loadCart, removeFromCart, updateQuantity } =
    useCartStore();
  const { data: session, status } = useSession();


  return (
    <div className="flex flex-col w-full gap-8">
      <section className="flex items-center gap-2">
        <img
          className="rounded-full w-[100px]"
          src={session ? session.user.image || '/img/placeholder-male.jpg' : '/img/placeholder-male.jpg'}
          alt="Profile Picture"
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">
            Welcome back, {session?.user?.name || 'Guest'}
          </h2>
          <p className="text-sm dark:text-zinc-400">
            Customer Id: #{session?.user?.id || 'N/A'}
          </p>
        </div>
      </section>
      <div className="flex lg:flex-row flex-col w-full items-center justify-between gap-4">
        <OverviewCards
          title="Total Orders"
          value={totalItems.toString()}
          footer="View Details"
          icon={ShoppingBag}
        />

        {/* Total Spent Card */}
        <OverviewCards
          title="Total Spent"
          value="$12,500"
          footer="Track Spending"
          icon={DollarSign}
        />

        {/* Wishlist Items Card */}
        <OverviewCards
          title="Wishlist Items"
          value="10"
          footer="View Wishlist"
          icon={Heart}
        />
      </div>
    </div>
  );
};

export default Overview;
