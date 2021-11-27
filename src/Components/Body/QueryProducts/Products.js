import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import {
  ProductWindowH2,
  ProductWindowIMG,
  ProductWindowH4,
  BuyButtonContainer,
  HovEff,
  OutOfStock,
} from "../Body.styles";
import BuyButton from "./BuyButton";
import { Link } from "react-router-dom";
import { ReactComponent as CartVect } from "../../../icons/Empty Cart White.svg";
import "../../../fonts/fonts.css";
import styled from "styled-components";

const CartVectStyle = styled(CartVect)`
  position: absolute;
  right: 21px;
  bottom: 20px;
  transform: scale(1.2);
`;

class Products extends PureComponent {
  constructor(props) {
    super(props);
    this.HovRef = React.createRef();

    this.state = {
      over: false,
      size: "",
      inStock: 1,
      hovered: false,
    };
  }
  componentDidMount = () => {
    this.ifInStock();
  };

  ifInStock = () => {
    if (!this.props.inStock) {
      this.setState({
        inStock: 0.5,
      });
    }
  };

  handleBuyButton = (val) => {
    this.setState({
      over: val,
    });
  };

  render() {
    if (
      this.state.over &&
      this.HovRef.current &&
      this.HovRef.current.matches(":hover") === false
    ) {
      this.setState({ over: false });
    }
    const ProductWindow = styled.div`
      width: 320px;
      height: 400px;
      padding-top: 20px;
      padding-left: 20px;
      filter: opacity(${this.state.inStock});
    `;
    return (
      <HovEff
        ref={this.HovRef}
        onMouseEnter={() => {
          this.setState({ over: true });
        }}
        onMouseLeave={() => this.setState({ over: false })}
      >
        <div>
          {this.props.inStock ? null : (
            <OutOfStock className="Rale4">OUT OF STOCK</OutOfStock>
          )}
          <Link to={`/ProductDescriptionContainer/${this.props.id}`}>
            <ProductWindow>
              <ProductWindowIMG src={this.props.gallery} />
              <ProductWindowH2 className="Rale3 s18">
                {this.props.brand}{" "}{this.props.name}
              </ProductWindowH2>
              <ProductWindowH4 className="Rale5 s18">
                {this.props.currencySymbol} {this.props.amount}
              </ProductWindowH4>
            </ProductWindow>
          </Link>
          {this.props.inStock ? (
            <BuyButtonContainer>
              {this.state.over ? (
                <BuyButton
                  product={this.props.product}
                  amount = {this.props.amount}
                  prices = {this.props.prices}
                  CurrencyText = {this.props.CurrencyText}
                  id={this.props.id}
                  icon={<CartVectStyle />}
                />
              ) : null}
            </BuyButtonContainer>
          ) : null}
        </div>
      </HovEff>
    );
  }
}
Products.propTypes = {
  product: PropTypes.object,
  inStock: PropTypes.bool,
  id: PropTypes.string,
  currencySymbol: PropTypes.string,
  CurrencyText: PropTypes.string,
  amount: PropTypes.number,
};
export default Products;
