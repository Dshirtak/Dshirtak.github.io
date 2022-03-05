import React, { Component } from "react";
import "./SizeComponent.css";
class SizeComponent extends Component {
  state = { index: 2 };

  render() {
    const { sizes } = this.props;
    return (
      <div className="detailsSubSection">
        {sizes.map((size, index) => {
          if (index === this.state.index) {
            return (
              <div
                onClick={() => {
                  this.setState({ index });
                }}
                className="sizeDiv"
                key={index}
                style={{
                  color: "#1D1D1B",
                  background: "#ECECEC 0% 0% no-repeat padding-box",
                }}
              >
                {size}
              </div>
            );
          } else {
            return (
              <div
                onClick={() => {
                  this.setState({ index });
                }}
                className="sizeDiv"
                key={index}
              >
                {size}
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default SizeComponent;
