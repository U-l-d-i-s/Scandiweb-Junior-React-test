import { PureComponent } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
class CustomValueButton extends PureComponent {
  state = {
    backgroundColorSwatch: null,
  };

  handleOptionChangeProps = (val, attr, index) => {
    this.props.handleOptionsChange(val, attr, index);
  };
  componentDidMount = () => {
    if (this.props.type === "swatch") {
      this.setState({
        backgroundColorSwatch: this.props.value,
      });
    }
  };

  render() {
    const CustomButtonSwatch = styled.div`
      margin-top: 5px;
      margin-right: 7px;
      width: ${this.props.width};
      height: ${this.props.height};
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${this.state.backgroundColorSwatch};
    `;
    const CustomButton = styled.div`
      margin-top: 5px;
      margin-right: 10px;
      width: ${this.props.width};
      height: ${this.props.height};
      border: ${this.props.BorderColor};
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    if (this.props.type === "swatch") {
      if (
        this.props.ChoiceIndexArr[this.props.attribute] === this.props.value
      ) {
        return (
          <CustomButtonSwatch
            style={{ border: "1px solid black", transform: "scale(1.2)" }}
            onClick={(e) =>
              this.handleOptionChangeProps(
                this.props.value,
                this.props.attribute,
                this.props.index
              )
            }
          ></CustomButtonSwatch>
        );
      } else {
        return (
          <CustomButtonSwatch
            style={{ border: "1px solid black" }}
            onClick={(e) =>
              this.handleOptionChangeProps(
                this.props.value,
                this.props.attribute,
                this.props.index
              )
            }
          ></CustomButtonSwatch>
        );
      }
    } else {
      if (
        this.props.ChoiceIndexArr[this.props.attribute] === this.props.value
      ) {
        return (
          <CustomButton
            style={{ background: this.props.BackgroundColor }}
            onClick={() =>
              this.handleOptionChangeProps(
                this.props.value,
                this.props.attribute,
                this.props.index
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
                this.props.index
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
}
CustomValueButton.propTypes = {
  categor: PropTypes.string,
  handleOptionsChange: PropTypes.func,
  ChoiceIndexArr: PropTypes.object,
  id: PropTypes.string,
  type: PropTypes.string,
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

export default CustomValueButton;
