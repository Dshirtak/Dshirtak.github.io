import React from "react";
import "./FirstSubHeader.css";
import "../Common.css";
const FirstSubHeader = ({ count, showCart }) => {
  return (
    <div id="firstHeaderContainer">
      <div className="middleContainer">
        <div style={{position:"relative"}}>
        <input id="searchInput" type="text" placeholder="Search" />
        <img id="searchIcon" src="/images/search.svg" alt="Not Found" />
        </div>

        <div style={{ flex: 1, justifyContent: "center", textAlign: "center" }}>
          <img id="middleAdidasIcon" src="/images/adidas.svg" alt="Not Found" />
        </div>

        <div id="subHeaderOperations">
          <div className="cartContainer">
            <img onClick={showCart} style={{cursor:"pointer"}} src="/images/bag.svg" alt="Not Found" />
            <img
              className="cartCount"
              src="/images/yellowdot.png"
              alt="Not Found"
            />
            <span
              className="cartCount"
              style={{ fontSize: "10px",marginLeft:"0px !important" }}
            >
              {count} 
            </span>
            <span>Cart</span>
          </div>
          <div className="cartContainer">
            <img src="/images/heart.svg" alt="Not Found" />
            <span>Wishlist</span>
          </div>
          <div className="cartContainer">
            <img src="/images/user.svg" alt="Not Found" />
            <span>Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSubHeader;
