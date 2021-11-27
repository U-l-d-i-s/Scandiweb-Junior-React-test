import { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { AddToCart, GetTotal, ProductCount } from "../../../ReduxModules/AllActions";
import { bindActionCreators } from "redux";
import { ATTRIBUTES_BY_ID } from "../../../queries/QueryGql";
import { withApollo } from "@apollo/client/react/hoc";
import { checkThenDispatchDefault } from "../../Methods/DispatchMethods";

const Circle = styled.div`
  background-color: #5ece7b;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;
`;

class BuyButton extends Component {

  FetchAndDispatch = async () => {
    const { data } = await this.props.client.query({
      query: ATTRIBUTES_BY_ID,
      variables: { productId: this.props.id },
      fetchPolicy: "network-only",
    });
    console.log(data)
    checkThenDispatchDefault(
      this.props.id,
      data,
      this.props.prices,
      this.props.amount,
      this.props.CurrencyText,
      this.props.AddToCartDispatch,
      this.props.ProductCountDispatch,
      this.props.GetTotalDispatch
    );
  };

  render() {
    return (
      <Circle onClick={() => this.FetchAndDispatch()}>{this.props.icon}</Circle>
    );
  }
}

export default withApollo(
  connect(
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
  )(BuyButton)
);
