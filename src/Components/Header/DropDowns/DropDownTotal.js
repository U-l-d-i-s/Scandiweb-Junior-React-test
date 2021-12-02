import { Component } from "react";
import { connect } from "react-redux";
import { DropdownCartTotal } from "../Header.style";

class DropDownTotal extends Component {
  render() {
    return (
      <DropdownCartTotal>
        <h3 className="Rob4 s16">Total</h3>
        <p className="Rale7 s16">
          {this.props.CurrencyUnicode} {this.props.Total}
        </p>
      </DropdownCartTotal>
    );
  }
}
export default connect(
  (state) => ({
    CurrencyUnicode: state.AddToCart.InitialCurrency.unicodeText,
    Total: state.AddToCart.getTotal,
  }),
  null
)(DropDownTotal);
