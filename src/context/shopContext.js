import { createContext } from "react";
import { products } from "../assets/assets";
const ShopContext = createContext({
  products,
  currency: "$",
});

export default ShopContext;
