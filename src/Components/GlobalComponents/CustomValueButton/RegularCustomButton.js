import { Component } from "react";
import PropTypes from "prop-types";

import styled from 'styled-components'


export default class RegularCustomButton extends Component {

  handleOptionChangeProps = (val, attr) => {
    this.props.handleOptionsChange(val, attr);
  };
  
  render() {
    const CustomButton = styled.button`
    margin-top: 5px;
    margin-right: 10px;
    width: ${this.props.width};
    height: ${this.props.height};
    border: ${this.props.BorderColor};
    display: flex;
    justify-content: center;
    align-items: center;
  `;
    if (
      this.props.ChoiceIndexArr[this.props.attribute] === this.props.value &&
      this.props.value !== undefined &&
      this.props.ChoiceIndexArr[this.props.attribute] !== undefined      ) {
        return (
          <CustomButton
          disabled = "tes"
            style={{ background: this.props.BackgroundColor }}
            onClick={() =>
              this.handleOptionChangeProps(
                this.props.value,
                this.props.attribute,
              )
            }
          >
            <p
              id={this.props.id}
              className="Sans4"
              style={{
                fontSize: this.props.fontSize,
                color: this.props.FontColor,
              }}
            >
              {this.props.value}
            </p>
          </CustomButton>
        );
      } else {
        return (
          <CustomButton
            style={{
              background: this.props.NotBackgroundColor,
              border: this.props.NotBorderColor,
            }}
            onClick={() =>
              this.handleOptionChangeProps(
                this.props.value,
                this.props.attribute,
              )
            }
          >
            <p
              className="Sans4"
              style={{
                fontSize: this.props.fontSize,
                color: this.props.NotFontColor,
              }}
            >
              {this.props.value}
            </p>
          </CustomButton>
        );
      }
  }
}
RegularCustomButton.propTypes = {
  handleOptionsChange: PropTypes.func,
  ChoiceIndexArr: PropTypes.object,
  id: PropTypes.string,
  attribute: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  NotBackgroundColor: PropTypes.string,
  NotBorderColor: PropTypes.string,
  NotFontColor: PropTypes.string,
  BackgroundColor: PropTypes.string,
  FontColor: PropTypes.string,
  BorderColor: PropTypes.string,
};