import { PureComponent } from "react";
import PropTypes from "prop-types";
import RegularCustomButton from './RegularCustomButton'
import SwatchCustomButton from "./SwatchCustomButton";


class CustomValueButton extends PureComponent {

  handleOptionChangeProps = (val, attr) => {
    this.props.handleOptionsChange(val, attr);
  };

  render() {
    if (this.props.type === "swatch") {
      return <SwatchCustomButton />;
    } else {
      return <RegularCustomButton />;
    }
  }
}


CustomValueButton.propTypes = {
  type: PropTypes.string,
};

export default CustomValueButton;
