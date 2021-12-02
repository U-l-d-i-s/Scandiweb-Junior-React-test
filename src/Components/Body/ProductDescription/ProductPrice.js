import React, { Component } from "react";
import styled from "styled-components";

const PriceSymbolWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 30px;
`;
const PriceMargin = styled.div`
  margin: 30px;
`;

export default class ProductPrice extends Component {
  render() {
    return (
      <div>
        <PriceMargin className="RobCondens7 s18">Price:</PriceMargin>
        <PriceSymbolWrapper>
          <p className="Rale7 s24">{this.props.CurrencyUnicode}</p>
          <p className="Rale7 s24">{this.props.price}</p>
        </PriceSymbolWrapper>
      </div>
    );
  }
}
