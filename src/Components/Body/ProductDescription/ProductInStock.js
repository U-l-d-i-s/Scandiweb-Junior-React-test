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
  TextContainer
} from "../Body.styles";
import ProductImgArray from "./ProductImgArray";
import { amount } from "../../Methods/DataMutationMethods";
import DangerousHtml from "./DangerousHtml";
import ProductOptionButtons from "./ProductOptionButtons";
import ProductPrice from './ProductPrice'

class ProductInStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bigPicture: 0,
      ChoiceIndexArr: {},
    };
  }


  handleOnClickImg = (e, d) => {
    this.setState({
      bigPicture: d,
    });
  };
  handleOptionsChange = (value, attribute, index) => {
    this.setState({
      ChoiceIndexArr: { ...this.state.ChoiceIndexArr, [attribute]: value },
    });
  };
  render() {
    console.log("refresh")
    
    return (
      <Query query={PROD_BY_ID} variables={{ productId: this.props.id }} >
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
              </ProductDescriptionImagesWrapper>

              <TextContainer>
                <h1 className="Rale6 s30" style={{ marginBottom: "10px" }}>
                  {data.product.brand}
                </h1>
                <h2 className="Rale4 s30">{data.product.name}</h2>

               <ProductOptionButtons
                  ChoiceIndexArr={this.state.ChoiceIndexArr}
                  OptionsChange={(value, attribute) =>
                    this.setState({ ChoiceIndexArr: {...this.state.ChoiceIndexArr, [attribute]: value}})
                  }
                  data={data.product}
                  productDescription = "productDescription"
                />
                <ProductPrice price = {price} CurrencyUnicode = {this.props.CurrencyUnicode}/>
                
                <GreenBuyButton
                  BGcolor="#5ECE7B"
                  FontColor="white"
                  text="ADD TO CART"
                  prices={data.product.prices}
                  data={data.product}
                  options={this.state.ChoiceIndexArr}
                  id={this.props.match.params.id}
                  currency={this.props.CurrencyText}
                  amount={price}
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
ProductInStock.propTypes = {
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
  )(ProductInStock)
);
