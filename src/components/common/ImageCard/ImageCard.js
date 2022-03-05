import React from "react";
import "./ImageCard.css";
const images = require.context("../../../images/", true, /\.(png|svg|jpg|gif)$/);
const ImageCard = ({ url }) => {
  return (
    
    <div style={{ width: "100%", height: "100%",position:"relative" }}>
      <img
        id="mainImage"
        src={images(`./${url}`)}
        alt="Not Found"
        style={{width:"100%",height:"100%",display:"flex",alignItems:"center"}}
      />
      <div id="iconContainer">
        <img
          style={{
            width:"100%",
            height:"100%"
          }}
          src="/images/3602x.png"
          alt="Not Found"
        />
      </div>
    </div>
  );
};

export default ImageCard;
