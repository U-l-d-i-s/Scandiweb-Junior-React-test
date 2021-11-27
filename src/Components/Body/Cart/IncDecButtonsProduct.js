import { Component } from "react";
import PropTypes from "prop-types";
import CustomIncOrDecButton from "../../GlobalComponents/CustomIncDec/CustomIncOrDecButton";
import { IncOrDecWrapper } from "./Cart.styles";

export default class IncDecButtonsProduct extends Component {
  render() {
    return (
      <IncOrDecWrapper>
        <CustomIncOrDecButton
          id={this.props.id}
          options={this.props.options}
          symbol="+"
          width="40px"
          height="40px"
          fontSize="34px"
        />
        <p className="Rale5 s24">{this.props.qtty}</p>
        <CustomIncOrDecButton
          id={this.props.id}
          options={this.props.options}
          symbol="_"
          width="40px"
          height="40px"
          fontSize="34px"
          minusSize="20px"
        />
      </IncOrDecWrapper>
    );
  }
}
IncDecButtonsProduct.propTypes = {
  id: PropTypes.string,
  options: PropTypes.object,
  qtty: PropTypes.number,
};