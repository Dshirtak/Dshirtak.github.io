import React, { Component } from "react";
import "./ColorComponent.css";
const images = require.context("../../images/", true, /\.(png|svg|jpg|gif)$/);

class ColorComponent extends Component {
  state = { index: 0 };
  render() {
    const { colors } = this.props;
    return (
      <div className="detailsSubSection">
        {colors.map((color, index) => {
          if (index === this.state.index) {
            return (
              <div
                onClick={() => {
                  this.setState({ index });
                }}
                className="colorDiv"
                key={index}
                style={{
                  border: "1px solid #542E90",
                  borderRadius: "40px",
                  background: `url(${images(`./${color}`)})`,
                }}
              ></div>
            );
          } else {
            return (
              <div
                onClick={() => {
                  this.setState({ index });
                }}
                className="colorDiv"
                key={index}
                style={{ background: `url(${images(`./${color}`)})` }}
              ></div>
            );
          }
        })}
      </div>
    );
  }
}

export default ColorComponent;
