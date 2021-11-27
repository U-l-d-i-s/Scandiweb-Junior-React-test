import { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { connect } from "react-redux";
import "../../fonts/fonts.css";

const StyledCategory = styled.div`
margin-top:120px;
margin-left:100px;
`;
class CurrentCategory extends Component{

  render(){
    return(
      <StyledCategory >
        <p className = "Rale4 s42" >
          {this.props.Currency.toUpperCase()}
        </p>
      </StyledCategory>
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

