import React, { Component } from "react";
import "../../images/mainimage.png";
import ImageCard from "../common/ImageCard/ImageCard";
const images = require.context("../../images/", true, /\.(png|svg|jpg|gif)$/);

require("./DetailsImageSection.css");
class DetailsImageSection extends Component {
  state = { index: 1 };
  render() {
    const { props } = this.props;
    return (
      <div className="detailsContainer">
        {props.mainImage !== "" ? (
          <>
            <div style={{ width: "568px", height: "650px" }}>
              <ImageCard url={props.mainImage} />
            </div>
            <div id="productImagesRow">
              <div className="arrowDiv">
                <button
                  onClick={() => {
                    console.error("i am clicked");
                  }}
                >
                  <img style={{ width: "15px" }} src="/images/leftarrow.svg" alt="Not Found"/>
                </button>
              </div>

              {props.productImages.map((url, index) => {
                if (index === 0 || index % 2 !== 0) {
                  return null;
                } else {
                  return (
                    <div key={index} className="pictureDiv">
                      <img style={{margin:"5px"}} src={images(`./${url}`)} alt="Not Found" />
                    </div>
                  );
                }
              })}
              <div className="arrowDiv">
                <button
                  onClick={() => {
                    console.error("i am clicked");
                  }}
                >
                  <img style={{ width: "15px" }} src="/images/rightarrow.svg" alt="Not Found" />
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    );
  }
}

export default DetailsImageSection;
