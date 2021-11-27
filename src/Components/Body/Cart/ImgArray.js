import React, { Component } from "react";
import {
  InnerCartImgWrapper,
  ImgArrowWrapper,
  ImgArrowWrapperOnHover,
  DummyImgAlignDiv,
  StyledArrayImg
} from "./Cart.styles";
import { ReactComponent as ArrowVect } from "../../../icons/WhiteArr.svg";
import styled from "styled-components";

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

export default class ImgArray extends Component {
  state = {
    picture: 0,
  };
  render() {
    let imgArray = this.props.data.gallery.map((prod) => {
      return prod;
    });
    return (
      <InnerCartImgWrapper>
        {imgArray[1] !== undefined ? (
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

            <DummyImgAlignDiv />

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
        ) : null}
        <StyledArrayImg
          style={{}}
          src={imgArray[this.state.picture]}
          ref={(img) => (this.img = img)}
          alt="broken img"
          onError={() => (this.img.src = "../images/a-logo.png")}
        />
      </InnerCartImgWrapper>
    );
  }
}
