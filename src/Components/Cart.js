import { Component } from "react";
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ChangeOption } from "../ReduxModules/AllActions";

import { Query } from "@apollo/client/react/components";
import { PROD_BY_ID } from "../queries/QueryGql";

import CustomIncOrDecButton from "./CustomIncOrDecButton";
import CustomValueButton from "./CustomValueButton";
import { ReactComponent as ArrowVect } from "../icons/WhiteArr.svg";

import styled from "styled-components";
import {
  CartWrapper,
  CartFlex,
  CartProduct,
  IncOrDecWrapper,
  CartImgWrapper,
  InnerCartProduct,
  InnerCartImgWrapper,
  ImgArrowWrapper,
} from "./Cart.styles";

const ArrVectLeft = styled(ArrowVect)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: rotate(-90deg) scale(2);
`;
const ArrVectright = styled(ArrowVect)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: rotate(90deg) scale(2);
`;
const ImgArrowWrapperOnHover = styled.div`
  position: relative;
  width: 200px;
  height: fit-content;
  opacity: 0;
  transition: 0.2s;
  &:hover {
    transition: 0.2s;
    opacity: 1;
  }
`;

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: 0,
      ChoiceIndexArr: {},
    };
  }
  sendChanges = () => {
    this.props.ChangeOptionDispatch(
      this.props.id,
      this.props.options,
      this.state.ChoiceIndexArr,
      this.props.qtty
    );
  };
  handleOptionsChange = (value, attribute, index) => {
    this.setState(
      {
        //new data
        ChoiceIndexArr: { ...this.state.ChoiceIndexArr, [attribute]: value },
      },
      () => this.sendChanges()
    );
  };

  componentDidMount = () => {
    this.setState({
      //prev data
      ChoiceIndexArr: this.props.options,
    });
  };

  render() {

    return (
      <Query query={PROD_BY_ID} variables={{ productId: this.props.id }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          let imgArray = data.product.gallery.map((prod, index) => {
            console.log(prod);
            return prod;
          });

          let amount = 0;
          data.product.prices.forEach((element) => {
            if (
              element.currency ===
              this.props.currencyText
            ) {
              amount = element.amount;
            }
          });
          return (
            <CartWrapper>
              <CartFlex>
                <p className="Rale6 s30">{data.product.brand}</p>
                <p
                  className="Rale4 s30"
                  style={{
                    paddingTop: "10px",
                    paddingBottom: "20px",
                  }}
                >
                  {data.product.name}
                </p>
                <p className="Rale7 s24" style={{ marginTop: "0px" }}>
                  {this.props.unicode}{" "}
                  {amount}
                </p>
                <CartProduct>
                  {this.props.AddProductAttributes.attributes.map(
                    (prod, index) => {
                      return (
                        <InnerCartProduct key={index}>
                          {prod.id === "Capacity" ||
                          prod.id === "Size" ||
                          prod.id === "Color" ? (
                            <div style={{ height: "17px" }}></div>
                          ) : (
                            <h3>{prod.id}</h3>
                          )}
                          <div
                            style={{
                              marginBottom: "0px",
                              display: "flex",

                              flexDirection: "row",
                            }}
                          >
                            {prod.items.map((p, indexP) => {
                              return (
                                <CustomValueButton
                                  handleOptionsChange={this.handleOptionsChange}
                                  ChoiceIndexArr={this.props.options}
                                  index={indexP}
                                  type={prod.type}
                                  key={p.value}
                                  attribute={prod.id}
                                  value={p.value}
                                  height="40px"
                                  width="60px"
                                  fontSize="24px"
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
                        </InnerCartProduct>
                      );
                    }
                  )}
                </CartProduct>
              </CartFlex>

              <div style={{ display: "flex" }}>
                <IncOrDecWrapper>
                  <CustomIncOrDecButton
                    id={this.props.id}
                    options={this.props.options}
                    symbol="+"
                    width="40px"
                    height="40px"
                    fontSize="34px"
                  />
                  <p className="Rale5 s24">{this.props.qtty}</p>
                  <CustomIncOrDecButton
                    id={this.props.id}
                    options={this.props.options}
                    symbol="_"
                    width="40px"
                    height="40px"
                    fontSize="34px"
                    minusSize="20px"
                  />
                </IncOrDecWrapper>
                <CartImgWrapper>
                  <InnerCartImgWrapper>
                    <ImgArrowWrapperOnHover>
                      <ImgArrowWrapper
                        style={{ left: "0px" }}
                        onClick={() =>
                          this.state.picture === imgArray.length - 1
                            ? this.setState({ picture: 0 })
                            : this.setState({ picture: this.state.picture + 1 })
                        }
                      >
                        <ArrVectLeft />
                      </ImgArrowWrapper>
                      <div
                        style={{
                          position: "absolute",
                          left: "80px",
                          width: "40px",
                          height: "200px",
                        }}
                      ></div>
                      <ImgArrowWrapper
                        style={{ right: "0px" }}
                        onClick={() =>
                          this.state.picture === 0
                            ? this.setState({ picture: imgArray.length - 1 })
                            : this.setState({ picture: this.state.picture - 1 })
                        }
                      >
                        <ArrVectright />
                      </ImgArrowWrapper>
                    </ImgArrowWrapperOnHover>
                    <img
                    style={{
                        display: "block",
                        height: "200px",
                        width: "200px",
                        objectFit: "cover",
                        objectPosition: "0 30%",
                      }}
                      src={imgArray[this.state.picture]}
                      ref={(img) => (this.img = img)}
                      alt="broken img"
                      onError={() => (this.img.src = "../images/a-logo.png")}
                    />
                  </InnerCartImgWrapper>
                </CartImgWrapper>
              </div>
            </CartWrapper>
          );
        }}
      </Query>
    );
  }
}

Cart.propTypes = {
  id : PropTypes.string,
  options : PropTypes.object,
  ChoiceIndexArr : PropTypes.object,
  qtty : PropTypes.number,
  unicode : PropTypes.string,
  currencyText: PropTypes.string,
  AddProductAttributes : PropTypes.array
} 

export default connect(
  (state) => ({
    State: state,
    unicode : state.AddToCart.InitialCurrency.unicodeText,
    currencyText : state.AddToCart.InitialCurrency.text
  }),
  (dispatch) =>
    bindActionCreators(
      {
        ChangeOptionDispatch: ChangeOption,
      },
      dispatch
    )
)(Cart);
