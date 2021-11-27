import { Component } from "react";
import PropTypes from "prop-types";

// import "../../CssStyles/Header.css";
import styled from "styled-components";

import { connect } from "react-redux";
import {
  AddToCart,
  ProductCount,
  GetTotal,
} from "../../../ReduxModules/AllActions";

import { checkThenDispatch } from "../../Methods/DispatchMethods";

class GreenBuyButton extends Component {
  checkThenDispatchFunc = () => {
    console.log(this.props.data);
    checkThenDispatch(
      this.props.id,
      this.props.data,
      this.props.options,
      this.props.prices,
      this.props.amount,
      this.props.CurrencyText,
      this.props.AddToCart,
      this.props.ProductCount,
      this.props.GetTotal
    );
  };
  render() {
    const Button = styled.button`
      position: relative;
      height: 40px;
      min-width: 300px;
      max-width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: ${this.props.BGcolor};
      &:active {
        transform: scale(1.01);
        filter: opacity(0.95);
      }

    `;

    return (
      <Button
        disabled = {this.props.disabled}
        $dis = {this.props.disabled}
        style={{
          border: this.props.border,
          color: this.props.FontColor,
        }}
        className="Rale6 s16"
        onClick={this.checkThenDispatchFunc}
      >
        {this.props.text}
      </Button>
    );
  }
}
GreenBuyButton.propTypes = {
  AddToCart: PropTypes.func,
  ProductCount: PropTypes.func,
  GetTotal: PropTypes.func,
  text: PropTypes.string,
  BGcolor: PropTypes.string,
  FontColor: PropTypes.string,
  border: PropTypes.string,
  id: PropTypes.string,
  data: PropTypes.object,
  options: PropTypes.object,
  prices: PropTypes.array,
};

export default connect(null, { AddToCart, ProductCount, GetTotal })(
  GreenBuyButton
);
