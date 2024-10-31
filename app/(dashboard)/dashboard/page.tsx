import Overview from "../(main)/overview/page";
import RecentOrders from "../(main_components)/OrderList";

const page = () => {
  return (
    <div className="w-full p-8 ">
      <Overview />
      <RecentOrders />
    </div>
  );
};

export default page;
