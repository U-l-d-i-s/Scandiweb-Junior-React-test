import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  IncorDecProd,
  ProductCount,
  GetTotal,
} from "../../../ReduxModules/AllActions";
import styled from "styled-components";


class CustomIncOrDecButton extends PureComponent {
  handleIncOrDec = () => {
    if (this.props.symbol === "_") {
      this.props.IncorDecProdDispatch(this.props.id, this.props.options, -1);
      this.props.ProductCountDispatch();
      this.props.GetTotalDispatch();
    } else {
      this.props.IncorDecProdDispatch(this.props.id, this.props.options, +1);
      this.props.ProductCountDispatch();
      this.props.GetTotalDispatch();
    }
  };
  render() {
    const Button = styled.button`
      background-color: white;
      height: ${this.props.height};
      width: ${this.props.width};
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${this.props.fontSize};
      &:active {
        transform: scale(1.05);
      }
    `;
    const MinusSymbol = styled.div`
    height: 2px;
    background: black;
    width: ${this.props.minusSize};
  `;
  
    if(this.props.symbol === "_" ){
      return (
        <Button onClick={this.handleIncOrDec}>
          <MinusSymbol />
        </Button>   
          )
    }else{
      return(
        <Button onClick={this.handleIncOrDec}>
          {this.props.symbol}
        </Button>   
      )
    }
    
        
      
  }
}
CustomIncOrDecButton.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  symbol: PropTypes.string,
  fontSize: PropTypes.string,
  minusSize: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.object,
  IncorDecProd: PropTypes.func,
  ProductCount: PropTypes.func,
};
export default connect(null, (dispatch) =>
  bindActionCreators(
    {
      IncorDecProdDispatch: IncorDecProd,
      ProductCountDispatch: ProductCount,
      GetTotalDispatch: GetTotal,
    },
    dispatch
  )
)(CustomIncOrDecButton);
