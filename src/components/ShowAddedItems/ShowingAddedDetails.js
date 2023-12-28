import React, { useContext } from "react";
import Card from "../UI/Card";
import classes from "./ShowingAddedDetails.module.css";
import CartContext from "../store/CartContext";

const ShowingAddedDetails = (props) => {
  const contxt = useContext(CartContext);
  console.log("AAA", contxt.items);

  const groupedItems = contxt.items.reduce((acc, item) => {
    if (!acc[item.Name]) {
      acc[item.Name] = [];
    }
    acc[item.Name].push(item);
    return acc;
  }, {});
  const sendData = (item) => {
    props.data(item);
  };

  return (
    <Card>
      <h1>Added Items by Seller</h1>
      {contxt.items.length === 0 ? (
        <p>No items added yet </p>
      ) : (
        <div className={classes.app}>
          {Object.keys(groupedItems).map((shoeName, index) => (
            <div key={index} className="App">
              <h2>{shoeName}</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  border: "2px solid black",
                  backgroundColor: "burlywood",
                }}
              >
                {groupedItems[shoeName].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex display: inline-block",
                      flexDirection: "column",
                      display: "center",
                      border: "2px solid black",
                      marginLeft: "10%",
                    }}
                  >
                    <h4>{item.Name}</h4>
                    <p>{item.About}</p>
                    <p>${item.price}</p>
                    <p>{item.Size}</p>
                    <p>Quantity: {item.Quantity}</p>
                    <button onClick={() => sendData(item)}>Buy</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default ShowingAddedDetails;
