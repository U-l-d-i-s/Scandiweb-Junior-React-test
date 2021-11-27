import { Component } from "react";
import PropTypes from "prop-types";

import CustomButtonID from "../../GlobalComponents/CustomValueButton/CustomButtonID";
import RegularCustomButton from "../../GlobalComponents/CustomValueButton/RegularCustomButton";
import SwatchCustomButton from "../../GlobalComponents/CustomValueButton/SwatchCustomButton";

import {CartOptionButtonsWrapper, CartOptionButtonsContainer, CartOptionButtonsInnerContainer} from './Cart.styles'

export default class CartOptionProductButtons extends Component {
  handleOptionsChange = (value, attribute) => {
    console.log(value, attribute);
    this.props.OptionsChange(value, attribute);
  };
  render() {
    return (
      <CartOptionButtonsWrapper>
        {this.props.data.attributes.map((prod, index) => {
          return (
            <CartOptionButtonsContainer key={index}>
              <CustomButtonID fakeText = "yes" FontClassName = "Sans4 s16" id = {prod.id}/>
              <CartOptionButtonsInnerContainer>
                {prod.type !== "swatch"
                  ? prod.items.map((p, indexP) => (
                      <RegularCustomButton
                        id={this.props.data.id}
                        index={indexP}
                        ChoiceIndexArr={this.props.ChoiceIndexArr}
                        key={p.value}
                        attribute={prod.id}
                        value={p.value}
                        handleOptionsChange={(value, attribute) => {
                          this.handleOptionsChange(value, attribute);
                        }}
                        width="60px"
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
                    ))
                  : prod.items.map((p, indexP) => (
                      <SwatchCustomButton
                        id={this.props.data.id}
                        index={indexP}
                        ChoiceIndexArr={this.props.ChoiceIndexArr}
                        key={p.value}
                        attribute={prod.id}
                        value={p.value}
                        handleOptionsChange={(value, attribute) => {
                          this.handleOptionsChange(value, attribute);
                        }}
                        width="60px"
                        height="40px"
                        
                      />
                    ))}
              </CartOptionButtonsInnerContainer>
            </CartOptionButtonsContainer>
          );
        })}
      </CartOptionButtonsWrapper>
    );
  }
}
RegularCustomButton.propTypes = {
  OptionsChange: PropTypes.func,
  ChoiceIndexArr: PropTypes.object,
  data: PropTypes.object,
  value: PropTypes.string,
 
};