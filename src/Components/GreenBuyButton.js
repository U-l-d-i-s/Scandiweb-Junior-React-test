import { Component } from "react";
import PropTypes from "prop-types";

import "../CssStyles/Header.css";
import styled from "styled-components";

import { connect } from "react-redux";
import { AddToCart, ProductCount, GetTotal } from "../ReduxModules/AllActions";
class GreenBuyButton extends Component {

  checkThenDispatch = () => {
    let buy = true;
    let amount = {};
    this.props.attributes.forEach((attr) => {
      if (this.props.options.hasOwnProperty(attr.id) === false) {
        buy = false;
      }
    });
    if (buy === true) {
      amount["amount"] = this.props.amount 
      amount["currency"] = this.props.currency 

      this.props.AddToCart(this.props.id, this.props.options,this.props.prices,this.props.attributes,amount);
      this.props.ProductCount();
      this.props.GetTotal(this.props.currency);
    } else {
      return alert("Add All Options!");
    }
  };
  render() {
    const Button = styled.button`
      background-color: ${this.props.BGcolor};
      color: ${this.props.FontColor};
      position: relative;
      border: ${this.props.border};
      height: 40px;
      min-width: 300px;
      max-width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:active {
        transform: scale(1.01);
        filter: opacity(0.95);
      }
    `;

    return (
      <Button className = "Rale6 s16"onClick={this.checkThenDispatch} >
        {this.props.text}
      </Button>
    );
  }
}
GreenBuyButton.propTypes = {
  AddToCart : PropTypes.func,
  ProductCount : PropTypes.func,
  GetTotal : PropTypes.func,
  text : PropTypes.string,
  BGcolor : PropTypes.string,
  FontColor : PropTypes.string,
  border : PropTypes.string,
  id : PropTypes.string,
  attributes : PropTypes.array,
  options : PropTypes.object,
  prices : PropTypes.array,
} 

export default connect(null, { AddToCart, ProductCount, GetTotal})(GreenBuyButton);
