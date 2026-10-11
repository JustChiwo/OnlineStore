import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// The bag is saved in the browser under this key so it survives a refresh.
const CART_STORAGE_KEY = "onlinestore-cart";

// Read the saved bag. If nothing is saved, or the data is broken,
// start with an empty bag instead of crashing the app.
const loadCart = () => {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (!saved) return undefined;

    const items = JSON.parse(saved);
    if (!Array.isArray(items)) return undefined;

    const validItems = items.filter(
      (item) => item && item.id !== undefined && Number(item.quantity) > 0
    );

    return { cart: { items: validItems } };
  } catch {
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadCart(),
});

// Save the bag whenever its items change.
let lastSavedItems = store.getState().cart.items;

store.subscribe(() => {
  const items = store.getState().cart.items;
  if (items === lastSavedItems) return;
  lastSavedItems = items;

  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage can be full or blocked (private mode). The bag still works, it just will not be saved.
  }
});
