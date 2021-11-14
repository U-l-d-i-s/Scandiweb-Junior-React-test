import { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { AddToCart, GetTotal, ProductCount } from "../ReduxModules/AllActions";
import { bindActionCreators } from "redux";

const Circle = styled.div`
  background-color: #5ece7b;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

class BuyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      defaultOptions: {},
    };
  }

  checkThenDispatch = () => {
    let options = {};
    let prices = this.props.product.prices;
    let attributes = this.props.product.attributes;
    let amount = {};
    
    this.props.product.attributes.map((prod) =>
      prod.items.forEach((pr, i) => {
        if (i === 0) {
          options[prod.id] = pr.value;
        }
      })
    );
    this.props.product.prices.forEach((prod) => {
      console.log(prod);
      console.log(prod.currency);
      console.log(this.props.State.AddToCart.InitialCurrency.text);

      if (prod.currency === this.props.State.AddToCart.InitialCurrency.text) {
        amount["amount"] = prod.amount;
        amount["currency"] = prod.currency;
      }
    });
    if (options !== undefined) {
      this.props.AddToCartDispatch(
        this.props.id,
        options,
        prices,
        attributes,
        amount
      );
      this.props.ProductCountDispatch();
      this.props.GetTotalDispatch(this.props.currency);
    }
  };

  render() {
    return (
      <Circle
        style={{ zIndex: "10", cursor: "pointer" }}
        onClick={this.checkThenDispatch}
      >
        {this.props.icon}
      </Circle>
    );
  }
}

export default connect(
  (state) => ({
    State: state,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        AddToCartDispatch: AddToCart,
        ProductCountDispatch: ProductCount,
        GetTotalDispatch: GetTotal,
      },
      dispatch
    )
)(BuyButton);
