import { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../../../fonts/fonts.css";

const CurrencyStyle = styled.p`

  cursor: pointer;
  :hover{
    transform: scale(1.01);
    filter: opacity(0.3);
  }
`;

class ListItemCur extends Component {
  handleCurrencyProps = () => {
    this.props.handleCurrency(
      this.props.currencyValue.name,
      this.props.currencyValue.text
    );
  };
  render() {
    return (
      <CurrencyStyle className="Rale5 s18" onClick={this.handleCurrencyProps}>
        {this.props.currencyValue.text} {this.props.currencyValue.name}
      </CurrencyStyle>
    );
  }
}
ListItemCur.propTypes = {
  currencyValue : PropTypes.object,
} 
export default ListItemCur;
