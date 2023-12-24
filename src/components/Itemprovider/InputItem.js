import React, { useState } from "react";
const InputItem = () => {
  const [shoeName, setShoeName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");

  const shoeNameHandler = (event) => {
    setShoeName(event.target.value);
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const priceHandler = (event) => {
    setPrice(event.target.value);
  };
  const sizeHandler = (event) => {
    setSize(event.target.value);
  };
  const quantityHandler = (event) => {
    setQuantity(event.target.value);
  };
  const onSubmithandler = (event) => {
    event.preventDefault();
    let items = {
      Name: shoeName,
      About: description,
      price: price,
      Size: size,
      Quantity: quantity,
    };
    console.log(items);
    setShoeName("");
    setDescription("");
    setPrice("");
    setSize("Select size");
    setQuantity("Select");
  };

  return (
    <form onSubmit={onSubmithandler}>
      <label htmlFor="shoe name">Shoe Name</label>
      <input
        type="text"
        id="shoe name"
        onChange={shoeNameHandler}
        value={shoeName}
        required
      />
      <label htmlFor="des">Description</label>
      <input
        id="des"
        type="text"
        onChange={descriptionHandler}
        value={description}
        required
      />
      <label htmlFor="price">Price</label>
      <input
        value={price}
        id="price"
        type="number"
        min="300"
        step="10"
        onChange={priceHandler}
        required
      />
      <div>
        <label htmlFor="size">Quantity Available</label>
        <select onChange={sizeHandler} value={size}>
          <option>Select size</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </select>
        <select onChange={quantityHandler} value={quantity}>
          <option>Select</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <button type="submit">Add Items</button>
    </form>
  );
};

export default InputItem;
