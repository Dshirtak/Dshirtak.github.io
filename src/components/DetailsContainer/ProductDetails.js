import React, { Component } from "react";
import "./ProductDetails.css";
import DetailsImageSection from "../DetailsImageSection/DetailsImageSection";
import DetailsTextSection from "../DetailsTextSection/DetailsTextSection";
import "../Common.css"

class ProductDetails extends Component {
  state = {};
  render() {
    const {props,handleAddToCart,handleRemoveFromCart,handleIncrementItems} = this.props;

    return (
      <div id="detailsContainer">
        <div className="middleContainer">
          <div>
          <DetailsImageSection props={props} />
          </div>
          <DetailsTextSection handleIncrementItems={handleIncrementItems} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} props={props} />
        </div>
      </div>
    );
  }
}

export default ProductDetails;
