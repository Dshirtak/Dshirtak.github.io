import React from "react";
import CustomBlueButton from "../CustomBlueButton/CustomBlueButton";
import "./CartItem.css";

const images = require.context("../../images/", true, /\.(png|svg|jpg|gif)$/);

const CartItem = ({cartItems}) => {
   console.error(cartItems); 
  return (
      <>
      {cartItems.length===0&&(<div style={{textAlign:"center",fontWeight:"bold"}}>Empty</div>)}
      {cartItems.map((item,index)=>{return(
              <div className="cartItem" key={index}>
              <img src={images(`./mainimage2x.png`)} alt="Not Found" />
              <div className="descriptionContainer">
                <div className="cartHeader">
                  {item.description}
                </div>
                <div className="cartQuantity">Quantity : {item.quantity}</div>
                <div style={{ display: "flex" }}>
                  <span
                    className="priceTag"
                    style={{ fontSize: "20px", marginLeft: "0px", marginTop: "5px" }}
                  >
                    {item.price}
                    <span className="currency">LE</span>
                  </span>
                  <div style={{ width: "80px", height: "24px", marginLeft: "30%" }}>
                    <CustomBlueButton
                      text={"Remove"}
                      onClick={() => {
                        console.error("I Have Been Clicked");
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>)
      })}
      </>
  );
};

export default CartItem;
