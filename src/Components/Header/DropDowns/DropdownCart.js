import { PureComponent } from "react";
import PropTypes from "prop-types";

import "../../../CssStyles/Header.css";
import "../../../fonts/fonts.css";

import ListItemCart from "./ListItemCart";
import CartButton from "../../Body/Cart/CartButton";
import DropDownTotal from './DropDownTotal'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ToggleCartState } from "../../../ReduxModules/AllActions";

import { Link } from "react-router-dom";
import {
  ModalBlack,
  Modal,
  DropdownCartWrapper,
  DropdownCartButtonWrapper,
} from "../Header.style";
import DropdownCartTopText from "./DropdownCartTopText";


class DropdownCart extends PureComponent {
  close = () => {
    this.props.ToggleCartStateDispatch();
  };

  render() {
    return (
      <Modal onClick={this.close}>
        <ModalBlack>
        <DropdownCartWrapper onClick={(e) => e.stopPropagation()}>
          <div>
            <DropdownCartTopText quantityOfProducts = {this.props.quantityOfProducts}/>
            {this.props.AllProducts.map((prod, i) => {
              let Price = prod.amount.amount;
              console.log(prod)
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
            })}
          </div>
          <DropDownTotal />
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
      </Modal>
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
  CartOpen: PropTypes.bool,
};
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
        ToggleCartStateDispatch: ToggleCartState,
      },
      dispatch
    )
)(DropdownCart);
