import React, { Component } from "react";
import ColorComponent from "../ColorComponent/ColorComponent";
import SaleComponent from "../common/SaleComponent/SaleComponent";
import StarRating from "../common/StarRating/StarRating";
import CustomBlueButton from "../CustomBlueButton/CustomBlueButton";
import CustomPurpleButton from "../CustomPurpleButton/CustomPurpleButton";
import QuantityCounter from "../QuantityCounter/QuantityCounter";
import SizeComponent from "../SizeComponent/SizeComponent";

import "./DetailsTextSection.css";

class DetailsTextSection extends Component {
  state = {};
  render() {
    const { props,handleAddToCart,handleRemoveFromCart,handleIncrementItems } = this.props;
    const { currentItemsCount,sizes, colors } = props;
    return (
      <div className="detailsContainer" style={{marginTop:"5px"}}>
        <img id="headerImage" src="/images/adidas.svg" alt="Not Found" />
        <span style={{width:"90%"}}>
          Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
          adipiscing elit.
        </span>
        <span className="clothCategory">Men</span>
        <div style={{ display: "flex", width: "60%" ,justifyContent:"center",alignItems:"center",textAlign:"center"}}>
          <StarRating review={4.9} />
          <span
            style={{
              color: "#A7A9AC",
              fontFamily:'Montserrat',
              fontWeight:"600"
              
            }}
          >
            Men
          </span>
          
        </div>

        <div id="saleContainer">
          <SaleComponent price={"9,999"} discount="30%" />
        </div>

        <hr style={{ width: "100%", marginTop: "20px" }} className="solid"></hr>
        <div style={{ width: "100%" }}>
          <span className="subHeaderSpan">Size</span>
          <SizeComponent sizes={sizes} />
        </div>
        <hr className="solid"></hr>

        <div style={{ width: "100%" }}>
          <span className="subHeaderSpan">Color</span>
          <ColorComponent colors={colors} />
        </div>
        <hr className="solid"></hr>

        <div style={{ width: "100%" }}>
          <span className="subHeaderSpan">Quantity</span>
          <QuantityCounter count={currentItemsCount} handleAddToCart={handleIncrementItems} handleRemoveFromCart={handleRemoveFromCart} />
          <div style={{ display: "flex", marginTop: "10px",marginLeft:"20px" }}>
            <div className="btnContainer">
              <CustomPurpleButton
                text={"Add To Cart"}
                onClick={() => {
                  handleAddToCart();
                }}
              />
            </div>
            <div className="btnContainer" style={{ marginLeft: "10px" }}>
              <CustomBlueButton
                text={"Pickup From Store"}
                onClick={() => {
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsTextSection;
