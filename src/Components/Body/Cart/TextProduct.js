import { Component } from "react";
import PropTypes from "prop-types";

import { amount } from "../../Methods/DataMutationMethods";
import styled from "styled-components";

const ProuctName = styled.p`
  padding-top:10px;
  padding-bottom: 20px;
`;

export default class TextProduct extends Component {

  render() {
    const price = amount(this.props.prices, this.props.currentCategory);
    return (
      <div>
        <p className="Rale6 s30">{this.props.brand}</p>
        <ProuctName
          className="Rale4 s30"
        >
          {this.props.name}
        </ProuctName>
        <p className="Rale7 s24" >
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