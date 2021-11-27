import { Component } from "react";
import PropTypes from "prop-types";

import {
  StyledImageObject,
  ProductDescriptionImageArray,
  ProductDescriptionImagesWrapper,
} from "../Body.styles";

import BigImg from "./BigImg";

export default class ProductImgArray extends Component {
  state = {
    bigPicture: 0,
  };
  handlePropsOnClickImg = (idx) => {
    this.props.handleOnClickImg(idx);
  };
  render() {
    const imgs = this.props.data;
    const bigImage = [imgs[this.state.bigPicture]];
    return (
      <ProductDescriptionImagesWrapper>
        <ProductDescriptionImageArray>
          {this.props.data.map((prod, index) => {
            //used object because object doesnt render broken images (as one image was broken).
            return (
              <StyledImageObject
                data={prod}
                type="image/jpg"
                key={index}
                onClick={() =>
                  this.setState({
                    bigPicture: index,
                  })
                }
              ></StyledImageObject>
            );
          })}
        </ProductDescriptionImageArray>
        <BigImg data={bigImage} />
      </ProductDescriptionImagesWrapper>
    );
  }
}
ProductImgArray.propTypes = {
  data: PropTypes.array,
};