import React, { useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../store/CartContext";

const Cart = (props) => {
  const [totalAmount, setTotalAmount] = useState(0);
  console.log("Added Details", props.addDataToCart);
  const cartCtx = useContext(CartContext);
  useEffect(() => {
    const calculateTotalAmount = () => {
      const amount = cartCtx.items.reduce((acc, item) => {
        return acc + item.price * item.Quantity;
      }, 0);
      setTotalAmount(amount);
    };

    calculateTotalAmount();
  }, [cartCtx.items]);

  let cartItems = (
    <ul className={classes["cart-items"]}>
      {props.addDataToCart.map((item) => (
        <li>
          <h3>{item.Name}</h3> --<h3>Price-{item.price}</h3>
          <h3>quantity-{item.Quantity}</h3>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Order</button>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};
export default Cart;
