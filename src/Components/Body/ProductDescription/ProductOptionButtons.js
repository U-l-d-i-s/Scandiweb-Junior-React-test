import React, { PureComponent } from "react";
import RegularCustomButton from "../../GlobalComponents/CustomValueButton/RegularCustomButton";
import SwatchCustomButton from "../../GlobalComponents/CustomValueButton/SwatchCustomButton";

import {
  CustomValueButtonContainer,
  FlexRowDiv
} from "../Body.styles";

class ProductOptionButtons extends PureComponent {
  
  handleOptionsChange = (value, attribute) => {
    console.log(value, attribute)
    this.props.OptionsChange(value, attribute)
  };


  render() {

    return (
      <div>
         {this.props.data.attributes.map((prod, index) => {
          return (
            <CustomValueButtonContainer key={index}>
              <h3 className="RobCondens7 s18">{prod.id}</h3>
              <FlexRowDiv>
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
                    ))}
              </FlexRowDiv>
            </CustomValueButtonContainer>
          );
        })}
      </div>
    );
  }
}

export default ProductOptionButtons;
