import React from "react";
import "./QuantityCounter.css";
const QuantityCounter = ({ count, handleAddToCart, handleRemoveFromCart }) => {
  return (
    <div id="quantityContainer">
      <button
        className="counterButton"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleRemoveFromCart();
        }}
      >
        <img
          style={{margin:"0 auto",marginBottom:"55%" }}
          src="/images/minus.png"
          alt="Not Found"
        />
      </button>

      <span style={{ flex: 1, color: "#542E90" }}>{count}</span>

      <button
        className="counterButton"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleAddToCart();
        }}
      >
        <img src="/images/plus.png" alt="Not Found" style={{margin:"0 auto" ,marginBottom:"60%"}}/>
      </button>
    </div>
  );
};

export default QuantityCounter;
