import React from "react";
import "./BreadCrumb.css";
import "../Common.css";
const BreadCrumb = () => {
  return (
    <div id="breadCrumbContainer">
      <div className="middleContainer">
        <ul className="breadcrumb">
          <li>
            <a href="www.google.com">Men</a>
          </li>
          <li>
            <a href="www.google.com">Clothing</a>
          </li>
          <li>
            <a href="www.google.com">Tops</a>
          </li>
          <li>
              <a href="www.google.com" >Adidas</a></li>
          <li>Adidas Black T-shirt</li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumb;
