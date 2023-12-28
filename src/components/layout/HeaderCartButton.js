import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../store/CartContext";
const HeaderCartButton = (props) => {
  const cartxt = useContext(CartContext);
  console.log("AA", cartxt.items);
  let quantity = 0;
  props.onCheck.forEach((item) => {
    quantity = quantity + Number(item.Quantity);
  });

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};
export default HeaderCartButton;
