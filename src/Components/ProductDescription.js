import { Component } from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";
import { Query } from "@apollo/client/react/components";
import { PROD_BY_ID } from "../queries/QueryGql";
import GreenBuyButton from "./GreenBuyButton";
import styled from "styled-components";
import CustomValueButton from "./CustomValueButton";
import { connect } from "react-redux";
import DangerousHtml from "./DangerousHtml";
import "../fonts/fonts.css";
import {
  StyledImageObject,
  ProductDescriptionWrapper,
  ProductDescriptionImageArray,
  ProductDescriptionImagesWrapper,
} from "./Body.styles";

class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bigPicture: 0,
      ChoiceIndexArr: {},
    };
  }
  initialStateUpdate = (d) => {
    console.log(d);
  };
  handleOnClickImg = (e, d) => {
    this.setState({
      bigPicture: d,
    });
  };
  handleOptionsChange = (value, attribute, index) => {
    this.setState({
      ChoiceIndexArr: { ...this.state.ChoiceIndexArr, [attribute]: value },
      productOptions: { ...this.state.productOptions, [attribute]: value },
    });
  };
  render() {
    const TextContainer = styled.div`
      width: 400px;
      margin-left: 10%;
      margin-right: 10%;
      display: flex;
      flex-direction: column;
    `;

    return (
      <Query
        query={PROD_BY_ID}
        variables={{ productId: this.props.id }}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          let imgArray = data.product.gallery.map((prod, index) => {
            //used object because object doesnt render broken images (as one image was broken).
            return (
              <div key={index}>
                <StyledImageObject
                  data={prod}
                  type="image/jpg"
                  key={index}
                  onClick={(e) => this.handleOnClickImg(e, index)}
                ></StyledImageObject>
              </div>
            );
          });

          let amount = 0;
          data.product.prices.forEach((element) => {
            if (element.currency === this.props.CurrencyText) {
              amount = element.amount;
            }
          });

          return (
            <ProductDescriptionWrapper>
              <ProductDescriptionImagesWrapper>
                <ProductDescriptionImageArray>
                  {imgArray}
                </ProductDescriptionImageArray>
                <div style={{ minHeight: "600px", width: "1000px" }}>
                  {imgArray[this.state.bigPicture]}
                </div>
              </ProductDescriptionImagesWrapper>

              <TextContainer>
                <h1 className="Rale6 s30" style={{ marginBottom: "10px" }}>
                  {data.product.brand}
                </h1>
                <h2 className="Rale4 s30">{data.product.name}</h2>

                {data.product.attributes.map((prod, index) => {
                  return (
                    <div key={index} style={{ marginTop: "40px" }}>
                      <h3 className="RobCondens7 s18" >
                        {prod.id}
                      </h3>
                      <div
                        style={{
                          marginBottom: "50px",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        {prod.items.map((p, indexP) => {
                          return (
                            <CustomValueButton
                              id={data.product.id}
                              index={indexP}
                              ChoiceIndexArr={this.state.ChoiceIndexArr}
                              type={prod.type}
                              key={p.value}
                              attribute={prod.id}
                              value={p.value}
                              handleOptionsChange={this.handleOptionsChange}
                              width="120px"
                              height="40px"
                              fontSize="16px"
                              FontBorderColor="white"
                              NotBackgroundColor="white"
                              NotBorderColor="1px solid black"
                              NotFontColor="black"
                              BackgroundColor="black"
                              FontColor="white"
                              BorderColor="1px solid black"
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
                <h3 className="RobCondens7 s18">Price:</h3>
                <div
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    marginBottom: "30px",
                  }}
                >
                  <p className="Rale7 s24" style={{ fontSize: "24px" }}>
                    {this.props.CurrencyUnicode}
                  </p>
                  <p className="Rale7 s24" style={{ fontSize: "24px" }}>
                    {amount}
                  </p>
                </div>
                <GreenBuyButton
                  BGcolor="#5ECE7B"
                  FontColor="white"
                  text="ADD TO CART"
                  prices={data.product.prices}
                  attributes={data.product.attributes}
                  options={this.state.productOptions}
                  id={this.props.match.params.id}
                  currency={this.props.CurrencyText}
                  amount={amount}
                />
                <div style={{ marginTop: "40px" }}>
                  <DangerousHtml text={data.product.description} />
                </div>
              </TextContainer>
            </ProductDescriptionWrapper>
          );
        }}
      </Query>
    );
  }
}
ProductDescription.propTypes = {
  CurrencyText : PropTypes.string,
  CurrencyUnicode : PropTypes.string,
  id : PropTypes.string,
} 
export default withRouter(
  connect(
    (state) => ({
      CurrencyText: state.AddToCart.InitialCurrency.text,
      CurrencyUnicode: state.AddToCart.InitialCurrency.unicodeText,
    }),
    null
  )(ProductDescription)
);
