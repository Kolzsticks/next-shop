import { create } from "zustand";

interface CartItem {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

interface CartState {
  totalItems: number; // Total count of items in the cart
  cartItems: CartItem[]; // Array of cart items
  setTotalItems: (value: number) => void; // Function to set total items
  addToCart: (item: CartItem) => void; // Function to add items to the cart
  removeFromCart: (id: number) => void; // Function to remove items from the cart
  updateQuantity: (id: number, delta: number) => void; // Function to update item quantity
  loadCart: () => void; // Function to load cart from localStorage
}

const useCartStore = create<CartState>((set) => ({
  totalItems: 0,
  cartItems: [],

  // Set total items in the store and update localStorage
  setTotalItems: (value) => {
    set({ totalItems: value });
    if (typeof window !== "undefined") {
      localStorage.setItem("totalCartItems", value.toString());
    }
  },

  // Load cart items and total items from localStorage
  loadCart: () => {
    if (typeof window !== "undefined") {
      const storedItems = localStorage.getItem("cartItems");
      const items: CartItem[] = storedItems ? JSON.parse(storedItems) : [];

      // Calculate total items based on loaded cart items
      const totalItems = items.length;
      set({ cartItems: items, totalItems }); // Load items and their total
    }
  },

  // Add item to the cart
  addToCart: (item) => {
    set((state) => {
      // Check if the item already exists in the cart
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      let updatedItems;

      // If the item doesn't exist, add it to the cart
      if (!existingItem) {
        updatedItems = [...state.cartItems, item]; // Only add the new item
      } else {
        updatedItems = state.cartItems; // Keep existing items unchanged
      }

      // Total items now reflects the number of unique items in the cart
      const totalItems = updatedItems.length; // Count of unique items

      // Update localStorage
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      localStorage.setItem("totalCartItems", totalItems.toString());

      return { cartItems: updatedItems, totalItems }; // Return updated items and total
    });
  },

  // Remove item from the cart
  removeFromCart: (id) => {
    set((state) => {
      const updatedItems = state.cartItems.filter((item) => item.id !== id);
      const totalItems = updatedItems.reduce((sum, i) => sum + i.quantity, 0);

      // Update localStorage
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      localStorage.setItem("totalCartItems", totalItems.toString());

      return { cartItems: updatedItems, totalItems }; // Return updated items and total
    });
  },

  // Update quantity of an item in the cart
  updateQuantity: (id, delta) => {
    set((state) => {
      const updatedItems = state.cartItems
        .map((item) => {
          if (item.id === id) {
            const newQuantity = Math.max(0, item.quantity + delta);
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0); // Remove items with quantity <= 0

      localStorage.setItem('cartItems', JSON.stringify(updatedItems));

      return { cartItems: updatedItems }; // Return updated items and total
    });
  },
}));

export default useCartStore;
