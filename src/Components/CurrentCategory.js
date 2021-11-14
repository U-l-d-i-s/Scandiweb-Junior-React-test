import { Component } from "react";
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import "../fonts/fonts.css";

class CurrentCategory extends Component{

  render(){
    return(
      <div style= {{marginTop: "100px", marginLeft: "80px"}}>
        <p className = "Rale4" style = {{fontSize: "42px"}}>
          {this.props.Currency.toUpperCase()}
        </p>
      </div>
    ); 
  }
}
CurrentCategory.propTypes = {
  Currency : PropTypes.string,
} 
export default connect(
  (state) => ({
    Currency : state.CurrentCategory
  }), null
)(CurrentCategory);

