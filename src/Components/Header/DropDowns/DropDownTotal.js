import React, { Component } from 'react'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GetTotal } from "../../../ReduxModules/AllActions";

import {
  DropdownCartTotal,
} from "../Header.style";

class DropDownTotal extends Component {

  shouldComponentUpdate( nextProps ){
    return this.props.GetTotalDispatch();
 }
  render() {
    return (
      <DropdownCartTotal>
            <h3 className="Rob4 s16">Total</h3>
            <p className="Rale7 s16">
              {this.props.CurrencyUnicode} {this.props.Total}
            </p>
          </DropdownCartTotal>
    )
  }
}
export default connect(
  (state) => ({
    AllProducts: state.AddToCart.addProduct,
    quantityOfProducts: state.AddToCart.quantityOfProducts,
    CurrencyText: state.AddToCart.InitialCurrency.text,
    CurrencyUnicode: state.AddToCart.InitialCurrency.unicodeText,
    Total: state.AddToCart.getTotal,
    openCart: state.CartOpenState,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        GetTotalDispatch: GetTotal,
      },
      dispatch
    )
)(DropDownTotal);