import { Component } from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";
import "../../../fonts/fonts.css";
class CartButton extends Component {
  render() {
    const Button = styled.button`
      font-size: 18px;
      background-color: ${this.props.BGcolor};
      color: ${this.props.FontColor};
      position: relative;
      border: ${this.props.border};
      height: 40px;
      width: 117px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:active {
        transform: scale(1.01);
        filter: opacity(0.95);
      }
    `;
    return (
      <Button>
        <p className="Rale6 s14">{this.props.text}</p>
      </Button>
    );
  }
}

CartButton.propTypes = {
  BGcolor : PropTypes.string,
  text : PropTypes.string,
  FontColor : PropTypes.string,
  border: PropTypes.string,

} 
export default CartButton;
