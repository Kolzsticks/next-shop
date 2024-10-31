"use client";

import { MapPin, Trash } from "lucide-react"; // Import necessary icons
import { useState } from "react"; // Import useState for state management

const addressesData = [
  {
    id: 1,
    address: "123 Main St, City, Country, 12345",
  },
  {
    id: 2,
    address: "456 Another Rd, Another City, Country, 67890",
  },
];

const Addresses = () => {
  const [addresses, setAddresses] = useState(addressesData);

  const handleRemove = (id: number) => {
    setAddresses(addresses.filter((address) => address.id !== id)); // Remove address
  };

  return (
    <div className=" w-full p-8">
      <div className="flex flex-col gap-4 p-4 border rounded-lg shadow-md">
        <h2 className="text-lg font-semibold flex items-center">
          <MapPin className="mr-2" />
          Addresses
        </h2>
        {addresses.length === 0 ? (
          <p>No saved addresses.</p>
        ) : (
          addresses.map((address) => (
            <div
              key={address.id}
              className="flex items-center justify-between border-b py-2"
            >
              <p>{address.address}</p>
              <button
                onClick={() => handleRemove(address.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Addresses;
