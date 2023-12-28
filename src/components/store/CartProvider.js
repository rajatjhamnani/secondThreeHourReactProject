import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const addItemHandler = (item) => {
    setItems((prev) => {
      return [...prev, item];
    });
    console.log(items);
  };
  const removeHandler = () => {};
  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
