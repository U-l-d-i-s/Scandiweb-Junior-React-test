import React, { Component } from 'react'
import OutOfStockButton from './OutOfStockButton';
import {
  CustomValueButtonContainer,
  FlexRowDiv
} from "../Body.styles";

export default class ProductOptionButtonsOutOfStock extends Component {
  render() {
    return (
      <div>
         {this.props.data.attributes.map((prod, index) => {
          return (
            <CustomValueButtonContainer key={index}>
              <h3 className="RobCondens7 s18">{prod.id}</h3>
              <FlexRowDiv>
                {prod.type !== "swatch"
                  ? prod.items.map((p) => (
                      <OutOfStockButton
                        key={p.value}
                        value={p.value}
                        BackgroundColor = "rgba(166, 166, 166, 0.25)"
                        width="120px"
                        height="40px"
                        fontSize="16px"
                        BorderColor="1px solid black"
                      />
                    ))
                  : prod.items.map((p) => (
                      <OutOfStockButton
                        key={p.value}
                        opacity = "opacity(0.4)"
                        BackgroundColor = {p.value}
                        BorderColor="1px solid black"
                        width = "120px"
                        height = "40px"
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
