'use client'

import { Bell } from "lucide-react"; // Import notification icon
import { useState } from "react"; // Import useState for state management

const notificationsData = [
  {
    id: 1,
    message: "Your order has been shipped.",
    timestamp: "2024-10-22 10:00 AM",
  },
  {
    id: 2,
    message: "New product added to your wishlist.",
    timestamp: "2024-10-21 09:00 AM",
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(notificationsData);

  const handleRemove = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id)); // Remove notification
  };

  return (
    <div className="w-full p-8">
    <div className="flex flex-col gap-4 p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold flex items-center">
        <Bell className="mr-2" />
        Notifications
      </h2>
      {notifications.length === 0 ? (
        <p>No notifications.</p>
      ) : (
        notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-center justify-between border-b py-2"
          >
            <div>
              <p>{notification.message}</p>
              <p className="text-xs text-gray-500">{notification.timestamp}</p>
            </div>
            <button
              onClick={() => handleRemove(notification.id)}
              className="text-red-500 hover:text-red-700"
            >
              X
            </button>
          </div>
        ))
      )}
    </div>
    </div>
  );
};

export default Notifications;
