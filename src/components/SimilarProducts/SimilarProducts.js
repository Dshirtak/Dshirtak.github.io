import React from "react";
import ImageCard from "../common/ImageCard/ImageCard";
import SaleComponent from "../common/SaleComponent/SaleComponent";
import StarRating from "../common/StarRating/StarRating";
import "./SimilarProducts.css";

const SimilarProducts = ({ similarProductsArray }) => {
  console.error(similarProductsArray);
  return (
    <div style={{ width: "100%" }}>
      <span style={{ display: "block", color: "#542E90", fontSize: "28px" }}>
        Similar Products
      </span>
      <span style={{ color: "#575756", fontWeight: "400", fontSize: "22px" }}>
        You may like these products also
      </span>
      <div style={{ display: "flex", overflowX: "scroll", width: "100%" }}>
        {similarProductsArray.map((item, index) => {
          return (
            <div key={index} className="similarProductCard">
              <div className="similarProductImg">
                <ImageCard url={item.image} />
                <span className="headerDetails">{item.describtion}</span>
                <div style={{ display: "flex" }}>
                  <div>
                    <div
                      style={{ display: "flex", alignItems: "start" }}
                      className="priceTag"
                    >
                      <span>{item.price}</span>{" "}
                      <span
                        style={{
                          fontSize: "15px",
                          marginTop: "5px",
                          marginLeft: "5px",
                          fontWeight: "500",
                        }}
                      >
                        LE
                      </span>
                    </div>
                    <div style={{ display: "flex" }}>
                      <span id="oldPrice">
                        {9999}
                        <span
                          style={{
                            marginLeft: "4px",
                            fontSize: "16px",
                            fontWeight: "100",
                          }}
                        >
                          LE
                        </span>
                      </span>
                      <div
                        id="discountBox"
                        style={{ width: "58px", height: "23px" }}
                      >
                        {item.sale} Off
                      </div>
                    </div>
                  </div>
                  <div className="imageIconDiv">
                    <img src="/images/adidas.svg" alt="Not Found" />
                  </div>
                </div>
                <div
                  className="starRatingContainer"
                  style={{ paddingLeft: "23px" }}
                >
                  <StarRating review={item.rate} />
                </div>
                <div className="starRatingContainer">
                  Pick Up From:{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      marginLeft: "0px",
                    }}
                  >
                    Gnena Mall
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimilarProducts;
