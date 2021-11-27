import { Component } from "react";
import PropTypes from "prop-types";

import CurDrop from "./CurDrop.js";
import DropdownCart from "./DropdownCart.js";

import { ReactComponent as CurVect } from "../../../icons/currencyVector.svg";
import { ReactComponent as CartVect } from "../../../icons/Empty Cart.svg";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  ToggleCartState,
  ToggleCurState,
} from "../../../ReduxModules/AllActions";

import { Icons } from "../Header.style.js";
import styled from "styled-components";
import {
  CurrencyIconContainer,
  CartIconContainer,
  SmallCircle,
  CircleText,
} from "../Header.style";
const CurVectStyle = styled(CurVect)`
  margin-left: 5px;
  transform: rotate(0deg);
  transition: 0.5s;
  transform: ${(act) => (act.$active ? "rotate(180deg)" : "rotate(0deg)")};
`;

class Dropdown extends Component {
  handleCartState = () => {
    if (this.props.CurrencyOpen === true) {
      this.props.ToggleCurStateDispatch();
    }
    this.props.ToggleCartStateDispatch();
  };
  handleCurrencyState = () => {
    if (this.props.CartOpen === true) this.props.ToggleCartStateDispatch();

    this.props.ToggleCurStateDispatch();
  };
  render() {
    return (
      <div>
        <div>
          <Icons>
            <div>
              <CurrencyIconContainer onClick={this.handleCurrencyState}>
                {this.props.unicode}{" "}
                <CurVectStyle $active={this.props.CurrencyOpen}></CurVectStyle>
              </CurrencyIconContainer>
              {this.props.CurrencyOpen ? <CurDrop /> : null}
            </div>
            <div onClick={this.handleCartState}>
              <CartIconContainer>
                <CartVect />
                {this.props.quantityOfProducts === 0 ? null : (
                  <SmallCircle >
                    <CircleText className="Rob7 s14">
                      {this.props.quantityOfProducts}
                    </CircleText>
                  </SmallCircle>
                )}
              </CartIconContainer>
            </div>
            {this.props.CartOpen ? <DropdownCart /> : null}
          </Icons>
        </div>
      </div>
    );
  }
}
Dropdown.propTypes = {
  ToggleCartState: PropTypes.func,
  ToggleCurState: PropTypes.func,
  unicode: PropTypes.string,
  quantityOfProducts: PropTypes.number,
  CurrencyOpen: PropTypes.bool,
  CartOpen: PropTypes.bool,
};

export default connect(
  (state) => ({
    unicode: state.AddToCart.InitialCurrency.unicodeText,
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
