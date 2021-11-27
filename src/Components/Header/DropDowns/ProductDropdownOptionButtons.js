import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import RegularCustomButton from "../../GlobalComponents/CustomValueButton/RegularCustomButton";
import SwatchCustomButton from "../../GlobalComponents/CustomValueButton/SwatchCustomButton";
import CustomButtonID from "../../GlobalComponents/CustomValueButton/CustomButtonID";
import { connect } from "react-redux";

const FlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const CustomValueButtonContainer = styled.div`
  margin-top: 20px;
`;
class ProductDropdownOptionButtons extends Component {
  handleOptionsChange = (value, attribute) => {
    console.log(value, attribute);
    this.props.OptionsChange(value, attribute);
  };

  render() {
    return (
      <div>
        {this.props.data.attributes.map((prod, index) => {
          return (
            <CustomValueButtonContainer key={index}>
              <CustomButtonID FontClassName="Sans4 s14" id={prod.id} />
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
                        width="40px"
                        height="40px"
                        fontSize="12px"
                        NotBackgroundColor=" rgba(166, 166, 166, 0.2)"
                        NotBorderColor="1px solid rgba(166, 166, 166, 1)"
                        NotFontColor="rgba(166, 166, 166, 1)"
                        BackgroundColor="white"
                        FontColor="black"
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
                        width="40px"
                        height="40px"
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
ProductDropdownOptionButtons.propTypes = {
  id: PropTypes.string,
  options: PropTypes.object,
  ChoiceIndexArr: PropTypes.object,
  qtty: PropTypes.number,
  unicode: PropTypes.string,
  currencyText: PropTypes.string,
  AddProductAttributes: PropTypes.array,
};

export default connect(
  (state) => ({
    State: state,

  }),
  null
)(ProductDropdownOptionButtons);
