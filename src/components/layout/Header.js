import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>Shoe Store</h2>
        <HeaderCartButton
          onCheck={props.addDataToCart}
          onClick={props.onShowCart}
        />
      </header>
    </Fragment>
  );
};
export default Header;
