import { Component } from "react";
import PropTypes from "prop-types";

import styled from 'styled-components';


export default class SwatchCustomButton extends Component {
  state = {
    backgroundColorSwatch : ""
  }
  componentDidMount = () => {
      this.setState({
        backgroundColorSwatch: this.props.value,
      });
    }
    handleOptionChangeProps = (val, attr) => {
      this.props.handleOptionsChange(val, attr);
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
    if (
        this.props.ChoiceIndexArr[this.props.attribute] === this.props.value &&
        this.props.value !== undefined &&
        this.props.ChoiceIndexArr[this.props.attribute] !== undefined
      ) {
        return (
          <CustomButtonSwatch
            style={{ transform: "scale(1.1)" }}
            onClick={(e) =>
              this.handleOptionChangeProps(
                this.props.value,
                this.props.attribute,
              )
            }
          ></CustomButtonSwatch>
        );
      }
      return (
        <CustomButtonSwatch
          onClick={(e) =>
            this.handleOptionChangeProps(
              this.props.value,
              this.props.attribute,
            )
          }
        ></CustomButtonSwatch>
      );
  }
}
SwatchCustomButton.propTypes = {
  handleOptionsChange: PropTypes.func,
  ChoiceIndexArr: PropTypes.object,
  id: PropTypes.string,
  attribute: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};