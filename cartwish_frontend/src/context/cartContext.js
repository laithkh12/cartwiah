import { createContext } from "react";

// Create context with a default value of an empty array
const CartContext = createContext({
  cart: [], // Default value is an empty array
  addToCart: () => {},
  removeFromCart: () => {},
  updateCart: () => {},
});

export default CartContext;
