import React, { Component } from "react";

export default class ProductPrice extends Component {
  render() {
    return (
      <div>
        <h3
          className="RobCondens7 s18"
          style={{
            marginTop: "30px",
          }}
        >
          Price:
        </h3>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          <p className="Rale7 s24">{this.props.CurrencyUnicode}</p>
          <p className="Rale7 s24">{this.props.price}</p>
        </div>
      </div>
    );
  }
}
