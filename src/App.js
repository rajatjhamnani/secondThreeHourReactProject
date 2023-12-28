import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import InputItem from "./components/Itemprovider/InputItem";
import ShowingAddedDetails from "./components/ShowAddedItems/ShowingAddedDetails";
import CartProvider from "./components/store/CartProvider";
import Header from "./components/layout/Header";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [carttItems, setCartItems] = useState([]);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const receivingDataHandler = (item) => {
    setCartItems((prev) => {
      return [...prev, item];
    });
  };
  return (
    <div className="App">
      <CartProvider>
        {console.log(carttItems)}
        {cartIsShown && (
          <Cart addDataToCart={carttItems} onClose={hideCartHandler} />
        )}
        <Header onShowCart={showCartHandler} addDataToCart={carttItems} />
        <InputItem />
        <ShowingAddedDetails data={receivingDataHandler} />
      </CartProvider>
    </div>
  );
}

export default App;
