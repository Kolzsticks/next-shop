import Link from "next/link";
import { Button } from "@/components/ui/button";

const orders = [
  {
    name: "Order #12345",
    date: "October 21, 2023",
    detailLink: "#",
  },
  {
    name: "Order #82793",
    date: "October 18, 2023",
    detailLink: "#",
  },
  {
    name: "Order #17834",
    date: "October 15, 2023",
    detailLink: "#",
  },
  {
    name: "Order #123680",
    date: "October 14, 2023",
    detailLink: "#",
  },
];

const RecentOrders = () => {
  return (
    <>
      <div className="mt-6 flex flex-col gap-2">
        <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
        {orders.map((order, index) => (
          <div key={index} className="space-y-4">
            <div className="flex justify-between items-center p-4 border rounded-md bg-white dark:bg-zinc-800">
              <div>
                <p className="font-semibold">{order.name}</p>
                <p className="text-sm text-gray-500">Placed on {order.date}</p>
              </div>
              <div>
                <Link
                  href={order.detailLink}
                  className="text-sm text-orange-600 dark:text-orange-400"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </>
  );
};

export default RecentOrders;
