import Overview from "../(main)/overview/page";
import RecentOrders from "../(main_components)/OrderList";
import Link from 'next/link'

const page = () => {
  return (
    <div className="w-full p-8 ">
      <Overview />
      <RecentOrders />
      <div className="flex items-center justify-center mt-4">
        <Link href="/orders" className="text-white text-center rounded-sm text-decoration-none p-2 w-1/2 bg-orange-500 hover:bg-orange-600">
         View More
        </Link>
      </div>
    </div>
  );
};

export default page;
