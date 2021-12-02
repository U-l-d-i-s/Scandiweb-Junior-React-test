import { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

export default class RegularCustomButton extends Component {
  
  handleOptionChangeProps = (val, attr) => {
    this.props.handleOptionsChange(val, attr);
  };

  render() {
    const ChosenCustomButton = styled.button`
      margin-top: 5px;
      margin-right: 10px;
      width: ${this.props.width};
      height: ${this.props.height};
      border: ${this.props.BorderColor};
      background: ${this.props.BackgroundColor};
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${this.props.fontSize};
      color: ${this.props.FontColor};
    `;
    const CustomButton = styled(ChosenCustomButton)`
      background: ${this.props.NotBackgroundColor};
      border: ${this.props.NotBorderColor};
      font-size: ${this.props.fontSize};
      color: ${this.props.NotFontColor};
    `;

    if (
      this.props.ChoiceIndexArr[this.props.attribute] === this.props.value &&
      this.props.value !== undefined &&
      this.props.ChoiceIndexArr[this.props.attribute] !== undefined
    ) {
      return (
        <ChosenCustomButton
          id={this.props.id}
          className="Sans4"
          onClick={() =>
            this.handleOptionChangeProps(this.props.value, this.props.attribute)
          }
        >
          {this.props.value}
        </ChosenCustomButton>
      );
    } else {
      return (
        <CustomButton
          id={this.props.id}
          className="Sans4"
          onClick={() =>
            this.handleOptionChangeProps(this.props.value, this.props.attribute)
          }
        >
          {this.props.value}
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
