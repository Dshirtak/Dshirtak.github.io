import React from "react";
import "./SaleComponent.css"
const SaleComponent = ({ price, discount }) => {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <span className="priceTag">
        {price}
        <span
          style={{
            fontFamily: "Montserrat-Regular",
            fontSize: "20px",
          }}
        >
          LE
        </span>
      </span>

      <span
      id="oldPrice"
      >
        {price} LE
      </span>
      <div
       id="discountBox"

      >
        {discount} Off
      </div>
    </div>
  );
};

export default SaleComponent;
