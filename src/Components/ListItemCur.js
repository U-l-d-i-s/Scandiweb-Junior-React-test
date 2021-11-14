import { Component } from "react";
import PropTypes from "prop-types";

import "../fonts/fonts.css";

class ListItemCur extends Component {
  handleCurrencyProps = () => {
    this.props.handleCurrency(
      this.props.currencyValue.name,
      this.props.currencyValue.text
    );
  };
  render() {
    return (
      <p className="Rale5 s18" onClick={this.handleCurrencyProps}>
        {this.props.currencyValue.text} {this.props.currencyValue.name}
      </p>
    );
  }
}
ListItemCur.propTypes = {
  currencyValue : PropTypes.object,
} 
export default ListItemCur;
