import { Component} from "react";
import PropTypes from "prop-types";

import "../CssStyles/Header.css";
import { Query } from "@apollo/client/react/components";
import { PROD_BY_ID } from "../queries/QueryGql";

import CustomValueButton from "./CustomValueButton";
import CustomIncOrDecButton from "./CustomIncOrDecButton";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ChangeOption } from "../ReduxModules/AllActions";

import ListitemCartTopText from './ListitemCartTopText'
import {
  ListItemImgWrapper,
  ListItemIncDecWrapper,
  ListItemCartImageAndIncDec,
  ListItemCartTextWrapper,
  ListItemCartWrapper,
  ListItemImg,
  InnerListItemCartWrapper,
  ListItemDirection,
} from "./Header.style";


class ListItemCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        ChoiceIndexArr: { ...this.state.ChoiceIndexArr, [attribute]: value },
      },

      () => this.sendChanges()
    );
  };

  componentDidMount = () => {
    this.setState({
      ChoiceIndexArr: this.props.options,
    });
  };

  render() {
    return (
      <Query query={PROD_BY_ID} variables={{ productId: this.props.id }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return (
            <ListItemCartWrapper>
              <ListItemCartTextWrapper>
                <div>
                  <ListitemCartTopText 
                    brand = {data.product.brand}
                    name = {data.product.name}
                    unicode ={this.props.unicode}
                    prices = {this.props.prices}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "fit-content",
                    }}
                  >
                    {this.props.AddProductAttributes.attributes.map(
                      (prod, index) => {
                        return (
                          <InnerListItemCartWrapper key={index}>
                            {prod.id === "Capacity" ||
                            prod.id === "Size" ||
                            prod.id === "Color" ? (
                              <div style={{ height: "5px" }}></div>
                            ) : (
                              <h3
                                className="Sans4 s14"
                                style={{ marginTop: "10px" }}
                              >
                                {prod.id}
                              </h3>
                            )}
                            <ListItemDirection>
                              {prod.items.map((p, indexP) => {
                                return (
                                  <CustomValueButton
                                    handleOptionsChange={
                                      this.handleOptionsChange
                                    }
                                    ChoiceIndexArr={this.props.options}
                                    id={data.product.id}
                                    index={indexP}
                                    type={prod.type}
                                    key={data.product.id + indexP}
                                    attribute={prod.id}
                                    value={p.value}
                                    width="30px"
                                    height="30px"
                                    fontSize="12px"
                                    NotBackgroundColor = " rgba(166, 166, 166, 0.2)"
                                    NotBorderColor = "1px solid rgba(166, 166, 166, 1)"
                                    NotFontColor = "rgba(166, 166, 166, 1)"
                                    BackgroundColor = "white"
                                    FontColor = "black"
                                    BorderColor = "1px solid black"
                                  />
                                );
                              })}
                            </ListItemDirection>
                          </InnerListItemCartWrapper>
                        );
                      }
                    )}
                  </div>
                </div>
              </ListItemCartTextWrapper>
              <ListItemCartImageAndIncDec >
                <ListItemIncDecWrapper >
                  <CustomIncOrDecButton
                    id={this.props.id}
                    options={this.props.options}
                    symbol="+"
                    width="24px"
                    height="24px"
                    fontSize="16px"
                  />
                  <p className="Rale5 s16">{this.props.qtty}</p>
                  <CustomIncOrDecButton
                    id={this.props.id}
                    options={this.props.options}
                    symbol="_"
                    width="24px"
                    height="24px"
                    minusSize="12px"
                  />
                </ListItemIncDecWrapper>
                <ListItemImgWrapper >
                  <div style = {{display: "inline-block", height: "100%", verticalAlign: "middle"}}> </div>
                  <ListItemImg
                    alt={data.product.brand}
                    src={data.product.gallery[0]}
                  />
                  </ListItemImgWrapper>
              </ListItemCartImageAndIncDec>
            </ListItemCartWrapper>
          );
        }}
      </Query>
    );
  }
}
ListItemCart.propTypes = {
  unicode : PropTypes.string,
  CurrentCategory : PropTypes.string,
  ChangeOption : PropTypes.func,
  options: PropTypes.object,
  id: PropTypes.string,
  qtty: PropTypes.number,
  prices: PropTypes.number,
} 
export default connect(
  (state) => ({
    unicode : state.AddToCart.InitialCurrency.unicodeText,
    CurrentCategory : state.CurrentCategory

  }),
  (dispatch) =>
    bindActionCreators(
      {
        ChangeOptionDispatch: ChangeOption,
      },
      dispatch
    )
)(ListItemCart);
