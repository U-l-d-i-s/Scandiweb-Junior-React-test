import { Component } from "react";
import PropTypes from "prop-types";

import { ListItemIncDecWrapper } from "../Header.style";
import CustomIncOrDecButton from "../../GlobalComponents/CustomIncDec/CustomIncOrDecButton";

export default class IncDecButtonsListitemCart extends Component {
  render() {
    return (
      <ListItemIncDecWrapper>
        <CustomIncOrDecButton
          id={this.props.id}
          options={this.props.options}
          symbol="+"
          width="24px"
          height="24px"
          fontSize="16px"
        />
        <p className="Rale5 s16">{this.props.qtty}</p>
        <CustomIncOrDecButton
          id={this.props.id}
          options={this.props.options}
          symbol="_"
          width="24px"
          height="24px"
          minusSize="12px"
        />
      </ListItemIncDecWrapper>
    );
  }
}
IncDecButtonsListitemCart.propTypes = {
  id: PropTypes.string,
  qtty: PropTypes.number,
  options: PropTypes.object,
};