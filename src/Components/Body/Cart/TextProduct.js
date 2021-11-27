import { Component } from "react";
import PropTypes from "prop-types";

import { amount } from "../../Methods/DataMutationMethods";

export default class TextProduct extends Component {


  render() {
    const price = amount(this.props.prices, this.props.currentCategory);
    return (
      <div>
        <p className="Rale6 s30">{this.props.brand}</p>
        <p
          className="Rale4 s30"
          style={{
            paddingTop: "10px",
            paddingBottom: "20px",
          }}
        >
          {this.props.name}
        </p>
        <p className="Rale7 s24" style={{ marginTop: "0px" }}>
          {this.props.unicode} {price}
        </p>
      </div>
    );
  }
}
TextProduct.propTypes = {
  brand: PropTypes.string,
  prices: PropTypes.array,
  currentCategory: PropTypes.string,
  unicode: PropTypes.string,
};