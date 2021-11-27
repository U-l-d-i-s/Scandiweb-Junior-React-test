import { Component } from "react";
import PropTypes from "prop-types";

import { ListItemTextNameBrand, ListItemTextAmount } from "../Header.style";


export default class ListitemCartTopText extends Component {
  render() {
    return (
      <div>
        <ListItemTextNameBrand className="Rale3 s16">
          {this.props.brand}
        </ListItemTextNameBrand>
        <ListItemTextNameBrand className="Rale3 s16">
          {this.props.name}
        </ListItemTextNameBrand>

        <ListItemTextAmount className="Rale5 s16" >
          {this.props.unicode} {this.props.prices}
        </ListItemTextAmount>
      </div>
    );
  }
}
ListitemCartTopText.propTypes = {
  brand : PropTypes.string,
  name : PropTypes.string,
  unicode: PropTypes.string,
  prices: PropTypes.number,
} 