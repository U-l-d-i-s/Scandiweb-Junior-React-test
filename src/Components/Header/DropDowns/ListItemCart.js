import { Component } from "react";
import PropTypes from "prop-types";

import "../../../CssStyles/Header.css";
import { Query } from "@apollo/client/react/components";
import { PROD_BY_ID } from "../../../queries/QueryGql";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ChangeOption, ProductCount, GetTotal } from "../../../ReduxModules/AllActions";

import ListitemCartTopText from "./ListitemCartTopText";
import {
  ListItemImgWrapper,
  ListItemCartImageAndIncDec,
  ListItemCartTextWrapper,
  ListItemCartWrapper,
  ListItemImg,
  OptionButtonContainer,
  ImgAlignDummy,
} from "../Header.style";

import ProductDropdownOptionButtons from "./ProductDropdownOptionButtons";
import IncDecButtonsListitemCart from "./IncDecButtonsListitemCart";

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
            <ListItemCartWrapper>
              <ListItemCartTextWrapper>
                  <ListitemCartTopText
                    brand={data.product.brand}
                    name={data.product.name}
                    unicode={this.props.unicode}
                    prices={this.props.prices}
                  />
                  <OptionButtonContainer>
                    <ProductDropdownOptionButtons
                      ChoiceIndexArr={this.props.options}
                      OptionsChange={(value, attribute) =>
                        this.handleOptionsChange(value, attribute)
                      }
                      data={this.props.AddProductAttributes}
                      id={this.props.id}
                    />
                  </OptionButtonContainer>
              </ListItemCartTextWrapper>
              <ListItemCartImageAndIncDec>
                <IncDecButtonsListitemCart id = {this.props.id} options = {this.props.options} qtty = {this.props.qtty}/>
                
                <ListItemImgWrapper>
                  <ImgAlignDummy>
                    {" "}
                  </ImgAlignDummy>
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
  AddProductAttributes: PropTypes.object,
  unicode: PropTypes.string,
  CurrentCategory: PropTypes.string,
  ChangeOption: PropTypes.func,
  options: PropTypes.object,
  id: PropTypes.string,
  qtty: PropTypes.number,
  prices: PropTypes.number,
};
export default connect(
  (state) => ({
    unicode: state.AddToCart.InitialCurrency.unicodeText,
    CurrentCategory: state.CurrentCategory,
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
)(ListItemCart);
