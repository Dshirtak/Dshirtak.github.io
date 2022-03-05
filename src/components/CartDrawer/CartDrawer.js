import { Drawer } from "antd";
import React from "react";
import CartItem from "../CartItem/CartItem";
import CustomBlueButton from "../CustomBlueButton/CustomBlueButton";
import CustomPurpleButton from "../CustomPurpleButton/CustomPurpleButton";
import "./CartDrawer.css";
const CartDrawer = ({cartItems,show, handleCart }) => {
  return (
    <>
      <Drawer
        title="My Cart"
        placement="right"
        visible={show}
        onClose={handleCart}
      >
        <span style={{marginLeft:"0px"}} >Cart Summary</span>
        <div style={{width:"100%"}}>
          <CartItem cartItems={cartItems} />
        </div>
        <div id="totalDiv">
        <span>Total 19,999</span>
        </div>
        <div className="btnDiv">
          <div className="cartBtn">
            <CustomBlueButton text={"Review Cart"} onClick={()=>{console.error("I have Been Clicked")}}/>
          </div>
          <div className="cartBtn" style={{marginLeft:"5px"}}>
          <CustomPurpleButton text={"Complete Checkout"} onClick={()=>{console.error("I have been clicked")}}/>

          </div>
        </div>
        
      </Drawer>
    </>
  );
};

export default CartDrawer;
