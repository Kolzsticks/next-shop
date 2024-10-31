"use client";

import { useState } from "react"; // Import useState for state management

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const handleEmailToggle = () => setEmailNotifications(!emailNotifications);
  const handleSmsToggle = () => setSmsNotifications(!smsNotifications);

  return (
    <div className="w-full p-8">
      <div className="flex flex-col gap-4 p-4 border rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Settings</h2>
        <div className="flex items-center justify-between">
          <span>Email Notifications</span>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={handleEmailToggle}
            className="toggle-checkbox"
          />
        </div>
        <div className="flex items-center justify-between">
          <span>SMS Notifications</span>
          <input
            type="checkbox"
            checked={smsNotifications}
            onChange={handleSmsToggle}
            className="toggle-checkbox"
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
