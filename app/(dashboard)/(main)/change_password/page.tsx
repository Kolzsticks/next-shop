'use client'

import { useState } from "react"; // Import useState for state management

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setSuccess("Password changed successfully!");
    setError("");
    // Add your password change logic here
  };

  return (
    <div className="w-full p-8">
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Change Password</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <div>
        <label htmlFor="currentPassword" className="block mb-1">Current Password</label>
        <input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="border rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="newPassword" className="block mb-1">New Password</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block mb-1">Confirm New Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border rounded-md p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="mt-4 bg-orange-600  text-white rounded-md p-2">
        Change Password
      </button>
    </form>
    </div>
  );
};

export default ChangePassword;
