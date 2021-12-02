import React, { Component } from 'react'

import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";
import { Query } from "@apollo/client/react/components";
import { PROD_BY_ID } from "../../../queries/QueryGql";
import GreenBuyButton from "./GreenBuyButton";
import { connect } from "react-redux";
import "../../../fonts/fonts.css";
import {
  ProductDescriptionWrapper,
  ProductDescriptionImagesWrapper,
  TextContainer,
  BrandWithMargin,
  StyledOutOfStock
} from "../Body.styles";
import ProductImgArray from "./ProductImgArray";
import { amount } from "../../Methods/DataMutationMethods";
import DangerousHtml from "./DangerousHtml";
import ProductPrice from './ProductPrice'

import ProductOptionButtonsOutOfStock from './ProductOptionButtonsOutOfStock';

class ProductOutOfStock extends Component {
  state = {
      bigPicture: 0,
    }

  handleOnClickImg = (e, d) => {
    this.setState({
      bigPicture: d,
    });
  };

  render() {
    
    return (
      <Query query={PROD_BY_ID} variables={{ productId: this.props.id }} fetchPolicy = {"network-only"}>
        {({ loading, error, data }) => {
          
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
            
          const price = amount(data.product.prices, this.props.CurrencyText);
          return (
            <ProductDescriptionWrapper>
              <ProductDescriptionImagesWrapper>
                <ProductImgArray
                  data={data.product.gallery}
                />
                <StyledOutOfStock className="Rale4">OUT OF STOCK</StyledOutOfStock>
              </ProductDescriptionImagesWrapper>

              <TextContainer>
                <BrandWithMargin className="Rale6 s30">
                  {data.product.brand}
                </BrandWithMargin>
                <h2 className="Rale4 s30">{data.product.name}</h2>

               <ProductOptionButtonsOutOfStock
                  data={data.product}
                />
                <ProductPrice price = {price} CurrencyUnicode = {this.props.CurrencyUnicode}/>
                
                <GreenBuyButton
                  disabled = "yes"
                  BGcolor="rgba(166, 166, 166, 0.5)"
                  FontColor="white"
                  text="ADD TO CART"
                  
                />
                <DangerousHtml text={data.product.description} />
              </TextContainer>
            </ProductDescriptionWrapper>
          );
        }}
      </Query>
    );
  }
}
ProductOutOfStock.propTypes = {
  CurrencyText: PropTypes.string,
  CurrencyUnicode: PropTypes.string,
  id: PropTypes.string,
};
export default withRouter(
  connect(
    (state) => ({
      CurrencyText: state.AddToCart.InitialCurrency.text,
      CurrencyUnicode: state.AddToCart.InitialCurrency.unicodeText,
    }),
    null
  )(ProductOutOfStock)
);

