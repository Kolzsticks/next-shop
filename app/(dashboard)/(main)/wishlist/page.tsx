'use client'

import { Heart, Trash } from "lucide-react"; // Import necessary icons
import { useState } from "react"; // Import useState for state management

const wishlistItems = [
  {
    id: 1,
    title: "Product 1",
    imageUrl: "/img/summer (1).jpg", // Replace with actual image paths
  },
  {
    id: 2,
    title: "Product 2",
    imageUrl: "/img/summer (2).jpg",
  },
  {
    id: 3,
    title: "Product 3",
    imageUrl: "/img/summer (3).jpg",
  },
];

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(wishlistItems);

  const handleRemove = (id: number) => {
    setWishlist(wishlist.filter((item) => item.id !== id)); // Remove item from wishlist
  };

  return (
   <div className=" w-full p-8">
     <div className="flex flex-col gap-4 p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold flex items-center">
        <Heart className="mr-2 text-red-500" />
        Wishlist
      </h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-2"
          >
            <div className="flex items-center">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-md mr-3"
              />
              <span>{item.title}</span>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
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

export default Wishlist;
