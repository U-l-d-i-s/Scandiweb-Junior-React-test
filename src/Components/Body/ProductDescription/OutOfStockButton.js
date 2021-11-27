import React, { Component } from 'react'
import styled from 'styled-components';


export default class OutOfStockButton extends Component {
  render() {
    const CustomButton = styled.div`
    margin-top: 5px;
    margin-right: 10px;
    width: ${this.props.width};
    height: ${this.props.height};
    border: ${this.props.BorderColor};
    Background-color: ${this.props.BackgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
  `;
    return (
      <CustomButton className="Sans4"
      $opacity = {this.props.opacity} style = {{filter: this.props.opacity}}>
        {this.props.value}
      </CustomButton>
    )
  }
}
