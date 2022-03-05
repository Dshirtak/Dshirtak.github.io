import React from "react";
import "./MainHeader.css";
import "../Common.css"
const MainHeader = () => {
  return (
    <div id="headerContainer">
      <div className="middleContainer">
        <div id="sideImage" />
        <div id="yeshteryBlack"/>
        <div id="shopNow">
        <span id="valentineOffer">
                <img style={{marginRight:'12px'}} src='/images/leftarrow.svg' alt="Not Found"/>
                    Valentine’s Day Offers! Buy Two Get One Free <a id="shopNowLink" href="www.google.com">Shop Now</a> 
                    
                <img style={{marginLeft:'12px',marginRight:'12px'}} src='/images/rightarrow.svg' alt="Not Found"/>
            </span>

        </div>

        <div id="contactInfo">
            <img src='/images/phone.svg' alt="Not Found" /><span >Contact Us</span>
            <img src='/images/cart.svg' alt="Not Found" /><span >Track Order</span>
            <img src='/images/mapicon.svg' alt="Not Found" /><span >Find A Store</span>
        </div> 
      </div>
    </div>
  );
};

export default MainHeader;
