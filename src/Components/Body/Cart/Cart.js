import { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ChangeOption, ProductCount, GetTotal } from "../../../ReduxModules/AllActions";

import { Query } from "@apollo/client/react/components";
import { PROD_BY_ID } from "../../../queries/QueryGql";

import IncDecButtonsProduct from "./IncDecButtonsProduct";
import CartOptionProductButtons from "./CartOptionProductButtons";
import TextProduct from "./TextProduct";
import {
  CartWrapper,
  CartFlex,
  CartProduct,
  CartImgWrapper,
  DisplayFlex
} from "./Cart.styles";
import ImgArray from "./ImgArray";

class Cart extends Component {
    state = {
      ChoiceIndexArr: {},
    };
  sendChanges = () => {
    this.props.ChangeOptionDispatch(
      this.props.id,
      this.props.options,
      this.state.ChoiceIndexArr,
      this.props.qtty
    );
    this.props.ProductCountDispatch();
    this.props.GetTotalDispatch();

  };
  handleOptionsChange = (value, attribute) => {
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
            <CartWrapper>
              <CartFlex>
                <TextProduct
                  brand={data.product.brand}
                  name={data.product.name}
                  unicode={this.props.unicode}
                  currentCategory={this.props.currencyText}
                  prices={data.product.prices}
                />
                <CartProduct>
                  <CartOptionProductButtons
                    ChoiceIndexArr={this.props.options}
                    OptionsChange={(value, attribute) =>
                      this.handleOptionsChange(value, attribute)
                    }
                    data={this.props.AddProductAttributes}
                  />
                </CartProduct>
              </CartFlex>

              <DisplayFlex >
                <IncDecButtonsProduct
                  id={this.props.id}
                  options={this.props.options}
                  qtty={this.props.qtty}
                />
                <CartImgWrapper>
                  <ImgArray data={data.product} />
                </CartImgWrapper>
              </DisplayFlex>
            </CartWrapper>
          );
        }}
      </Query>
    );
  }
}

Cart.propTypes = {
  id: PropTypes.string,
  options: PropTypes.object,
  ChoiceIndexArr: PropTypes.object,
  qtty: PropTypes.number,
  unicode: PropTypes.string,
  currencyText: PropTypes.string,
  AddProductAttributes: PropTypes.object,
};

export default connect(
  (state) => ({
    State: state,
    unicode: state.AddToCart.InitialCurrency.unicodeText,
    currencyText: state.AddToCart.InitialCurrency.text,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        ChangeOptionDispatch: ChangeOption,
        ProductCountDispatch: ProductCount,
        GetTotalDispatch: GetTotal,

      },
      dispatch
    )
)(Cart);
