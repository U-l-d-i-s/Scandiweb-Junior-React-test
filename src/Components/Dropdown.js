import { Component } from "react";
import PropTypes from "prop-types";

import CurDrop from "./CurDrop.js";
import DropdownCart from "./DropdownCart.js";

import { ReactComponent as CurVect } from "../icons/currencyVector.svg";
import { ReactComponent as CartVect } from "../icons/Empty Cart.svg";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ToggleCartState, ToggleCurState } from "../ReduxModules/AllActions.js";

import { Icons } from "./Header.style.js";
import styled from "styled-components";

const CurVectStyle = styled(CurVect)`
  transform: rotate(0deg);
  transition: 0.5s;
  transform: ${(act) => (act.$active ? "rotate(180deg)" : "rotate(0deg)")};
`;
const SmallCircle = styled.div`
  position: absolute;
  background-color: black;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  top: -10px;
  left: 10px;
`;
const CartIconContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

class Dropdown extends Component {

  handleCartState = () => {
    if (this.props.CurrencyOpen === true) {
      this.props.ToggleCurStateDispatch();
    }
    this.props.ToggleCartStateDispatch();
  };
  handleCurrencyState = () => {
    if (this.props.CartOpen === true)
      this.props.ToggleCartStateDispatch();

    this.props.ToggleCurStateDispatch();
  };
  render() {
    return (
      <ul>
        <li>
          <Icons>
            <div>
              <div
                onClick={this.handleCurrencyState}
                style={{ cursor: "pointer" }}
              >
                {this.props.unicode}{" "}
                <CurVectStyle
                  $active={this.props.CurrencyOpen}
                ></CurVectStyle>
              </div>
              {this.props.CurrencyOpen ? <CurDrop /> : null}
            </div>
            <div onClick={this.handleCartState}>
              <CartIconContainer>
                <CartVect />
                {this.props.quantityOfProducts === 0 ? null : (
                  <SmallCircle
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p className="Rob7 s14" style={{ color: "white" }}>
                      {this.props.quantityOfProducts}
                    </p>
                  </SmallCircle>
                )}
              </CartIconContainer>
            </div>
            {this.props.CartOpen ? <DropdownCart /> : null}
          </Icons>
        </li>
      </ul>
    );
  }
}
Dropdown.propTypes = {
  ToggleCartState: PropTypes.func,
  ToggleCurState: PropTypes.func,
  unicode: PropTypes.string,
  quantityOfProducts: PropTypes.number,
  CurrencyOpen: PropTypes.bool,
  CartOpen: PropTypes.bool
};

export default connect(
  (state) => ({
    unicode : state.AddToCart.InitialCurrency.unicodeText,
    CartOpen: state.CartOpenState,
    quantityOfProducts: state.AddToCart.quantityOfProducts,
    CurrencyOpen: state.CurrencyOpenState,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        ToggleCartStateDispatch: ToggleCartState,
        ToggleCurStateDispatch: ToggleCurState,
      },
      dispatch
    )
)(Dropdown);
