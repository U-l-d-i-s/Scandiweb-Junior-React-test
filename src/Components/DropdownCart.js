import { PureComponent } from "react";
import PropTypes from "prop-types";

import "../CssStyles/Header.css";
import "../fonts/fonts.css";

import ListItemCart from "./ListItemCart";
import CartButton from "./CartButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ToggleCartState } from "../ReduxModules/AllActions";

import { Link } from "react-router-dom";
import {
  ModalBlack,
  DropdownCartWrapper,
  DropdownCartTotal,
  DropdownCartButtonWrapper,
} from "./Header.style";

class DropdownCart extends PureComponent {
  close = () => {
    this.props.ToggleCartStateDispatch();
  };

  render() {
    return (
      <ModalBlack onClick={this.close}>
        <DropdownCartWrapper 
        onClick={(e) => e.stopPropagation()}>
          <div style={{ width: "140px", marginBottom: "20px" }}>
            <h5 style={{ display: "flex" }} className="Rale5 s16">
              <p style={{ marginRight: "4px" }} className="Rale7 s16">
                My Bag,{" "}
              </p>
              {this.props.quantityOfProducts} items
            </h5>
          </div>
          <ul>
            {this.props.AllProducts < 3
              ? this.props.AllProducts.map((prod, i) => {
                  let Price = 0;
                  prod.prices.forEach((p) => {
                    if (p.currency === this.props.CurrencyText) {
                      Price = p.amount;
                    }
                  });
                  return (
                    <ListItemCart
                      AddProductAttributes={prod}
                      key={prod.id + i}
                      id={prod.id}
                      options={prod.options}
                      qtty={prod.qtty}
                      prices={Price}
                      currency={this.props.CurrencyText}
                    />
                  );
                })
              : //if the list has more than 3 unique products, then it will display only 3
                this.props.AllProducts.slice(0, 3).map((prod, i) => {
                  let Price = 0;
                  prod.prices.forEach((p) => {
                    if (p.currency === this.props.CurrencyText) {
                      Price = p.amount;
                    }
                  });
                  console.log(prod.id);

                  return (
                    <ListItemCart
                      AddProductAttributes={prod}
                      key={prod.id + i}
                      id={prod.id}
                      options={prod.options}
                      qtty={prod.qtty}
                      prices={Price}
                    />
                  );
                })}
          </ul>
          <DropdownCartTotal>
            <h3 className="Rob4 s16">Total</h3>
            <p className="Rale7 s16">
              {this.props.CurrencyUnicode} {this.props.Total}
            </p>
          </DropdownCartTotal>
          <DropdownCartButtonWrapper>
            <Link to="/CartContainer">
              <CartButton
                text="VIEW BAG"
                border="1px solid black"
                BGcolor="white"
              />
            </Link>
            <Link to="/">
              <CartButton
                BGcolor="#5ECE7B"
                FontColor="white"
                text="CHECK OUT"
              />
            </Link>
          </DropdownCartButtonWrapper>
        </DropdownCartWrapper>
      </ModalBlack>
    );
  }
}
DropdownCart.propTypes = {
  ToggleCartState: PropTypes.func,
  CurrencyUnicode: PropTypes.string,
  CurrencyText: PropTypes.string,
  quantityOfProducts: PropTypes.number,
  Total: PropTypes.number,
  AllProducts: PropTypes.array,
  CartOpen: PropTypes.bool
};
export default connect(
  (state) => ({
    AllProducts: state.AddToCart.addProduct,
    quantityOfProducts: state.AddToCart.quantityOfProducts,
    CurrencyText: state.AddToCart.InitialCurrency.text,
    CurrencyUnicode: state.AddToCart.InitialCurrency.unicodeText,
    Total: state.AddToCart.getTotal,
    openCart : state.CartOpenState
  }),
  (dispatch) =>
    bindActionCreators(
      {
        ToggleCartStateDispatch: ToggleCartState,
      },
      dispatch
    )
)(DropdownCart);
